import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu" },
  { to: "/location", label: "Location" },
  { to: "/catering", label: "Catering" },
  { to: "/about-us", label: "About Us" },
];

export default function SidebarNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-neutral-200">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="/" className="block px-0 py-6">
            {" "}
            <img
              src="/logo.svg"
              alt="Kon’ya Japan"
              className="block w-full h-auto max-w-none"
            />
            <span className="sr-only">Kon’ya Japan</span>
          </a>
          <button
            aria-label="Toggle menu"
            className="p-2 rounded border"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
        {open && (
          <nav className="px-4 pb-3 space-y-1" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end as any}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded ${
                    isActive
                      ? "bg-[color:var(--brand-red)] text-white"
                      : "hover:bg-neutral-100"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop left sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-0 lg:h-screen lg:w-72 border-r border-neutral-200">
        <div>
          <a href="/" className="block mt-[2%]">
            <img
              src="/logo.svg"
              alt="Kon’ya Japan"
              className="block w-full h-auto bg-white
               [clip-path:inset(0_3.2%_0_3.2%)]
               sm:[clip-path:inset(0_3.2%_0_3.2%)]"
            />
            <span className="sr-only">Kon’ya Japan</span>
          </a>

          <nav className="px-2 py-2" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end as any}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded mb-1 transition ${
                    isActive
                      ? "bg-[color:var(--brand-red)] text-white"
                      : "hover:bg-neutral-100"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="px-4 py-4 text-sm text-neutral-500">
          Hours: 2:00 PM – 9:00 PM
        </div>
      </aside>
    </>
  );
}
