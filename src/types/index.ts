export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: "automation" | "process" | "consulting";
}

export interface USP {
  title: string;
  description: string;
  icon: "shield" | "industry" | "chart" | "building";
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ReadinessQuestion {
  question: string;
  multiSelect?: boolean;
  options: {
    label: string;
    value: number;
  }[];
}

export interface ReadinessCategory {
  key: "einsteiger" | "fortgeschritten" | "bereit";
  title: string;
  description: string;
  recommendation: string;
  minScore: number;
  maxScore: number;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  credentials: string[];
  image: string;
  email: string;
  linkedin?: string;
}

export interface Reference {
  company: string;
  description: string;
  industry: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  dsgvoConsent: boolean;
}

export interface ReadinessFormData {
  name: string;
  email: string;
  dsgvoConsent: boolean;
}
