import { useState, useSyncExternalStore } from "react";
import { ArrowRight, ArrowUpRight, MessageCircle, Search } from "lucide-react";
import { preguntas } from "../data/chatBot";
import ScrollReveal from "./ScrollReveal";
import CreativeLab from "./CreativeLab";
import AlumniStories from "./AlumniStories";
import "../experience.css";
import "../playground.css";

const faqs = [
  { label: "¿Necesito saber programar?", answer: "El workshop está pensado para orientar tus primeros pasos: qué aprender, cómo practicar y cómo mostrar lo que sabés. Explorá la agenda para conocer cada charla.", categoria: "El evento" },
  ...preguntas.filter(p => ["Fecha y lugar", "Presencial o virtual", "Cómo comprar mi entrada", "Precios"].includes(p.label)).map(p => ({ ...p, categoria: ["Precios", "Cómo comprar mi entrada"].includes(p.label) ? "Entradas" : "El evento" })),
  { label: "¿Cómo puedo seguir aprendiendo después?", answer: "Explorá las carreras, cursos y actividades de RollingCode School en su web oficial. Consultá con la institución las propuestas y los beneficios disponibles.", categoria: "La School" },
  { label: "¿RollingCode tiene una comunidad de estudiantes?", answer: "Sí. La School ofrece canales privados de Slack para conectar con otros estudiantes, compartir experiencias y hacer networking.", categoria: "La School" },
  { label: "¿Hay talleres y actividades adicionales?", answer: "RollingCode ofrece talleres y workshops exclusivos para profundizar habilidades técnicas y blandas. Consultá con la School las próximas actividades y sus condiciones de acceso.", categoria: "La School" },
  { label: "¿La School tiene vínculos con empresas?", answer: "Sí. Mediante convenios de colaboración, RollingCode recomienda a sus alumnos destacados en empresas. Esto no implica una garantía de empleo.", categoria: "La School" },
  { label: "¿Dónde puedo conocer experiencias de egresados?", answer: "En “De Rolling al mundo” encontrás experiencias de egresados. También podés ver sus historias en la playlist de YouTube enlazada en esa sección y en la web oficial de la School.", categoria: "La School" },
  { label: "¿Hay beneficios fuera de las clases?", answer: "La web oficial publica descuentos en RC GYM y en cursos de inglés de ATICANA. Consultá directamente con la School la vigencia, los requisitos y cómo acceder.", categoria: "La School" },
  { label: "¿Cómo consulto sobre carreras y cursos?", answer: "Visitá rollingcodeschool.com para explorar la oferta o abrí la página de contacto desde “¿Hablamos?”. También podés escribir a academy@rollingcodeschool.com.", categoria: "La School" },
  { label: "¿Puedo guardar mis charlas favoritas?", answer: "Sí. Tocá el corazón de los speakers que te interesan. Tu selección aparece debajo del botón de calendario y en el corazón del menú, y queda guardada en este navegador.", categoria: "El evento" },
  { label: "¿Cómo agrego el evento a mi calendario?", answer: "En la sección Agenda, tocá “Agregar al calendario”. Se abrirá Google Calendar con los datos del workshop para que puedas guardarlo en tu cuenta.", categoria: "El evento" },
];
const normalizar = valor => valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const consultaMovil = "(max-width: 767px)";
const escucharPantalla = callback => {
  const media = window.matchMedia(consultaMovil);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
const esMovil = () => window.matchMedia(consultaMovil).matches;
const pantallaInicial = () => false;

export default function Comunidad() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [abierta, setAbierta] = useState(null);
  const [pagina, setPagina] = useState(1);
  const movil = useSyncExternalStore(escucharPantalla, esMovil, pantallaInicial);
  const cantidadInicial = movil ? 3 : 4;
  const resultados = faqs.filter(p => (categoria === "Todas" || p.categoria === categoria) && normalizar(`${p.label} ${p.answer}`).includes(normalizar(busqueda)));
  const visibles = resultados.slice(0, pagina * cantidadInicial);
  return <>
    <ScrollReveal><CreativeLab /></ScrollReveal>
    <ScrollReveal><AlumniStories /></ScrollReveal>
    <ScrollReveal><section id="preguntas" aria-labelledby="faq-title" className="questions-section">
      <div className="questions-intro"><h2 id="faq-title">Antes de<br /><span className="text-rc-red">sumarte.</span></h2><p className="section-description">Todo sobre el workshop, las entradas y la comunidad de RollingCode, en un solo lugar.</p><a className="questions-contact" href="https://rollingcodeschool.com/contact" target="_blank" rel="noreferrer"><MessageCircle size={28} className="text-rc-red" aria-hidden="true" /><h3>¿Hablamos?</h3><span className="contact-action">Escribinos <ArrowUpRight size={18} /></span><span className="sr-only"> (abre la página de contacto en otra pestaña)</span></a></div>
      <div className="questions-browser"><label className="questions-search"><Search size={20} aria-hidden="true" /><span className="sr-only">Buscar preguntas frecuentes</span><input type="text" inputMode="search" value={busqueda} onChange={event => { setBusqueda(event.target.value); setAbierta(null); setPagina(1); }} placeholder="¿Qué querés saber?" /></label><div className="questions-filters" role="group" aria-label="Filtrar preguntas por tema">{["Todas", "El evento", "Entradas", "La School"].map(tema => <button type="button" key={tema} aria-pressed={categoria === tema} onClick={() => { setCategoria(tema); setAbierta(null); setPagina(1); }} className={categoria === tema ? "active" : ""}>{tema}</button>)}</div><p className="questions-count" role="status">Mostrando {visibles.length} de {resultados.length} respuestas</p><div className="questions-results">{visibles.map((pregunta, i) => <article key={pregunta.label} className={`question-card ${abierta === pregunta.label ? "open" : ""}`}><h3><button type="button" aria-expanded={abierta === pregunta.label} aria-controls={`respuesta-${faqs.indexOf(pregunta)}`} onClick={() => setAbierta(abierta === pregunta.label ? null : pregunta.label)}><span className="question-number">0{i + 1}</span><span>{pregunta.label}</span><span className="question-plus" aria-hidden="true">+</span></button></h3><div className="question-answer" inert={abierta !== pregunta.label} id={`respuesta-${faqs.indexOf(pregunta)}`}><div><p>{pregunta.answer}</p>{pregunta.categoria === "Entradas" && <a href="#entradas">Ver entradas <ArrowRight size={16} /></a>}</div></div></article>)}{resultados.length === 0 && <div className="questions-empty"><Search size={32} aria-hidden="true" /><h3>No encontramos esa pregunta.</h3><p>Probá con “fecha”, “virtual” o “entrada”.</p><button type="button" onClick={() => { setBusqueda(""); setCategoria("Todas"); }}>Ver todas las preguntas</button></div>}</div>{resultados.length > cantidadInicial && <button type="button" className="questions-show-more" onClick={() => { if (visibles.length < resultados.length) { setPagina(prev => prev + 1); } else { setPagina(1); setAbierta(null); document.getElementById("preguntas")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }); } }}>{visibles.length < resultados.length ? "Ver más preguntas" : "Ver menos preguntas"}<span aria-hidden="true">{visibles.length < resultados.length ? "+" : "−"}</span></button>}</div>
    </section></ScrollReveal>
  </>;
}
