import Entradas from './components/Entradas';
import Container from "./components/Container";
import Contador from "./components/Contador";
import NotFound from "./pages/NotFound";
import Speakers from "./pages/Speakers";
import Navbar from "./components/navbar";

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
          <Entradas></Entradas>
        </Container>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
