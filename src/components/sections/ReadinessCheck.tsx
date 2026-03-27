"use client";

import { readinessCheck, readinessQuestions } from "@/config/site";
import { useReadinessCheck } from "@/hooks/useReadinessCheck";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";

function ScoreRing({ percentage }: { percentage: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="#DAD1C4" strokeWidth="8" />
        <circle
          cx="60" cy="60" r={radius}
          fill="none" stroke="#2C6B70" strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl sm:text-4xl font-bold text-primary">{percentage}%</span>
        <span className="text-[10px] text-primary/50 uppercase tracking-wider font-medium mt-1">KI-Readiness</span>
      </div>
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-primary/50 font-medium whitespace-nowrap">
        {current} / {total}
      </span>
      <div className="h-1.5 flex-1 bg-secondary/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-[width] duration-500 ease-out"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

export function ReadinessCheck() {
  const {
    currentStep,
    answers,
    multiAnswers,
    freeTexts,
    category,
    score100,
    totalQuestions,
    answerSummary,
    isQuestionStep,
    isResultStep,
    currentQuestion,
    selectAnswer,
    toggleMulti,
    setFreeText,
    confirmMulti,
    goBack,
    reset,
  } = useReadinessCheck();

  const handleContactRedirect = () => {
    const quizResult = {
      score: score100,
      category: category?.key || "",
      categoryTitle: category?.title || "",
      detailAnswers: answerSummary,
      freeTexts: freeTexts,
    };
    sessionStorage.setItem("ethomatics-quiz-result", JSON.stringify(quizResult));
    window.location.href = "/kontakt";
  };

  const handleReset = () => {
    reset();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById("ki-check")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  return (
    <SectionWrapper id="ki-check" background="beige">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">
            {readinessCheck.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary/50 max-w-lg mx-auto">
            {readinessCheck.subtitle}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="max-w-3xl mx-auto">
        {/* ─── Questions ─── */}
        {isQuestionStep && currentQuestion && (
          <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(46,52,64,0.08)] flex flex-col">
            {/* Header: Progress */}
            <div className="px-4 sm:px-8 md:px-10 pt-4 sm:pt-6 md:pt-8">
              <ProgressBar current={currentStep + 1} total={totalQuestions} />
            </div>

            {/* Question + Options */}
            <div className="px-4 sm:px-8 md:px-10 py-4 sm:py-6 md:py-8">
              {/* Question — always same height via min-h + flex */}
              <div className="min-h-[56px] sm:min-h-[60px] mb-4 sm:mb-6 flex items-center">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary leading-snug">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Options — always positioned directly after question area */}
              <div>
                {/* Single select */}
                {!currentQuestion.multiSelect && (
                  <div className="space-y-2 sm:space-y-3">
                    {currentQuestion.options.map((option, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => selectAnswer(currentStep, option.value)}
                        className="group w-full text-left px-4 py-3 rounded-xl border-2 border-secondary/60 bg-white hover:border-accent hover:bg-accent/5 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-[border-color,background-color,transform,box-shadow] duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-secondary/80 flex items-center justify-center text-xs sm:text-sm font-semibold text-primary/50 group-hover:border-accent group-hover:text-accent transition-[border-color,color] duration-200">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="text-sm sm:text-base text-primary/80 group-hover:text-primary transition-colors">
                            {option.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Multi select */}
                {currentQuestion.multiSelect && (
                  <div className="space-y-2 sm:space-y-3">
                    {currentQuestion.options.map((option, idx) => {
                      const selected = (multiAnswers[currentStep] || []).includes(idx);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleMulti(currentStep, idx)}
                          className={cn(
                            "group w-full text-left px-4 py-3 rounded-xl border-2 transition-[border-color,background-color,box-shadow] duration-200",
                            selected
                              ? "border-accent bg-accent/5 shadow-md"
                              : "border-secondary/60 bg-white hover:border-accent/50 hover:bg-accent/5"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <span className={cn(
                              "flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded border-2 flex items-center justify-center transition-[border-color,background-color,color] duration-200",
                              selected
                                ? "border-accent bg-accent text-white"
                                : "border-secondary/80"
                            )}>
                              {selected && (
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                            <span className={cn(
                              "text-sm sm:text-base transition-colors",
                              selected ? "text-primary font-medium" : "text-primary/80"
                            )}>
                              {option.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}

                    {/* Free text field for multi-select */}
                    <div className="mt-3">
                      <div className="relative">
                        <input
                          type="text"
                          maxLength={120}
                          value={freeTexts[currentStep] || ""}
                          onChange={(e) => setFreeText(currentStep, e.target.value)}
                          placeholder="Weiterer Bereich (max. 120 Zeichen)"
                          className="w-full px-4 py-3 rounded-xl border-2 border-secondary/60 bg-white text-sm sm:text-base text-primary/80 placeholder:text-primary/30 focus:border-accent focus:outline-none transition-colors duration-200"
                        />
                        {(freeTexts[currentStep] || "").length > 0 && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-primary/30 tabular-nums">
                            {(freeTexts[currentStep] || "").length}/120
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer: Navigation — always at bottom */}
            <div className="px-4 sm:px-8 md:px-10 pb-4 sm:pb-6 md:pb-8 flex items-center justify-between">
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="text-sm text-primary/40 hover:text-accent transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Zurück
                </button>
              ) : <div />}

              {currentQuestion.multiSelect && (
                <Button
                  onClick={() => confirmMulti(currentStep)}
                  disabled={(multiAnswers[currentStep] || []).length === 0 && !(freeTexts[currentStep] || "").trim()}
                  size="sm"
                >
                  Weiter
                </Button>
              )}
            </div>
          </div>
        )}

        {/* ─── Result ─── */}
        {isResultStep && category && (
          <div className="space-y-5 sm:space-y-6">
            {/* Score */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(46,52,64,0.08)] text-center">
              <ScoreRing percentage={score100} />
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">
                  {category.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-primary/80 leading-relaxed max-w-lg mx-auto">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Recommendation */}
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent mb-1">Unsere Empfehlung</p>
                  <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                    {category.recommendation}
                  </p>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_4px_24px_rgba(46,52,64,0.08)]">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs sm:text-sm font-semibold text-primary/50 uppercase tracking-wide">
                  Auswertung
                </p>
                <p className="text-xs sm:text-sm font-bold text-accent">
                  {score100} / 100 Punkte
                </p>
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                {answerSummary.map((item, i) => {
                  const q = readinessQuestions[i];
                  const maxVal = q.multiSelect
                    ? q.options.length
                    : Math.max(...q.options.map((o) => o.value));
                  const gotVal = q.multiSelect
                    ? (multiAnswers[i] || []).length
                    : (answers[i] ?? 0);
                  const pct = maxVal > 0 ? (gotVal / maxVal) * 100 : 0;
                  return (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-[11px] sm:text-xs text-primary/60 truncate max-w-[70%]">
                          {item.question}
                        </p>
                        <span className="text-[11px] sm:text-xs font-semibold text-primary/70 tabular-nums">
                          {gotVal}/{maxVal}
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary/40 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-[width] duration-700",
                            pct >= 75 ? "bg-accent" : pct >= 40 ? "bg-amber-400" : "bg-secondary"
                          )}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA: Redirect to /kontakt with quiz data */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_4px_24px_rgba(46,52,64,0.08)] text-center space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-primary">
                {readinessCheck.leadFormTitle}
              </h4>
              <p className="text-sm text-primary/60">
                {readinessCheck.leadFormSubtitle}
              </p>
              <Button onClick={handleContactRedirect} className="w-full">
                {readinessCheck.submitLabel}
              </Button>
              <button
                type="button"
                onClick={handleReset}
                className="text-sm text-primary/30 hover:text-accent transition-colors"
              >
                {readinessCheck.restartLabel}
              </button>
            </div>
          </div>
        )}
      </FadeIn>
    </SectionWrapper>
  );
}
