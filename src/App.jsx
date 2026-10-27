import Entradas from "./components/Entradas";
import Container from "./components/Container";
import Contador from "./components/Contador";
import NotFound from "./pages/NotFound";
import Speakers from "./pages/Speakers";
import Navbar from "./components/navbar";
import PublicidadWorkshop from "./PublicidadWorkshop";
import Checkout from "./components/Checkout";
import { Ubicacion } from "./Ubicacion";

import { useState } from "react";

function App() {
  const [entradaId, setEntradaId] = useState("early");
  const comprar = (id) => {
    setEntradaId(id);
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Container>
          <PublicidadWorkshop />
          <Speakers />
          <Contador />
          <NotFound />
          <Entradas onComprar={comprar}></Entradas>
          <Checkout entradaId={entradaId} setEntradaId={setEntradaId}></Checkout>
          <Ubicacion />
        </Container>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
