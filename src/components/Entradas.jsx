import Tarjeta from "./Tarjeta";
import useCuentaRegresiva from "./hooks/useCuntaRegresiva";

const FECHA_LIMITE = new Date("2026-10-31T23:59:59-03:00").getTime();
const dosDigitos = (n) => String(n).padStart(2, "0");

const planes = [
  {
    nombre: "Early Bird",
    chip: "Quedan 38",
    precio: "$25.000",
    tachado: "$35.000",
    subtitulo: "Presencial · precio especial hasta el 31/10",
    destacada: true,
    items: [
      "Acceso a las 10 charlas",
      "Kit de stickers Rolling Code",
      "Certificado de asistencia",
      "Coffee break y networking con los speakers",
      "Grabación de todas las charlas",
    ],
  },
  {
    nombre: "General",
    chip: "Desde el 1/11",
    precio: "$35.000",
    subtitulo: "Presencial · precio regular",
    items: [
      "Acceso a las 10 charlas",
      "Certificado de asistencia",
      "Coffee break y networking con los speakers",
      "Grabación de todas las charlas",
    ],
  },
  {
    nombre: "Virtual",
    chip: "Desde donde estés",
    precio: "$15.000",
    subtitulo: "Transmisión en vivo",
    className: "lg:col-span-2",
    items: [
      "Transmisión en vivo de las 10 charlas",
      "Chat para hacer preguntas a los speakers",
      "Certificado de asistencia",
      "Grabación disponible por 30 días",
    ],
  },
];

const Entradas = () => {
  const { dias, horas, minutos } = useCuentaRegresiva(FECHA_LIMITE);

  const cajas = [
    { numero: dosDigitos(dias), etiqueta: "Días" },
    { numero: dosDigitos(horas), etiqueta: "Horas" },
    { numero: dosDigitos(minutos), etiqueta: "Min" },
  ];
  return (
    <section id="entradas" className="bg-transparent">
      <p className="text-base font-extrabold uppercase tracking-[3px] text-rc-red">
        Entradas
      </p>
      <h2>Asegurá tu lugar antes de que suba el precio</h2>
      <div className="mt-8 flex flex-col gap-6 rounded-rc-card border border-rc-red/25 bg-linear-to-r from-rc-red-deep/30 to-rc-surface p-9 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xs">
          <p className="text-xs font-extrabold uppercase tracking-[2px] text-rc-red">
            Early Bird
          </p>
          <p className="text-2xl font-extrabold leading-tight">
            El precio especial termina el 31/10
          </p>
          <p className="text-sm text-rc-text-mute">
            Después la entrada pasa de $25.000 a $35.000.
          </p>
        </div>
        <div className="flex gap-3">
          {cajas.map((t) => (
            <div
              key={t.etiqueta}
              className="w-28 rounded-rc-option border border-rc-border bg-rc-black py-4 text-center"
            >
              <div className="text-[40px] font-extrabold leading-none tabular-nums">
                {t.numero}
              </div>
              <div className="text-xs uppercase text-rc-text-mute">
                {t.etiqueta}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-[350px]">
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-semibold">Quedan 38 de 60 Early Bird</span>
            <span className="text-rc-text-mute">63% vendidas</span>
          </div>
          <div className="h-2.5 rounded-full bg-rc-surface-2">
            <div className="h-full w-[63%] rounded-full bg-rc-red"></div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {planes.map((plan) => (
          <Tarjeta key={plan.nombre} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Entradas;
