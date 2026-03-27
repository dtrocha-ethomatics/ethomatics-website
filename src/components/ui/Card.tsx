import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-[#ECEFF4]/80 border border-secondary/40 rounded-2xl p-6 shadow-[0_2px_12px_rgba(46,52,64,0.06)] hover:shadow-[0_12px_40px_rgba(46,52,64,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 will-change-transform",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
