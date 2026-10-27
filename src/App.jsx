import Entradas from "./components/Entradas";
import Container from "./components/Container";
import Contador from "./components/Contador";
import Speakers from "./pages/Speakers";
import Navbar from "./components/Navbar";
import PublicidadWorkshop from "./PublicidadWorkshop";
import { Ubicacion } from "./Ubicacion";
import { Footer } from './components/Footer'
import Agenda from "./Agenda";


function App() {
  return (
    <>
      <Navbar />
      <main className="landing-main mb-[19px]">
        <Container className="flex flex-col gap-[19px]">
          <PublicidadWorkshop />
          <Contador />
          <Speakers />
          <Agenda />  
          <Entradas />
          <Ubicacion />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
