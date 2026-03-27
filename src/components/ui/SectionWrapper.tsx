import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Background = "default" | "white" | "beige";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  background?: Background;
}

const bgStyles: Record<Background, string> = {
  default: "",
  white: "",
  beige: "",
};

export function SectionWrapper({
  background = "default",
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn("py-20 md:py-28", bgStyles[background], className)}
      {...props}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">{children}</div>
    </section>
  );
}
