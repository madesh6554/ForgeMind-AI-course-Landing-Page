import { useIsMobile } from '../hooks/useIsMobile'

const BoltIcon = () => (
  <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
    <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer style={{ padding: isMobile ? '36px 0 24px' : '48px 0 32px', borderTop: '1px solid var(--bdr)' }}>
      <div className="ctr">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between', alignItems: 'flex-start',
          gap: isMobile ? 28 : 40, flexWrap: 'wrap', marginBottom: 28,
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <div>
            <a href="https://forgemind.in" className="logo">
              <div className="logo-i"><BoltIcon /></div>
              ForgeMind<span>AI</span>
            </a>
            <p style={{ fontSize: 14, color: 'var(--t2)', marginTop: 12, maxWidth: 280, lineHeight: 1.6 }}>
              Meet customers where they are — on WhatsApp. Intelligent automation for modern businesses.
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px',
              background: 'var(--grng)', border: '1px solid rgba(34,197,94,.15)',
              borderRadius: 100, fontSize: 12, color: 'var(--grn)', fontWeight: 500, marginTop: 16
            }}>
              <CheckIcon /> Verified Meta Tech Provider ✓
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>Company</h4>
            {[
              { label: 'Contact', href: 'mailto:contact@forgemind.in' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'WhatsApp', href: 'https://wa.me/919342245724' },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                display: 'block', fontSize: 14, color: 'var(--t2)', textDecoration: 'none',
                padding: '4px 0', transition: '.2s'
              }}
                onMouseEnter={e => e.target.style.color='var(--t)'}
                onMouseLeave={e => e.target.style.color='var(--t2)'}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: 20, borderTop: '1px solid var(--bdr)', fontSize: 13, color: 'var(--t3)' }}>
          © 2026 ForgeMind AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
