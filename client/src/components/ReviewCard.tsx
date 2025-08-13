import { useEffect, useRef, useState } from "react";
import Card from "./Card";

type Props = { rating: number; text: string };

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`h-5 w-5 ${
        filled ? "text-[color:var(--brand-red)]" : "text-neutral-300"
      }`}
    >
      <path
        fill="currentColor"
        d="M10 15.27 16.18 19 14.54 12.97 20 9.24l-6.91-.59L10 2 6.91 8.65 0 9.24l5.46 3.73L3.82 19z"
      />
    </svg>
  );
}

export default function ReviewCard({ rating, text }: Props) {
  const filled = Math.max(0, Math.min(5, Math.floor(rating)));

  const contentRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [hadOverflow, setHadOverflow] = useState(false);

  useEffect(() => {
    const EPS = 6;
    const el = contentRef.current;
    if (!el) return;

    const check = () => {
      if (!contentRef.current) return;
      if (expanded) return;
      const over =
        contentRef.current.scrollHeight - contentRef.current.clientHeight > EPS;
      setHadOverflow(over);
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [text, expanded]);

  return (
    <Card>
      <div
        className="flex items-center gap-1"
        role="img"
        aria-label={`${filled} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} filled={i < filled} />
        ))}
      </div>

      <div className="mt-3 relative min-h-[190px] pb-9">
        <p
          ref={contentRef}
          className={`text-sm text-neutral-700 leading-6 transition-[max-height]
                      ${
                        expanded
                          ? "max-h-[1000px]"
                          : "max-h-[9rem] overflow-hidden"
                      }`}
        >
          {text}
        </p>

        {/* Fade only when collapsed and it originally overflowed */}
        {!expanded && hadOverflow && (
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-9 left-0 right-0 h-10
                       [background:linear-gradient(to_top,white,transparent)]"
          />
        )}

        {/* Show button if it overflowed OR when expanded */}
        {(hadOverflow || expanded) && (
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded border bg-white hover:bg-neutral-50"
          >
            {expanded ? "… collapse" : "… more"}
          </button>
        )}
      </div>
    </Card>
  );
}
