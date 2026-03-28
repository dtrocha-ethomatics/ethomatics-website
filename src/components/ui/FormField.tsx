import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  as?: "input";
}

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
  maxChars?: number;
  charCount?: number;
  as: "textarea";
}

type FormFieldProps = InputFieldProps | TextareaFieldProps;

export function FormField(props: FormFieldProps) {
  const isTextarea = props.as === "textarea";
  const maxChars = isTextarea ? (props as TextareaFieldProps).maxChars : undefined;
  const charCount = isTextarea ? (props as TextareaFieldProps).charCount : undefined;
  const { label, error, hint, as: _as, className, required, ...rest } = props;
  if ("maxChars" in rest) delete (rest as Record<string, unknown>).maxChars;
  if ("charCount" in rest) delete (rest as Record<string, unknown>).charCount;

  const inputClasses = cn(
    "w-full border border-secondary rounded px-4 py-3 text-primary bg-white placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors",
    error && "border-red-500 focus:ring-red-500/50",
    className
  );

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-primary">
        {label}
        {required ? <span className="text-accent ml-1">*</span> : null}
      </label>
      {isTextarea ? (
        <textarea
          className={cn(inputClasses, "min-h-[120px] resize-y")}
          required={required}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={inputClasses}
          required={required}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {maxChars != null && charCount != null ? (
        <p className={cn("text-xs text-right", charCount > maxChars ? "text-red-600" : "text-primary/40")}>
          {charCount} / {maxChars} Zeichen
        </p>
      ) : null}
      {hint && !error ? <p className="text-xs text-primary/50">{hint}</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
