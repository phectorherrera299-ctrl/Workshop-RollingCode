import { useState } from "react";
import { ArrowUpRight, Code2, Eye, LayoutTemplate, MousePointer2, Palette, RotateCcw, Sparkles } from "lucide-react";

const formatos = [
  { nombre: "Portfolio", titulo: "Ideas que se convierten en código.", etiqueta: "DEVELOPER / CREATIVE", boton: "Ver proyectos", tarjetas: ["Mi primera app", "Diseño + código", "Una idea nueva"] },
  { nombre: "Producto", titulo: "Lo próximo empieza con una idea.", etiqueta: "DISEÑÁ. CREÁ. LANZÁ.", boton: "Descubrir más", tarjetas: ["Simple por fuera", "Potente por dentro", "Hecho por vos"] },
  { nombre: "Evento", titulo: "Una tarde. Muchas posibilidades.", etiqueta: "ROLLINGCODE / WORKSHOP", boton: "Quiero ser parte", tarjetas: ["Charlas", "Conexiones", "Nuevas ideas"] },
];
const colores = [{nombre:"Rojo Rolling", valor:"#e0202a"}, {nombre:"Violeta", valor:"#8b5cf6"}, {nombre:"Azul", valor:"#2563eb"}, {nombre:"Verde", valor:"#087f5b"}];

export default function CreativeLab() {
  const [formato, setFormato] = useState(0);
  const [color, setColor] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [codigo, setCodigo] = useState(false);
  const [seleccion, setSeleccion] = useState(0);
  const actual = formatos[formato];
  const texto = titulo.trim() || actual.titulo;
  const reiniciar = () => { setFormato(0); setColor(0); setTitulo(""); setCodigo(false); setSeleccion(0); };
  return <section id="laboratorio" aria-labelledby="lab-title" className="creative-lab">
    <div className="lab-heading"><h2 id="lab-title">Menos imaginar.<br /><span className="text-rc-red">Más crear.</span></h2></div>
    <div className="lab-workbench" style={{"--lab-accent": colores[color].valor}}>
      <aside className="lab-controls"><div className="lab-control-heading"><LayoutTemplate size={18} /><span>Tu próxima creación</span><button type="button" onClick={reiniciar} aria-label="Restablecer diseño" title="Restablecer diseño"><RotateCcw size={16} /></button></div>
        <fieldset><legend>01 / Elegí un formato</legend><div className="lab-formats">{formatos.map((item,i) => <button type="button" key={item.nombre} aria-pressed={formato === i} className={formato === i ? "active" : ""} onClick={() => { setFormato(i); setSeleccion(0); }}>{item.nombre}<ArrowUpRight size={14} /></button>)}</div></fieldset>
        <fieldset><legend>02 / Cambiá el acento</legend><div className="lab-swatches">{colores.map((item,i) => <button type="button" key={item.nombre} aria-label={item.nombre} aria-pressed={color === i} className={color === i ? "active" : ""} style={{background:item.valor}} onClick={() => setColor(i)}>{color === i && <Palette size={16} />}</button>)}</div></fieldset>
        <label className="lab-title-input">03 / Hacelo tuyo<input maxLength={65} value={titulo} onChange={event => setTitulo(event.target.value)} placeholder="Escribí tu propio título" /></label>
        <div className="lab-edit-note"><MousePointer2 size={16} /><span>Tocá los bloques de la vista previa.</span></div>
      </aside>
      <div className="lab-browser"><div className="lab-browser-bar"><span className="lab-browser-dots">● ● ●</span><span>tu-proxima-idea.dev</span><button type="button" aria-pressed={codigo} onClick={() => setCodigo(!codigo)}>{codigo ? <Eye size={16} /> : <Code2 size={16} />}{codigo ? "Vista previa" : "Ver código"}</button></div>
        {codigo ? <pre className="lab-code"><code>{`<section class="mi-idea">\n  <span>${actual.etiqueta}</span>\n  <h1>${texto.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</h1>\n  <button>${actual.boton}</button>\n</section>\n\n<style>\n  .mi-idea {\n    --acento: ${colores[color].valor};\n    background: #f7f7f2;\n    border-radius: 24px;\n  }\n  button { background: var(--acento); }\n</style>`}</code></pre> : <div className={`lab-preview lab-format-${formato}`}><div className="lab-preview-nav"><span><Code2 size={18} /> studio.</span><span>Ideas / Proyectos / Contacto</span></div><div className="lab-preview-hero" key={formato}><div><span className="lab-preview-eyebrow">{actual.etiqueta}</span><h3>{texto}</h3><a href="#entradas">{actual.boton}<ArrowUpRight size={16} /></a></div><div className="lab-sculpture" aria-hidden="true"><span /><span /><span /><Sparkles size={28} /></div></div><div className="lab-preview-cards">{actual.tarjetas.map((item,i) => <button type="button" key={item} aria-pressed={seleccion === i} className={seleccion === i ? "selected" : ""} onClick={() => setSeleccion(i)}><span className={`lab-mini-art art-${i}`} aria-hidden="true"><i /><i /><i /></span><span>{item}<ArrowUpRight size={14} /></span></button>)}</div><div className="lab-preview-status" role="status"><span>0{seleccion + 1} / {actual.tarjetas[seleccion]}</span><span>Creado por vos ↗</span></div></div>}
      </div>
    </div>
  </section>;
}
