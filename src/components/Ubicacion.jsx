import { direccion } from "../data/direccion";

const consulta = encodeURIComponent(direccion);
const mapaUrl = `https://maps.google.com/maps?q=${consulta}&z=16&output=embed`;
const linkMaps = `https://www.google.com/maps/search/?api=1&query=${consulta}`;

const boton =
  "inline-flex min-h-[52px] items-center justify-center rounded-full px-6 text-lg font-extrabold transition";

export function Ubicacion() {
  return (
    <section id="ubicacion" className="py-14">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="mb-5 text-base font-extrabold uppercase tracking-[3px] text-rc-red">
            Cómo llegar
          </p>

          <h2>
            Te esperamos en
            <br />
            <span className="text-rc-red">Rolling Code</span>
            <br />
            School.
          </h2>

          <p className="mb-8 mt-6 max-w-[440px] text-base text-rc-text-soft">
            Vení a conocernos y empezá a construir tu futuro en tecnología.
          </p>

          <div className="mb-7 flex items-start gap-4">
            <span
              aria-hidden="true"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-rc-field border border-rc-red-deep bg-rc-surface text-[27px] text-rc-red"
            >
              ⌖
            </span>

            <div className="min-w-0">
              <h3 className="mb-1.5 mt-0.5 text-base font-extrabold">
                Encontranos acá
              </h3>
              <p className="break-words text-sm text-rc-text-mute">{direccion}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={linkMaps}
              target="_blank"
              rel="noreferrer"
              className={`${boton} bg-rc-red text-white hover:-translate-y-0.5 hover:bg-rc-red-dark`}
            >
              Cómo llegar
            </a>

            <a
              href="https://rollingcodeschool.com/"
              target="_blank"
              rel="noreferrer"
              className={`${boton} border border-rc-chip text-white hover:border-rc-red`}
            >
              Conocé Rolling Code
            </a>
          </div>
        </div>
        <div className="min-w-0 overflow-hidden rounded-rc-box border border-rc-border bg-rc-surface shadow-[0_24px_65px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-3 p-4 sm:p-6">
            <div className="h-[11px] w-[11px] shrink-0 rounded-full bg-rc-red shadow-[0_0_15px_rgba(224,32,42,0.6)]" />
            <div className="min-w-0">
              <strong className="block text-base">Rolling Code School</strong>
              <p className="mt-1 text-sm text-rc-text-mute">
                San Miguel de Tucumán
              </p>
            </div>
            <span className="ml-auto shrink-0 text-sm font-extrabold uppercase tracking-[1.5px] text-rc-red">
              Ubicación
            </span>
          </div>

          <div className="h-[280px] w-full bg-rc-surface-2 sm:h-[330px] lg:h-[360px]">
            <iframe
              title="Mapa de ubicación de Rolling Code School"
              src={mapaUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-full w-full border-0 [filter:grayscale(0.75)_invert(0.9)_hue-rotate(170deg)]"
            />
          </div>

          <a
            href={linkMaps}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-t border-rc-border px-4 py-4 text-sm font-bold text-rc-text-soft transition-colors hover:text-white sm:px-6"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}