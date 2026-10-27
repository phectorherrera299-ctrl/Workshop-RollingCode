import useEnPantalla from "./hooks/useEnPantalla";

export default function ScrollReveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useEnPantalla(0.08);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
