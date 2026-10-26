
import React from "react";

function Agenda() {
  const charlas = [
    {
      hora: "18:00",
      titulo: "Acreditación y bienvenida",
      speaker: "",
    },
    {
      hora: "18:20",
      titulo: "Tu primer día como developer",
      speaker: "Daniela Cardozo",
    },
    {
      hora: "18:40",
      titulo: "De cero a tu primer proyecto",
      speaker: "Franco Díaz",
    },
    {
      hora: "19:00",
      titulo: "Armá tu portfolio con IA",
      speaker: "Gastón",
    },
    {
      hora: "19:20",
      titulo: "Git y GitHub sin miedo",
      speaker: "Mauro",
    },
    {
      hora: "19:40",
      titulo: "Tu primer backend con Node",
      speaker: "José Díaz",
    },
    {
      hora: "20:00",
      titulo: "Preparate para tu primera entrevista",
      speaker: "Tomás Gómez",
    },
    {
      hora: "20:20",
      titulo: "Mi primer trabajo en IT",
      speaker: "Pablo Basso",
    },
    {
      hora: "20:40",
      titulo: "Testing: cómo no romper todo",
      speaker: "Julián Martín",
    },
    {
      hora: "21:00",
      titulo: "Diseño para developers",
      speaker: "Tomás Escudero",
    },
    {
      hora: "21:20",
      titulo: "Tu primera base de datos",
      speaker: "Andrés Perlo",
    },
    {
      hora: "21:40",
      titulo: "Preguntas y networking",
      speaker: "",
    },
  ];

  return (
    <section
      id="agenda"
      className="w-full bg-[#0b0b0b] px-6 py-16 text-white md:px-12"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-[1fr_1.5fr]">

        {/* LADO IZQUIERDO */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            AGENDA
          </p>

          <h2 className="mb-4 text-4xl font-extrabold leading-tight">
            Jueves 19 de
            <br />
            noviembre
          </h2>

          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            Diez charlas cortas para salir con un plan claro.
            Al final queda tiempo para preguntas y networking.
          </p>
        </div>

        {/* LADO DERECHO */}
        <div>
          {charlas.map((charla, index) => (
            <div
              key={index}
              className="flex gap-6 border-b border-zinc-800 py-4"
            >
              {/* HORARIO */}
              <span className="w-14 shrink-0 text-base font-bold text-red-600">
                {charla.hora}
              </span>

              {/* TITULO Y SPEAKER */}
              <div>
                <h3 className="text-sm font-semibold text-white md:text-base">
                  {charla.titulo}
                </h3>

                {charla.speaker && (
                  <p className="mt-1 text-xs text-gray-500">
                    {charla.speaker}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Agenda;

