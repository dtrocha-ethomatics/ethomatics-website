"use client";

import type { QuizData } from "@/types/contact";

function ScoreRing({ percentage }: { percentage: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-20 h-20 flex-shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={radius} fill="none" stroke="#DAD1C4" strokeWidth="6" />
        <circle
          cx="40" cy="40" r={radius}
          fill="none" stroke="#2C6B70" strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-primary">{percentage}%</span>
      </div>
    </div>
  );
}

export function QuizResultBanner({ quizData }: { quizData: QuizData }) {
  return (
    <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 sm:p-6">
      <div className="flex items-center gap-5">
        <ScoreRing percentage={quizData.score} />
        <div className="min-w-0">
          <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
            Ihr KI-Readiness-Ergebnis
          </p>
          <p className="text-base sm:text-lg font-bold text-primary">
            {quizData.score}/100 — {quizData.categoryTitle}
          </p>
          <p className="text-xs text-primary/50 mt-1">
            Diese Daten werden mit Ihrem Formular gesendet.
          </p>
        </div>
      </div>
    </div>
  );
}
