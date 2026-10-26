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
  nombre,
  chip,
  precio,
  tachado,
  subtitulo,
  items,
  destacada = false,
}) => {
  return (
    <article
      className={`rounded-rc-card p-9 ${destacada ? "bg-rc-gradient" : "border border-rc-border bg-rc-surface"}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-extrabold">{nombre}</h3>
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${destacada ? "bg-rc-black text-white" : "border border-rc-chip text-rc-text-soft"}`}
        >
          {chip}
        </span>
      </div>
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-[56px] font-extrabold leading-none tracking-[-1px]">
          {precio}
        </span>
        {tachado && (
          <span className="text-xl font-semibold text-rc-pink line-through">
            {tachado}
          </span>
        )}
      </div>
      <p className={`mt-3 text-sm ${destacada ? "text-rc-pink" : "text-rc-text-mute"}`}>
        {subtitulo}
      </p>
      <ul
        className={`mt-6 flex flex-col gap-3 ${destacada ? "text-white" : "text-rc-text-soft"}`}xxxxxx>
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className={destacada ? "text-white" : "text-rc-red"}>
              <Check />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Tarjeta;
