import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5493815783030";
const MAX_LOGO_SIZE = 5 * 1024 * 1024;

const etiquetaCampo =
  "flex min-w-0 flex-col gap-2 text-sm font-extrabold uppercase tracking-[0.5px] text-rc-text-soft";

const campoBase =
  "w-full min-w-0 rounded-rc-field border-2 border-rc-chip bg-rc-surface px-4 text-base font-normal normal-case tracking-normal text-white placeholder:text-rc-text-mute focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/25";

const input = `${campoBase} h-12`;
const textarea = `${campoBase} min-h-24 resize-y py-3`;

const ayuda = "text-sm font-normal normal-case tracking-normal text-rc-text-mute";

export default function SumateSponsor() {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const logo = formData.get("logo");
    const details = [
      "Hola, quiero postular a mi empresa como sponsor del workshop.",
      `Nombre: ${formData.get("nombre")} ${formData.get("apellido")}`,
      `Empresa: ${formData.get("empresa")}`,
      `Email corporativo: ${formData.get("email")}`,
      `Nivel de sponsor: ${formData.get("nivel")}`,
      `Logo seleccionado: ${logo instanceof File && logo.name ? logo.name : "No adjuntado"}`,
      `Mensaje: ${formData.get("mensaje") || "Sin mensaje adicional"}`,
      "Si seleccioné un logo, lo enviaré como adjunto en este chat.",
    ];

    setWhatsappUrl(`${WHATSAPP_URL}?text=${encodeURIComponent(details.join("\n"))}`);
  };

  const handleLogoChange = (event) => {
    const logo = event.currentTarget.files?.[0];
    event.currentTarget.setCustomValidity(
      logo && logo.size > MAX_LOGO_SIZE
        ? "El archivo no puede superar los 5 MB."
        : "",
    );
    setWhatsappUrl("");
  };

  return (
    <section
      id="sumate-sponsor"
      aria-labelledby="sponsor-join-title"
      className="scroll-mt-6 py-10"
    >
      <div className="mx-auto mb-7 max-w-[680px] text-center">
        <p className="mb-3 text-base font-extrabold uppercase tracking-[3px] text-rc-red">
          Hagamos algo grande juntos
        </p>
        <h2 id="sponsor-join-title">Sumate como Sponsor</h2>
        <p className="mx-auto mt-3.5 max-w-[610px] text-base text-rc-text-mute">
          Conectá tu marca con más de 120 talentos IT, programadores junior,
          semi-seniors y líderes tecnológicos del norte argentino. Completá el
          formulario y nos contactaremos en menos de 24 horas hábiles.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        onChange={() => setWhatsappUrl("")}
        className="mx-auto max-w-[780px] px-2 sm:px-6"
      >
        <div className="grid grid-cols-1 gap-x-3.5 gap-y-4 sm:grid-cols-2">
          <label className={etiquetaCampo}>
            <span>
              Nombre <span className="text-rc-red">*</span>
            </span>
            <input
              name="nombre"
              type="text"
              placeholder="Ej. Martín"
              autoComplete="given-name"
              required
              className={input}
            />
          </label>

          <label className={etiquetaCampo}>
            <span>
              Apellido <span className="text-rc-red">*</span>
            </span>
            <input
              name="apellido"
              type="text"
              placeholder="Ej. González"
              autoComplete="family-name"
              required
              className={input}
            />
          </label>

          <label className={etiquetaCampo}>
            <span>
              Empresa <span className="text-rc-red">*</span>
            </span>
            <input
              name="empresa"
              type="text"
              placeholder="Ej. Acme Technologies"
              autoComplete="organization"
              required
              className={input}
            />
          </label>

          <label className={etiquetaCampo}>
            <span>
              Email corporativo <span className="text-rc-red">*</span>
            </span>
            <input
              name="email"
              type="email"
              placeholder="martin@acme.com"
              autoComplete="email"
              required
              className={input}
            />
          </label>

          <label className={`${etiquetaCampo} sm:col-span-2`}>
            <span>
              Tipo de sponsor <span className="text-rc-red">*</span>
            </span>
            <select name="nivel" defaultValue="" required className={input}>
              <option value="" disabled>
                Seleccioná un nivel de sponsoreo
              </option>
              <option value="Main partner">Main partner</option>
              <option value="Gold tier">Gold tier</option>
              <option value="Bronze tier">Bronze tier</option>
            </select>
          </label>

          <label className={`${etiquetaCampo} py-2 text-center sm:col-span-2`}>
            <span>Logo de la empresa</span>
            <input
              name="logo"
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml"
              onChange={handleLogoChange}
              className="w-full text-sm font-normal normal-case tracking-normal text-rc-text-soft file:mr-3 file:cursor-pointer file:rounded-full file:border file:border-rc-chip file:bg-rc-surface-2 file:px-4 file:py-2 file:font-semibold file:text-white"
            />
            <span className={ayuda}>
              PNG, JPG, WEBP o SVG. Máximo 5 MB. Si lo adjuntás, envialo
              también en el chat de WhatsApp.
            </span>
          </label>

          <label className={`${etiquetaCampo} sm:col-span-2`}>
            <span>Mensaje opcional</span>
            <textarea
              name="mensaje"
              rows="3"
              placeholder="Contanos sobre tu empresa y por qué buscan ser sponsor del evento."
              className={textarea}
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-5 flex min-h-[52px] w-full items-center justify-center rounded-full bg-rc-red text-lg font-extrabold text-white transition hover:bg-rc-red-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Enviar postulación de Sponsor
        </button>

        {whatsappUrl && (
          <p role="status" className="mt-4 text-center text-sm text-rc-text-soft">
            Tu postulación está lista.{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="font-extrabold text-white underline underline-offset-4"
            >
              Continuar por WhatsApp
            </a>
          </p>
        )}
      </form>

      <p className="mt-5 text-center text-sm text-rc-text-mute">
        ¿Preferís escribirnos directamente?{" "}
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola, quiero recibir información para sumarme como sponsor del workshop.")}`}
          target="_blank"
          rel="noreferrer"
          className="font-extrabold text-white underline underline-offset-4"
        >
          Contactanos por WhatsApp
        </a>
      </p>
    </section>
  );
}