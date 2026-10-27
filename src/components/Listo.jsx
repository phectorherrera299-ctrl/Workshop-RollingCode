const Listo = ({ email, reserva, onReiniciar }) => {
  return (
    <div className="text-center" role="status">
      <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-rc-black text-white">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>

      <h3 className="mt-5 text-[28px] font-extrabold leading-tight text-rc-black">
        ¡Listo! Tu lugar está reservado
      </h3>
      <p className="mt-2 text-rc-text-on-white">
        Te enviamos la entrada a <span className="font-semibold">{email}</span>
      </p>

      <div className="mx-auto mt-6 max-w-xs rounded-rc-option border-2 border-dashed border-rc-text-soft bg-rc-text-soft/20 px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-[2px] text-rc-text-on-white">
          Código de reserva
        </p>
        <p className="mt-1 text-2xl font-extrabold tracking-[3px] text-rc-black">
          {reserva}
        </p>
      </div>

      <button
        onClick={onReiniciar}
        className="mt-6 min-h-[52px] w-full cursor-pointer rounded-full bg-rc-black text-lg font-extrabold text-white transition hover:bg-rc-surface-2 active:scale-95"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Listo;