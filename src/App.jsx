import Entradas from "./components/Entradas";
import Container from "./components/Container";
import Contador from "./components/Contador";
import NotFound from "./pages/NotFound";
import Speakers from "./pages/Speakers";
import Navbar from "./components/navbar";
import PublicidadWorkshop from "./PublicidadWorkshop";
import Checkout from './components/Checkout';
import { Ubicacion } from "./Ubicacion";


function App() {
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
          <Entradas></Entradas>
          <Checkout></Checkout>
          <Ubicacion/>
        </Container>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
