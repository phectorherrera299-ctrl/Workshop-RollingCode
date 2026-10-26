import Container from "./components/Container";
import Contador from "./components/Contador";
import NotFound from "./pages/NotFound";
import Speakers from "./pages/Speakers";

function App() {
  return (
    <>
      <main>
        <Container>
          <Contador />
          <NotFound />
          <Speakers />
        </Container>
      </main>
    </>
  );
}

export default App;
