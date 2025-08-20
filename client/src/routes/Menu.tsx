import categories from "../data/categories.json";

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function Menu() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Menu</h1>

      {/* removed inherited color/size so headings can control their own */}
      <div className="space-y-10">
        {categories.map((c) => {
          const id = slugify(c);
          return (
            <section key={id} id={id} className="scroll-mt-24">
              {/* RED + BIGGER heading */}
              <h2 className="text-xl sm:text-2xl min-[1050px]:text-3xl font-semibold mb-3 text-[color:var(--brand-red)]">
                {c}
              </h2>

              {/* keep alt text/caption black */}
              <div className="rounded-2xl border border-neutral-200 overflow-hidden text-black">
                <img
                  src="/images/menu/placeholder.jpg"
                  alt={`${c} photo`}
                  className="w-full h-[200px] object-cover"
                  loading="lazy"
                />
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
