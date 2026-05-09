import { useEffect, useRef } from 'react'
import './index.css'

import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatsAppCarousel from './components/WhatsAppCarousel'
import About from './components/About'
import BuildWithUs from './components/BuildWithUs'
import WhatYouGet from './components/WhatYouGet'
import KeyTakeaways from './components/KeyTakeaways'
import Modules from './components/Modules'
import Certificate from './components/Certificate'
import WhoIsItFor from './components/WhoIsItFor'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('v') }),
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <div style={{ minHeight: '100vh' }}>
      <TopBar />
      <Navbar />
      <Hero />
      <WhatsAppCarousel />
      <About />
      <BuildWithUs />
      <WhatYouGet />
      <KeyTakeaways />
      <Modules />
      <Certificate />
      <WhoIsItFor />
      <Reviews />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
