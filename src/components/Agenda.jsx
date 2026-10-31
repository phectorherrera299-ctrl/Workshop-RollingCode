import { CalendarPlus, Heart } from "lucide-react";
import { FavoriteList } from "./FavoriteSpeakers";
import { speakers } from "../data/speakers";
import { calendarUrl } from "../data/calendario";

const apertura = { hora: "18:00", titulo: "Acreditación y bienvenida" };
const cierre = { hora: "21:40", titulo: "Preguntas y networking" };

const charlas = [
  apertura,
  ...[...speakers]
    .sort((a, b) => a.hora.localeCompare(b.hora))
    .map(({ hora, tag, name }) => ({ hora, titulo: tag, speaker: name })),
  cierre,
];

const abrirSpeaker = (nombre) =>
  window.dispatchEvent(new CustomEvent("abrir-speaker", { detail: nombre }));

function Agenda({ favoritos, onToggleFavorite }) {
  return (
    <section
      id="agenda"
      aria-labelledby="agenda-title"
      className="mx-0 mt-4 sm:mx-6 sm:mt-12 lg:mx-10"
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
          <div className="agenda-favorites" id="mis-favoritos">
            <div className="agenda-favorites-heading"><Heart size={18} aria-hidden="true" /><h3>Mi selección</h3><span>{favoritos.length}</span></div>
            <FavoriteList favoritos={favoritos} onToggle={onToggleFavorite} />
          </div>
        </div>

        <ol className="relative before:absolute before:bottom-[31px] before:left-[99px] before:top-[30px] before:w-0.5 before:bg-rc-red sm:before:left-[113px]">
          {charlas.map(({ hora, titulo, speaker }) => (
            <li
              key={hora}
              className="group relative flex items-baseline gap-4 border-b border-rc-border py-3.5 sm:gap-6"
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

              <div className="origin-left transition-transform duration-200 motion-safe:group-hover:scale-[1.04]">
                <h3 className="text-lg font-semibold leading-snug sm:text-[22px]">
                  {speaker ? (
                    <button
                      type="button"
                      onClick={() => abrirSpeaker(speaker)}
                      aria-label={`Ver más sobre ${speaker}: ${titulo}`}
                      className="cursor-pointer text-left after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rc-red"
                    >
                      {titulo}
                    </button>
                  ) : (
                    titulo
                  )}
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
