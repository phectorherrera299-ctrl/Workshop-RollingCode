import Tarjeta from "./Tarjeta";
import useCuentaRegresiva from "../hooks/useCuentaRegresiva";
import { CUPO_PRESENCIAL } from "../data/cupo";

const FECHA_LIMITE = new Date("2026-10-31T23:59:59-03:00").getTime();
const dosDigitos = (n) => String(n).padStart(2, "0");

const planes = [
  {
    id: "early", nombre: "Early Bird",
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
    id: "general", nombre: "General",
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
    id: "virtual", nombre: "Virtual",
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

const Entradas = ({ onComprar, vendidas, onReiniciarCupo }) => {
  const { dias, horas, minutos, segundos } = useCuentaRegresiva(FECHA_LIMITE);

  const quedan = Math.max(CUPO_PRESENCIAL - vendidas, 0);
  const porcentajeVendido = Math.round((vendidas / CUPO_PRESENCIAL) * 100);
  const modoDemo = new URLSearchParams(window.location.search).has("demo");

  const cajas = [
    { numero: dosDigitos(dias), etiqueta: "Días" },
    { numero: dosDigitos(horas), etiqueta: "Horas" },
    { numero: dosDigitos(minutos), etiqueta: "Min" },
    { numero: dosDigitos(segundos), etiqueta: "Seg" },
  ];
  return (
    <section id="entradas" className="bg-transparent">
      <p className="text-base font-extrabold uppercase tracking-[3px] text-rc-red">
        Entradas
      </p>
      <h2>Asegurá tu lugar antes de que suba el precio</h2>
      <div className="ticket-promo mt-8 flex flex-col gap-6 rounded-rc-card border border-rc-red/25 bg-linear-to-r from-rc-red-deep/30 to-rc-surface p-5 sm:p-7 xl:flex-row xl:items-center xl:justify-between">
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
        <div className="countdown-grid">
          {cajas.map((t) => (
            <div
              key={t.etiqueta}
              className="countdown-box rounded-rc-option border border-rc-border bg-rc-black py-4 text-center"
            >
              <div className="countdown-value font-extrabold leading-none tabular-nums">
                <span key={t.numero} className={t.etiqueta === "Seg" ? "second-tick" : undefined}>{t.numero}</span>
              </div>
              <div className="text-xs uppercase text-rc-text-mute">
                {t.etiqueta}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full xl:w-[300px] xl:min-w-0">
          <div className="mb-2 flex justify-between gap-3 text-sm">
            <span className="font-semibold">
              Se vendieron {vendidas} de {CUPO_PRESENCIAL} presenciales
            </span>
            <span className="text-rc-text-mute tabular-nums">
              {porcentajeVendido}%
            </span>
          </div>
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={CUPO_PRESENCIAL}
            aria-valuenow={vendidas}
            aria-label="Entradas presenciales vendidas"
            className="ticket-progress h-2.5 rounded-full bg-rc-surface-2"
          >
            <div
              className="ticket-progress-fill h-full rounded-full bg-rc-red transition-[width] duration-700 ease-out motion-reduce:transition-none"
              style={{ width: `${porcentajeVendido}%` }}
            />
          </div>
          {modoDemo && (
            <button
              type="button"
              onClick={onReiniciarCupo}
              className="mt-3 cursor-pointer text-xs text-rc-text-mute underline transition hover:text-white"
            >
              Reiniciar contador (demo)
            </button>
          )}
        </div>
      </div>
      <div className="ticket-plans mt-6 grid gap-6 lg:grid-cols-2">
        {planes.map((plan) => (
          <Tarjeta
            key={plan.id}
            {...plan}
            chip={
              plan.id === "early"
                ? quedan === 0
                  ? "Agotadas"
                  : `Quedan ${quedan}`
                : plan.chip
            }
            onComprar={onComprar}
          />
        ))}
      </div>
    </section>
  );
};

export default Entradas;