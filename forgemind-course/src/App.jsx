import { useEffect, useRef } from 'react'
import './index.css'
import { useIsMobile } from './hooks/useIsMobile'

import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatsAppCarousel from './components/WhatsAppCarousel'
import About from './components/About'
import BuildWithUs from './components/BuildWithUs'
import WhatYouGet from './components/WhatYouGet'
import Modules from './components/Modules'
import Certificate from './components/Certificate'
import WhoIsItFor from './components/WhoIsItFor'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ToolsStrip from './components/ToolsStrip'
import MobileEnrollBar from './components/MobileEnrollBar'
import StickyEnrollCard from './components/StickyEnrollCard'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('v') }),
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))

    const header = document.getElementById('site-header')
    const spacer = document.getElementById('header-spacer')
    if (header && spacer) {
      const ro = new ResizeObserver(() => {
        spacer.style.height = header.offsetHeight + 'px'
      })
      ro.observe(header)
      spacer.style.height = header.offsetHeight + 'px'
      return () => { obs.disconnect(); ro.disconnect() }
    }

    return () => obs.disconnect()
  }, [])
}

export default function App() {
  useReveal()
  const isMobile = useIsMobile()

  return (
    <div style={{ minHeight: '100vh' }}>
      <header id="site-header" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <Navbar />
      </header>
      <div id="header-spacer" style={{ height: 'var(--header-h, 56px)' }} />
      <TopBar />
      <Hero />                  {/* 1. Hook */}
      <div id="tools-strip"><ToolsStrip /></div>  {/* 2. Tools (credibility) */}
      <WhatsAppCarousel />      {/* 3. Why WhatsApp — establish the opportunity */}
      <WhoIsItFor />            {/* 4. Is this for me? — qualify early */}
      <About />                 {/* 5. What are the courses */}
      <WhatYouGet />            {/* 6. What's included */}
      <BuildWithUs />           {/* 7. Bonus projects — sweetener */}
      <Modules />               {/* 8. Full curriculum — for detail-seekers */}
      <Certificate />           {/* 9. Credibility */}
      <Reviews />               {/* 10. Social proof */}
      <Pricing />               {/* 11. Convert */}
      <FAQ />                   {/* 12. Handle objections */}
      <FinalCTA />              {/* 13. Final push */}
      <Footer />

      {/* Floating WhatsApp chat icon — lifted on mobile so it clears the enroll bar */}
      <a
        href="https://wa.me/919342245724?text=Hi!%20I%20have%20a%20question%20about%20the%20course"
        target="_blank" rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: isMobile ? 88 : 24, right: isMobile ? 16 : 24, zIndex: 200,
          width: 54, height: 54, borderRadius: '50%',
          background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,.45)',
          transition: 'transform .2s, box-shadow .2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform='scale(1.1)'; e.currentTarget.style.boxShadow='0 6px 28px rgba(37,211,102,.6)' }}
        onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 4px 20px rgba(37,211,102,.45)' }}
        title="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <MobileEnrollBar />
      {!isMobile && <StickyEnrollCard />}
    </div>
  )
}
