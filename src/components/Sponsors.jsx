import useEnPantalla from "./hooks/useEnPantalla";

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

function SponsorGroup({ tier, level, className, partners }) {
  const [groupRef, visible] = useEnPantalla(0.08);

  return (
    <div
      ref={groupRef}
      className={`sponsor-tier ${className} ${visible ? "is-visible" : ""}`}
    >
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
        {partners.map((partner, index) => (
          <a
            key={partner.name}
            className="sponsor-card"
            style={{ "--card-index": index }}
            href={partner.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Conocé a ${partner.name} (abre en una pestaña nueva)`}
          >
            <div className="sponsor-card-topline">
              <span>{partner.category ?? level}</span>
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
  return (
    <section
      className="sponsors-section"
      id="sponsors"
      aria-labelledby="sponsors-title"
    >
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
  );
}