import { Ubicacion } from './Ubicacion'
import Container from "./components/Container";
import Contador from "./components/Contador";
import NotFound from "./pages/NotFound";
import Speakers from "./pages/Speakers";
import Navbar from "./components/navbar";
import { Footer } from './components/Footer'



function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
      <main>
        <Container>
          <Contador />
          <NotFound />
          <Speakers />
          <Ubicacion/>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
