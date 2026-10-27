import Entradas from "./components/Entradas";
import Container from "./components/Container";
import Contador from "./components/Contador";
import Speakers from "./pages/Speakers";
import Navbar from "./components/Navbar";
import PublicidadWorkshop from "./PublicidadWorkshop";
import Checkout from "./components/Checkout";
import { Ubicacion } from "./Ubicacion";
import { Footer } from "./components/Footer";
import Agenda from "./Agenda";
import Sponsors from "./components/Sponsors";
import ScrollReveal from "./components/ScrollReveal";
import SumateSponsor from "./components/SumateComoSponsor";

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
      <main className="landing-main">
        <Container className="flex flex-col gap-[19px]">
          <PublicidadWorkshop />
          <ScrollReveal><Contador /></ScrollReveal>
          <ScrollReveal><Speakers /></ScrollReveal>
          <ScrollReveal><Agenda /></ScrollReveal>
          <ScrollReveal><Sponsors /></ScrollReveal>
          <ScrollReveal><Entradas onComprar={comprar} /></ScrollReveal>
          <ScrollReveal><Checkout entradaId={entradaId} setEntradaId={setEntradaId} /></ScrollReveal>
          <ScrollReveal><SumateSponsor></SumateSponsor></ScrollReveal>
          <ScrollReveal><Ubicacion /></ScrollReveal>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
