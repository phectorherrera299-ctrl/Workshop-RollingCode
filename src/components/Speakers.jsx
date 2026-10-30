import { useEffect, useRef, useState } from "react";
import { speakers } from "../data/speakers";

const base = import.meta.env.BASE_URL;

function SpeakerCard({ name, tag, desc, img, zoom = "" }) {
  return (
    <article className="group flex w-[78%] shrink-0 snap-center flex-col overflow-hidden rounded-rc-card border border-rc-border bg-rc-surface transition hover:border-rc-red/100 sm:w-[46%] md:w-[31%] lg:w-auto">
      <div className="aspect-square w-full overflow-hidden bg-rc-surface-2">
        {img ? (
          <div className={`h-full w-full ${zoom}`}>
            <img
              src={`${base}${img}`}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-rc-text-mute">
            Sin foto
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="min-h-[2.5em] text-[26px] font-extrabold leading-tight lg:text-[22px] xl:text-[26px]">
          {name}
        </h3>
        <div className="min-h-12">
          <span className="flex min-h-12 w-full items-center justify-center rounded-full bg-rc-red px-4 text-center text-sm font-semibold text-white">
            {tag}
          </span>
        </div>
        <p className="text-sm text-rc-text-mute">{desc}</p>
      </div>
    </article>
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

export default function Speakers() {
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
          <p className="mt-3 text-sm text-rc-text-mute lg:hidden">
            Deslizá para conocer a los oradores
          </p>
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
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:snap-none lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:pb-0"
      >
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} {...speaker} />
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-1.5 lg:hidden">
        {speakers.map((speaker, index) => (
          <button
            key={speaker.name}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Ir al speaker ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              index === active ? "w-6 bg-rc-red" : "w-1.5 bg-rc-chip"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
