import Container from './components/Container'
import Entradas from './components/Entradas';
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Speakers from "./pages/Speakers";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <NotFound />
        <Speakers />
        <Entradas />
      </main>
    </>
  )
}

export default App
