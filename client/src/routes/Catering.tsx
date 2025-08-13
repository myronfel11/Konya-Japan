import { useMemo, useState } from "react";
import Card from "../components/Card";

type Package = {
  id: string;
  name: string;
  serves: string;
  price: string;
  items: string[];
};

const PACKAGES: Package[] = [
  {
    id: "sushi-platter-a",
    name: "Sushi Platter A",
    serves: "Serves 3–4",
    price: "$55",
    items: [
      "24 pcs assorted nigiri & maki",
      "Chef’s selection",
      "Soy & wasabi included",
    ],
  },
  {
    id: "party-tray-b",
    name: "Party Tray B",
    serves: "Serves 6–8",
    price: "$120",
    items: ["60 pcs special rolls", "Tempura prawn (10)", "Gyoza (10)"],
  },
  {
    id: "office-lunch",
    name: "Office Lunch",
    serves: "Per person",
    price: "From $16",
    items: [
      "Bento (protein + rice + salad)",
      "Vegetarian options",
      "Utensils included",
    ],
  },
];

const CATERING_TYPES = [
  "Corporate Events",
  "Family Gatherings",
  "Birthdays",
  "Weddings",
  "Custom Sushi Platters",
  "Private Dinners & Home Caterings",
  "Holiday Parties",
  "Festivals",
  "Graduation Parties",
  "Fundraisers and Charity Events",
  "Baby Showers",
];

function emailLink(subject: string, body: string) {
  return `mailto:konyajapan@example.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function Catering() {
  const quoteHref = emailLink(
    "Catering Inquiry — Kon’ya Japan",
    [
      "Hello Kon’ya Japan,",
      "",
      "I'd like a catering quote. Details:",
      "- Date & time:",
      "- Number of people:",
      "- Location (Nolan Hill / 16 Ave or offsite):",
      "- Package or items of interest:",
      "- Any dietary notes:",
      "",
      "Thank you!",
    ].join("\n")
  );

  // --- Form state ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const isEmailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [email]
  );
  const canSubmit =
    name.trim().length > 1 && isEmailValid && desc.trim().length > 5;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Catering Request — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Request details:",
      desc,
      "",
      "— sent from konyajapan.ca catering page",
    ].join("\n");
    const href = emailLink(subject, body);
    window.location.href = href; // opens user's email client
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Catering</h1>

      {/* Top row: Info + Photo */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What We Cater</h2>

            <p className="text-neutral-700">
              From family gatherings to office lunches and celebrations, we
              prepare fresh, crowd-pleasing Japanese dishes with reliable timing
              and easy setup.
            </p>

            {/* On-brand chip list */}
            <ul className="flex flex-wrap gap-2.5 sm:gap-3">
              {CATERING_TYPES.map((t) => (
                <li key={t}>
                  <div className="inline-flex items-start gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5">
                    <span className="mt-1.5 inline-block size-2 rounded-full bg-[color:var(--brand-red)]" />
                    <span className="text-sm text-neutral-800 whitespace-normal break-words leading-5">
                      {t}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            {/* Always-show CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={quoteHref}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-[color:var(--brand-red)] text-white hover:opacity-90"
              >
                Request Quote (Email)
              </a>
              <a
                href="tel:+15873538868"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 border hover:bg-neutral-50"
              >
                Call Us (587) 353-8868
              </a>
            </div>

            {/* Photo inside this card */}
            <div className="rounded-xl overflow-hidden border mt-3">
              <img
                src="/images/menu/placeholder.jpg"
                alt="Catering sample platter"
                className="w-full h-56 object-cover"
              />
            </div>

            <p className="text-xs text-neutral-500">
              * Pricing shown is sample only. Final quote depends on selection
              and headcount.
            </p>
          </div>
        </Card>

        <Card className="flex items-center justify-center">
          <img
            src="/images/location/nolan.jpg"
            alt="Restaurant interior"
            className="w-full h-72 object-cover rounded-xl"
          />
        </Card>
      </div>

      {/* Packages */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Popular Packages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((p) => (
            <Card key={p.id}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-neutral-600">{p.serves}</p>
                </div>
                <div className="font-semibold text-[color:var(--brand-red)]">
                  {p.price}
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-neutral-700">
                {p.items.map((it, idx) => (
                  <li key={idx}>• {it}</li>
                ))}
              </ul>

              <div className="mt-4 flex gap-2">
                <a
                  href={quoteHref}
                  className="px-3 py-1.5 rounded border hover:bg-neutral-50 text-sm"
                >
                  Get Quote
                </a>
                <a
                  href="/menu#special-rolls"
                  className="px-3 py-1.5 rounded bg-[color:var(--brand-red)] text-white hover:opacity-90 text-sm"
                >
                  View Menu
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom Request Form */}
      <div className="mt-10">
        <Card>
          <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold">Request a Custom Catering</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]"
                  placeholder="jane@example.com"
                />
                {!isEmailValid && email.length > 0 && (
                  <p className="mt-1 text-xs text-[color:var(--brand-red)]">
                    Please enter a valid email.
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="desc">
                What would you like? (details)
              </label>
              <textarea
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
                rows={6}
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]"
                placeholder="Date/time, headcount, packages or items, dietary notes, pickup/delivery, etc."
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`rounded-md px-4 py-2 text-white transition ${
                  canSubmit
                    ? "bg-[color:var(--brand-red)] hover:opacity-90"
                    : "bg-neutral-400 cursor-not-allowed"
                }`}
              >
                Send Email
              </button>

              {/* Always-visible alternative actions */}
              <a
                href="tel:+15873538868"
                className="rounded-md px-4 py-2 border hover:bg-neutral-50"
              >
                Call Us
              </a>
              <a
                href="mailto:konyajapan@example.com"
                className="rounded-md px-4 py-2 border hover:bg-neutral-50"
              >
                Email Directly
              </a>
            </div>

            <p className="text-xs text-neutral-500">
              Submitting opens your email app with the message pre-filled. No
              account required.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
