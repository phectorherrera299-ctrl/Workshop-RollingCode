import { ArrowDown, ArrowUpRight, CalendarDays, Clock3, Code2, MapPin, Ticket } from "lucide-react";
import { speakers } from "../data/speakers";
import "../hero.css";

export default function PublicidadWorkshop() {
  return <section id="inicio" className="workshop-hero" aria-labelledby="workshop-title">
    <div className="hero-grid-texture" aria-hidden="true" />
    <div className="hero-editorial">
      <div className="hero-kicker"><span className="hero-kicker-dot" /><span>ROLLINGCODE / WORKSHOP</span><span className="hero-limited">ENTRADAS LIMITADAS</span></div>
      <h1 id="workshop-title">¿Por dónde<br />empiezo a<br /><span>programar<span className="hero-question">?</span></span></h1>
      <p className="hero-description">Una tarde con diez speakers de Rolling Code School para ordenar tus primeros pasos: qué aprender, cómo practicar y cómo mostrar lo que sabés.</p>
      <div className="hero-actions"><a href="#entradas" className="hero-primary">Comprar entrada <ArrowUpRight size={19} aria-hidden="true" /></a><a href="#agenda" className="hero-secondary">Explorar la agenda <ArrowDown size={17} aria-hidden="true" /></a></div>
      <div className="hero-people"><div className="hero-avatars" aria-hidden="true">{speakers.slice(0,4).map(speaker => <span key={speaker.name}><img src={`${import.meta.env.BASE_URL}${speaker.img}`} alt="" loading="lazy" /></span>)}</div><div><strong>10 voces. Un nuevo comienzo.</strong><span>Charlas, ideas y conexiones con el mundo IT.</span></div></div>
    </div>
    <div className="hero-ticket-wrap">
      <div className="hero-floating-code" aria-hidden="true"><Code2 size={16} /><span>tu_futuro.start()</span><span className="hero-code-cursor">_</span></div>
      <article className="hero-event-ticket" aria-label="Información del workshop">
        <div className="hero-ticket-photo"><img src={`${import.meta.env.BASE_URL}img/school/site2.webp`} alt="Espacios de RollingCode School" fetchPriority="high" /><div className="hero-photo-shade" /><span className="hero-ticket-edition">PRESENCIAL + VIRTUAL</span><div className="hero-ticket-date"><time dateTime="2026-11-19"><span>19</span><span>NOV<br /><strong>2026</strong></span></time><span className="hero-ticket-day">JUEVES<Clock3 size={13} aria-hidden="true" />18.00 HS</span></div></div>
        <div className="hero-ticket-info"><div className="hero-ticket-location"><span className="hero-ticket-icon"><MapPin size={19} aria-hidden="true" /></span><div><h2>Rolling Code School</h2><p>Gral. Paz 576, Entrepiso</p><span>San Miguel de Tucumán</span></div><ArrowUpRight size={20} aria-hidden="true" /></div><div className="hero-ticket-divider" aria-hidden="true" /><div className="hero-ticket-bottom"><div><span className="hero-ticket-price-label"><Ticket size={14} aria-hidden="true" /> ENTRADAS DESDE</span><p>$15.000<span>ARS</span></p><span className="hero-ticket-early">Early Bird hasta el 31/10</span></div><div className="hero-ticket-stamp"><CalendarDays size={22} aria-hidden="true" /><span>GUARDÁ<br />LA FECHA</span></div></div><div className="hero-ticket-foot"><span>RC / WORKSHOP / 2026</span><span className="hero-barcode" aria-hidden="true" /></div></div>
      </article>
      <div className="hero-ticket-note"><span>01</span><span>El primer paso es estar.</span><ArrowUpRight size={16} aria-hidden="true" /></div>
    </div>
  </section>;
}
