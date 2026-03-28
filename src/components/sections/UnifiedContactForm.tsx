"use client";

import { useState, useEffect } from "react";
import { kontaktPage } from "@/config/site";
import { unifiedContactSchema } from "@/lib/validations";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { QuizResultBanner } from "@/components/ui/QuizResultBanner";
import type { QuizData } from "@/types/contact";

type FormState = "idle" | "submitting" | "success" | "error" | "rate-limited";

export function UnifiedContactForm() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyWebsite: "www.",
    message: "",
    dsgvoConsent: false,
  });

  // Check for quiz data in sessionStorage
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("ethomatics-quiz-result");
      if (stored) {
        setQuizData(JSON.parse(stored));
      }
    } catch {
      // No quiz data or invalid JSON
    }
  }, []);

  const isLeadMode = quizData !== null;
  const consentText = isLeadMode ? kontaktPage.consentTextLead : kontaktPage.consentTextKontakt;

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      companyWebsite: formData.companyWebsite,
      message: formData.message,
      dsgvoConsent: formData.dsgvoConsent as true,
      consentText,
      ...(quizData ? { quizData } : {}),
    };

    const result = unifiedContactSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 429) {
        setFormState("rate-limited");
        return;
      }

      if (!res.ok) throw new Error("Request failed");

      setFormState("success");
      sessionStorage.removeItem("ethomatics-quiz-result");
      setFormData({ name: "", email: "", companyWebsite: "www.", message: "", dsgvoConsent: false });
    } catch {
      setFormState("error");
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="text-center mb-12 px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-5">
          {kontaktPage.title}
        </h1>
        <p className="text-lg text-primary/60 whitespace-pre-line">{kontaktPage.subtitle}</p>
      </div>
      <div className="mx-auto max-w-xl px-6 md:px-10">

        {/* Quiz result banner (Mode A only) */}
        {isLeadMode && quizData && (
          <div className="mb-8">
            <QuizResultBanner quizData={quizData} />
          </div>
        )}

        {formState === "success" ? (
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base text-primary whitespace-pre-line">
              {isLeadMode ? kontaktPage.successMessageLead : kontaktPage.successMessageKontakt}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormField
              label="Name"
              name="name"
              required
              placeholder="Ihr vollständiger Name"
              value={formData.name}
              onChange={(e) => updateField("name", (e.target as HTMLInputElement).value)}
              error={errors.name}
            />
            <FormField
              label="E-Mail"
              name="email"
              type="email"
              required
              placeholder="ihre@email.de"
              value={formData.email}
              onChange={(e) => updateField("email", (e.target as HTMLInputElement).value)}
              error={errors.email}
            />
            <FormField
              label="Unternehmens-Webseite"
              name="companyWebsite"
              required
              placeholder="www.ihr-unternehmen.de"
              onFocus={(e) => { if (e.target.value === "www.") e.target.setSelectionRange(4, 4); }}
              value={formData.companyWebsite}
              onChange={(e) => updateField("companyWebsite", (e.target as HTMLInputElement).value)}
              error={errors.companyWebsite}
              hint="Wir nutzen diese Angabe zur Vorbereitung unseres Gesprächs."
            />
            <FormField
              as="textarea"
              label="Nachricht"
              name="message"
              required
              placeholder="Was beschäftigt Sie gerade am meisten?"
              value={formData.message}
              onChange={(e) => updateField("message", (e.target as HTMLTextAreaElement).value)}
              error={errors.message}
              maxLength={500}
              maxChars={500}
              charCount={formData.message.length}
            />

            {/* Honeypot — invisible to users */}
            <div aria-hidden="true" style={{ position: "absolute", opacity: 0, height: 0, overflow: "hidden", pointerEvents: "none" }}>
              <input type="text" name="company_url" tabIndex={-1} autoComplete="off" />
            </div>

            {/* DSGVO Consent */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.dsgvoConsent}
                onChange={(e) => updateField("dsgvoConsent", e.target.checked)}
                className="mt-1 h-4 w-4 accent-accent"
              />
              <span className="text-sm text-primary/70">
                {isLeadMode ? (
                  <>
                    {kontaktPage.consentTextLeadPrefix}{" "}
                    <a href="/datenschutz" className="text-accent hover:underline">
                      Datenschutzerklärung
                    </a>
                    {kontaktPage.consentTextLeadSuffix}
                  </>
                ) : (
                  <>
                    Ich stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu.{" "}
                    <a href="/datenschutz" className="text-accent hover:underline">
                      Datenschutzhinweise
                    </a>
                  </>
                )}
              </span>
            </label>
            {errors.dsgvoConsent && (
              <p className="text-sm text-red-600">{errors.dsgvoConsent}</p>
            )}

            {formState === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-700">{kontaktPage.errorMessage}</p>
              </div>
            )}

            {formState === "rate-limited" && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-700">
                  Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut.
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={formState === "submitting" || !formData.dsgvoConsent}
              className="w-full"
            >
              {formState === "submitting" ? "Wird gesendet..." : "Nachricht senden"}
            </Button>
          </form>
        )}

      </div>
    </section>
  );
}
