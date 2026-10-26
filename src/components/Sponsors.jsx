import { useState } from "react";

const sponsors = [
  {
    tier: "Main partners",
    level: "Tier diamante",
    className: "sponsor-tier-main",
    partners: [
      {
        name: "Google Cloud",
        slug: "googlecloud",
        color: "EA4335",
        description: "Infraestructura global de cloud e inteligencia artificial.",
        url: "https://cloud.google.com/",
        category: "Cloud & AI",
        badge: "Líder global",
      },
      {
        name: "Amazon Web Services",
        mark: "AWS",
        slug: "amazonaws",
        color: "FF9900",
        description: "Servicios de nube, infraestructura y tecnología para empresas.",
        url: "https://aws.amazon.com/",
        category: "Cloud hosting",
        badge: "Global leader",
      },
      {
        name: "Mercado Libre",
        mark: "ML",
        slug: "mercadolibre",
        color: "FFE600",
        description: "Tecnología para impulsar el comercio y los pagos digitales.",
        url: "https://www.mercadolibre.com/",
        category: "Fintech & e-commerce",
        badge: "Unicorn LATAM",
      },
    ],
  },
  {
    tier: "Gold tier",
    level: "Nivel oro",
    className: "sponsor-tier-gold",
    partners: [
      {
        name: "Microsoft",
        mark: "M",
        slug: "microsoft",
        color: "F25022",
        description: "Tecnología y herramientas para desarrolladores.",
        url: "https://www.microsoft.com/",
      },
      {
        name: "GitHub",
        slug: "github",
        color: "F0F6FC",
        description: "Desarrollo de software y colaboración.",
        url: "https://github.com/",
      },
      {
        name: "Globant",
        mark: "G",
        slug: "globant",
        color: "00CC99",
        description: "Transformación digital y tecnología.",
        url: "https://www.globant.com/",
      },
      {
        name: "Auth0",
        slug: "auth0",
        color: "EB5424",
        description: "Identidad y seguridad para aplicaciones.",
        url: "https://auth0.com/",
      },
      {
        name: "Vercel",
        slug: "vercel",
        color: "FFFFFF",
        description: "Plataforma para construir y desplegar productos web.",
        url: "https://vercel.com/",
      },
    ],
  },
  {
    tier: "Bronze tier",
    level: "Nivel bronce",
    className: "sponsor-tier-bronze",
    partners: [
      {
        name: "Supabase",
        slug: "supabase",
        color: "3FCF8E",
        description: "Open source Firebase alternative.",
        url: "https://supabase.com/",
      },
      {
        name: "DigitalOcean",
        slug: "digitalocean",
        color: "0080FF",
        description: "Cloud computing.",
        url: "https://www.digitalocean.com/",
      },
      {
        name: "Cloudflare",
        slug: "cloudflare",
        color: "F38020",
        description: "Infraestructura web y seguridad.",
        url: "https://www.cloudflare.com/",
      },
      {
        name: "MongoDB",
        slug: "mongodb",
        color: "47A248",
        description: "Base de datos para aplicaciones modernas.",
        url: "https://www.mongodb.com/",
      },
      {
        name: "Docker",
        slug: "docker",
        color: "2496ED",
        description: "Plataforma de desarrollo en contenedores.",
        url: "https://www.docker.com/",
      },
      {
        name: "Stripe",
        slug: "stripe",
        color: "635BFF",
        description: "Infraestructura de pagos en línea.",
        url: "https://stripe.com/",
      },
      {
        name: "Postman",
        slug: "postman",
        color: "FF6C37",
        description: "Plataforma para desarrollar y probar APIs.",
        url: "https://www.postman.com/",
      },
    ],
  },
];

const WHATSAPP_URL = "https://wa.me/5493815783030";
const MAX_LOGO_SIZE = 5 * 1024 * 1024;

function SponsorGroup({ tier, level, className, partners }) {
  return (
    <div className={`sponsor-tier ${className}`}>
      <div className="sponsor-tier-heading">
        <h3>{tier}</h3>
        <span>{level}</span>
      </div>
      {className === "sponsor-tier-main" && (
        <p className="sponsor-tier-description">
          Empresas líderes que hacen posible este encuentro.
        </p>
      )}
      <div className="sponsor-grid">
        {partners.map((partner) => (
          <a
            key={partner.name}
            className="sponsor-card"
            href={partner.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Conocé a ${partner.name} (abre en una pestaña nueva)`}
          >
            <div className="sponsor-card-topline">
              <span>{partner.category ?? level}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="sponsor-logo">
              <span className="sponsor-logo-fallback" aria-hidden="true">
                {partner.mark ??
                  partner.name
                    .split(/\s+/)
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3)}
              </span>
              <img
                src={`https://cdn.simpleicons.org/${partner.slug}/${partner.color}`}
                alt=""
                loading="lazy"
                onLoad={(event) => {
                  event.currentTarget.parentElement?.classList.add(
                    "sponsor-logo-loaded",
                  );
                }}
              />
            </div>
            <strong>{partner.name}</strong>
            {className === "sponsor-tier-main" && (
              <p className="sponsor-card-description">{partner.description}</p>
            )}
            {partner.category && (
              <div className="sponsor-card-meta">
                <span>{partner.category}</span>
                <span>{partner.badge}</span>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Sponsors() {
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
    <>
      <section className="sponsors-section" id="sponsors" aria-labelledby="sponsors-title">
        <div className="sponsors-heading">
          <span className="etiqueta">QUIÉNES NOS ACOMPAÑAN</span>
          <h2 id="sponsors-title">
            Sponsors<span>.</span>
          </h2>
          <p>
            Las marcas que impulsan el talento y hacen crecer la comunidad
            tecnológica.
          </p>
        </div>

        {sponsors.map((group) => (
          <SponsorGroup key={group.tier} {...group} />
        ))}

        <a className="sponsor-join-link" href="#sumate-sponsor">
          Sumate como sponsor <span aria-hidden="true">↓</span>
        </a>
      </section>

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
            <span aria-hidden="true">↗</span> Enviar postulación de Sponsor
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
    </>
  );
}
