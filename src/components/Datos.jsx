import { useState } from "react";

const campos = [
  { name: "nombre", label: "Nombre", placeholder: "Ej: Santiago" },
  { name: "apellido", label: "Apellido", placeholder: "Ej: Giménez" },
  { name: "email", label: "Email", placeholder: "nombre@ejemplo.com", type: "email", completo: true },
  { name: "telefono", label: "Teléfono", placeholder: "+54 11 4567 8901", type: "tel" },
  { name: "dni", label: "DNI", placeholder: "12.345.678" },
];

const Datos = ({ onVolver, onContinuar }) => {
  const [valores, setValores] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "",
  });
  const [acepta, setAcepta] = useState(false);

  const handleChange = (e) => {
    setValores({ ...valores, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinuar();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3 className="text-[22px] font-extrabold text-rc-black">Tus datos</h3>

      <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
        {campos.map((campo) => (
          <div key={campo.name} className={campo.completo ? "sm:col-span-2" : ""}>
            <label
              htmlFor={campo.name}
              className="mb-1.5 block text-sm font-semibold text-rc-black"
            >
              {campo.label}
            </label>
            <input
              id={campo.name}
              name={campo.name}
              type={campo.type ?? "text"}
              value={valores[campo.name]}
              onChange={handleChange}
              placeholder={campo.placeholder}
              className="h-12 w-full rounded-rc-field border-2 border-rc-text-soft px-4 py-3.5 text-rc-black outline-none placeholder:text-rc-text-mute focus:border-rc-black"
            />
          </div>
        ))}
      </div>

      <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-rc-text-on-white">
        <input
          type="checkbox"
          checked={acepta}
          onChange={(e) => setAcepta(e.target.checked)}
          className="h-5 w-5 cursor-pointer accent-rc-black"
        />
        Acepto los términos y condiciones
      </label>

      <div className="mt-6 grid grid-cols-[1fr_2fr] gap-4">
        <button
          type="button"
          onClick={onVolver}
          className="min-h-[52px] cursor-pointer rounded-full border-2 border-rc-text-soft text-lg font-extrabold text-rc-black transition hover:border-rc-black"
        >
          Volver
        </button>
        <button
          type="submit"
          className="min-h-[52px] cursor-pointer rounded-full bg-rc-black text-lg font-extrabold text-white transition hover:bg-rc-surface-2 active:scale-95"
        >
          Continuar
        </button>
      </div>
    </form>
  );
};

export default Datos;