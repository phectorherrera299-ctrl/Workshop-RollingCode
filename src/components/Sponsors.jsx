import { useState } from "react";
import { sponsors } from "../data/sponsors";

const grids = {
  main: "grid-cols-2 sm:grid-cols-3 [&>*:last-child]:col-span-full sm:[&>*:last-child]:col-span-1",
  gold: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  bronze: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7",
};

function SponsorCard({ partner, level, destacado }) {
  const [cargado, setCargado] = useState(false);

  const marca =
    partner.mark ??
    partner.name
      .split(/\s+/)
      .map((palabra) => palabra[0])
      .join("")
      .slice(0, 3);

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Conocé a ${partner.name} (abre en una pestaña nueva)`}
      className={`flex min-w-0 flex-col items-center rounded-rc-option border border-rc-border bg-rc-surface p-4 text-center transition duration-200 hover:-translate-y-1 hover:border-rc-red/75 focus-visible:-translate-y-1 focus-visible:border-rc-red/75 focus-visible:outline-none ${
        destacado ? "" : "min-h-[132px] justify-center"
      }`}
    >
      {destacado && (
        <p className="w-full text-xs font-extrabold uppercase tracking-wider text-rc-text-mute">
          {partner.category ?? level}
        </p>
      )}

      <div
        className={`relative grid h-[58px] w-16 shrink-0 place-items-center ${
          destacado ? "mb-2 mt-3" : "mb-2"
        }`}
      >
        <span
          aria-hidden="true"
          className={`text-base font-extrabold tracking-tight text-white ${
            cargado ? "invisible" : ""
          }`}
        >
          {marca}
        </span>
        <img
          src={`https://cdn.simpleicons.org/${partner.slug}/${partner.color}`}
          alt=""
          loading="lazy"
          onLoad={() => setCargado(true)}
          className={`absolute inset-0 m-auto h-9 w-9 object-contain ${
            cargado ? "visible" : "invisible"
          }`}
        />
      </div>

      <strong className="text-base font-extrabold leading-tight">
        {partner.name}
      </strong>

      {destacado && (
        <p className="mt-2 text-sm text-rc-text-mute">{partner.description}</p>
      )}

      {partner.category && (
        <div className="mt-3 flex w-full justify-between gap-2 text-xs text-rc-text-mute">
          <span>{partner.category}</span>
          <span className="text-right text-rc-text-soft">{partner.badge}</span>
        </div>
      )}
    </a>
  );
}

function SponsorGroup({ id, tier, level, partners }) {
  const destacado = id === "main";

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-3 uppercase">
        <h3 className="text-base font-extrabold tracking-[3px] text-rc-red">
          {tier}
        </h3>
        <span className="rounded-full border border-rc-chip px-3 py-1 text-xs font-extrabold tracking-wider text-rc-text-soft">
          {level}
        </span>
      </div>

      {destacado && (
        <p className="mt-1.5 text-sm text-rc-text-mute">
          Empresas líderes que hacen posible este encuentro.
        </p>
      )}

      <div className={`mt-4 grid gap-6 ${grids[id]}`}>
        {partners.map((partner) => (
          <SponsorCard
            key={partner.name}
            partner={partner}
            level={level}
            destacado={destacado}
          />
        ))}
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" aria-labelledby="sponsors-title">
      <div className="mx-auto mb-8 max-w-[680px] text-center">
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
        className="mx-auto mt-8 flex min-h-[52px] w-fit items-center justify-center gap-3 rounded-full border border-rc-red/50 bg-rc-red/10 px-6 text-lg font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-rc-red/20"
      >
        Sumate como sponsor <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}