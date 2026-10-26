import { Ubicacion } from './Ubicacion'
import Container from "./components/Container";
import Contador from "./components/Contador";
import NotFound from "./pages/NotFound";
import Speakers from "./pages/Speakers";
import Navbar from "./components/navbar";
import { Footer } from './components/Footer'
import PublicidadWorkshop from "./PublicidadWorkshop";
import Agenda from "./Agenda.jsx";

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
          <Agenda />
          <Contador />
          <NotFound />
          <Ubicacion/>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
