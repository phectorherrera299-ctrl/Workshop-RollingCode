import { direccion } from './direccion';

export function Ubicacion() {
  const mapaUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    direccion
  )}&z=16&output=embed`;

  return (
    <section className="ubicacion" id="ubicacion">
      <div className="contenedor">
        <div className="ubicacion-grid">
          <div className="ubicacion-texto">
            <span className="etiqueta">UBICACIÓN</span>

            <h2>
              Te esperamos en
              <br />
              <span>Rolling Code</span>
              <br />
              School.
            </h2>

            <p className="ubicacion-descripcion">
              Vení a conocernos y empezá a construir
              tu futuro en tecnología.
            </p>

            <div className="direccion-bloque">
              <span className="direccion-icono">⌖</span>

              <div>
                <h3>Encontranos acá</h3>
                <p>{direccion}</p>
              </div>
            </div>

            <a
              className="boton-rojo"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                direccion
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar <span>↗</span>
            </a>

            <a
              className="boton-contorno"
              href="https://rollingcodeschool.com/"
              target="_blank"
              rel="noreferrer"
            >
              Conocé Rolling Code
            </a>
          </div>

          <div className="mapa-tarjeta">
            <div className="mapa-encabezado">
              <div className="mapa-punto" />
              <div>
                <strong>Rolling Code School</strong>
                <p>San Miguel de Tucumán</p>
              </div>
              <span className="mapa-etiqueta">UBICACIÓN</span>
            </div>

            <div className="mapa-marco">
              <iframe
                title="Mapa de ubicación de Rolling Code School"
                src={mapaUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen />
            </div>

            <a
              className="mapa-pie"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                direccion
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Ver en Google Maps <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
