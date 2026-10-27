import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5493815783030";
const MAX_LOGO_SIZE = 5 * 1024 * 1024;

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
      className="sponsor-join-section"
      id="sumate-sponsor"
      aria-labelledby="sponsor-join-title"
    >
      <div className="sponsor-join-heading">
        <span className="etiqueta">HAGAMOS ALGO GRANDE JUNTOS</span>
        <h2 id="sponsor-join-title">Sumate como Sponsor</h2>
        <p>
          Conectá tu marca con más de 120 talentos IT, programadores junior,
          semi-seniors y líderes tecnológicos del norte argentino. Completá el
          formulario y nos contactaremos en menos de 24 horas hábiles.
        </p>
      </div>

      <form
        className="sponsor-form"
        onSubmit={handleSubmit}
        onChange={() => setWhatsappUrl("")}
      >
        <div className="sponsor-form-grid">
          <label>
            Nombre <span className="sponsor-required">*</span>
            <input
              name="nombre"
              type="text"
              placeholder="Ej. Martín"
              autoComplete="given-name"
              required
            />
          </label>
          <label>
            Apellido <span className="sponsor-required">*</span>
            <input
              name="apellido"
              type="text"
              placeholder="Ej. González"
              autoComplete="family-name"
              required
            />
          </label>
          <label>
            Empresa <span className="sponsor-required">*</span>
            <input
              name="empresa"
              type="text"
              placeholder="Ej. Acme Technologies"
              autoComplete="organization"
              required
            />
          </label>
          <label>
            Email corporativo <span className="sponsor-required">*</span>
            <input
              name="email"
              type="email"
              placeholder="martin@acme.com"
              autoComplete="email"
              required
            />
          </label>
          <label className="sponsor-form-full">
            Tipo de sponsor <span className="sponsor-required">*</span>
            <select name="nivel" defaultValue="" required>
              <option value="" disabled>
                Seleccioná un nivel de sponsoreo
              </option>
              <option value="Main partner">Main partner</option>
              <option value="Gold tier">Gold tier</option>
              <option value="Bronze tier">Bronze tier</option>
            </select>
          </label>
          <label className="sponsor-form-full sponsor-logo-field">
            Logo de la empresa
            <input
              name="logo"
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml"
              onChange={handleLogoChange}
            />
            <span>
              PNG, JPG, WEBP o SVG. Máximo 5 MB. Si lo adjuntás, envialo
              también en el chat de WhatsApp.
            </span>
          </label>
          <label className="sponsor-form-full">
            Mensaje opcional
            <textarea
              name="mensaje"
              rows="3"
              placeholder="Contanos sobre tu empresa y por qué buscan ser sponsor del evento."
            />
          </label>
        </div>

        <button className="sponsor-submit" type="submit">
          Enviar postulación de Sponsor
        </button>
        {whatsappUrl && (
          <p className="sponsor-form-feedback" role="status">
            Tu postulación está lista.{" "}
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Continuar por WhatsApp
            </a>
          </p>
        )}
      </form>

      <p className="sponsor-contact">
        ¿Preferís escribirnos directamente?{" "}
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola, quiero recibir información para sumarme como sponsor del workshop.")}`}
          target="_blank"
          rel="noreferrer"
        >
          Contactanos por WhatsApp
        </a>
      </p>
    </section>
  );
}