import { useIsMobile } from '../hooks/useIsMobile'

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
            {/* Brand + Meta Business Partner side-by-side */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
              <a href="https://forgemind.in" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                <img src="/forgemind-logo.gif" alt="ForgeMind AI" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-.04em' }}>
                  ForgeMind<span style={{ color: 'var(--red)' }}>AI</span>
                </span>
              </a>
              <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
              <img
                src="/logos/mbp-badge-dark.png"
                alt="Meta Business Partner"
                style={{ height: 52, width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p style={{ fontSize: 14, color: 'var(--t2)', marginTop: 12, maxWidth: 280, lineHeight: 1.6 }}>
              Meet customers where they are — on WhatsApp. Intelligent automation for modern businesses.
            </p>
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
