import './App.css'
import { ButtonsHome } from '../src/Votivo/ButtonsHome/ButtonsHome.tsx'
import { CardsHome } from '../src/Votivo/CardsHome/CardsHome.tsx'
import { Navbar } from '../src/Votivo/Navbar/Navbar.tsx'
function App() {
  return (
    <>
      <Navbar />
      <CardsHome />
      <ButtonsHome />
    </>
  )
}

export default App
