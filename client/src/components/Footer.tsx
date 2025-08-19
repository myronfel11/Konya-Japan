export default function Footer() {
  const addresses = [
    {
      label: "8 Nolan Hill Blvd NW, Calgary, AB T3R 0J4, Canada",
      google:
        "https://www.google.com/maps/search/?api=1&query=8%20Nolan%20Hill%20Blvd%20NW%2C%20Calgary%2C%20AB%20T3R%200J4%2C%20Canada",
      apple:
        "https://maps.apple.com/?q=8%20Nolan%20Hill%20Blvd%20NW%2C%20Calgary%2C%20AB%20T3R%200J4%2C%20Canada",
    },
    {
      label: "602D 16 Ave NW, Calgary, AB",
      google:
        "https://www.google.com/maps/search/?api=1&query=602D%2016%20Ave%20NW%2C%20Calgary%2C%20AB",
      apple:
        "https://maps.apple.com/?q=602D%2016%20Ave%20NW%2C%20Calgary%2C%20AB",
    },
  ];

  return (
    <footer className="mt-12 border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="/menu" className="hover:underline">
                View Menu
              </a>
            </li>
            <li>
              <a
                className="inline-block bg-[color:var(--brand-red)] text-white px-3 py-2 rounded hover:opacity-90"
                href="https://www.skipthedishes.com/konya-japan-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Have Any Questions?</h3>
          <a
            className="text-[color:var(--brand-red)] hover:underline"
            href="mailto:konya.yyc@gmail.com"
          >
            konya.yyc@gmail.com
          </a>
          <h3 className="font-semibold mt-6 mb-3">Call Us</h3>
          <a
            className="text-[color:var(--brand-red)] hover:underline"
            href="tel:+15873538868"
          >
            (587) 353-8868
          </a>
          <h3 className="font-semibold mt-6 mb-3">Hours Of Operation</h3>
          <p>2:00 PM – 9:00 PM</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Locations</h3>
          <ul className="space-y-4">
            {addresses.map((a, i) => (
              <li key={i}>
                <p className="mb-1">{a.label}</p>
                <div className="flex gap-2">
                  <a
                    className="px-2 py-1 border rounded hover:bg-neutral-100"
                    href={a.google}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Maps
                  </a>
                  <a
                    className="px-2 py-1 border rounded hover:bg-neutral-100"
                    href={a.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Maps
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <ul className="space-y-3">
            {[
              { name: "Facebook", href: "#", icon: "/icons/facebook.svg" },
              { name: "Instagram", href: "#", icon: "/icons/instagram.svg" },
              { name: "TikTok", href: "#", icon: "/icons/tiktok.svg" },
            ].map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[15px]"
                >
                  {/* circular holder with your favicon inside */}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-400 overflow-hidden bg-white transition group-hover:border-[color:var(--brand-red)]">
                    <img
                      src={s.icon}
                      alt=""
                      aria-hidden
                      className="h-5 w-5 object-contain transition group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  </span>
                  <span className="group-hover:underline">{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* attribution */}
      <div className="text-center text-xs text-neutral-500 py-2">
        Icons by{" "}
        <a
          href="https://www.vecteezy.com/vector-art/8486250-black-and-white-social-media-icons"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          black-and-white-social-media-icons Vectors by Vecteezy
        </a>
      </div>
      {/* copyright */}
      <div className="text-center text-sm text-neutral-500 py-4 border-t border-neutral-200">
        © {new Date().getFullYear()} Kon’ya Japan
      </div>
    </footer>
  );
}
