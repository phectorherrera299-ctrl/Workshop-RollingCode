import Entradas from "./components/Entradas";
import Container from "./components/Container";
import Contador from "./components/Contador";
import NotFound from "./pages/NotFound";
import Speakers from "./pages/Speakers";
import Navbar from "./components/navbar";
import PublicidadWorkshop from "./PublicidadWorkshop";
import { Ubicacion } from "./Ubicacion";
import { Footer } from './components/Footer'
import { Ubicacion } from './Ubicacion'


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <PublicidadWorkshop />
          <Speakers />
          <Contador />
          <NotFound />
          <Speakers />
          <Entradas />
          <Ubicacion />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
