import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Amenities from './pages/Amenities'
import Testimonials from './pages/Testimonials'
import Faq from './pages/Faq'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Services/>}/>
        <Route path='/' element={<Amenities/>}/>
        <Route path='/' element={<Testimonials/>}/>
        <Route path='/' element={<Faq/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
