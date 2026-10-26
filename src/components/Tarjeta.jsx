const Tarjeta = ({ nombre, chip, precio, tachado, destacada = false }) => {
  return (
    <article
      className={`rounded-rc-card p-8 ${destacada ? "bg-rc-gradient" : "border border-rc-border bg-rc-surface"}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-extrabold">{nombre}</h3>
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${destacada ? "bg-rc-black text-white" : "border border-rc-chip text-rc-text-soft"}`}
        >
          {chip}
        </span>
      </div>
    </article>
  );
};

export default Tarjeta;
