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
import BotonWhatsapp from "./components/BotonWhatsapp";
import ScrollReveal from "./components/ScrollReveal";
import ChatBot from "./components/ChatBot";

import { useState } from "react";

function App() {
  const [entradaId, setEntradaId] = useState("early");
  const comprar = (id) => {
    setEntradaId(id);
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-12 pb-24">
        <Container className="flex flex-col gap-24">
          <PublicidadWorkshop />
          <ScrollReveal><Contador /></ScrollReveal>
          <ScrollReveal><Speakers /></ScrollReveal>
          <ScrollReveal><Agenda /></ScrollReveal>
          <ScrollReveal><Sponsors /></ScrollReveal>
          <ScrollReveal><Entradas onComprar={comprar} /></ScrollReveal>
          <div className="-mt-10">
            <ScrollReveal>
              <Checkout entradaId={entradaId} setEntradaId={setEntradaId} />
            </ScrollReveal>
          </div>
          <ScrollReveal><SumateSponsor /></ScrollReveal>
          <ScrollReveal><Ubicacion /></ScrollReveal>
          <ChatBot></ChatBot>
        </Container>
      </main>
      <Footer />
      <BotonWhatsapp />
    </>
  );
}

export default App;