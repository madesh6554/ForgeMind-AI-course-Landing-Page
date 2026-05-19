import { useIsMobile } from '../hooks/useIsMobile'

const nodes = [
  {
    label: '5 Weekly Live Q&A with Experts',
    color: 'rgba(250,204,21,.08)', border: 'rgba(250,204,21,.3)', iconColor: '#facc15',
    left: 245, top: 56,
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg>,
  },
  {
    label: 'Dashboard Creation',
    color: 'rgba(37,211,102,.08)', border: 'rgba(37,211,102,.3)', iconColor: 'var(--wa)',
    left: 435, top: 166,
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
  },
  {
    label: 'Pre-built Templates',
    color: 'rgba(139,92,246,.08)', border: 'rgba(139,92,246,.3)', iconColor: '#a78bfa',
    left: 435, top: 386,
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  },
  {
    label: 'Lifetime Access',
    color: 'rgba(229,9,20,.08)', border: 'rgba(229,9,20,.3)', iconColor: 'var(--red2)',
    left: 245, top: 496,
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    label: 'Quizzes & Assessments',
    color: 'rgba(250,204,21,.08)', border: 'rgba(250,204,21,.3)', iconColor: '#facc15',
    left: 54, top: 386,
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
  },
  {
    label: 'Certificate of Completion',
    color: 'rgba(229,9,20,.08)', border: 'rgba(229,9,20,.3)', iconColor: 'var(--red2)',
    left: 54, top: 166,
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  },
]

export default function WhatYouGet() {
  const isMobile = useIsMobile()

  return (
    <section className="rv" style={{
      background: 'var(--bg2)', padding: isMobile ? '52px 0' : '88px 0',
      position: 'relative',
      borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)',
    }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">What You'll Get Inside</div>
          <div className="stl">Everything included in the combo</div>
        </div>

        {isMobile ? (
          /* Mobile: 2-column grid */
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 32 }}>
            {nodes.map((n, i) => (
              <div key={i} style={{
                background: 'var(--bg3)', border: '1px solid var(--bdr)', borderRadius: 12,
                padding: '18px 14px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10,
              }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: n.color, border: `1px solid ${n.border}`, color: n.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {n.icon}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--t)', lineHeight: 1.4 }}>{n.label}</div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop: orbital wheel */
          <div style={{ position: 'relative', width: 600, height: 600, margin: '60px auto 0', maxWidth: '100%' }}>
            {/* SVG rings + spokes */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="240" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="2 8" opacity=".5"/>
              <circle cx="300" cy="300" r="220" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6"/>
              <circle cx="300" cy="300" r="78" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <line x1="300" y1="222" x2="300" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <line x1="367.55" y1="261" x2="490.53" y2="190" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <line x1="367.55" y1="339" x2="490.53" y2="410" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <line x1="300" y1="378" x2="300" y2="520" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <line x1="232.45" y1="339" x2="109.47" y2="410" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <line x1="232.45" y1="261" x2="109.47" y2="190" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <circle cx="300" cy="80" r="3" fill="var(--red)" opacity=".5"/>
              <circle cx="490.53" cy="190" r="3" fill="var(--wa)" opacity=".5"/>
              <circle cx="490.53" cy="410" r="3" fill="#a78bfa" opacity=".5"/>
              <circle cx="300" cy="520" r="3" fill="var(--red)" opacity=".5"/>
              <circle cx="109.47" cy="410" r="3" fill="#facc15" opacity=".5"/>
              <circle cx="109.47" cy="190" r="3" fill="var(--red)" opacity=".5"/>
            </svg>

            {/* Centre logo with pulse rings */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 140, height: 140, zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid var(--red)', opacity: .4, animation: 'wheelPulse 2.5s ease-out infinite' }}/>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid var(--red)', opacity: .4, animation: 'wheelPulse 2.5s ease-out infinite', animationDelay: '1.25s' }}/>
              <div style={{ position: 'relative', width: 96, height: 96, borderRadius: '50%', background: 'var(--bg3)', border: '1px solid var(--bdr)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 60px rgba(229,9,20,.2),inset 0 0 30px rgba(229,9,20,.05)', zIndex: 2 }}>
                <img src="/forgemind-logo.gif" alt="ForgeMind" style={{ width: 64, height: 64, borderRadius: 14, objectFit: 'cover' }} onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}/>
                <div style={{ display: 'none', width: 56, height: 56, background: 'var(--red)', borderRadius: 14, alignItems: 'center', justifyContent: 'center', animation: 'wheelGlow 2.5s ease-in-out infinite' }}>
                  <svg width="28" height="28" fill="white" viewBox="0 0 24 24"><path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/></svg>
                </div>
              </div>
            </div>

            {/* 6 nodes */}
            {nodes.map((n, i) => (
              <div key={i} style={{ position: 'absolute', left: n.left, top: n.top, width: 110, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center', zIndex: 3 }}
                onMouseEnter={e => { const ic = e.currentTarget.querySelector('[data-wni]'); if (ic) ic.style.transform = 'scale(1.15)' }}
                onMouseLeave={e => { const ic = e.currentTarget.querySelector('[data-wni]'); if (ic) ic.style.transform = '' }}
              >
                <div data-wni="1" style={{ width: 48, height: 48, borderRadius: 14, border: `1px solid ${n.border}`, background: n.color, color: n.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform .25s ease, box-shadow .25s ease' }}>
                  {n.icon}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--t)', lineHeight: 1.4, letterSpacing: .2 }}>{n.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
