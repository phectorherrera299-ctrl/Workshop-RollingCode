const Datos = ({ onVolver, onContinuar }) => {
  return (
    <div>
      <h3 className="text-[22px] font-extrabold text-rc-black">Tus datos</h3>
      <p className="mt-2 text-sm text-rc-text-on-white">
        Acá van los campos (próximo commit).
      </p>

      <div className="mt-6 grid grid-cols-[1fr_2fr] gap-4">
        <button
          onClick={onVolver}
          className="min-h-[52px] cursor-pointer rounded-full border-2 border-rc-text-soft text-lg font-extrabold text-rc-black transition hover:border-rc-black"
        >
          Volver
        </button>
        <button
          onClick={onContinuar}
          className="min-h-[52px] cursor-pointer rounded-full bg-rc-black text-lg font-extrabold text-white transition hover:bg-rc-surface-2 active:scale-95"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Datos;