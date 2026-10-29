import './App.css'
import { Home } from './Votivo/Home/Home.tsx'
// import { CardsHome } from '../src/Votivo/CardsHome/CardsHome.tsx'
import { Navbar } from '../src/Votivo/Navbar/Navbar.tsx'
import { useEffect, useState } from "react"
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)

  }, [])
  if (loading) {
    return (
      <div className="loader">
        <h1>Preparing your experience...</h1>
      </div>
    )
  }
  return (
    <>
      <Navbar />
      {/* <CardsHome /> */}
      <Home />
    </>
  )
}

export default App
