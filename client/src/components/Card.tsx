import type { HTMLAttributes, PropsWithChildren } from "react";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  elevation?: "none" | "sm" | "md" | "lg" | "xl";
  hover?: boolean;
};

const ELEVATION = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
} as const;

export default function Card({
  elevation = "md",
  hover = false,
  className = "",
  children,
  ...rest
}: CardProps) {
  return (
    <div
      {...rest}
      className={[
        // smaller padding + radius on mobile, larger on md+
        "bg-white rounded-xl md:rounded-2xl border border-neutral-200 p-4 md:p-5",
        ELEVATION[elevation],
        hover ? "transition-shadow hover:shadow-xl" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
