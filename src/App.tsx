import './App.css'
import { LandingPage } from './Votivo/landingPage/landingPage.tsx'
import { Navbar } from './Votivo/Navbar/Navbar.tsx'
import { Login } from './Votivo/Login/Login.tsx'
import { SignUp } from './Votivo/SignUp/SignUp.tsx'
import { useEffect, useState } from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
