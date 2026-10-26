import { Footer } from './components/Footer'
import { Ubicacion } from './Ubicacion'
import Container from './components/Container'
import Contador from './components/Contador'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Speakers from './pages/Speakers'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Contador />
          <NotFound />
          <Speakers />
          <Ubicacion />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
