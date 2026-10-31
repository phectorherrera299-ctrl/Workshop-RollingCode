import { CalendarPlus } from "lucide-react";
import { calendarUrl } from "../data/calendario";

const Listo = ({ email, reserva, resumen = [], total, onReiniciar }) => {
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

      {resumen.length > 0 && (
        <div className="mx-auto mt-4 max-w-xs rounded-rc-option border-2 border-rc-text-soft px-6 py-4 text-left">
          <p className="text-xs font-semibold uppercase tracking-[2px] text-rc-text-on-white">
            Tu pedido
          </p>
          <ul className="mt-2 flex flex-col gap-1 text-rc-black">
            {resumen.map(({ nombre, cantidad }) => (
              <li key={nombre} className="flex justify-between gap-4">
                <span>{nombre}</span>
                <span className="font-extrabold tabular-nums">× {cantidad}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t-2 border-rc-text-soft pt-3">
            <span className="font-extrabold text-rc-black">Total pagado</span>
            <span className="text-lg font-extrabold tabular-nums text-rc-black">
              {total}
            </span>
          </div>
        </div>
      )}

      <p className="mt-6 text-sm text-rc-text-on-white">
        Jueves 19/11 · 18.00 hs · Gral. Paz 576
      </p>

      <a
        href={calendarUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border-2 border-rc-black text-lg font-extrabold text-rc-black transition hover:bg-rc-black hover:text-white"
      >
        <CalendarPlus className="h-5 w-5" aria-hidden="true" />
        Agregar al calendario
        <span className="sr-only"> (abre en una pestaña nueva)</span>
      </a>

      <button
        onClick={onReiniciar}
        className="mt-3 min-h-[52px] w-full cursor-pointer rounded-full bg-rc-black text-lg font-extrabold text-white transition hover:bg-rc-surface-2 active:scale-95"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Listo;