
const speakers = [
  {
    name: "Tomas Escudero",
    tag: "Diseño para developers",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Qué mira un equipo de diseño antes de que escribas código y cómo leer un mockup para construirlo igual.",
    img: "",
  },
  {
    name: "Franco Díaz",
    tag: "De cero a tu primer proyecto",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Un recorrido para pasar de mirar tutoriales a terminar una app simple con HTML, JavaScript y React.",
    img: "",
  },
  {
    name: "Gaston",
    tag: "Armá tu portfolio con IA",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Cómo usar asistentes de IA para construir y publicar un portfolio que muestre lo que sabés hacer.",
    img: "",
  },
  {
    name: "Mauro",
    tag: "Git y GitHub sin miedo",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Los comandos que vas a usar todos los días y cómo trabajar en equipo sin pisar el código de otros.",
    img: "",
  },
  {
    name: "Jose Díaz",
    tag: "Tu primer backend con Node",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Cómo se arma una API, qué hace una base de datos y por dónde empezar para conectar todo.",
    img: "public/img/jose-diaz.jpeg",
  },
  {
    name: "Tomas Gomez",
    tag: "Prepárate para tu primera entrevista",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Qué preguntan en una entrevista técnica, cómo practicar y cómo contar tus proyectos con claridad.",
    img: "public/img/tomas-gomez.jpeg",
  },
  {
    name: "Pablo Basso",
    tag: "Mi primer trabajo en IT",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Una charla en primera persona sobre cómo se consigue el primer puesto y qué se aprende en los primeros meses.",
    img: "public/img/pablo-basso.jpeg",
  },
  {
    name: "Julian Martin",
    tag: "Testing: cómo no romper todo",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Qué es testear, por qué importa y cómo escribir tus primeras pruebas sin complicarte.",
    img: "",
  },
  {
    name: "Daniela Cardozo",
    tag: "Tu primer día como developer",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Qué esperar de tu primera semana en un equipo, qué herramientas usar y cómo pedir ayuda sin miedo.",
    img: "public/img/daniela-cardozo.jpeg",
  },
  {
    name: "Andres Perlo",
    tag: "Tu primera base de datos",
    tagColor: "bg-[#2a2a2a] text-white",
    desc: "Qué es una base de datos, para qué sirve y cómo guardar y consultar tus primeros datos.",
    img: "",
  },
];

function SpeakerCard({ name, tag, tagColor, desc, img }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-[#141414] ring-1 ring-white/10 transition hover:ring-[#e01b24]/40">
      {/* Imagen */}
      <div className="aspect-[4/5] w-full overflow-hidden bg-[#1f1f1f]">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-bold text-white transition-colors duration-200 group-hover:text-[#e01b24]">
          {name}
        </h3>
        <span
          className={`w-fit rounded-md px-3 py-1.5 text-sm font-semibold ${tagColor}`}
        >
          {tag}
        </span>
        <p className="text-sm leading-relaxed text-neutral-400">{desc}</p>
      </div>
    </article>
  );
}

export default function Speakers() {
  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-widest text-[#e01b24]">
          Speakers
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Diez charlas, un mismo objetivo
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {speakers.map((s) => (
            <SpeakerCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
