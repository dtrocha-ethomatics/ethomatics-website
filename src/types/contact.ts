export interface QuizData {
  score: number;
  category: string;
  categoryTitle: string;
  detailAnswers: { question: string; selectedLabels: string[]; questionScore: number; maxQuestionScore: number }[];
  freeTexts: Record<string, string>;
}

export interface ContactPayload {
  name: string;
  email: string;
  companyWebsite: string;
  message: string;
  dsgvoConsent: true;
  consentText: string;
  company_url?: string; // honeypot
  quizData?: QuizData;
}
