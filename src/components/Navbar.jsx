import { useState } from "react";

const links = [
  { label: "Speakers", href: "#speakers" },
  { label: "Cómo llegar", href: "#ubicacion" },
  { label: "Agenda", href: "#agenda" },
  { label: "Sponsors", href: "#sponsors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="bg-surface w-full">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-2">
          <a href="/" className="shrink-0">
            <img
              src="/logo-rolling-blanco.png"
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
            aria-label="Toggle navigation"
            className="rounded-md p-2 text-white lg:hidden"
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
            className={`${open ? "flex" : "hidden"} w-full basis-full flex-col gap-2 pb-4 lg:flex lg:w-auto lg:basis-auto lg:flex-row lg:items-center lg:gap-0 lg:pb-0`}
          >
            <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-2">
              {links.map(({ label, href }) => (
                <li key={label} className="whitespace-nowrap">
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="navbar-text-soft px-2 py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="whitespace-nowrap">
                <a
                  href="#entradas"
                  onClick={() => setOpen(false)}
                  className="navbar-important navbar-text-soft block px-4 py-2 text-center"
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
