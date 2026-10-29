import useContador from "../hooks/useContador";
import useEnPantalla from "../hooks/useEnPantalla";

const datos = [
  { valor: 120, texto: "lugares presenciales" },
  { valor: 10, texto: "charlas de speakers" },
  { fijo: "3 h 40", texto: "de 18.00 a 21.40 hs" },
  {
    valor: 2,
    texto: (
      <>
        modalidades: presencial y
        <br />
        virtual
      </>
    ),
  },
];

const Estadistica = ({ valor, fijo, texto, activo }) => {
  const numero = useContador(valor ?? 0, activo);
  return (
    <div>
      <div className="text-rc-red font-extrabold text-[40px] tabular-nums">
        {fijo ?? numero}
      </div>
      <p className="text-rc-text-soft text-sm">{texto}</p>
    </div>
  );
};

const Contador = () => {
  const [ref, visible] = useEnPantalla();
  return (
    <section ref={ref} className="rounded-rc-option border border-rc-border bg-rc-surface p-6 transition-transform duration-200 hover:scale-[1.02]">
      <div
        className="pb-1
       pl-2 grid grid-cols-2 gap-6 md:grid-cols-4"
      >
        {datos.map((dato) => (
          <Estadistica key={dato.texto} activo={visible} {...dato} />
        ))}
      </div>
    </section>
  );
};

export default Contador;
