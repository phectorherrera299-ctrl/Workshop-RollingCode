import { useState } from "react";

const opciones = [
  {
    id: "early",
    nombre: "Early Bird",
    detalle: "Presencial · hasta el 31/10",
    precio: 25000,
  },
  {
    id: "general",
    nombre: "General",
    detalle: "Presencial · desde el 1/11",
    precio: 35000,
  },
  {
    id: "virtual",
    nombre: "Virtual",
    detalle: "Transmisión en vivo y grabación",
    precio: 15000,
  },
];

const pasos = ["Entrada", "Datos", "Pago", "Listo"];
const formato = (n) => `$${n.toLocaleString("es-AR")}`;

const Checkout = () => {
  const [pasoActual, setPasoActual] = useState(0);
  const [entradaId, setEntradaId] = useState("early");
  const [cantidad, setCantidad] = useState(1);
  const entrada = opciones.find((opcion) => opcion.id === entradaId);
  const subtotal = entrada.precio * cantidad;
  const cargo = Math.round(subtotal * 0.05);
  const total = subtotal + cargo;

  return (
    <section
      id="checkout"
      className="mt-14 rounded-rc-red-block bg-rc-gradient p-8 min-[1360px]:-mx-14 min-[1360px]:p-14"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-base font-extrabold uppercase tracking-[3px] text-white">
            Compra segura
          </p>
          <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.03]">
            Finalizá tu compra
          </h2>
        </div>
        <ol className="flex flex-wrap gap-2">
          {pasos.map((paso, i) => (
            <li
              key={paso}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                i === pasoActual
                  ? "bg-rc-black text-white"
                  : "border border-white text-white"
              }`}
            >
              {i + 1} {paso}
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.43fr_1fr]">
        <div className="rounded-rc-box bg-white p-9">
          <h3 className="text-[22px] font-extrabold text-rc-black">
            Elegí tu entrada
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            {opciones.map((opcion) => {
              const activa = opcion.id === entradaId;
              return (
                <button
                  key={opcion.id}
                  onClick={() => setEntradaId(opcion.id)}
                  aria-pressed={activa}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-rc-option border-2 px-5 py-3.5 text-left transition ${
                    activa
                      ? "border-rc-black bg-rc-black text-white"
                      : "border-rc-text-soft text-rc-black hover:border-rc-black"
                  }`}
                >
                  <span>
                    <span className="block font-extrabold">
                      {opcion.nombre}
                    </span>
                    <span
                      className={`block text-sm ${
                        activa ? "text-rc-text-mute" : "text-rc-text-on-white"
                      }`}
                    >
                      {opcion.detalle}
                    </span>
                  </span>
                  <span className="text-lg font-extrabold">
                    ${opcion.precio.toLocaleString("es-AR")}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-extrabold text-rc-black">Cantidad</span>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCantidad(cantidad - 1)}
                disabled={cantidad === 1}
                aria-label="Quitar una entrada"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-rc-text-soft text-xl font-extrabold text-rc-black transition hover:border-rc-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                −
              </button>

              <span className="w-6 text-center text-xl font-extrabold tabular-nums text-rc-black">
                {cantidad}
              </span>

              <button
                onClick={() => setCantidad(cantidad + 1)}
                disabled={cantidad === 10}
                aria-label="Agregar una entrada"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-rc-text-soft text-xl font-extrabold text-rc-black transition hover:border-rc-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                +
              </button>
            </div>
          </div>

          <button className="mt-6 min-h-[52px] w-full cursor-pointer rounded-full bg-rc-black text-lg font-extrabold text-white transition hover:bg-rc-surface-2 active:scale-95">
            Continuar
          </button>

          <p className="mt-6 text-sm text-rc-text-on-white">
            Pasarela de pago de ejemplo: no se procesan pagos ni se guardan
            datos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
