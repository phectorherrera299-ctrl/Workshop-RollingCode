import Entradas from "./components/Entradas";
import Container from "./components/Container";
import Contador from "./components/Contador";
import Speakers from "./pages/Speakers";
import Navbar from "./components/Navbar";
import PublicidadWorkshop from "./PublicidadWorkshop";
import Checkout from "./components/Checkout";
import { Ubicacion } from "./Ubicacion";
import { Footer } from './components/Footer'
import Agenda from "./Agenda";

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
          <Entradas onComprar={comprar}></Entradas>
          <Checkout entradaId={entradaId} setEntradaId={setEntradaId}></Checkout>
          <Ubicacion />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
