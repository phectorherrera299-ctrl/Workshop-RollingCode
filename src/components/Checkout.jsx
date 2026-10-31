import { useState } from "react";
import Datos from "./Datos";
import Pago from "./Pago";
import Listo from "./Listo";
import { CUPO_PRESENCIAL } from "../data/cupo";

const opciones = [
  {
    id: "early",
    nombre: "Early Bird",
    detalle: "Presencial · hasta el 31/10",
    precio: 25000,
    grupo: "presencial",
  },
  {
    id: "general",
    nombre: "General",
    detalle: "Presencial · desde el 1/11",
    precio: 35000,
    grupo: "presencial",
  },
  {
    id: "virtual",
    nombre: "Virtual",
    detalle: "Transmisión en vivo y grabación",
    precio: 15000,
    grupo: "virtual",
  },
];

const LIMITE_VIRTUAL = 200;

const pasos = ["Entrada", "Datos", "Pago", "Listo"];
const formato = (n) => `$${n.toLocaleString("es-AR")}`;
const generarCodigo = () =>
  `RC-2026-${Math.floor(1000 + Math.random() * 9000)}`;

const totalDe = (cantidades, grupo) =>
  opciones
    .filter((opcion) => opcion.grupo === grupo)
    .reduce((suma, opcion) => suma + cantidades[opcion.id], 0);

const botonContador = (activa) =>
  `flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 text-xl font-extrabold transition disabled:cursor-not-allowed disabled:opacity-40 ${
    activa
      ? "border-white text-white hover:bg-white/10"
      : "border-rc-text-soft text-rc-black hover:border-rc-black"
  }`;

const Checkout = ({
  cantidades,
  setCantidades,
  vendidas,
  onCompraConfirmada,
}) => {
  const [pasoActual, setPasoActual] = useState(0);
  const [datos, setDatos] = useState(null);
  const [reserva, setReserva] = useState("");

  const limites = {
    presencial: Math.max(CUPO_PRESENCIAL - vendidas, 0),
    virtual: LIMITE_VIRTUAL,
  };

  const seleccionadas = opciones.filter((opcion) => cantidades[opcion.id] > 0);
  const presenciales = totalDe(cantidades, "presencial");
  const virtuales = totalDe(cantidades, "virtual");
  const cantidadTotal = presenciales + virtuales;
  const excedeCupo = presenciales > limites.presencial;
  const subtotal = opciones.reduce(
    (suma, opcion) => suma + opcion.precio * cantidades[opcion.id],
    0,
  );
  const cargo = Math.round(subtotal * 0.05);
  const total = subtotal + cargo;

  const textoContinuar =
    cantidadTotal === 0
      ? "Elegí al menos una entrada"
      : excedeCupo
        ? "Reducí las entradas presenciales"
        : "Continuar";

  const cambiar = (id, valor) => {
    setCantidades((previas) => {
      const opcion = opciones.find((o) => o.id === id);
      const otras = opciones
        .filter((o) => o.grupo === opcion.grupo && o.id !== id)
        .reduce((suma, o) => suma + previas[o.id], 0);
      const cantidad = Math.max(
        0,
        Math.min(valor, limites[opcion.grupo] - otras),
      );
      return { ...previas, [id]: cantidad };
    });
  };

  const escribir = (id, texto) => {
    const digitos = texto.replace(/\D/g, "").slice(0, 3);
    cambiar(id, digitos === "" ? 0 : parseInt(digitos, 10));
  };

  const reiniciar = () => {
    setPasoActual(0);
    setCantidades(Object.fromEntries(opciones.map((opcion) => [opcion.id, 0])));
    setDatos(null);
    setReserva("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="checkout"
      className="rounded-rc-red-block bg-rc-gradient p-5 sm:p-8 min-[1360px]:-mx-14 min-[1360px]:p-14"
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
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.43fr_1fr]">
        <div className="min-w-0 rounded-rc-box bg-white p-5 sm:p-9">
          {pasoActual === 0 && (
            <>
              <h3 className="text-[22px] font-extrabold text-rc-black">
                Elegí tus entradas
              </h3>
              <p className="mt-1 text-sm text-rc-text-on-white">
                Podés combinar tipos de entrada en una misma compra.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {opciones.map((opcion) => {
                  const cantidad = cantidades[opcion.id];
                  const activa = cantidad > 0;
                  const grupoLleno =
                    totalDe(cantidades, opcion.grupo) >= limites[opcion.grupo];
                  return (
                    <div
                      key={opcion.id}
                      className={`flex flex-col gap-4 rounded-rc-option border-2 px-5 py-3.5 transition sm:flex-row sm:items-center sm:justify-between ${
                        activa
                          ? "border-rc-black bg-rc-black text-white"
                          : "border-rc-text-soft text-rc-black"
                      }`}
                    >
                      <div>
                        <span className="block font-extrabold">
                          {opcion.nombre}
                        </span>
                        <span
                          className={`block text-sm ${
                            activa
                              ? "text-rc-text-mute"
                              : "text-rc-text-on-white"
                          }`}
                        >
                          {opcion.detalle}
                        </span>
                        <span className="mt-1 block text-lg font-extrabold">
                          {formato(opcion.precio)}
                        </span>
                      </div>

                      <div className="flex w-full items-center gap-2 sm:w-auto sm:gap-3">
                        <button
                          type="button"
                          onClick={() => cambiar(opcion.id, cantidad - 1)}
                          disabled={cantidad === 0}
                          aria-label={`Quitar una entrada ${opcion.nombre}`}
                          className={botonContador(activa)}
                        >
                          −
                        </button>

                        <input
                          type="text"
                          inputMode="numeric"
                          autoComplete="off"
                          placeholder="0"
                          value={cantidad === 0 ? "" : String(cantidad)}
                          onChange={(event) =>
                            escribir(opcion.id, event.target.value)
                          }
                          aria-label={`Cantidad de entradas ${opcion.nombre}`}
                          className="h-12 min-w-0 flex-1 rounded-rc-field border-2 border-rc-text-soft bg-white text-center text-xl font-extrabold tabular-nums text-rc-black outline-none placeholder:text-rc-text-mute focus:border-rc-red sm:w-20 sm:flex-none"
                        />

                        <button
                          type="button"
                          onClick={() => cambiar(opcion.id, cantidad + 1)}
                          disabled={grupoLleno}
                          aria-label={`Agregar una entrada ${opcion.nombre}`}
                          className={botonContador(activa)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                role="status"
                className="mt-4 flex flex-col gap-1 text-sm text-rc-text-on-white"
              >
                <p>
                  Presenciales: {presenciales} de {limites.presencial} lugares
                  disponibles
                  {presenciales >= limites.presencial && " · cupo completo"}
                </p>
                <p>
                  Virtuales: {virtuales} de {limites.virtual} entradas
                  {virtuales >= limites.virtual && " · llegaste al máximo"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setPasoActual(1)}
                disabled={cantidadTotal === 0 || excedeCupo}
                className="mt-6 min-h-[52px] w-full cursor-pointer rounded-full bg-rc-black text-lg font-extrabold text-white transition hover:bg-rc-surface-2 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-rc-black disabled:active:scale-100"
              >
                {textoContinuar}
              </button>

              <p className="mt-6 text-sm text-rc-text-on-white">
                Pasarela de pago de ejemplo: no se procesan pagos ni se guardan
                datos.
              </p>
            </>
          )}
          {pasoActual === 1 && (
            <Datos
              inicial={datos}
              onVolver={() => setPasoActual(0)}
              onContinuar={(valores) => {
                setDatos(valores);
                setPasoActual(2);
              }}
            />
          )}
          {pasoActual === 2 && (
            <Pago
              total={formato(total)}
              onVolver={() => setPasoActual(1)}
              onPagar={() => {
                setReserva(generarCodigo());
                onCompraConfirmada(presenciales);
                setPasoActual(3);
              }}
            />
          )}
          {pasoActual === 3 && (
            <Listo
              email={datos.email}
              reserva={reserva}
              resumen={seleccionadas.map((opcion) => ({
                nombre: opcion.nombre,
                cantidad: cantidades[opcion.id],
              }))}
              total={formato(total)}
              onReiniciar={reiniciar}
            />
          )}
        </div>
        <div className="min-w-0 self-start rounded-rc-box bg-rc-black p-6 sm:p-9">
          <p className="text-xs font-extrabold uppercase tracking-[2px] text-rc-red">
            Tu pedido
          </p>
          <h3 className="mt-3 text-xl font-extrabold">
            Workshop Rolling Code School
          </h3>
          <p className="text-sm text-rc-text-mute">
            Jueves 19/11 · 18.00 hs · Gral. Paz 576
          </p>

          <div className="mt-5 border-t border-rc-border pt-4">
            {seleccionadas.length === 0 ? (
              <p className="text-sm text-rc-text-mute">
                Todavía no elegiste entradas.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {seleccionadas.map((opcion) => {
                  const cantidad = cantidades[opcion.id];
                  return (
                    <div
                      key={opcion.id}
                      className="flex justify-between text-sm text-rc-text-soft"
                    >
                      <span>
                        {cantidad} {cantidad === 1 ? "entrada" : "entradas"}{" "}
                        {opcion.nombre}
                      </span>
                      <span className="tabular-nums">
                        {formato(opcion.precio * cantidad)}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="mt-3 flex justify-between text-sm text-rc-text-soft">
              <span>Cargo por servicio (5%)</span>
              <span className="tabular-nums">{formato(cargo)}</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-rc-border pt-4">
            <span className="font-extrabold">Total</span>
            <span className="flex items-center gap-3">
              {pasoActual === 3 && (
                <span className="rounded bg-rc-red px-2 py-0.5 text-xs font-extrabold uppercase tracking-wider text-white">
                  Pagado
                </span>
              )}
              <span className="text-[32px] font-extrabold leading-none tabular-nums">
                {formato(total)}
              </span>
            </span>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-rc-text-mute">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 text-rc-red"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Pago protegido. Recibís la entrada por email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
