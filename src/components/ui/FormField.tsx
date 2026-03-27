import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  as?: "input";
}

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  as: "textarea";
}

type FormFieldProps = InputFieldProps | TextareaFieldProps;

export function FormField(props: FormFieldProps) {
  const isTextarea = props.as === "textarea";
  const { label, error, as: _as, className, required, ...rest } = props;

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
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
