// src/components/Speakers.jsx
import { useRef, useState, useEffect } from "react";

const speakers = [
  {
    name: "Tomás Escudero",
    tag: "Diseño para developers",
    desc: "Qué mira un equipo de diseño antes de que escribas código y cómo leer un mockup para construirlo igual.",
    img: "/img/tomas-escudero.png",
  },
  {
    name: "Franco Díaz",
    tag: "De cero a tu primer proyecto",
    desc: "Un recorrido para pasar de mirar tutoriales a terminar una app simple con HTML, JavaScript y React.",
    img: "/img/franco-diaz.jpeg",
  },
  {
    name: "Gastón",
    tag: "Armá tu portfolio con IA",
    desc: "Cómo usar asistentes de IA para construir y publicar un portfolio que muestre lo que sabés hacer.",
    img: "/img/gaston.png",
  },
  {
    name: "Mauro",
    tag: "Git y GitHub sin miedo",
    desc: "Los comandos que vas a usar todos los días y cómo trabajar en equipo sin pisar el código de otros.",
    img: "/img/mauro.png",
  },
  {
    name: "José Díaz",
    tag: "Tu primer backend con Node",
    desc: "Cómo se arma una API, qué hace una base de datos y por dónde empezar para conectar todo.",
    img: "/img/jose-diaz.jpeg",
  },
  {
    name: "Tomás Gómez",
    tag: "Prepárate para tu primera entrevista",
    desc: "Qué preguntan en una entrevista técnica, cómo practicar y cómo contar tus proyectos con claridad.",
    img: "/img/tomas-gomez.jpeg",
  },
  {
    name: "Pablo Basso",
    tag: "Mi primer trabajo en IT",
    desc: "Una charla en primera persona sobre cómo se consigue el primer puesto y qué se aprende en los primeros meses.",
    img: "/img/pablo-basso.jpeg",
  },
  {
    name: "Julián Martín",
    tag: "Testing: cómo no romper todo",
    desc: "Qué es testear, por qué importa y cómo escribir tus primeras pruebas sin complicarte.",
    img: "/img/julian-martin.png",
  },
  {
    name: "Daniela Cardozo",
    tag: "Tu primer día como developer",
    desc: "Qué esperar de tu primera semana en un equipo, qué herramientas usar y cómo pedir ayuda sin miedo.",
    img: "/img/daniela-cardozo.jpeg",
  },
  {
    name: "Andrés Perlo",
    tag: "Tu primera base de datos",
    desc: "Qué es una base de datos, para qué sirve y cómo guardar y consultar tus primeros datos.",
    img: "/img/andres-perlo.jpeg",
  },
];

/* ---------- Tarjeta: siempre muestra nombre, tag y descripción ---------- */

function SpeakerCard({ name, tag, desc, img, variant = "grid" }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl bg-[#141414] ring-1 ring-white/10 transition hover:ring-[#e01b24]/40 ${
        variant === "carousel"
          ? "w-[78%] shrink-0 snap-center sm:w-[46%] md:w-[31%]"
          : "w-full"
      }`}
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-[#1f1f1f]">
        {img ? (
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-600">
            Sin foto
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-3.5 sm:gap-3 sm:p-4">
        <h3 className="text-base font-bold text-white transition-colors duration-200 group-hover:text-[#e01b24] sm:text-lg">
          {name}
        </h3>

        <span className="w-fit rounded-md bg-[#2a2a2a] px-2.5 py-1 text-xs font-semibold text-white sm:px-3 sm:py-1.5 sm:text-sm">
          {tag}
        </span>

        <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
          {desc}
        </p>
      </div>
    </article>
  );
}

/* ---------- Flecha circular ---------- */

function ArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === -1 ? "Anterior" : "Siguiente"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition hover:border-[#e01b24] hover:text-[#e01b24] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white sm:h-11 sm:w-11"
    >
      <svg
        className="h-4 w-4 sm:h-5 sm:w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={direction === -1 ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}

/* ---------- Carrusel (mobile y tablet) ---------- */

function SpeakersCarousel() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateState = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft >= maxScroll - 4);

    const card = track.firstElementChild;
    if (!card) return;
    const step = card.offsetWidth + 16;
    const index = Math.round(track.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), speakers.length - 1));
  };

  useEffect(() => {
    updateState();
    window.addEventListener("resize", updateState);
    return () => window.removeEventListener("resize", updateState);
  }, []);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const amount = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const goTo = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#e01b24] sm:text-sm">
            Speakers
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            Diez charlas,
            <br />
            un mismo objetivo
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Usá las flechas o desplazate para conocer a los oradores
          </p>
        </div>

        <div className="flex gap-2">
          <ArrowButton
            direction={-1}
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
          />
          <ArrowButton
            direction={1}
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
          />
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateState}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {speakers.map((s) => (
          <SpeakerCard key={s.name} {...s} variant="carousel" />
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {speakers.map((s, i) => (
          <button
            key={s.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir al speaker ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-[#e01b24]" : "w-1.5 bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Sección ---------- */

export default function Speakers() {
  return (
    <section id="speakers" className="bg-transparent px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <SpeakersCarousel />
      </div>
    </section>
  );
}
