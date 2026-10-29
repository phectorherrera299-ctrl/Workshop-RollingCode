import { CalendarDays, MapPin, Ticket } from "lucide-react";

const boton =
  "inline-flex min-h-[52px] items-center justify-center rounded-full px-7 text-lg font-extrabold transition";

export default function PublicidadWorkshop() {
  return (
    <section
      id="inicio"
      className="rounded-rc-red-block bg-rc-gradient p-6 text-white sm:p-10 min-[1360px]:-mx-14 min-[1360px]:p-14"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
        {/* LADO IZQUIERDO */}
        <div>
          <p className="mb-5 text-base text-rc-pink">
            <span className="font-light italic">WORKSHOP</span>{" "}
            <span className="font-extrabold text-white">ENTRADAS LIMITADAS</span>
          </p>

          <h1 className="mb-5 uppercase">
            ¿Por dónde
            <br />
            empiezo a
            <br />
            <span className="text-rc-black">programar?</span>
          </h1>

          <p className="mb-8 max-w-[520px] text-lg leading-[1.55] text-rc-pink sm:text-xl">
            Una tarde con diez speakers de Rolling Code School para ordenar
            tus primeros pasos: qué aprender, cómo practicar y cómo mostrar
            lo que sabés.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#entradas"
              className={`${boton} bg-rc-black text-white hover:bg-rc-surface`}
            >
              Comprar entrada
            </a>

            <a
              href="#agenda"
              className={`${boton} border-2 border-white text-white hover:bg-white hover:text-rc-red-dark`}
            >
              Ver agenda
            </a>
          </div>
        </div>

        {/* LADO DERECHO: TARJETA NEGRA */}
        <div className="rounded-rc-box bg-rc-black p-6 sm:p-8">
          <div className="flex items-center gap-4 border-b border-rc-border pb-5">
            <CalendarDays aria-hidden="true" className="h-7 w-7 shrink-0 text-rc-red" />
            <div>
              <p className="text-xl font-extrabold">JUE 19/11</p>
              <p className="text-xl text-rc-text-soft">18.00 hs</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-rc-border py-5">
            <MapPin aria-hidden="true" className="h-7 w-7 shrink-0 text-rc-red" />
            <div>
              <h3 className="text-base font-extrabold">Rolling Code School</h3>
              <p className="text-sm text-rc-text-mute">Gral. Paz 576, Entrepiso</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-5">
            <Ticket aria-hidden="true" className="h-7 w-7 shrink-0 text-rc-red" />
            <div>
              <h3 className="text-base font-extrabold">Entradas desde $15.000</h3>
              <p className="text-sm text-rc-text-mute">Early Bird hasta el 31/10</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full border border-rc-chip px-3 py-1">
              Presencial
            </span>
            <span className="rounded-full border border-rc-chip px-3 py-1">
              Virtual
            </span>
            <span className="rounded-full bg-rc-red px-3 py-1 text-white">
              Cupos limitados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}