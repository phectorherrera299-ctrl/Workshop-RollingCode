const Entradas = () => {
  return (
    <section className="mt-24">
      <p className="text-base font-extrabold  tracking-[3px] text-rc-red">
        ENTRADAS
      </p>
      <h2>Asegurá tu lugar antes de que suba el precio</h2>
      <div className="mt-8 flex flex-col gap-6 rounded-rc-card border border-rc-border bg-rc-surface p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[3px] text-rc-red">
            Early Bird
          </p>
          <p className="text-[22px] font-extrabold leading-tight">
            El precio especial termina el 31/10
          </p>
          <p className="text-sm text-rc-text-mute">
            Después la entrada pasa de $25.000 a $35.000.
          </p>
        </div>
        <div className="lg:w-72">
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-semibold">Quedan 38 de 60 Early Bird</span>
            <span className="text-rc-text-mute">63% vendidas</span>
          </div>
          <div className="h-2 rounded-full bg-rc-surface-2">
            <div className="h-full w-[63%] rounded-full bg-rc-red"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entradas;
