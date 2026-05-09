import { useEffect, useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import MetaBadge from './MetaBadge'

export default function Navbar() {
  const navRef = useRef(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handler = () => {
      if (navRef.current)
        navRef.current.style.borderBottomColor = window.scrollY > 10 ? 'var(--bdr)' : 'transparent'
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav ref={navRef} style={{
      position: 'sticky', top: 0, zIndex: 100, padding: '14px 0',
      background: 'rgba(11,11,15,.85)', backdropFilter: 'blur(24px)',
      borderBottom: '1px solid transparent', transition: 'border-color .2s'
    }}>
      <div className="ctr" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="https://forgemind.in" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src="/forgemind-logo.gif" alt="ForgeMind AI" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.2 }}>
              ForgeMind<span style={{ color: 'var(--red)' }}>AI</span>
            </span>
            <div style={{ transform: 'scale(0.82)', transformOrigin: 'left center', marginTop: 2 }}>
              <MetaBadge size="xs" />
            </div>
          </div>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 16 }}>
          <a href="https://wa.me/919342245724?text=Hi!%20I%20want%20to%20enroll%20in%20the%20N8N%20%2B%20WhatsApp%20Combo%20Course%20%E2%82%B94%2C999" target="_blank" rel="noopener noreferrer" className="btn-p" style={{
            padding: isMobile ? '8px 16px' : '10px 24px',
            fontSize: isMobile ? 13 : 14, borderRadius: 8
          }}>
            {isMobile ? 'Enroll' : 'Enroll Now'}
          </a>
        </div>
      </div>
    </nav>
  )
}
