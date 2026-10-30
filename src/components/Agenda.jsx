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

function Agenda() {
  return (
    <section id="agenda" aria-labelledby="agenda-title">
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

          <p className="max-w-[360px] text-base text-rc-text-mute">
            Diez charlas cortas para salir con un plan claro. Al final queda
            tiempo para preguntas y networking.
          </p>
        </div>

        <ol>
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

