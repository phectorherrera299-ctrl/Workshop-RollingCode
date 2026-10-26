import { useState } from "react";

const pasos = ["Entrada", "Datos", "Pago", "Listo"];
const Checkout = () => {
  const [pasoActual, setPasoActual] = useState(0);

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
    </section>
  );
};

export default Checkout;
