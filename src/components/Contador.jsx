const datos = [
  { numero: "120", texto: "lugares presenciales" },
  { numero: "10", texto: "charlas de speakers" },
  { numero: "3 h 40", texto: "de 18.00 a 21.40 hs" },
  { numero: "2", texto: "modalidades: presencial y virtual" },
];

const Contador = () => {
  return (
    <section className="mt-3 rounded-rc-option border border-rc-border bg-rc-surface p-6 transition-transform duration-200 hover:scale-[1.02]">
      <div className="pb-2 pl-2 grid grid-cols-2 gap-6 md:grid-cols-4">
        {datos.map((dato) => (
          <div key={dato.numero}>
            <div className="text-rc-red font-extrabold text-[40px]">
              {dato.numero}
            </div>
            <p className="text-rc-text-soft text-1xl">
              {dato.numero === "2" ? (
                <>
                  modalidades: presencial y
                  <br />
                  virtual
                </>
              ) : (
                dato.texto
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contador;
