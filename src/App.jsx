import { Ubicacion } from './Ubicacion'
import Container from "./components/Container";
import Contador from "./components/Contador";
import NotFound from "./pages/NotFound";
import Speakers from "./pages/Speakers";
import Navbar from "./components/navbar";

import PublicidadWorkshop from "./PublicidadWorkshop";


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
          <Ubicacion/>
        </Container>
      </main>
      
    </>
  );
}

export default App;
