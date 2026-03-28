import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  company: z.string().optional(),
  message: z.string().min(10, "Bitte geben Sie eine Nachricht ein (mind. 10 Zeichen)."),
  dsgvoConsent: z.literal(true, {
    message: "Bitte stimmen Sie der Datenverarbeitung zu.",
  }),
});

export const readinessLeadSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  message: z.string().optional(),
  dsgvoConsent: z.literal(true, {
    message: "Bitte stimmen Sie der Datenverarbeitung zu.",
  }),
});

export const unifiedContactSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  companyWebsite: z.string().min(3, "Bitte geben Sie Ihre Unternehmens-Webseite ein."),
  message: z.string().min(10, "Bitte geben Sie eine Nachricht ein (mind. 10 Zeichen).").max(500, "Die Nachricht darf maximal 500 Zeichen lang sein."),
  dsgvoConsent: z.literal(true, {
    message: "Bitte stimmen Sie der Datenverarbeitung zu.",
  }),
  consentText: z.string(),
  company_url: z.string().optional(), // honeypot
  quizData: z
    .object({
      score: z.number(),
      category: z.string(),
      categoryTitle: z.string(),
      detailAnswers: z.array(
        z.object({
          question: z.string(),
          selectedLabels: z.array(z.string()),
          questionScore: z.number(),
          maxQuestionScore: z.number(),
        })
      ),
      freeTexts: z.record(z.string(), z.string()),
    })
    .optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type ReadinessLeadValues = z.infer<typeof readinessLeadSchema>;
export type UnifiedContactValues = z.infer<typeof unifiedContactSchema>;
