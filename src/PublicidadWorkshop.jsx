
import React from "react";
import { CalendarDays, MapPin, Ticket } from "lucide-react";

export default function PublicidadWorkshop() {
  return (
    <section className="w-full max-w-6xl mx-auto overflow-hidden rounded-[28px] bg-gradient-to-br from-[#e51d2a] via-[#b90919] to-[#900916] p-6 text-white shadow-xl md:p-10">

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_1fr]">

        {/* LADO IZQUIERDO */}
        <div>
          <p className="mb-5 text-sm italic text-red-100 md:text-base">
            WORKSHOP{" "}
            <span className="font-bold not-italic text-white">
              ENTRADAS LIMITADAS
            </span>
          </p>

          <h1 className="mb-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            ¿POR DÓNDE
            <br />
            EMPIEZO A
            <br />
            <span className="text-black">
              PROGRAMAR?
            </span>
          </h1>

          <p className="mb-7 max-w-md text-sm leading-relaxed text-red-100 md:text-base">
            Una tarde con diez speakers de Rolling Code School
            para ordenar tus primeros pasos: qué aprender,
            cómo practicar y cómo mostrar lo que sabés.
          </p>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#entradas"
              className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
            >
              Comprar entrada
            </a>

            <a
              href="#agenda"
              className="rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-red-700"
            >
              Ver agenda
            </a>
          </div>
        </div>

        {/* LADO DERECHO: TARJETA NEGRA */}
        <div className="rounded-[24px] bg-[#0c0c0c] p-6 shadow-lg">

          {/* FECHA */}
          <div className="flex items-center gap-4 border-b border-zinc-800 pb-5">
            <CalendarDays className="h-7 w-7 shrink-0 text-red-600" />
            <div>
              <h2 className="text-xl font-extrabold">
                JUE 19/11
              </h2>
              <p className="text-xl text-zinc-300">
                18.00 hs
              </p>
            </div>
          </div>

          {/* UBICACIÓN */}
          <div className="flex items-center gap-4 border-b border-zinc-800 py-5">
            <MapPin className="h-7 w-7 shrink-0 text-red-600" />
            <div>
              <h3 className="font-bold">
                Rolling Code School
              </h3>
              <p className="text-sm text-zinc-400">
                Gral. Paz 576, Entrepiso
              </p>
            </div>
          </div>

          {/* PRECIO */}
          <div className="flex items-center gap-4 pt-5">
            <Ticket className="h-7 w-7 shrink-0 text-red-600" />
            <div>
              <h3 className="font-bold">
                Entradas desde $15.000
              </h3>
              <p className="text-sm text-zinc-400">
                Early Bird hasta el 31/10
              </p>
            </div>
          </div>

          {/* ETIQUETAS */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Presencial
            </span>

            <span className="rounded-full border border-zinc-700 px-3 py-1">
              Virtual
            </span>

            <span className="rounded-full bg-red-600 px-3 py-1">
              Cupos limitados
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
