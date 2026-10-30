import { useEffect, useState } from "react";

const links = [
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Cómo llegar", href: "#ubicacion" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const translucido = scrolled && !open;

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`w-full border-b border-rc-line backdrop-blur-md transition-colors duration-300 ${
          translucido ? "bg-rc-surface/60" : "bg-rc-surface"
        }`}
      >
        <div className="mx-auto flex max-w-[1248px] flex-wrap items-center justify-between px-6 py-2">
          <a
            href="#inicio"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setOpen(false);
            }}
            aria-label="Ir al inicio"
            className="shrink-0"
          >
            <img
              src={`${base}logo-rolling-blanco.png`}
              alt="RollingCode"
              width="200"
              height="64"
              className="inline-block align-text-top"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-controls="navbar-menu"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="rounded-md p-2 text-white min-[860px]:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div
            id="navbar-menu"
            className={`${open ? "flex" : "hidden"} w-full basis-full flex-col gap-2 pb-4 min-[860px]:flex min-[860px]:w-auto min-[860px]:basis-auto min-[860px]:flex-row min-[860px]:items-center min-[860px]:gap-0 min-[860px]:pb-0`}
          >
            <ul className="flex flex-col gap-2 min-[860px]:flex-row min-[860px]:items-center min-[860px]:gap-2">
              {links.map(({ label, href }) => (
                <li key={label} className="whitespace-nowrap">
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="px-2 py-1 text-base font-semibold text-rc-text-soft transition-colors hover:text-rc-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="whitespace-nowrap">
                <a
                  href="#entradas"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center justify-center rounded-full bg-rc-red px-6 text-center text-base font-extrabold text-white transition-colors hover:bg-rc-red-dark"
                >
                  Comprar entrada
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
