import Container from './components/Container'
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
      </main>
    </>
  )
}

export default App
