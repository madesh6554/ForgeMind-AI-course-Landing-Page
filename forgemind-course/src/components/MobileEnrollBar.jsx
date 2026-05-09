import { useState, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const WA_URL = 'https://wa.me/919342245724?text=Hi!%20I%20want%20to%20buy%20the%20N8N%20%2B%20WhatsApp%20Combo%20Course%20%E2%82%B94%2C999'

export default function MobileEnrollBar() {
  const isMobile = useIsMobile()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!isMobile) return

    let heroVisible = true
    let pricingReached = false  // stays true once pricing is seen; resets only when hero is back

    const update = () => setShow(!heroVisible && !pricingReached)

    const heroEl    = document.getElementById('hero-section')
    const pricingEl = document.getElementById('pricing')
    if (!heroEl || !pricingEl) return

    const heroObs = new IntersectionObserver(([e]) => {
      heroVisible = e.isIntersecting
      if (heroVisible) pricingReached = false  // back at top — allow bar to show again next scroll
      update()
    }, { threshold: 0 })

    const pricingObs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        pricingReached = true  // pricing in view — hide bar
      } else if (e.boundingClientRect.y > 0) {
        pricingReached = false  // pricing exited from the bottom = scrolling back up past it — show bar again
      }
      // if boundingClientRect.y < 0: pricing exited from top = scrolled past it going down — stay hidden
      update()
    }, { threshold: 0.05 })

    heroObs.observe(heroEl)
    pricingObs.observe(pricingEl)

    return () => {
      heroObs.disconnect()
      pricingObs.disconnect()
    }
  }, [isMobile])

  if (!isMobile) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 150,
      transform: show ? 'translateY(0)' : 'translateY(105%)',
      transition: show
        ? 'transform 0.42s cubic-bezier(0.16,1,0.3,1)'
        : 'transform 0.32s cubic-bezier(0.4,0,1,1)',
      background: 'rgba(12,12,18,0.97)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderTop: '1px solid rgba(255,255,255,0.09)',
      padding: '12px 16px 22px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      boxShadow: '0 -4px 32px rgba(0,0,0,0.5)',
    }}>
      <div>
        <div style={{
          fontSize: 9, fontWeight: 600, letterSpacing: '0.13em',
          color: 'var(--t3)', textTransform: 'uppercase', marginBottom: 4,
        }}>
          Prerecorded · Lifetime Access
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 7 }}>
          <span style={{
            fontSize: 22, fontWeight: 800, color: '#fff',
            fontFamily: "'JetBrains Mono', monospace", letterSpacing: -0.5,
          }}>₹4,999</span>
          <span style={{ fontSize: 13, color: 'var(--t3)', textDecoration: 'line-through' }}>₹7,999</span>
        </div>
      </div>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flexShrink: 0,
          padding: '11px 22px',
          background: 'var(--red)',
          color: '#fff',
          borderRadius: 10,
          fontSize: 14,
          fontWeight: 700,
          fontFamily: 'inherit',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          boxShadow: '0 4px 16px rgba(229,9,20,0.35)',
        }}
      >
        Buy Now
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>
  )
}
