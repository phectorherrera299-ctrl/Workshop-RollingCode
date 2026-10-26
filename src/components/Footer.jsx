import { direccion } from "../direccion";

const iconosRedes = {
  Instagram: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V10H6.7v3h2.9v8h3.9z" />
    </svg>
  ),
  LinkedIn: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M5.2 8.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM3.5 10h3.4v10.5H3.5zM9 10h3.3v1.4h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.2v5.7h-3.4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2H9z" />
    </svg>
  ),
  YouTube: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6z" />
    </svg>
  ),
  X: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.5h-7.4l-5.8-7.58-6.64 7.58h-3.68l8.6-9.83L0 1.153h7.59l5.24 6.93zm-1.29 19.49h2.04L6.05 3.238h-2.2z" />
    </svg>
  ),
};

export const Footer = () => {
  const redes = [
    {
      nombre: "Instagram",
      className: "red-ig",
      url: "https://www.instagram.com/rollingcodeschool/",
    },
    {
      nombre: "Facebook",
      className: "red-f",
      url: "https://www.facebook.com/RollingCodeSchool",
    },
    {
      nombre: "LinkedIn",
      className: "red-in",
      url: "https://www.linkedin.com/company/rollingcodeschool/",
    },
    {
      nombre: "YouTube",
      className: "red-youtube",
      url: "https://youtube.com/@rollingcode7175",
    },
    {
      nombre: "X",
      className: "red-x",
      url: "https://x.com/rollingcodeok?s=11",
    },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="contenedor">
        <div className="footer-principal">
          <div className="footer-marca">
            <a className="logo-link" href="#inicio" aria-label="Volver al inicio">
              <img
                src="/logo-rolling-blanco.png"
                alt="Rolling Code School"
                className="logo-rolling"
              />
            </a>

            <p>
              Aprendé, crecé y transformá
              <br />
              tu futuro con tecnología.
            </p>

            <a
              className="footer-contacto"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                direccion,
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>⌖</span> San Miguel de Tucumán
            </a>
          </div>

          <div className="footer-columna">
            <h3>EXPLORÁ</h3>
            <a href="#ubicacion">Ubicación</a>
            <a
              href="https://rollingcodeschool.com/"
              target="_blank"
              rel="noreferrer"
            >
              Nuestra escuela
            </a>
          </div>

          <div className="footer-columna">
            <h3>CONTACTO</h3>
            <a href="#ubicacion">Cómo llegar</a>
            <a
              href="https://rollingcodeschool.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sitio oficial
            </a>
          </div>

          <div className="footer-redes">
            <h3>SEGUINOS</h3>

            <div className="redes-lista">
              {redes.map(({ nombre, className, url }) => (
                <a
                  key={nombre}
                  href={url}
                  className={`red-social ${className}`}
                  aria-label={nombre}
                  title={nombre}
                  target="_blank"
                  rel="noreferrer"
                >
                  {iconosRedes[nombre]}
                </a>
              ))}
            </div>

            <p>Conectá con nuestra comunidad.</p>
          </div>
        </div>

        <div className="footer-inferior">
          <p>
            © {new Date().getFullYear()} Rolling Code School. Todos los derechos
            reservados.
          </p>

          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
};
