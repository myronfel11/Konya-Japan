import { useState } from "react";
import locations from "../data/locations.json";
import Card from "./Card";
import MapEmbed from "./MapEmbed";

export default function LocationFilter() {
  const [active, setActive] = useState(0);
  const loc = locations[active];

  return (
    <section className="grid lg:grid-cols-2 gap-6">
      {/* Left: Filter buttons and photo */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Our Locations</h2>
          <select
            aria-label="Choose location"
            className="border rounded px-3 py-2"
            value={active}
            onChange={(e) => setActive(parseInt(e.target.value))}
          >
            {locations.map((l, idx) => (
              <option key={idx} value={idx}>
                {l.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <p className="font-medium">{loc.address}</p>
          <p>Hours: 2:00 PM – 9:00 PM</p>

          <div className="flex flex-wrap gap-2">
            <a
              className="px-3 py-2 border rounded hover:bg-neutral-100"
              href={loc.maps.google}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions (Google)
            </a>
            <a
              className="px-3 py-2 border rounded hover:bg-neutral-100"
              href={loc.maps.apple}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Maps
            </a>
            <a
              className="px-3 py-2 border rounded bg-[color:var(--brand-red)] text-white hover:opacity-90"
              href={`tel:${loc.telHref}`}
            >
              Call
            </a>
          </div>

          {/* Left photo */}
          <div className="mt-3 rounded-xl overflow-hidden border">
            <img
              src={loc.photo}
              alt={loc.name}
              className="w-full h-81 object-cover"
            />
          </div>
        </div>
      </Card>

      {/* Right photo */}
      <Card>
        <MapEmbed address={loc.address} heightClass="h-96 lg:h-[32rem]" />
      </Card>
    </section>
  );
}
