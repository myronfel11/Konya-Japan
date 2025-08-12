import type React from "react";

type CardProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export default function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`bg-white border border-neutral-200 rounded-2xl shadow-sm p-5 ${className}`}
    >
      {children}
    </div>
  );
}
