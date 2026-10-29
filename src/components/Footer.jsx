import Container from "./Container";
import { direccion } from "../data/direccion";

const iconosRedes = {
  Instagram: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V10H6.7v3h2.9v8h3.9z" />
    </svg>
  ),
  LinkedIn: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M5.2 8.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM3.5 10h3.4v10.5H3.5zM9 10h3.3v1.4h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.2v5.7h-3.4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2H9z" />
    </svg>
  ),
  YouTube: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6z" />
    </svg>
  ),
  X: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.5h-7.4l-5.8-7.58-6.64 7.58h-3.68l8.6-9.83L0 1.153h7.59l5.24 6.93zm-1.29 19.49h2.04L6.05 3.238h-2.2z" />
    </svg>
  ),
};

const redes = [
  {
    nombre: "Instagram",
    hover: "hover:border-[#e1306c] hover:text-[#e1306c]",
    url: "https://www.instagram.com/rollingcodeschool/",
  },
  {
    nombre: "Facebook",
    hover: "hover:border-[#1877f2] hover:text-[#1877f2]",
    url: "https://www.facebook.com/RollingCodeSchool",
  },
  {
    nombre: "LinkedIn",
    hover: "hover:border-[#0a66c2] hover:text-[#0a66c2]",
    url: "https://www.linkedin.com/company/rollingcodeschool/",
  },
  {
    nombre: "YouTube",
    hover: "hover:border-[#ff0033] hover:text-[#ff0033]",
    url: "https://youtube.com/@rollingcode7175",
  },
  {
    nombre: "X",
    hover: "hover:border-white hover:text-white",
    url: "https://x.com/rollingcodeok?s=11",
  },
];

const columnas = [
  {
    titulo: "EXPLORÁ",
    links: [
      { texto: "Ubicación", href: "#ubicacion" },
      {
        texto: "Nuestra escuela",
        href: "https://rollingcodeschool.com/",
        externo: true,
      },
    ],
  },
  {
    titulo: "CONTACTO",
    links: [
      { texto: "Cómo llegar", href: "#ubicacion" },
      {
        texto: "Sitio oficial",
        href: "https://rollingcodeschool.com/",
        externo: true,
      },
    ],
  },
];

const titulo =
  "mb-5 mt-1.5 text-base font-extrabold uppercase tracking-[3px] text-rc-red";

export const Footer = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <footer id="footer" className="border-t border-rc-border bg-rc-black pt-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 pb-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr] lg:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <a
              href="#inicio"
              aria-label="Volver al inicio"
              className="mb-5 inline-flex items-center"
            >
              <img
                src={`${base}logo-rolling-blanco.png`}
                alt="Rolling Code School"
                className="block h-auto w-[165px] max-w-full sm:w-[190px]"
              />
            </a>

            <p className="mb-5 text-sm text-rc-text-mute">
              Aprendé, crecé y transformá
              <br />
              tu futuro con tecnología.
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                direccion,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-rc-text-soft transition-colors hover:text-white"
            >
              <span aria-hidden="true" className="text-xl text-rc-red">
                ⌖
              </span>
              San Miguel de Tucumán
            </a>
          </div>

          {columnas.map(({ titulo: nombre, links }) => (
            <div key={nombre} className="flex flex-col items-start">
              <h3 className={titulo}>{nombre}</h3>
              {links.map(({ texto, href, externo }) => (
                <a
                  key={texto}
                  href={href}
                  {...(externo && { target: "_blank", rel: "noreferrer" })}
                  className="mb-4 text-sm text-rc-text-mute transition hover:translate-x-1 hover:text-white"
                >
                  {texto}
                </a>
              ))}
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <h3 className={titulo}>SEGUINOS</h3>
            <div className="flex flex-wrap gap-2.5">
              {redes.map(({ nombre, hover, url }) => (
                <a
                  key={nombre}
                  href={url}
                  aria-label={nombre}
                  title={nombre}
                  target="_blank"
                  rel="noreferrer"
                  className={`grid h-10 w-10 place-items-center rounded-rc-field border border-rc-chip bg-rc-surface text-rc-text-soft transition duration-200 hover:-translate-y-1 ${hover}`}
                >
                  {iconosRedes[nombre]}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-rc-text-mute">
              Conectá con nuestra comunidad.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 border-t border-rc-border py-5 sm:min-h-[76px] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-rc-text-mute">
            © {new Date().getFullYear()} Rolling Code School. Todos los derechos
            reservados.
          </p>
          <a
            href="#inicio"
            className="text-sm font-semibold text-rc-text-soft transition-colors hover:text-white"
          >
            Volver arriba ↑
          </a>
        </div>
      </Container>
    </footer>
  );
};
