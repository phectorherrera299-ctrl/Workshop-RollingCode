import { CalendarPlus } from "lucide-react";
import { speakers } from "../data/speakers";

const apertura = { hora: "18:00", titulo: "Acreditación y bienvenida" };
const cierre = { hora: "21:40", titulo: "Preguntas y networking" };

const charlas = [
  apertura,
  ...[...speakers]
    .sort((a, b) => a.hora.localeCompare(b.hora))
    .map(({ hora, tag, name }) => ({ hora, titulo: tag, speaker: name })),
  cierre,
];

const calendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams(
  {
    action: "TEMPLATE",
    text: "Workshop: ¿Por dónde empiezo a programar?",
    dates: "20261119T210000Z/20261120T004000Z",
    details:
      "Diez charlas cortas para dar tus primeros pasos en programación. Organiza Rolling Code School.",
    location: "Gral. Paz 576, San Miguel de Tucumán",
  },
).toString()}`;

function Agenda() {
  return (
    <section
      id="agenda"
      aria-labelledby="agenda-title"
      className="mx-10 mt-12"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.5fr] md:gap-12">
        <div>
          <p className="mb-3 text-base font-extrabold uppercase tracking-[3px] text-rc-red">
            Agenda
          </p>

          <h2 id="agenda-title" className="mb-4">
            Jueves 19 de
            <br />
            noviembre
          </h2>

          <p className="mb-8 max-w-[360px] text-base text-rc-text-mute">
            Diez charlas cortas para salir con un plan claro. Al final queda
            tiempo para preguntas y networking.
          </p>

          <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-rc-red px-7 text-lg font-extrabold text-white transition hover:bg-rc-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CalendarPlus className="h-5 w-5" aria-hidden="true" />
            Agregar al calendario
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </a>
        </div>

        <ol className="relative before:absolute before:bottom-[31px] before:left-[99px] before:top-[30px] before:w-0.5 before:bg-rc-red sm:before:left-[113px]">
          {charlas.map(({ hora, titulo, speaker }) => (
            <li
              key={hora}
              className="flex items-baseline gap-4 border-b border-rc-border py-3.5 sm:gap-6"
            >
              <time
                dateTime={hora}
                className="w-[78px] shrink-0 text-2xl font-extrabold tabular-nums text-rc-red sm:w-[84px]"
              >
                {hora}
              </time>

              <span
                aria-hidden="true"
                className="relative mt-2.5 h-3 w-3 shrink-0 self-start rounded-full bg-rc-red ring-4 ring-rc-black"
              />

              <div>
                <h3 className="text-lg font-semibold leading-snug sm:text-[22px]">
                  {titulo}
                </h3>

                {speaker && (
                  <p className="text-sm text-rc-text-mute">{speaker}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Agenda;