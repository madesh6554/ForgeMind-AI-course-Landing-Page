import { useState, useEffect } from 'react'

export default function StickyEnrollCard() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let heroVisible = true
    let pricingReached = false

    const update = () => setVisible(!heroVisible && !pricingReached)

    const heroObs = new IntersectionObserver(
      ([e]) => { heroVisible = e.isIntersecting; update() },
      { threshold: 0.05 }
    )
    // Once pricing enters viewport, permanently hide the card (even after pricing scrolls away)
    const pricingObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) pricingReached = true
        // Reset only if pricing is below viewport again (user scrolled back up past it)
        else if (e.boundingClientRect.top > 0) pricingReached = false
        update()
      },
      { threshold: 0 }
    )

    const hero = document.getElementById('hero-section')
    const pricing = document.getElementById('pricing')
    if (hero) heroObs.observe(hero)
    if (pricing) pricingObs.observe(pricing)

    return () => { heroObs.disconnect(); pricingObs.disconnect() }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      right: visible ? 28 : -320,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 150,
      width: 260,
      background: 'var(--bg3)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 16,
      padding: '22px 20px',
      boxShadow: '0 8px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(229,9,20,0.08)',
      transition: 'right 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      {/* Label */}
      <div style={{ fontSize: 11, color: 'var(--t3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10, fontFamily: "'JetBrains Mono',monospace" }}>
        One-time payment
      </div>

      {/* Price */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
        <span style={{ fontSize: 30, fontWeight: 700, color: '#fff', fontFamily: "'JetBrains Mono',monospace", letterSpacing: -1 }}>₹4,999</span>
        <span style={{ fontSize: 14, color: 'var(--t3)', textDecoration: 'line-through' }}>₹7,999</span>
      </div>
      <div style={{ fontSize: 11, color: 'var(--t3)', marginBottom: 16 }}>Code FORGE26 → extra ₹150 off</div>

      {/* CTA */}
      <a
        href="https://wa.me/919342245724?text=Hi!%20I%20want%20to%20buy%20the%20N8N%20%2B%20WhatsApp%20Combo%20Course%20%E2%82%B94%2C999"
        target="_blank" rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          width: '100%', padding: '11px 0', borderRadius: 9,
          background: 'var(--red)', color: '#fff',
          fontWeight: 700, fontSize: 14, textDecoration: 'none',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--red2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--red)'}
      >
        Enroll Now
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--bdr)', margin: '16px 0' }} />

      {/* Features */}
      {[
        { icon: <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, text: '18 Modules' },
        { icon: <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>, text: 'Language: Tamil' },
        { icon: <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: 'Lifetime Access' },
        { icon: <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>, text: 'Prerecorded Course' },
      ].map((f, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, color: 'var(--t2)', fontSize: 12 }}>
          <span style={{ color: 'var(--red)', flexShrink: 0 }}>{f.icon}</span>
          {f.text}
        </div>
      ))}

      {/* Secure note */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 12, color: 'var(--t3)', fontSize: 11 }}>
        <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
        </svg>
        Secure payment
      </div>
    </div>
  )
}
