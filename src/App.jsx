import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import FloorPlan from './components/FloorPlan'
import Gallery from './components/Gallery'
import Founder from './components/Founder'
import Footer from './components/Footer'
import { BrowserRouter, Router } from 'react-router-dom'

const App = () => {
  return (
    <>
  
    <Navbar />
    <HeroSection />
    <About />
    <Projects />
    <FloorPlan />
    <Gallery />
    <Founder />
    <Footer />
    
    </>
  )
}

export default App
