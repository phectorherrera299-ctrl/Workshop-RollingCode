import { useState } from "react";

const OBLIGATORIO = "Este campo es obligatorio";

const validarNombre = (valor) => {
  const texto = valor.trim();
  if (!texto) return OBLIGATORIO;
  if (texto.length < 2 || !/^[\p{L}' -]+$/u.test(texto)) {
    return "Ingresá solo letras, mínimo 2 caracteres";
  }
  return "";
};

const campos = [
  {
    name: "nombre",
    label: "Nombre",
    placeholder: "Ej: Santiago",
    validar: validarNombre,
  },
  {
    name: "apellido",
    label: "Apellido",
    placeholder: "Ej: Giménez",
    validar: validarNombre,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "nombre@ejemplo.com",
    type: "email",
    completo: true,
    validar: (valor) => {
      const texto = valor.trim();
      if (!texto) return OBLIGATORIO;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(texto)) {
        return "Ingresá un email válido (ej: nombre@ejemplo.com)";
      }
      return "";
    },
  },
  {
    name: "telefono",
    label: "Teléfono",
    placeholder: "+54 11 4567 8901",
    type: "tel",
    validar: (valor) => {
      if (!valor.trim()) return OBLIGATORIO;
      const limpio = valor.replace(/[\s()+-]/g, "");
      if (!/^\d{8,15}$/.test(limpio)) {
        return "Ingresá solo números, entre 8 y 15 dígitos";
      }
      return "";
    },
  },
  {
    name: "dni",
    label: "DNI",
    placeholder: "12.345.678",
    validar: (valor) => {
      if (!valor.trim()) return OBLIGATORIO;
      const limpio = valor.replace(/\./g, "");
      if (!/^\d{7,8}$/.test(limpio)) {
        return "Ingresá un DNI de 7 u 8 números";
      }
      return "";
    },
  },
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
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
    if (errores[name]) setErrores({ ...errores, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevos = {};
    campos.forEach((campo) => {
      const mensaje = campo.validar(valores[campo.name]);
      if (mensaje) nuevos[campo.name] = mensaje;
    });
    if (!acepta) {
      nuevos.acepta = "Tenés que aceptar los términos para continuar";
    }

    setErrores(nuevos);
    if (Object.keys(nuevos).length === 0) onContinuar();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3 className="text-[22px] font-extrabold text-rc-black">Tus datos</h3>

      <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
        {campos.map((campo) => {
          const error = errores[campo.name];
          return (
            <div
              key={campo.name}
              className={campo.completo ? "sm:col-span-2" : ""}
            >
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
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${campo.name}-error` : undefined}
                className={`h-12 w-full rounded-rc-field border-2 px-4 py-3.5 text-rc-black outline-none placeholder:text-rc-text-mute ${
                  error
                    ? "border-rc-red"
                    : "border-rc-text-soft focus:border-rc-black"
                }`}
              />
              {error && (
                <p
                  id={`${campo.name}-error`}
                  className="mt-1.5 text-sm text-rc-red"
                >
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5">
        <label className="flex cursor-pointer items-center gap-3 text-sm text-rc-text-on-white">
          <input
            type="checkbox"
            checked={acepta}
            onChange={(e) => {
              setAcepta(e.target.checked);
              if (errores.acepta) setErrores({ ...errores, acepta: "" });
            }}
            aria-invalid={Boolean(errores.acepta)}
            className="h-5 w-5 cursor-pointer accent-rc-black"
          />
          Acepto los términos y condiciones
        </label>
        {errores.acepta && (
          <p className="mt-1.5 text-sm text-rc-red">{errores.acepta}</p>
        )}
      </div>

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