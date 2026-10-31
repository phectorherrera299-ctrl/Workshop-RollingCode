import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";

const fotos = [
  { archivo: "site1.webp", titulo: "Ideas que encuentran su lugar", detalle: "Un espacio para compartir, conectar y aprender." },
  { archivo: "site2.webp", titulo: "Acá empieza tu próximo paso", detalle: "Conocé los espacios de RollingCode School." },
  { archivo: "site3.webp", titulo: "Mucho más que una pantalla", detalle: "Descubrí la School desde adentro." },
];
const imagen = foto => `${import.meta.env.BASE_URL}img/school/${foto.archivo}`;

export default function SchoolGallery() {
  const [actual, setActual] = useState(null);
  const seccion = useRef(null);
  const dialogo = useRef(null);
  const cerrar = useRef(null);
  const abierto = actual !== null;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    const mover = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!seccion.current) return;
        const rect = seccion.current.getBoundingClientRect();
        const avance = Math.max(-1, Math.min(1, (window.innerHeight / 2 - rect.top) / window.innerHeight));
        seccion.current.style.setProperty("--gallery-scroll", media.matches ? "0px" : `${avance * 100}px`);
      });
    };
    mover();
    window.addEventListener("scroll", mover, { passive: true });
    return () => { window.removeEventListener("scroll", mover); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const nodo = dialogo.current;
    const overflow = document.body.style.overflow;
    nodo.showModal();
    document.body.style.overflow = "hidden";
    return () => { nodo.close(); document.body.style.overflow = overflow; cerrar.current?.focus(); };
  }, [abierto]);

  const cambiar = delta => setActual(valor => (valor + delta + fotos.length) % fotos.length);
  return (
    <section ref={seccion} className="school-gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading"><div><p className="section-eyebrow">ASÍ SE VIVE ROLLINGCODE</p><h2 id="gallery-title">Tu próxima idea<br /><span className="text-rc-red">necesita un lugar.</span></h2></div><p>Un vistazo a la School.<br />Explorá los espacios, imaginá lo que viene.</p></div>
      <div className={`gallery-viewport ${actual !== null ? "is-paused" : ""}`}>
        <div className="gallery-parallax"><div className="gallery-track">
          {[0, 1].map(copia => <div className="gallery-group" key={copia} aria-hidden={copia === 1 ? true : undefined}>{fotos.map((foto, i) => <button type="button" tabIndex={copia === 1 ? -1 : 0} key={foto.archivo} className="gallery-window" onClick={event => { cerrar.current = event.currentTarget; setActual(i); }} aria-label={`Ampliar foto: ${foto.titulo}`}><span className="window-chrome"><span className="window-dots">● ● ●</span><span>rollingcode.school / espacios</span><Expand size={14} aria-hidden="true" /></span><img src={imagen(foto)} alt={`Instalaciones de RollingCode School, vista ${i + 1}`} fetchPriority={i === 0 ? "high" : "auto"} /><span className="window-caption"><span>{foto.titulo}</span><ArrowRight size={18} aria-hidden="true" /></span></button>)}</div>)}
        </div></div>
      </div>
      <dialog ref={dialogo} className="gallery-dialog" aria-labelledby="photo-title" onCancel={() => setActual(null)} onClick={event => { if (event.target === event.currentTarget) setActual(null); }} onKeyDown={event => { if (event.key === "ArrowRight") cambiar(1); if (event.key === "ArrowLeft") cambiar(-1); }}>
        {actual !== null && <div className="gallery-dialog-content"><button type="button" autoFocus className="photo-close" aria-label="Cerrar foto" onClick={() => setActual(null)}><X /></button><img src={imagen(fotos[actual])} alt={`Instalaciones de RollingCode School, vista ${actual + 1}`} /><div className="photo-footer"><div><h3 id="photo-title">{fotos[actual].titulo}</h3><p>{fotos[actual].detalle}</p></div><div className="photo-nav"><button type="button" onClick={() => cambiar(-1)} aria-label="Foto anterior"><ArrowLeft /></button><span>{actual + 1} / {fotos.length}</span><button type="button" onClick={() => cambiar(1)} aria-label="Foto siguiente"><ArrowRight /></button></div></div></div>}
      </dialog>
    </section>
  );
}
