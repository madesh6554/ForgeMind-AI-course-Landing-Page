import { useState, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import MetaBadge from './MetaBadge'

export default function Navbar() {
  const isMobile = useIsMobile()
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setHeroVisible(e.isIntersecting),
      { threshold: 0.05 }
    )
    const hero = document.getElementById('hero-section')
    if (hero) obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  return (
    <nav style={{
      padding: '10px 0',
      background: 'rgba(10,10,15,0.55)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
    }}>
      <div className="ctr" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="https://forgemind.in" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src="/forgemind-logo.gif" alt="ForgeMind AI" style={{ height: 26, width: 'auto', objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.2 }}>
              ForgeMind<span style={{ color: 'var(--red)' }}>AI</span>
            </span>
            <div style={{ transform: 'scale(0.78)', transformOrigin: 'left center', marginTop: 1 }}>
              <MetaBadge size="xs" />
            </div>
          </div>
        </a>
        {/* Hide when hero scrolled past — sticky card / MobileEnrollBar takes over */}
        {heroVisible && (
          <a href="https://wa.me/919342245724?text=Hi!%20I%20want%20to%20enroll%20in%20the%20N8N%20%2B%20WhatsApp%20Combo%20Course%20%E2%82%B94%2C999" target="_blank" rel="noopener noreferrer" className="btn-p" style={{
            padding: isMobile ? '6px 14px' : '8px 20px',
            fontSize: isMobile ? 12 : 13, borderRadius: 7
          }}>
            {isMobile ? 'Enroll' : 'Enroll Now'}
          </a>
        )}
      </div>
    </nav>
  )
}
