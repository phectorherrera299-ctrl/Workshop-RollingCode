import { ArrowUpRight, MessageCircle, Play } from "lucide-react";

const historias = [
  { nombre:"Pía López", foto:"piaLopez.webp", rol:"Desarrolladora en La Nación", tema:"Aprender como se trabaja.", texto:"Pía destaca el aprendizaje práctico y la interacción entre docentes y estudiantes, cercana a la experiencia de un equipo profesional.", etiqueta:"DESARROLLO" },
  { nombre:"Farid Ale Ali", foto:"farid.webp", rol:"QA & Product Analyst", tema:"La curiosidad también es una habilidad.", texto:"Farid cuenta cómo su formación le ayudó a comprender un stack tecnológico y a analizar funcionalidades y detectar errores.", etiqueta:"QUALITY ASSURANCE" },
  { nombre:"Pamela Aguirre", foto:"pamelaAguirre.webp", rol:"Desarrolladora en Censys", tema:"El apoyo hace la diferencia.", texto:"Pamela valora la práctica y el acompañamiento para iniciar o complementar una formación en programación.", etiqueta:"DESARROLLO" },
  { nombre:"Mauricio Teruel", foto:"mauricioTeruel.webp", rol:"Developer en Buzz · Costa Rica", tema:"El código puede llevarte más lejos.", texto:"Mauricio resalta las clases prácticas y los consejos que le permitieron orientar sus conocimientos hacia el mundo laboral.", etiqueta:"TALENTO SIN FRONTERAS" },
];

export default function AlumniStories() {
  return <section className="alumni-section" aria-labelledby="comunidad-title">
    <div className="alumni-heading"><div><h2 id="comunidad-title">De Rolling<br /><span className="text-rc-red">al mundo.</span></h2><p className="section-description">Personas que empezaron con una inquietud y hoy comparten su experiencia en tecnología. Conocé sus historias.</p></div><a href="https://www.youtube.com/playlist?list=PLa0MKW7UhcxVOyoqc8THmk6GnljGx1_WT" target="_blank" rel="noreferrer"><Play size={16} /> Historias en primera persona<ArrowUpRight size={16} /><span className="sr-only"> (otra pestaña)</span></a></div>
    <div className="alumni-comments">{historias.map((persona, i) => <article className="alumni-comment" key={persona.nombre} style={{"--comment-delay":`${i * 70}ms`}}>
      <header><img src={`${import.meta.env.BASE_URL}img/school/${persona.foto}`} alt={persona.nombre} loading="lazy" width="52" height="52" /><div><h3>{persona.nombre}</h3><p>{persona.rol}</p></div><MessageCircle size={20} aria-hidden="true" /></header>
      <h4>{persona.tema}</h4><p className="alumni-comment-text">{persona.texto}</p>
      <footer><span><span /> {persona.etiqueta}</span><a href="https://rollingcodeschool.com/" target="_blank" rel="noreferrer" aria-label={`Conocer más sobre ${persona.nombre} en RollingCode`}>RollingCode <ArrowUpRight size={15} /><span className="sr-only"> (otra pestaña)</span></a></footer>
    </article>)}</div>
    <p className="alumni-credit">Experiencias compartidas en la web oficial de RollingCode School.</p>
  </section>;
}

