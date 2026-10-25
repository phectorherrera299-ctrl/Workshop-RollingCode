import Container from './components/Container'
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <h1 className='text-4xl'>Hola mundo</h1>
        </Container>
      </main>
    </>
  )
}

export default App
