import { useEffect, useRef } from "react";
import { ArrowUpRight, Heart, X } from "lucide-react";
import { speakers } from "../data/speakers";
import "../favorites.css";

export function FavoriteList({ favoritos, onToggle, onSelect }) {
  const guardados = speakers.filter(s => favoritos.includes(s.name)).sort((a,b) => a.hora.localeCompare(b.hora));
  return guardados.length ? <ul className="favorite-list">{guardados.map(speaker => <li key={speaker.name}><button type="button" className="favorite-speaker" onClick={() => { onSelect?.(); window.dispatchEvent(new CustomEvent("abrir-speaker", {detail:speaker.name})); }}><span className="favorite-avatar"><span className={speaker.zoom || ""}><img src={`${import.meta.env.BASE_URL}${speaker.img}`} alt="" loading="lazy" /></span></span><span className="favorite-info"><strong>{speaker.name}</strong><span>{speaker.tag}</span><time>{speaker.hora} – {speaker.fin} hs</time></span><ArrowUpRight size={16} aria-hidden="true" /></button><button className="favorite-remove" type="button" aria-label={`Quitar de favoritos a ${speaker.name}`} onClick={() => onToggle(speaker.name)}><Heart size={17} fill="currentColor" aria-hidden="true" /></button></li>)}</ul> : <div className="favorites-empty"><Heart size={28} aria-hidden="true" /><p>Tus próximas charlas favoritas van acá.</p><a href="#speakers" onClick={onSelect}>Elegir speakers <ArrowUpRight size={16} /></a></div>;
}

export default function FavoriteSpeakers({ open, onClose, favoritos, onToggle }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const dialog = ref.current;
    const previo = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog.showModal(); document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; previo?.focus(); };
  }, [open]);
  return <dialog ref={ref} onCancel={onClose} onClick={event => { if(event.target === event.currentTarget) onClose(); }} className="favorites-dialog" aria-labelledby="favorites-title"><div className="favorites-dialog-header"><div><span>MI SELECCIÓN / {favoritos.length}</span><h2 id="favorites-title">Speakers favoritos<span>.</span></h2></div><button type="button" onClick={onClose} aria-label="Cerrar favoritos"><X size={22} /></button></div><FavoriteList favoritos={favoritos} onToggle={onToggle} onSelect={onClose} /></dialog>;
}
