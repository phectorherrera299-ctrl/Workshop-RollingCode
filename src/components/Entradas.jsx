import Tarjeta from "./Tarjeta";
const planes = [
  {
    nombre: "Early Bird",
    chip: "Quedan 38",
    precio: "$25.000",
    tachado: "$35.000",
    destacada: true,
  },
  {
    nombre: "General",
    chip: "Desde el 1/11",
    precio: "$35.000",
  },
];

const tiempo = [
  { numero: "17", etiqueta: "Días" },
  { numero: "09", etiqueta: "Horas" },
  { numero: "24", etiqueta: "Min" },
];

const Entradas = () => {
  return (
    <section className="mt-24">
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
          {tiempo.map((tiempo) => (
            <div
              key={tiempo.etiqueta}
              className="w-28 rounded-rc-option border border-rc-border bg-rc-black py-4 text-center"
            >
              <div className="text-[40px] font-extrabold leading-none tabular-nums">
                {tiempo.numero}
              </div>
              <div className="text-xs uppercase text-rc-text-mute">
                {tiempo.etiqueta}
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
