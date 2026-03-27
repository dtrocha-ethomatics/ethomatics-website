"use client";

import { useReducer } from "react";
import {
  readinessQuestions,
  readinessCategories,
} from "@/config/site";
import type { ReadinessCategory } from "@/types";

const TOTAL_QUESTIONS = readinessQuestions.length;
const RESULT_STEP = TOTAL_QUESTIONS;

interface State {
  currentStep: number;
  answers: (number | null)[];
  multiAnswers: Record<number, number[]>;
  freeTexts: Record<number, string>;
  score: number | null;
  category: ReadinessCategory | null;
}

type Action =
  | { type: "SELECT_ANSWER"; questionIndex: number; value: number }
  | { type: "TOGGLE_MULTI"; questionIndex: number; optionIndex: number }
  | { type: "SET_FREE_TEXT"; questionIndex: number; text: string }
  | { type: "CONFIRM_MULTI"; questionIndex: number }
  | { type: "GO_BACK" }
  | { type: "RESET" };

const initialState: State = {
  currentStep: 0,
  answers: Array(TOTAL_QUESTIONS).fill(null),
  multiAnswers: {},
  freeTexts: {},
  score: null,
  category: null,
};

function calculateRawScore(answers: (number | null)[], multiAnswers: Record<number, number[]>): number {
  let total = 0;
  readinessQuestions.forEach((q, i) => {
    if (q.multiSelect) {
      const selected = multiAnswers[i] || [];
      total += selected.reduce((s, idx) => s + (q.options[idx]?.value ?? 0), 0);
    } else {
      total += answers[i] ?? 0;
    }
  });
  return total;
}

// Max possible raw score
const MAX_RAW = readinessQuestions.reduce((sum, q) => {
  if (q.multiSelect) return sum + q.options.reduce((s, o) => s + o.value, 0);
  return sum + Math.max(...q.options.map((o) => o.value));
}, 0);

function normalizeToHundred(raw: number): number {
  return Math.round((raw / MAX_RAW) * 100);
}

function calculateCategory(score100: number): ReadinessCategory {
  return (
    readinessCategories.find(
      (cat) => score100 >= cat.minScore && score100 <= cat.maxScore
    ) || readinessCategories[0]
  );
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const newAnswers = [...state.answers];
      newAnswers[action.questionIndex] = action.value;

      // If last question, calculate score and go directly to result
      if (action.questionIndex === TOTAL_QUESTIONS - 1) {
        const score = calculateRawScore(newAnswers, state.multiAnswers);
        return {
          ...state,
          answers: newAnswers,
          currentStep: RESULT_STEP,
          score,
          category: calculateCategory(normalizeToHundred(score)),
        };
      }

      return {
        ...state,
        answers: newAnswers,
        currentStep: action.questionIndex + 1,
      };
    }
    case "TOGGLE_MULTI": {
      const current = state.multiAnswers[action.questionIndex] || [];
      const has = current.includes(action.optionIndex);
      const updated = has
        ? current.filter((i) => i !== action.optionIndex)
        : [...current, action.optionIndex];
      return {
        ...state,
        multiAnswers: { ...state.multiAnswers, [action.questionIndex]: updated },
      };
    }
    case "SET_FREE_TEXT": {
      return {
        ...state,
        freeTexts: { ...state.freeTexts, [action.questionIndex]: action.text },
      };
    }
    case "CONFIRM_MULTI": {
      const nextStep = action.questionIndex < TOTAL_QUESTIONS - 1
        ? action.questionIndex + 1
        : RESULT_STEP;

      if (nextStep === RESULT_STEP) {
        const score = calculateRawScore(state.answers, state.multiAnswers);
        return {
          ...state,
          currentStep: RESULT_STEP,
          score,
          category: calculateCategory(normalizeToHundred(score)),
        };
      }

      return { ...state, currentStep: nextStep };
    }
    case "GO_BACK": {
      const newStep = Math.max(0, state.currentStep - 1);
      return { ...state, currentStep: newStep };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function useReadinessCheck() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectAnswer = (questionIndex: number, value: number) => {
    dispatch({ type: "SELECT_ANSWER", questionIndex, value });
  };

  const toggleMulti = (questionIndex: number, optionIndex: number) => {
    dispatch({ type: "TOGGLE_MULTI", questionIndex, optionIndex });
  };

  const setFreeText = (questionIndex: number, text: string) => {
    dispatch({ type: "SET_FREE_TEXT", questionIndex, text });
  };

  const confirmMulti = (questionIndex: number) => {
    dispatch({ type: "CONFIRM_MULTI", questionIndex });
  };

  const goBack = () => dispatch({ type: "GO_BACK" });
  const reset = () => dispatch({ type: "RESET" });

  const score100 = state.score ? normalizeToHundred(state.score) : 0;

  // Build answer summary for result display
  const answerSummary = readinessQuestions.map((q, i) => {
    if (q.multiSelect) {
      const indices = state.multiAnswers[i] || [];
      return {
        question: q.question.replace(" (Mehrfachauswahl möglich)", ""),
        selectedLabels: indices.map((idx) => q.options[idx]?.label || ""),
        questionScore: indices.reduce((s, idx) => s + (q.options[idx]?.value ?? 0), 0),
        maxQuestionScore: q.options.reduce((s, o) => s + o.value, 0),
      };
    }
    const val = state.answers[i];
    const opt = q.options.find((o) => o.value === val);
    return {
      question: q.question,
      selectedLabels: opt ? [opt.label] : [],
      questionScore: val ?? 0,
      maxQuestionScore: Math.max(...q.options.map((o) => o.value)),
    };
  });

  return {
    ...state,
    totalQuestions: TOTAL_QUESTIONS,
    score100,
    maxScore: 100,
    answerSummary,
    isQuestionStep: state.currentStep < TOTAL_QUESTIONS,
    isResultStep: state.currentStep === RESULT_STEP,
    currentQuestion: readinessQuestions[state.currentStep] || null,
    selectAnswer,
    toggleMulti,
    setFreeText,
    confirmMulti,
    goBack,
    reset,
  };
}
