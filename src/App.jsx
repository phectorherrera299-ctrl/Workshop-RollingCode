import Entradas from "./components/Entradas";
import Container from "./components/Container";
import Contador from "./components/Contador";
import Speakers from "./components/Speakers";
import Navbar from "./components/Navbar";
import PublicidadWorkshop from "./components/PublicidadWorkshop";
import Checkout from "./components/Checkout";
import { Ubicacion } from "./components/Ubicacion";
import { Footer } from "./components/Footer";
import Agenda from "./components/Agenda";
import Sponsors from "./components/Sponsors";
import SumateSponsor from "./components/SumateSponsor";
import ScrollReveal from "./components/ScrollReveal";
import ChatBot from "./components/ChatBot";
import ExperienceTools from "./components/ExperienceTools";
import Comunidad from "./components/Comunidad";
import SchoolGallery from "./components/SchoolGallery";
import { CUPO_PRESENCIAL, VENDIDAS_INICIALES } from "./data/cupo";

import { useEffect, useState } from "react";
import FavoriteSpeakers from "./components/FavoriteSpeakers";
import { speakers } from "./data/speakers";

function App() {
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const guardados = JSON.parse(localStorage.getItem("rolling-favoritos") || "[]");
      return Array.isArray(guardados) ? [...new Set(guardados)].filter(name => speakers.some(s => s.name === name)) : [];
    } catch { return []; }
  });
  const [verFavoritos, setVerFavoritos] = useState(false);
  const alternarFavorito = name => setFavoritos(prev => prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]);
  useEffect(() => {
    try { localStorage.setItem("rolling-favoritos", JSON.stringify(favoritos)); } catch { /* Los favoritos siguen disponibles durante la visita. */ }
  }, [favoritos]);
  const [cantidades, setCantidades] = useState({
    early: 0,
    general: 0,
    virtual: 0,
  });
  const [vendidas, setVendidas] = useState(VENDIDAS_INICIALES);

  const comprar = (id) => {
    setCantidades((previas) => ({
      ...previas,
      [id]: Math.max(previas[id], 1),
    }));
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  const registrarCompra = (presenciales) => {
    setVendidas((actuales) =>
      Math.min(actuales + presenciales, CUPO_PRESENCIAL),
    );
  };

  const reiniciarCupo = () => setVendidas(VENDIDAS_INICIALES);

  return (
    <div className="min-h-screen">
      <Navbar favoritos={favoritos} onOpenFavorites={() => setVerFavoritos(true)} />
      <main className="pt-12 pb-24">
        <Container className="flex flex-col gap-24">
          <PublicidadWorkshop />
          <SchoolGallery />
          <ScrollReveal><Contador /></ScrollReveal>
          <ScrollReveal><Speakers favoritos={favoritos} alternarFavorito={alternarFavorito} /></ScrollReveal>
          <ScrollReveal><Agenda favoritos={favoritos} onToggleFavorite={alternarFavorito} /></ScrollReveal>
          <ScrollReveal><Sponsors /></ScrollReveal>
          <ScrollReveal>
            <Entradas
              onComprar={comprar}
              vendidas={vendidas}
              onReiniciarCupo={reiniciarCupo}
            />
          </ScrollReveal>
          <div className="-mt-10">
            <ScrollReveal>
              <Checkout
                cantidades={cantidades}
                setCantidades={setCantidades}
                vendidas={vendidas}
                onCompraConfirmada={registrarCompra}
              />
            </ScrollReveal>
          </div>
          <Comunidad />
          <ScrollReveal><SumateSponsor /></ScrollReveal>
          <ScrollReveal><Ubicacion /></ScrollReveal>
          <ChatBot></ChatBot>
        </Container>
      </main>
      <Footer />
      <ExperienceTools />
      <FavoriteSpeakers open={verFavoritos} onClose={() => setVerFavoritos(false)} favoritos={favoritos} onToggle={alternarFavorito} />
    </div>
  );
}

export default App;
