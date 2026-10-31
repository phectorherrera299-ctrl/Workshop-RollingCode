import {
  SiGooglecloud,
  SiMercadopago,
  SiAuth0,
  SiPostman,
} from "react-icons/si";
import {
  FaAws,
  FaGithub,
  FaDigitalOcean,
  FaCloudflare,
  FaDocker,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { BsStripe } from "react-icons/bs";
import { Award, CreditCard, Cpu, Gem, Medal, Server } from "lucide-react";
import { sponsors } from "../data/sponsors";

const base = import.meta.env.BASE_URL;

const ACENTO_BASE = "#e0202a";

const imagenes = {
  globant: "img/sponsors/globant.png",
};

const logos = {
  googlecloud: { Icon: SiGooglecloud, color: "#4285F4", acento: "#EA4335", Meta: Cpu },
  amazonaws: { Icon: FaAws, color: "#FF9900", acento: "#FF9900", Meta: Server },
  mercadolibre: { Icon: SiMercadopago, color: "#FFE600", acento: "#FFE600", Meta: CreditCard },
  microsoft: { Icon: VscAzure, color: "#0078D4" },
  github: { Icon: FaGithub, color: "#FFFFFF" },
  auth0: { Icon: SiAuth0, color: "#EB5424" },
  vercel: { Icon: IoLogoVercel, color: "#FFFFFF" },
  supabase: { Icon: RiSupabaseFill, color: "#3FCF8E" },
  digitalocean: { Icon: FaDigitalOcean, color: "#0080FF" },
  cloudflare: { Icon: FaCloudflare, color: "#F38020" },
  mongodb: { Icon: DiMongodb, color: "#47A248" },
  docker: { Icon: FaDocker, color: "#2496ED" },
  stripe: { Icon: BsStripe, color: "#635BFF" },
  postman: { Icon: SiPostman, color: "#FF6C37" },
};

const variantes = {
  main: {
    Icono: Gem,
    grid: "grid-cols-1 md:grid-cols-3",
    caja: "h-16 w-16",
    glifo: "h-9 w-9",
  },
  gold: {
    Icono: Award,
    grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    caja: "h-14 w-14",
    glifo: "h-8 w-8",
  },
  bronze: {
    Icono: Medal,
    grid: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7",
    caja: "h-12 w-12",
    glifo: "h-6 w-6",
  },
};

function Logo({ partner, caja, glifo }) {
  const logo = logos[partner.slug];
  const imagen = imagenes[partner.slug];

  const marca =
    partner.mark ??
    partner.name
      .split(/\s+/)
      .map((palabra) => palabra[0])
      .join("")
      .slice(0, 3);

  return (
    <div
      className={`grid shrink-0 place-items-center rounded-rc-field border border-rc-border bg-rc-black ${caja}`}
    >
      {logo ? (
        <logo.Icon
          aria-hidden="true"
          className={glifo}
          style={{ color: logo.color }}
        />
      ) : imagen ? (
        <img
          src={`${base}${imagen}`}
          alt=""
          loading="lazy"
          className={`${glifo} object-contain`}
        />
      ) : (
        <span
          aria-hidden="true"
          className="text-xl font-extrabold tracking-tight text-white"
        >
          {marca}
        </span>
      )}
    </div>
  );
}

function TarjetaPrincipal({ partner, caja, glifo }) {
  const logo = logos[partner.slug];
  const acento = logo?.acento ?? ACENTO_BASE;
  const Meta = logo?.Meta;

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Conocé a ${partner.name} (abre en una pestaña nueva)`}
      style={{ borderColor: acento }}
      className="flex min-w-0 flex-col rounded-rc-box border-2 bg-rc-surface p-6 transition duration-200 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none"
    >
      <span
        style={{
          color: acento,
          borderColor: `${acento}66`,
          backgroundColor: `${acento}1a`,
        }}
        className="self-start rounded-full border px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider"
      >
        {partner.rol}
      </span>

      <div className="mt-6 flex justify-center">
        <Logo partner={partner} caja={caja} glifo={glifo} />
      </div>

      <strong className="mt-5 text-center text-[26px] font-extrabold leading-tight">
        {partner.name}
      </strong>

      <p className="mt-3 text-center text-sm text-rc-text-mute">
        {partner.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-xs">
        <span className="flex items-center gap-2 text-rc-text-mute">
          {Meta && <Meta className="h-4 w-4 shrink-0" aria-hidden="true" />}
          {partner.category}
        </span>
        <span className="text-right font-extrabold" style={{ color: acento }}>
          {partner.badge}
        </span>
      </div>
    </a>
  );
}

function TarjetaCompacta({ partner, caja, glifo, bronce }) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Conocé a ${partner.name} (abre en una pestaña nueva)`}
      className="flex min-w-0 flex-col items-center rounded-rc-option border border-rc-border bg-rc-surface p-4 text-center transition duration-200 hover:-translate-y-1 hover:border-rc-red/75 focus-visible:-translate-y-1 focus-visible:border-rc-red/75 focus-visible:outline-none"
    >
      <Logo partner={partner} caja={caja} glifo={glifo} />

      <strong
        className={`mt-3 font-extrabold leading-tight ${
          bronce ? "text-sm" : "text-base"
        }`}
      >
        {partner.name}
      </strong>

      <span className="mt-1 text-xs text-rc-text-mute">{partner.sub}</span>

      {partner.pill && (
        <span className="mt-auto rounded-full border border-rc-chip px-3 py-1 text-[11px] font-extrabold text-rc-text-soft">
          {partner.pill}
        </span>
      )}
    </a>
  );
}

function SponsorGroup({ id, tier, level, intro, partners }) {
  const { Icono, grid, caja, glifo } = variantes[id];

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center gap-3 uppercase">
        <span className="grid h-9 w-9 place-items-center rounded-rc-field border border-rc-border bg-rc-surface text-rc-red">
          <Icono className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-extrabold tracking-[3px] text-rc-red">
          {tier}
        </h3>
        <span className="rounded-full border border-rc-chip px-3 py-1 text-xs font-extrabold tracking-wider text-rc-text-soft">
          {level}
        </span>
      </div>

      <p className="mt-2 text-sm text-rc-text-mute">{intro}</p>

      <div className={`mt-5 grid gap-6 ${grid}`}>
        {partners.map((partner) =>
          id === "main" ? (
            <TarjetaPrincipal
              key={partner.name}
              partner={partner}
              caja={caja}
              glifo={glifo}
            />
          ) : (
            <TarjetaCompacta
              key={partner.name}
              partner={partner}
              caja={caja}
              glifo={glifo}
              bronce={id === "bronze"}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" aria-labelledby="sponsors-title">
      <div className="mx-auto mb-2 max-w-[680px] text-center">
        <p className="mb-3 text-base font-extrabold uppercase tracking-[3px] text-rc-red">
          Quiénes nos acompañan
        </p>
        <h2 id="sponsors-title">
          Sponsors<span className="text-rc-red">.</span>
        </h2>
        <p className="mx-auto mt-3.5 text-base text-rc-text-mute">
          Las marcas que impulsan el talento y hacen crecer la comunidad
          tecnológica.
        </p>
      </div>

      {sponsors.map((group) => (
        <SponsorGroup key={group.id} {...group} />
      ))}

      <a
        href="#sumate-sponsor"
        className="mx-auto mt-10 flex min-h-[52px] w-fit items-center justify-center gap-3 rounded-full border border-rc-red/50 bg-rc-red/10 px-6 text-lg font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-rc-red/20"
      >
        Sumate como sponsor <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}