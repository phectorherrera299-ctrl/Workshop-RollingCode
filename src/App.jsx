import Entradas from "./components/Entradas";
import Container from "./components/Container";
import Contador from "./components/Contador";
import Speakers from "./components/Speakers";
import Navbar from "./components/Navbar";
import PublicidadWorkshop from "./components/PublicidadWorkshop";
import Checkout from "./components/Checkout";
import { Ubicacion } from "./components/Ubicacion";
import { Footer } from './components/Footer'
import Agenda from "./components/Agenda";
import Sponsors from "./components/Sponsors";

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
      <main className="landing-main mb-[19px]">
        <Container className="flex flex-col gap-[19px]">
          <PublicidadWorkshop />
          <Contador />
          <Speakers />
          <Agenda />  
          <Entradas onComprar={comprar} />
          <Checkout entradaId={entradaId} setEntradaId={setEntradaId} />
          <Sponsors />
          <Ubicacion />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
