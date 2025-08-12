import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories.json";

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function MenuCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [paused, setPaused] = useState(false);

  // Tweak these two to change the speed
  const STEP = 380; // px per nudge (bigger = more movement)
  const INTERVAL_MS = 4000; // ms between nudges (bigger = more delay)

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const start = el.scrollLeft <= 0;
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
    setAtStart(start);
    setAtEnd(end);
  }, []);

  useEffect(() => {
    updateArrows();
    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateArrows]);

  const nudge = useCallback(
    (dir: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      el.scrollBy({ left: dir * STEP, behavior: "smooth" });
      // update after the smooth scroll finishes
      window.setTimeout(updateArrows, 450);
    },
    [updateArrows]
  );

  // Auto “press right arrow” every INTERVAL_MS (pauses on hover/focus)
  useEffect(() => {
    const id = window.setInterval(() => {
      if (paused) return;
      const el = scrollerRef.current;
      if (!el) return;

      if (atEnd) {
        // jump back to start smoothly
        el.scrollTo({ left: 0, behavior: "smooth" });
        window.setTimeout(updateArrows, 500);
      } else {
        nudge(1);
      }
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused, atEnd, nudge, updateArrows, INTERVAL_MS]);

  return (
    <section aria-label="Menu Categories" className="relative">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Explore the Menu</h2>
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => nudge(-1)}
            disabled={atStart}
            aria-label="Scroll left"
            className={`px-3 py-2 border rounded ${
              atStart ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-50"
            }`}
          >
            ‹
          </button>
          <button
            onClick={() => nudge(1)}
            disabled={atEnd}
            aria-label="Scroll right"
            className={`px-3 py-2 border rounded ${
              atEnd ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-50"
            }`}
          >
            ›
          </button>
        </div>
      </div>

      {/* Native horizontal scrollbar kept; pause auto on hover/focus for accessibility */}
      <div
        ref={scrollerRef}
        className="-mx-4 px-4 pb-4 overflow-x-auto"
        onScroll={updateArrows}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="flex gap-4 snap-x snap-mandatory">
          {categories.map((c) => {
            const slug = slugify(c);
            return (
              <Link
                key={slug}
                to={`/menu#${slug}`}
                className="flex-none w-[280px] snap-start group"
              >
                <div className="h-65 rounded-2xl border border-neutral-200 bg-[url('/images/menu/placeholder.jpg')] bg-cover bg-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-medium drop-shadow">
                      {c}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
