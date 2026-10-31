const Check = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const Tarjeta = ({
  id,
  nombre,
  chip,
  precio,
  tachado,
  subtitulo,
  items,
  destacada = false,
  className = "",
  onComprar,
}) => {
  return (
    <article
      className={`ticket-card flex min-w-0 flex-col rounded-rc-card p-6 transition duration-300 hover:-translate-y-1 sm:p-9 ${
        destacada
          ? "bg-rc-gradient hover:shadow-[0_20px_40px_-12px_rgba(224,32,42,0.5)]"
          : "border border-rc-border bg-rc-surface hover:border-rc-red/50"
      } ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-extrabold">{nombre}</h3>
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${destacada ? "bg-rc-black text-white" : "border border-rc-chip text-rc-text-soft"}`}
        >
          {chip}
        </span>
      </div>
      <div className="ticket-price mt-4 flex flex-wrap items-baseline gap-3">
        <span className="text-[40px] font-extrabold leading-none tracking-[-1px] sm:text-[56px]">
          {precio}
        </span>
        {tachado && (
          <span className="text-xl font-semibold text-rc-pink line-through">
            {tachado}
          </span>
        )}
      </div>
      <p
        className={`mt-3 text-sm ${destacada ? "text-rc-pink" : "text-rc-text-mute"}`}
      >
        {subtitulo}
      </p>
      <ul
        className={`ticket-benefits mt-6 flex flex-1 flex-col gap-3 ${destacada ? "text-white" : "text-rc-text-soft"}`}
      >
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className={destacada ? "text-white" : "text-rc-red"}>
              <Check />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <details className={`ticket-mobile-benefits ${destacada ? "text-white" : "text-rc-text-soft"}`}>
        <summary>Qué incluye <span aria-hidden="true">+</span></summary>
        <ul>{items.map(item => <li key={item}><Check /><span>{item}</span></li>)}</ul>
      </details>
      <button
        onClick={() => onComprar(id)}
        className={`mt-8 min-h-[52px] cursor-pointer rounded-full text-lg font-extrabold transition duration-200 active:scale-95 ${
          destacada
            ? "bg-white text-rc-black hover:bg-rc-pink"
            : "border-2 border-white text-white hover:bg-white hover:text-rc-black"
        }`}
      >
        Comprar entrada
      </button>
    </article>
  );
};

export default Tarjeta;
