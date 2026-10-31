import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const links = [
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Playground", href: "#laboratorio" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Cómo llegar", href: "#ubicacion" },
];

export default function Navbar({ favoritos, onOpenFavorites }) {
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
              src={`${base}rollingcode-oficial.webp`}
              alt="RollingCode"
              width="200"
              height="64"
              className="brand-logo inline-block h-auto w-[180px] align-text-top"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-controls="navbar-menu"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="rounded-md p-2 text-white min-[1100px]:hidden"
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
            className={`${open ? "flex" : "hidden"} w-full basis-full flex-col gap-2 pb-4 min-[1100px]:flex min-[1100px]:w-auto min-[1100px]:basis-auto min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:gap-0 min-[1100px]:pb-0`}
          >
            <ul className="flex flex-col gap-2 min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:gap-2">
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
                <button type="button" className="nav-favorites" onClick={() => { setOpen(false); onOpenFavorites(); }} aria-label="Ver speakers favoritos"><Heart size={20} fill={favoritos.length ? "currentColor" : "none"} aria-hidden="true" /></button>
              </li>
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
