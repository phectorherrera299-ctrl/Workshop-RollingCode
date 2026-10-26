import { useState } from "react";

const OBLIGATORIO = "Este campo es obligatorio";

const soloDigitos = (valor) => valor.replace(/\D/g, "");

const campos = [
  {
    name: "numero",
    label: "Número de tarjeta",
    placeholder: "1234 5678 9012 3456",
    completo: true,
    inputMode: "numeric",
    formatear: (valor) =>
      soloDigitos(valor).slice(0, 16).replace(/(.{4})/g, "$1 ").trim(),
    validar: (valor) => {
      if (!valor.trim()) return OBLIGATORIO;
      if (soloDigitos(valor).length !== 16) {
        return "Ingresá los 16 números de la tarjeta";
      }
      return "";
    },
  },
  {
    name: "titular",
    label: "Nombre del titular",
    placeholder: "Como figura en la tarjeta",
    completo: true,
    validar: (valor) => {
      const texto = valor.trim();
      if (!texto) return OBLIGATORIO;
      if (texto.length < 2 || !/^[\p{L}' -]+$/u.test(texto)) {
        return "Ingresá el nombre como figura en la tarjeta";
      }
      return "";
    },
  },
  {
    name: "vencimiento",
    label: "Vencimiento (MM/AA)",
    placeholder: "11/28",
    inputMode: "numeric",
    formatear: (valor) => {
      const digitos = soloDigitos(valor).slice(0, 4);
      return digitos.length > 2
        ? `${digitos.slice(0, 2)}/${digitos.slice(2)}`
        : digitos;
    },
    validar: (valor) => {
      if (!valor.trim()) return OBLIGATORIO;
      const partes = valor.match(/^(\d{2})\/(\d{2})$/);
      if (!partes) return "La tarjeta está vencida o la fecha no es válida";

      const mes = Number(partes[1]);
      const anio = Number(partes[2]);
      const hoy = new Date();
      const actual = (hoy.getFullYear() % 100) * 100 + (hoy.getMonth() + 1);

      if (mes < 1 || mes > 12 || anio * 100 + mes < actual) {
        return "La tarjeta está vencida o la fecha no es válida";
      }
      return "";
    },
  },
  {
    name: "codigo",
    label: "Código de seguridad",
    placeholder: "123",
    type: "password",
    inputMode: "numeric",
    formatear: (valor) => soloDigitos(valor).slice(0, 4),
    validar: (valor) => {
      if (!valor.trim()) return OBLIGATORIO;
      if (!/^\d{3,4}$/.test(valor)) return "Ingresá 3 o 4 números";
      return "";
    },
  },
];

const Pago = ({ total, onVolver, onPagar }) => {
  const [valores, setValores] = useState({
    numero: "",
    titular: "",
    vencimiento: "",
    codigo: "",
  });
  const [errores, setErrores] = useState({});

  const handleChange = (e, campo) => {
    const nuevo = campo.formatear
      ? campo.formatear(e.target.value)
      : e.target.value;
    setValores({ ...valores, [campo.name]: nuevo });
    if (errores[campo.name]) setErrores({ ...errores, [campo.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevos = {};
    campos.forEach((campo) => {
      const mensaje = campo.validar(valores[campo.name]);
      if (mensaje) nuevos[campo.name] = mensaje;
    });

    setErrores(nuevos);
    if (Object.keys(nuevos).length === 0) onPagar();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3 className="text-[22px] font-extrabold text-rc-black">Pago</h3>
      <p className="mt-2 text-sm text-rc-text-on-white">
        Pasarela de pago de ejemplo: no se procesan pagos ni se guardan datos.
      </p>

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
                inputMode={campo.inputMode}
                autoComplete="off"
                value={valores[campo.name]}
                onChange={(e) => handleChange(e, campo)}
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
          Pagar {total}
        </button>
      </div>
    </form>
  );
};

export default Pago;