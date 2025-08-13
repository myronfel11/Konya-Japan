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

      <div className="space-y-10">
        {categories.map((c) => {
          const id = slugify(c);
          return (
            <section key={id} id={id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold mb-3">{c}</h2>

              {/* image-only section */}
              <div className="rounded-2xl border border-neutral-200 overflow-hidden">
                <img
                  src="/images/menu/placeholder.jpg"
                  alt={`${c} photo`}
                  className="w-full h-200 object-cover"
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
