import { useIsMobile } from '../hooks/useIsMobile'

const BoltIcon = () => (
  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
    <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/>
  </svg>
)

export default function Certificate() {
  const isMobile = useIsMobile()

  return (
    <section className="rv" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)', padding: isMobile ? '52px 0' : '88px 0' }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">Certification</div>
          <div className="stl">Get certified upon completion</div>
          <div className="sdsc">Finish the course and receive a professional certificate from ForgeMind AI.</div>
        </div>
        <div style={{ maxWidth: 660, margin: '0 auto', position: 'relative' }}>
          <div style={{
            background: '#fefdf8', borderRadius: 6,
            padding: isMobile ? '24px 14px' : '48px 56px',
            textAlign: 'center', boxShadow: '0 8px 60px rgba(0,0,0,.5)',
            overflow: 'hidden', position: 'relative', color: '#1a1a1a'
          }}>
            {/* Watermarks */}
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                position: 'absolute', left: '50%',
                top: i === 0 ? '50%' : i === 1 ? '22%' : '78%',
                transform: 'translate(-50%,-50%) rotate(-25deg)',
                fontSize: isMobile ? (i === 0 ? 36 : 24) : (i === 0 ? 64 : 42),
                fontWeight: 700,
                color: i === 0 ? 'rgba(220,38,38,.06)' : 'rgba(220,38,38,.04)',
                letterSpacing: i === 0 ? 6 : 4, textTransform: 'uppercase',
                pointerEvents: 'none', whiteSpace: 'nowrap',
                fontFamily: "'JetBrains Mono',monospace", zIndex: 1
              }}>SAMPLE</div>
            ))}

            <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 3, padding: '3px 10px', background: '#DC2626', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', borderRadius: 3 }}>SAMPLE</div>

            <div style={{ position: 'absolute', top: 14, right: 14, zIndex: 3 }}>
              <div style={{ width: isMobile ? 36 : 52, height: isMobile ? 36 : 52, borderRadius: '50%', border: '2px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(212,175,55,.06)' }}>
                <svg width={isMobile ? 16 : 22} height={isMobile ? 16 : 22} fill="none" stroke="#d4af37" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 15l-3.5 2.1 1-4-3.2-2.7 4.1-.3L12 6.5l1.6 3.6 4.1.3-3.2 2.7 1 4z"/>
                </svg>
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 2, border: '3px double #d4af37', padding: isMobile ? '20px 12px' : '36px 32px', borderRadius: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
                <div style={{ width: 28, height: 28, background: '#DC2626', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BoltIcon />
                </div>
                <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color: '#1a1a1a' }}>ForgeMind<span style={{ color: '#DC2626' }}>AI</span></div>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', background: 'rgba(34,197,94,.08)', border: '1px solid rgba(34,197,94,.15)', borderRadius: 100, fontSize: 8, color: '#16a34a', fontWeight: 500, marginBottom: 12 }}>
                <svg width="10" height="10" fill="none" stroke="#16a34a" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Verified Meta Tech Provider
              </div>

              <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg,transparent,#d4af37,transparent)', margin: '8px auto' }}/>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#999', marginBottom: 2 }}>Certificate of Completion</div>
              <div style={{ fontSize: isMobile ? 18 : 26, fontWeight: 700, color: '#1a1a1a', letterSpacing: -.5, marginBottom: 10 }}>Business Automation Mastery</div>
              <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg,transparent,#d4af37,transparent)', margin: '8px auto' }}/>
              <div style={{ fontSize: 10, color: '#999', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>This is proudly awarded to</div>
              <div style={{ fontSize: isMobile ? 20 : 30, fontWeight: 700, color: '#DC2626', fontStyle: 'italic', marginBottom: 4, padding: '6px 0', borderBottom: '2px solid #d4af37', display: 'inline-block', minWidth: isMobile ? 160 : 260 }}>&lt; Your Name &gt;</div>
              <div style={{ fontSize: 10, color: '#999', marginTop: 10, marginBottom: 4, letterSpacing: 1, textTransform: 'uppercase' }}>For successfully completing</div>
              <div style={{ fontSize: isMobile ? 12 : 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 12, lineHeight: 1.4 }}>Combo: n8n Starter + WhatsApp AI Business Automation with n8n</div>

              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                marginTop: 16, paddingTop: 12, borderTop: '1px solid #e5e5e5',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? 12 : 0,
                textAlign: 'center'
              }}>
                {[
                  { sig: 'ForgeMind AI', role: 'Instructor' },
                  { sig: 'DD / MM / YYYY', role: 'Date of Completion', sigStyle: { fontStyle: 'normal', fontSize: 11 } },
                  { sig: 'FM-XXXX', role: 'Certificate ID', sigStyle: { fontStyle: 'normal', fontSize: 11 } },
                ].map((c, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontStyle: 'italic', fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 2, ...c.sigStyle }}>{c.sig}</div>
                    <div style={{ fontSize: 8, color: '#999', letterSpacing: 1, textTransform: 'uppercase' }}>{c.role}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 7, color: '#ccc', marginTop: 12 }}>
                forgemind.in · Intelligent Automation for Modern Businesses
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--t2)', lineHeight: 1.6 }}>
            Complete all modules and earn your <b style={{ color: 'var(--t)', fontWeight: 600 }}>official ForgeMind AI certificate</b> — share it on LinkedIn, add it to your portfolio, or show it to your clients.
          </p>
        </div>
      </div>
    </section>
  )
}
