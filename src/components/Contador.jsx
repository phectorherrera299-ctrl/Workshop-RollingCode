import useContador from "../hooks/useContador";
import useEnPantalla from "../hooks/useEnPantalla";

const datos = [
  { id: "lugares", valor: 120, texto: "lugares presenciales" },
  { id: "charlas", valor: 10, texto: "charlas de speakers" },
  { id: "duracion", fijo: "3h 40", texto: "de 18.00 a 21.40 hs" },
  {
    id: "modalidades",
    valor: 2,
    texto: (
      <>
        modalidades: presenciales y
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
      <div className="text-[40px] font-extrabold leading-none tabular-nums text-rc-red">
        {fijo ?? numero}
      </div>
      <p className="mt-2 text-sm text-rc-text-mute">{texto}</p>
    </div>
  );
};

const Contador = () => {
  const [ref, visible] = useEnPantalla();

  return (
    <section
      ref={ref}
      className="mx-0 sm:mx-6 lg:mx-10 rounded-rc-option border border-rc-border bg-rc-surface px-6 py-6 transition-transform duration-200 hover:scale-[1.02] sm:px-10 sm:py-8"
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {datos.map((dato) => (
          <Estadistica key={dato.id} activo={visible} {...dato} />
        ))}
      </div>
    </section>
  );
};

export default Contador;