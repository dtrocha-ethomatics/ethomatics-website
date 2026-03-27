import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

export function StepIndicator({ totalSteps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={cn(
            "h-2 rounded-full transition-[width,background-color] duration-300",
            i === currentStep
              ? "w-8 bg-accent"
              : i < currentStep
                ? "w-2 bg-accent/60"
                : "w-2 bg-secondary"
          )}
        />
      ))}
    </div>
  );
}
