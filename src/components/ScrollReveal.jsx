import useEnPantalla from "../hooks/useEnPantalla";

export default function ScrollReveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useEnPantalla(0.08);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-full transition duration-700 ease-out motion-reduce:translate-none motion-reduce:scale-none motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none ${
        visible
          ? "translate-none scale-none opacity-100 blur-none"
          : "translate-y-8 scale-[0.985] opacity-0 blur-[5px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}