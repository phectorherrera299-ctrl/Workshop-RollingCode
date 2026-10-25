import { Ubicacion } from './Ubicacion'

export const direccion =
  'Gral. Paz 576, San Miguel de Tucumán, Tucumán, Argentina'

const redes = [
  { nombre: 'Instagram', icono: 'ig', url: 'https://www.instagram.com/' },
  { nombre: 'Facebook', icono: 'f', url: 'https://www.facebook.com/' },
  { nombre: 'LinkedIn', icono: 'in', url: 'https://www.linkedin.com/' },
  { nombre: 'YouTube', icono: '▶', url: 'https://www.youtube.com/' },
  { nombre: 'X', icono: '𝕏', url: 'https://x.com/' },
  { nombre: 'GitHub', icono: 'gh', url: 'https://github.com/' },
]

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="contenedor">
        <div className="footer-principal">
          <div className="footer-marca">
            <a className="logo-link" href="#ubicacion">
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
            <a href="https://rollingcodeschool.com/" target="_blank" rel="noreferrer">
              Nuestra escuela
            </a>
          </div>

          <div className="footer-columna">
            <h3>CONTACTO</h3>
            <a href="#ubicacion">Cómo llegar</a>
            <a href="https://rollingcodeschool.com/" target="_blank" rel="noreferrer">
              Sitio oficial
            </a>
          </div>

          <div className="footer-redes">
            <h3>SEGUINOS</h3>

            <div className="redes-lista">
              {redes.map((red) => {
                const iconClass =
                  red.icono === '▶'
                    ? 'red-youtube'
                    : red.icono === '𝕏'
                      ? 'red-x'
                      : `red-${red.icono}`

                return (
                  <a
                    key={red.nombre}
                    href={red.url}
                    className={`red-social ${iconClass}`}
                    aria-label={red.nombre}
                    title={red.nombre}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {red.icono}
                  </a>
                )
              })}
            </div>

            <p>Conectá con nuestra comunidad.</p>
          </div>
        </div>

        <div className="footer-inferior">
          <p>
            © {new Date().getFullYear()} Rolling Code School. Todos los derechos
            reservados.
          </p>

          <a href="#ubicacion">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <main>
        <Ubicacion />
      </main>
      <Footer />
    </>
  )
}
