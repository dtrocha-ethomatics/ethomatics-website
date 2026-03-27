import { unifiedContactSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";
import { incrementCounter, insertSubmission } from "@/lib/db";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ungültiger Request." }, { status: 400 });
  }

  // 1. Honeypot check — silent success if filled
  if (typeof body === "object" && body !== null && "website" in body && (body as Record<string, unknown>).website) {
    return Response.json({ success: true });
  }

  // 2. Rate limit
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    return Response.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  // 3. Validate
  const result = unifiedContactSchema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { error: "Validierungsfehler.", issues: result.error.issues },
      { status: 400 }
    );
  }

  const data = result.data;

  // 4. Mode detection
  const mode = data.quizData ? "LEAD" : "KONTAKT";

  // 5. Test detection
  const isTest = /test/i.test(data.message);

  // 6. DB + Counter (skip for tests)
  let refNumber: string;
  if (!isTest) {
    const counterKey = mode === "LEAD" ? "lead" : "kontakt";
    const count = incrementCounter(counterKey);
    refNumber = `${mode}-${String(count).padStart(6, "0")}`;

    insertSubmission({
      ref_number: refNumber,
      mode,
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
      quiz_score: data.quizData?.score ?? null,
      quiz_category: data.quizData?.category ?? null,
      quiz_category_title: data.quizData?.categoryTitle ?? null,
      quiz_detail_answers: data.quizData?.detailAnswers ? JSON.stringify(data.quizData.detailAnswers) : null,
      quiz_free_texts: data.quizData?.freeTexts ? JSON.stringify(data.quizData.freeTexts) : null,
      consent_text: data.consentText,
      consent_timestamp: new Date().toISOString(),
      ip_address: ip,
    });
  } else {
    refNumber = `[TEST]-${mode}`;
  }

  // 7. Send to n8n webhook (server-side)
  const webhookUrl = mode === "LEAD"
    ? process.env.N8N_WEBHOOK_URL
    : process.env.N8N_CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    const webhookPayload: Record<string, unknown> = {
      ref_number: refNumber,
      isTest,
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
      consent_timestamp: new Date().toISOString(),
      source: mode === "LEAD" ? "ki-readiness-check" : "website-kontaktformular",
      notify_to: ["d.trocha@ethomatics.ai", "s.schned@ethomatics.ai"],
    };

    if (data.quizData) {
      webhookPayload.quiz_score = data.quizData.score;
      webhookPayload.quiz_category = data.quizData.category;
      webhookPayload.quiz_category_title = data.quizData.categoryTitle;
      webhookPayload.quiz_detail_answers = data.quizData.detailAnswers;
      webhookPayload.quiz_free_texts = data.quizData.freeTexts;
    }

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
      });
    } catch (err) {
      // Log but don't fail — data is already in DB
      console.error("[contact-api] Webhook error:", err);
    }
  }

  // 8. Success
  return Response.json({ success: true, ref: refNumber });
}
