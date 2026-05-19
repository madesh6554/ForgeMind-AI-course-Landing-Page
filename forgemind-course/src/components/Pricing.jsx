import { useIsMobile } from '../hooks/useIsMobile'

const priceDets = [
  { icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, text: '18 Modules (n8n + WhatsApp)' },
  { icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>, text: 'Language: Tamil' },
  { icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>, text: 'Lifetime Access' },
  { icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>, text: 'Prerecorded Course' },
  { icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>, text: 'Live Q&A Sessions' },
]


export default function Pricing() {
  const isMobile = useIsMobile()

  return (
    <section id="pricing" className="rv" style={{ position: 'relative', borderBottom: '1px solid var(--bdr)', padding: isMobile ? '52px 0' : '96px 0' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, background: 'radial-gradient(circle,var(--rg),transparent 70%)', pointerEvents: 'none'
      }}/>
      <div className="ctr">

        {/* ── Shared layout: centered single column ── */}
        <div style={{ textAlign: 'center' }}>
          <div className="shc">
            <div className="slbl">Pricing</div>
            <div className="stl">One combo. Lifetime access.</div>
            <div className="sdsc">Get both courses at a bundled price — save ₹800.</div>
          </div>
          <PriceCard isMobile={isMobile} />
          <IndividualCards isMobile={isMobile} />
        </div>

      </div>
    </section>
  )
}

function PriceCard({ isMobile }) {
  return (
    <div style={{
      maxWidth: isMobile ? 440 : 520,
      margin: '40px auto 0',
      padding: isMobile ? '28px 20px' : '36px 32px',
      background: 'var(--bg3)',
      border: '1px solid rgba(229,9,20,0.2)',
      borderRadius: 18, position: 'relative', textAlign: 'center',
      boxShadow: '0 0 0 1px rgba(229,9,20,0.06), 0 24px 60px rgba(0,0,0,0.4)',
    }}>
      <div style={{ fontSize: 13, color: 'var(--t3)', marginBottom: 10 }}>One-time payment</div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: isMobile ? 40 : 48, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: -2 }}>₹4,999</span>
        <span style={{ fontSize: 18, color: 'var(--t3)', textDecoration: 'line-through' }}>₹5,999</span>
      </div>
      <div style={{ fontSize: 12, color: 'var(--t3)', marginBottom: 22 }}>Use code FORGE26 for extra ₹150 off</div>

      <a href="https://wa.me/919342245724?text=Hi!%20I%20want%20to%20buy%20the%20N8N%20%2B%20WhatsApp%20Combo%20Course%20%E2%82%B94%2C999" target="_blank" rel="noopener noreferrer" style={{
        width: '100%', padding: isMobile ? 14 : 16, background: 'var(--red)', color: '#fff', border: 'none',
        borderRadius: 12, fontFamily: 'inherit', fontSize: isMobile ? 15 : 17, fontWeight: 600,
        cursor: 'pointer', transition: '.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        textDecoration: 'none', boxSizing: 'border-box'
      }}
        onMouseEnter={e => { e.currentTarget.style.background='var(--red2)'; e.currentTarget.style.transform='translateY(-1px)' }}
        onMouseLeave={e => { e.currentTarget.style.background='var(--red)'; e.currentTarget.style.transform='' }}
      >
        Buy Now
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>

      <div style={{ marginTop: 20 }}>
        {[0, 2].map(rowStart => (
          <div key={rowStart} style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
            {priceDets.slice(rowStart, rowStart + 2).map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--t2)', flex: 1 }}>
                <span style={{ color: 'var(--red2)', flexShrink: 0 }}>{d.icon}</span>
                <span>{d.text}</span>
              </div>
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--t2)' }}>
            <span style={{ color: 'var(--red2)', flexShrink: 0 }}>{priceDets[4].icon}</span>
            <span>{priceDets[4].text}</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 18, fontSize: 12, color: 'var(--t3)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        Secure payment · Instant access after enrollment
      </div>
    </div>
  )
}

function IndividualCards({ isMobile }) {
  return (
    <div style={{ maxWidth: 520, margin: '36px auto 0', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
        <div style={{ flex: 1, height: 1, background: 'var(--bdr)' }}/>
        <span style={{ fontSize: 11, color: 'var(--t3)', letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap', fontWeight: 500 }}>or buy individually</span>
        <div style={{ flex: 1, height: 1, background: 'var(--bdr)' }}/>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
        {[
          { name: 'n8n Starter Course', sub: '10 modules · Complete automation foundation', price: '₹1,999', old: '₹2,999', color: 'var(--red)', btn: 'Buy n8n Course →', wa: 'https://wa.me/919342245724?text=Hi!%20I%20want%20to%20buy%20the%20N8N%20Starter%20Course%20%E2%82%B91%2C999' },
          { name: 'WhatsApp AI Automation', sub: '8 modules · Production-ready WhatsApp bots', price: '₹3,999', old: '₹4,999', color: 'var(--wa)', btn: 'Buy WhatsApp Course →', wa: 'https://wa.me/919342245724?text=Hi!%20I%20want%20to%20buy%20the%20WhatsApp%20AI%20Automation%20Course%20%E2%82%B93%2C999' },
        ].map((c, i) => (
          <div key={i} style={{
            padding: '16px 18px', background: 'var(--bg3)',
            border: '1px solid var(--bdr)', borderRadius: 12, textAlign: 'left', transition: 'border-color .2s'
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor='var(--bdr2)'}
            onMouseLeave={e => e.currentTarget.style.borderColor='var(--bdr)'}
          >
            <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.color, flexShrink: 0 }}/>
              {c.name}
            </h4>
            <div style={{ fontSize: 11, color: 'var(--t3)', marginBottom: 10 }}>{c.sub}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 10 }}>
              <span style={{ fontSize: 20, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace" }}>{c.price}</span>
              <span style={{ fontSize: 12, color: 'var(--t3)', textDecoration: 'line-through' }}>{c.old}</span>
            </div>
            <a href={c.wa} target="_blank" rel="noopener noreferrer" style={{
              width: '100%', padding: '8px', background: 'transparent', color: 'var(--t2)',
              border: '1px solid var(--bdr)', borderRadius: 8, fontFamily: 'inherit',
              fontSize: 12, fontWeight: 600, cursor: 'pointer', textDecoration: 'none',
              display: 'block', textAlign: 'center', transition: '.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--bdr2)'; e.currentTarget.style.color='var(--t)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--bdr)'; e.currentTarget.style.color='var(--t2)' }}
            >{c.btn}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
