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

type QuoteFormState = {
  name: string;
  email: string;
  phone: string;
  datetime: string; // ISO from datetime-local or free text
  headcount: string;
  dietary: string;
  pickupOrDelivery: "Pickup" | "Delivery" | "";
  location: "Nolan Hill" | "16 Ave NW" | "Offsite" | "";
  packageId: string;
  description: string; // optional extra details
};

function buildQuoteEmail(form: QuoteFormState) {
  const pkg = form.packageId
    ? PACKAGES.find((p) => p.id === form.packageId)?.name
    : undefined;

  const lines = [
    "Hello Kon’ya Japan,",
    "",
    "I'd like a catering quote.",
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || "-"}`,
    `Date/Time: ${form.datetime}`,
    `Headcount: ${form.headcount}`,
    `Dietary notes: ${form.dietary}`,
    `Pickup/Delivery: ${form.pickupOrDelivery}`,
    `Location: ${form.location || "-"}`,
    `Package: ${pkg ?? "-"}`,
    "",
    "Description:",
    form.description || "-",
    "",
    "Thank you!",
  ];
  return lines.join("\n");
}

export default function Catering() {
  const [form, setForm] = useState<QuoteFormState>({
    name: "",
    email: "",
    phone: "",
    datetime: "",
    headcount: "",
    dietary: "",
    pickupOrDelivery: "",
    location: "",
    packageId: "",
    description: "",
  });

  const quoteHref = useMemo(
    () => emailLink("Catering Inquiry — Kon’ya Japan", buildQuoteEmail(form)),
    [form]
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Catering</h1>

      {/* Top: Info + (image removed to reduce height) */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What We Cater</h2>
            <p className="text-neutral-700">
              From family gatherings to office lunches and celebrations, we
              prepare fresh, crowd-pleasing Japanese dishes with reliable timing
              and easy setup.
            </p>

            <ul className="flex flex-wrap gap-2.5">
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

            {/* Always show both buttons */}
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

            {/* REMOVED small platter image to shrink this section */}
            {/* (the following block was deleted)
            <div className="rounded-xl overflow-hidden border mt-2">
              <img ... />
            </div>
            */}
          </div>
        </Card>

        {/* Keep the right-side image card (optional). Remove this Card too if you want it even shorter. */}
        <Card className="flex items-center justify-center">
          <img
            src="/images/location/nolan.jpg"
            alt="Restaurant interior"
            className="w-full h-72 object-cover rounded-xl"
            loading="lazy"
          />
        </Card>
      </div>

      {/* Packages */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Popular Packages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((p) => (
            <Card key={p.id} className="flex flex-col">
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
                  href={`/menu#${p.id}`}
                  className="px-3 py-1.5 rounded bg-[color:var(--brand-red)] text-white hover:opacity-90 text-sm"
                >
                  View Menu
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Request Form */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Request a Quote</h2>
        <Card>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = quoteHref;
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {/* required fields */}
            <div className="sm:col-span-1">
              <label className="block text-sm mb-1">
                Name{" "}
                <span className="text-[color:var(--brand-red)]">
                  (required)
                </span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className="w-full rounded-md border px-3 py-2"
                placeholder="Your full name"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm mb-1">
                Email{" "}
                <span className="text-[color:var(--brand-red)]">
                  (required)
                </span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="w-full rounded-md border px-3 py-2"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Date/Time{" "}
                <span className="text-[color:var(--brand-red)]">
                  (required)
                </span>
              </label>
              <input
                type="datetime-local" /* change to text if you prefer */
                required
                value={form.datetime}
                onChange={(e) =>
                  setForm((f) => ({ ...f, datetime: e.target.value }))
                }
                className="w-full rounded-md border px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Headcount{" "}
                <span className="text-[color:var(--brand-red)]">
                  (required)
                </span>
              </label>
              <input
                type="number"
                min={1}
                required
                inputMode="numeric"
                value={form.headcount}
                onChange={(e) =>
                  setForm((f) => ({ ...f, headcount: e.target.value }))
                }
                className="w-full rounded-md border px-3 py-2"
                placeholder="e.g., 25"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">
                Dietary Notes{" "}
                <span className="text-[color:var(--brand-red)]">
                  (required)
                </span>
              </label>
              <textarea
                required
                rows={3}
                value={form.dietary}
                onChange={(e) =>
                  setForm((f) => ({ ...f, dietary: e.target.value }))
                }
                className="w-full rounded-md border px-3 py-2"
                placeholder="Allergies, vegetarian/vegan, no shellfish, etc."
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">
                Pickup/Delivery{" "}
                <span className="text-[color:var(--brand-red)]">
                  (required)
                </span>
              </label>
              <div className="flex items-center gap-6">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="pod"
                    required
                    checked={form.pickupOrDelivery === "Pickup"}
                    onChange={() =>
                      setForm((f) => ({ ...f, pickupOrDelivery: "Pickup" }))
                    }
                  />
                  <span>Pickup</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="pod"
                    required
                    checked={form.pickupOrDelivery === "Delivery"}
                    onChange={() =>
                      setForm((f) => ({ ...f, pickupOrDelivery: "Delivery" }))
                    }
                  />
                  <span>Delivery</span>
                </label>
              </div>
            </div>

            {/* optional fields below the required ones */}
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                className="w-full rounded-md border px-3 py-2"
                placeholder="(587) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Location</label>
              <select
                value={form.location}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    location: e.target.value as QuoteFormState["location"],
                  }))
                }
                className="w-full rounded-md border px-3 py-2"
              >
                <option value="">Select…</option>
                <option value="Nolan Hill">Nolan Hill</option>
                <option value="16 Ave NW">16 Ave NW</option>
                <option value="Offsite">Offsite</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">Package (optional)</label>
              <select
                value={form.packageId}
                onChange={(e) =>
                  setForm((f) => ({ ...f, packageId: e.target.value }))
                }
                className="w-full rounded-md border px-3 py-2"
              >
                <option value="">No preference</option>
                {PACKAGES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">
                Description (optional)
              </label>
              <textarea
                rows={4}
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
                className="w-full rounded-md border px-3 py-2"
                placeholder="Event details, timing, delivery instructions, etc."
              />
            </div>

            <div className="sm:col-span-2 flex gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-[color:var(--brand-red)] text-white hover:opacity-90"
              >
                Send Email
              </button>
              <a
                href="tel:+15873538868"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 border hover:bg-neutral-50"
              >
                Call Us (587) 353-8868
              </a>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
