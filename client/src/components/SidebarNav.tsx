import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu" },
  { to: "/location", label: "Location" },
  { to: "/catering", label: "Catering" },
  { to: "/about-us", label: "About Us" },
];

export default function SidebarNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // lock body scroll while drawer is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Fixed top bar (only under 1050px) */}
      <header className="min-[1050px]:hidden fixed inset-x-0 top-0 z-50 bg-white border-b border-neutral-200 pt-[env(safe-area-inset-top)]">
        <div className="h-16 px-4 grid grid-cols-[auto_1fr_auto] items-center">
          {/* hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="justify-self-start p-2 rounded border hover:bg-neutral-50"
          >
            ☰
          </button>

          {/* centered logo */}
          <a href="/" className="justify-self-center">
            <img
              src="/logo.svg"
              alt="Kon’ya Japan"
              className="h-9 object-contain"
            />
          </a>

          {/* order online */}
          <a
            href="https://www.skipthedishes.com/konya-japan-8"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-self-end whitespace-nowrap inline-flex items-center rounded-md bg-[color:var(--brand-red)] text-white px-3 py-2 text-sm hover:opacity-90"
          >
            Order Online
          </a>
        </div>
      </header>

      {/* Overlay + drawer (only under 1050px) */}
      {open && (
        <div className="min-[1050px]:hidden fixed inset-0 z-50" onClick={close}>
          <div className="absolute inset-0 bg-black/40" />
          <aside
            className="absolute top-0 left-0 h-full w-72 bg-white border-r border-neutral-200 shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <img src="/logo.svg" alt="" className="h-8 object-contain" />
              <button
                onClick={close}
                aria-label="Close menu"
                className="p-2 rounded border hover:bg-neutral-50"
              >
                ✕
              </button>
            </div>

            <nav className="p-2" aria-label="Primary">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end as any}
                  onClick={close}
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

            <div className="mt-auto p-4 border-t">
              <a
                href="https://www.skipthedishes.com/konya-japan-8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-md bg-[color:var(--brand-red)] text-white px-3 py-2 hover:opacity-90"
              >
                Order Online
              </a>
              <div className="mt-2 text-sm text-neutral-500">
                Hours: 2:00 PM – 9:00 PM
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop sidebar (unchanged; ≥1050px) */}
      <aside className="hidden min-[1050px]:flex min-[1050px]:flex-col min-[1050px]:justify-between min-[1050px]:sticky min-[1050px]:top-0 min-[1050px]:h-screen min-[1050px]:w-72 border-r border-neutral-200">
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
