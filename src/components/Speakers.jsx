import { useCallback, useEffect, useRef, useState } from "react";
import { Clock, Heart, MapPin, X } from "lucide-react";
import { speakers } from "../data/speakers";

const base = import.meta.env.BASE_URL;

function SpeakerPhoto({ name, img, zoom = "", className = "" }) {
  const [fallo, setFallo] = useState(false);

  return (
    <div className={`overflow-hidden bg-rc-surface-2 ${className}`}>
      {img && !fallo ? (
        <div className={`h-full w-full ${zoom}`}>
          <img
            src={`${base}${img}`}
            alt={name}
            loading="lazy"
            decoding="async"
            onError={() => setFallo(true)}
            className="h-full w-full object-cover object-top transition duration-300 motion-safe:group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-rc-text-mute">
          Sin foto
        </div>
      )}
    </div>
  );
}

function SpeakerCard({ speaker, onOpen, favorite, onToggleFavorite }) {
  const { name, tag, desc, img, zoom, hora } = speaker;

  return (
    <article className="group relative flex w-[78%] shrink-0 snap-center flex-col overflow-hidden rounded-rc-card border border-rc-border bg-rc-surface transition hover:border-rc-red/60 sm:w-[46%] md:w-[31%] lg:w-auto">
      <div className="relative">
        <SpeakerPhoto
          name={name}
          img={img}
          zoom={zoom}
          className="aspect-square w-full"
        />
        <span className="absolute left-3 top-3 rounded-full bg-rc-black/80 px-3 py-1 text-sm font-extrabold tabular-nums">
          {hora}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="min-h-[2.5em] text-[26px] font-extrabold leading-tight lg:text-[22px] xl:text-[26px]">
          {name}
        </h3>

        <span className="flex min-h-12 w-full items-center justify-center rounded-full bg-rc-red px-4 text-center text-sm font-semibold text-white">
          {tag}
        </span>

        <p className="text-sm text-rc-text-mute">{desc}</p>
      </div>

      <button
        type="button"
        onClick={() => onOpen(speaker)}
        aria-label={`Ver más sobre ${name}`}
        className="absolute inset-0 z-10 cursor-pointer rounded-rc-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rc-red"
      />
      <button
        type="button"
        onClick={() => onToggleFavorite(speaker.name)}
        aria-label={`${favorite ? "Quitar de" : "Agregar a"} mi agenda: ${name}`}
        aria-pressed={favorite}
        className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full bg-rc-black/80 text-white transition hover:bg-rc-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <Heart
          aria-hidden="true"
          className={`h-5 w-5 ${favorite ? "fill-rc-red text-rc-red" : ""}`}
        />
      </button>
    </article>
  );
}

function SpeakerModal({ speaker, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (speaker) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [speaker]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      aria-labelledby="speaker-modal-title"
      className="m-auto max-h-[90vh] w-[min(92vw,760px)] overflow-y-auto rounded-rc-card border border-rc-border bg-rc-surface p-0 text-white backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      {speaker && (
        <div className="relative p-5 sm:p-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-rc-chip bg-rc-surface text-white transition hover:border-rc-red hover:text-rc-red"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="md:grid md:grid-cols-[260px_1fr] md:items-start md:gap-8">
            <SpeakerPhoto
              name={speaker.name}
              img={speaker.img}
              zoom={speaker.zoom}
              className="mx-auto aspect-square w-40 rounded-rc-box md:mx-0 md:w-full"
            />

            <div className="mt-5 md:mt-0">
              <p className="mb-2 text-base font-extrabold uppercase tracking-[3px] text-rc-red">
                Jueves 19/11
              </p>

              <h2 id="speaker-modal-title" className="pr-12 text-3xl sm:text-4xl">
                {speaker.name}
              </h2>

              <span className="mt-4 inline-flex min-h-9 items-center rounded-full bg-rc-red px-4 py-1 text-sm font-semibold text-white">
                {speaker.tag}
              </span>

              <ul className="mt-5 flex flex-col gap-3 text-sm text-rc-text-soft">
                <li className="flex items-center gap-3">
                  <Clock aria-hidden="true" className="h-5 w-5 shrink-0 text-rc-red" />
                  {speaker.hora} a {speaker.fin} hs · 20 minutos
                </li>
                <li className="flex items-center gap-3">
                  <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-rc-red" />
                  Rolling Code School · Gral. Paz 576, Entrepiso
                </li>
              </ul>

              <p className="mt-5 text-base text-rc-text-soft">{speaker.detalle ?? speaker.desc}</p>

              <a
                href="#entradas"
                onClick={onClose}
                className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-rc-red px-7 text-lg font-extrabold text-white transition hover:bg-rc-red-dark"
              >
                Comprar entrada
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

function ArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === -1 ? "Anterior" : "Siguiente"}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rc-chip bg-rc-surface text-white transition hover:border-rc-red hover:text-rc-red disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-rc-chip disabled:hover:text-white"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
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

export default function Speakers({ favoritos, alternarFavorito }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [elegido, setElegido] = useState(null);
  const [soloFavoritos, setSoloFavoritos] = useState(false);

  const visibles = soloFavoritos ? speakers.filter(speaker => favoritos.includes(speaker.name)) : speakers;

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft >= maxScroll - 4);

    const card = track.firstElementChild;
    if (!card) return;
    const step = card.offsetWidth + 16;
    const index = Math.round(track.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), visibles.length - 1));
  }, [visibles.length]);

  useEffect(() => {
    updateState();
    window.addEventListener("resize", updateState);
    return () => window.removeEventListener("resize", updateState);
  }, [updateState]);

  useEffect(() => {
    const abrirDesdeAgenda = (event) => {
      const encontrado = speakers.find((s) => s.name === event.detail);
      if (encontrado) setElegido(encontrado);
    };

    window.addEventListener("abrir-speaker", abrirDesdeAgenda);
    return () => window.removeEventListener("abrir-speaker", abrirDesdeAgenda);
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
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section id="speakers" aria-labelledby="speakers-title">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-base font-extrabold uppercase tracking-[3px] text-rc-red">
            Speakers
          </p>
          <h2 id="speakers-title">Diez charlas, un mismo objetivo</h2>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-rc-text-mute">
            <p className="lg:hidden">Deslizá para conocer a los oradores</p>
            <button
              type="button"
              onClick={() => setSoloFavoritos((actual) => !actual)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-semibold transition ${
                soloFavoritos
                  ? "border-rc-red bg-rc-red text-white"
                  : "border-rc-chip hover:border-rc-red hover:text-white"
              }`}
            >
              <Heart className={`h-4 w-4 ${soloFavoritos ? "fill-white" : ""}`} />
              Mi agenda ({favoritos.length})
            </button>
          </div>
        </div>

        <div className="hidden gap-2 sm:flex lg:hidden">
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
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] motion-safe:scroll-smooth [&::-webkit-scrollbar]:hidden lg:grid lg:snap-none lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:pb-0"
      >
        {(soloFavoritos
          ? speakers.filter((speaker) => favoritos.includes(speaker.name))
          : speakers
        ).map((speaker) => (
          <SpeakerCard
            key={speaker.name}
            speaker={speaker}
            onOpen={setElegido}
            favorite={favoritos.includes(speaker.name)}
            onToggleFavorite={alternarFavorito}
          />
        ))}
      </div>

      {soloFavoritos && favoritos.length === 0 && (
        <p className="mt-6 rounded-rc-option border border-dashed border-rc-border p-5 text-center text-sm text-rc-text-mute">
          Todavía no guardaste charlas. Tocá el corazón de un speaker para armar tu agenda.
        </p>
      )}

      <div className="mt-3 flex justify-center gap-1 lg:hidden">
        {visibles.map((speaker, index) => (
          <button
            key={speaker.name}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Ir al speaker ${index + 1}`}
            aria-current={index === active}
            className="flex h-6 items-center px-0.5"
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${
                index === active ? "w-6 bg-rc-red" : "w-1.5 bg-rc-chip"
              }`}
            />
          </button>
        ))}
      </div>

      <SpeakerModal speaker={elegido} onClose={() => setElegido(null)} />
    </section>
  );
}
