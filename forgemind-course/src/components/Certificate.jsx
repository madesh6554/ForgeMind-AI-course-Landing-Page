import { useEffect, useRef, useState } from 'react'

const CornerSVG = () => (
  <svg viewBox="0 0 50 50" fill="none" width="100%" height="100%">
    <path d="M2 2L2 42Q2 48 8 48" stroke="#c9a84c" strokeWidth="1.2"/>
    <path d="M7 7L7 37Q7 43 13 43" stroke="#c9a84c" strokeWidth=".5" opacity=".4"/>
    <circle cx="2" cy="2" r="2.2" fill="#c9a84c"/>
    <path d="M2 14L14 2" stroke="#c9a84c" strokeWidth=".4" opacity=".35"/>
  </svg>
)

const Seal = () => (
  <svg viewBox="0 0 70 70" width="72" height="72">
    <defs>
      <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a843"/>
        <stop offset="50%" stopColor="#f0d68a"/>
        <stop offset="100%" stopColor="#c9a84c"/>
      </linearGradient>
    </defs>
    <g transform="translate(35,35)" opacity=".35">
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(r => (
        <polygon key={r} points="0,-28 4,-10 0,-12 -4,-10" fill="url(#sg)" transform={`rotate(${r})`}/>
      ))}
    </g>
    <circle cx="35" cy="35" r="20" fill="none" stroke="url(#sg)" strokeWidth="1.5"/>
    <circle cx="35" cy="35" r="16" fill="none" stroke="url(#sg)" strokeWidth=".5"/>
    <text x="35" y="32" textAnchor="middle" fontFamily="'Playfair Display',serif" fontSize="7" fill="#c9a84c" letterSpacing="1">VERIFIED</text>
    <text x="35" y="42" textAnchor="middle" fontSize="5" fill="#c9a84c">✦</text>
  </svg>
)

const Divider = ({ width = 260 }) => (
  <div style={{ height: 1, width, background: 'linear-gradient(90deg,transparent,#c9a84c,transparent)', margin: '12px auto' }} />
)

const CERT_W = 1400
const CERT_H = 780

export default function Certificate() {
  const wrapRef = useRef(null)
  const [scale, setScale] = useState(0.6)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => {
      setScale(e.contentRect.width / CERT_W)
    })
    ro.observe(el)
    setScale(el.offsetWidth / CERT_W)
    return () => ro.disconnect()
  }, [])

  return (
    <section className="rv" style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)',
      padding: '88px 0'
    }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">Certification</div>
          <div className="stl">Get certified upon completion</div>
          <div className="sdsc" style={{ whiteSpace: 'nowrap' }}>Finish the course and receive a professional certificate from ForgeMind AI.</div>
        </div>

        {/* Certificate wrapper — scales the 1400×780 design to fit any screen */}
        <div ref={wrapRef} style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          {/* Height tracks scaled cert height exactly */}
          <div style={{
            width: '100%',
            height: CERT_H * scale,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 8,
            boxShadow: '0 20px 80px rgba(0,0,0,.7)',
          }}>
              {/* The actual certificate — fixed 1400×780, scaled via CSS transform */}
              <div style={{
                position: 'absolute',
                width: CERT_W, height: CERT_H,
                top: 0, left: 0,
                transformOrigin: 'top left',
                transform: `scale(${scale})`,
                background: '#fffdf7',
                fontFamily: "'Josefin Sans', sans-serif",
                overflow: 'hidden',
              }}>

                {/* Gold glow background */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: `
                    radial-gradient(ellipse at 50% 0%, rgba(201,168,76,.06) 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 100%, rgba(201,168,76,.04) 0%, transparent 40%),
                    radial-gradient(ellipse at 0% 50%, rgba(201,168,76,.03) 0%, transparent 25%),
                    radial-gradient(ellipse at 100% 50%, rgba(201,168,76,.03) 0%, transparent 25%)
                  `,
                }}/>

                {/* Watermarks */}
                {[
                  { top: '50%', fontSize: 130, letterSpacing: 28, opacity: 0.018 },
                  { top: '24%', fontSize: 70,  letterSpacing: 16, opacity: 0.013 },
                  { top: '76%', fontSize: 70,  letterSpacing: 16, opacity: 0.013 },
                ].map((w, i) => (
                  <div key={i} style={{
                    position: 'absolute', left: '50%',
                    top: w.top,
                    transform: 'translate(-50%,-50%) rotate(-15deg)',
                    fontSize: w.fontSize, fontWeight: 600,
                    letterSpacing: w.letterSpacing,
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    color: `rgba(0,0,0,${w.opacity})`,
                    pointerEvents: 'none', userSelect: 'none',
                  }}>FORGEMIND AI</div>
                ))}

                {/* SAMPLE badge */}
                <div style={{
                  position: 'absolute', top: 14, left: 16, zIndex: 5,
                  padding: '3px 12px', background: '#DC2626', color: '#fff',
                  fontSize: 9, fontWeight: 700, letterSpacing: 2,
                  textTransform: 'uppercase', borderRadius: 3,
                }}>SAMPLE</div>

                {/* Outer border */}
                <div style={{ position: 'absolute', inset: 12, border: '2.5px solid #c9a84c', pointerEvents: 'none' }}/>
                {/* Inner border */}
                <div style={{ position: 'absolute', inset: 20, border: '1px solid rgba(201,168,76,.4)', pointerEvents: 'none' }}/>

                {/* Corner ornaments */}
                {[
                  { top: 15, left: 15, transform: 'none' },
                  { top: 15, right: 15, transform: 'scaleX(-1)' },
                  { bottom: 15, left: 15, transform: 'scaleY(-1)' },
                  { bottom: 15, right: 15, transform: 'scale(-1,-1)' },
                ].map((c, i) => (
                  <div key={i} style={{ position: 'absolute', width: 52, height: 52, zIndex: 2, ...c }}>
                    <CornerSVG />
                  </div>
                ))}

                {/* Side accent lines */}
                <div style={{ position: 'absolute', top: '50%', left: 32, transform: 'translateY(-50%)', width: 1, height: 180, background: 'linear-gradient(180deg,transparent,rgba(201,168,76,.28),transparent)' }}/>
                <div style={{ position: 'absolute', top: '50%', right: 32, transform: 'translateY(-50%)', width: 1, height: 180, background: 'linear-gradient(180deg,transparent,rgba(201,168,76,.28),transparent)' }}/>

                {/* Main content */}
                <div style={{
                  position: 'relative', zIndex: 1, height: '100%',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: '40px 100px 70px',
                  textAlign: 'center',
                }}>

                  {/* Logo */}
                  <img src="/forgemind-logo-static.png" alt="ForgeMind AI" style={{ width: 72, height: 72, objectFit: 'contain', marginBottom: 4 }}/>
                  <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Josefin Sans',sans-serif", letterSpacing: 3, color: '#1a1a1a', marginBottom: 6 }}>
                    FORGEMIND<span style={{ color: '#DC2626' }}>AI</span>
                  </div>

                  {/* Meta Verified badge — light variant for cream background */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '3px 10px', borderRadius: 20,
                    border: '1px solid rgba(6,104,225,0.3)',
                    background: 'rgba(6,104,225,0.06)',
                    marginBottom: 6,
                  }}>
                    <img src="/logos/meta.png" alt="Meta" style={{ width: 11, height: 'auto', objectFit: 'contain' }}/>
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#0668E1', letterSpacing: '0.04em', whiteSpace: 'nowrap', fontFamily: "'Josefin Sans',sans-serif" }}>
                      Verified Meta Tech Provider
                    </span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M22.5 12.5C22.5 13.3 22.1 14.1 21.5 14.6L22.1 15.6C22.3 16 22.3 16.5 22.1 16.9C21.9 17.3 21.5 17.6 21.1 17.7L20 18C19.2 18.2 18.6 18.8 18.4 19.6L18.1 20.7C18 21.1 17.7 21.5 17.3 21.7C16.9 21.9 16.4 21.9 16 21.7L15 21.1C14.5 20.5 13.7 20.1 12.9 20.1H11.1C10.3 20.1 9.5 20.5 9 21.1L8 21.7C7.6 21.9 7.1 21.9 6.7 21.7C6.3 21.5 6 21.1 5.9 20.7L5.6 19.6C5.4 18.8 4.8 18.2 4 18L2.9 17.7C2.5 17.6 2.1 17.3 1.9 16.9C1.7 16.5 1.7 16 1.9 15.6L2.5 14.6C3.1 14.1 3.5 13.3 3.5 12.5V11.5C3.5 10.7 3.1 9.9 2.5 9.4L1.9 8.4C1.7 8 1.7 7.5 1.9 7.1C2.1 6.7 2.5 6.4 2.9 6.3L4 6C4.8 5.8 5.4 5.2 5.6 4.4L5.9 3.3C6 2.9 6.3 2.5 6.7 2.3C7.1 2.1 7.6 2.1 8 2.3L9 2.9C9.5 3.5 10.3 3.9 11.1 3.9H12.9C13.7 3.9 14.5 3.5 15 2.9L16 2.3C16.4 2.1 16.9 2.1 17.3 2.3C17.7 2.5 18 2.9 18.1 3.3L18.4 4.4C18.6 5.2 19.2 5.8 20 6L21.1 6.3C21.5 6.4 21.9 6.7 22.1 7.1C22.3 7.5 22.3 8 22.1 8.4L21.5 9.4C20.9 9.9 20.5 10.7 20.5 11.5V12.5H22.5Z" fill="#0668E1"/>
                      <path d="M9.5 12.5L11.5 14.5L15.5 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <Divider width={60}/>

                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 10, letterSpacing: 7, textTransform: 'uppercase', color: '#aaa', marginBottom: 2 }}>
                    proudly presents this
                  </div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 52, fontWeight: 700, color: '#1a1a1a', letterSpacing: 4, lineHeight: 1.1 }}>
                    Certificate of Completion
                  </div>

                  <Divider width={260}/>

                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 18, color: '#999', marginTop: 4 }}>
                    This is to certify that
                  </div>

                  <div style={{
                    fontFamily: "'Playfair Display',serif", fontSize: 54, fontWeight: 700,
                    position: 'relative', paddingBottom: 10, marginTop: 2,
                    background: 'linear-gradient(135deg,#222 0%,#444 50%,#222 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    &lt; Your Name &gt;
                    <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 140, height: 2, background: 'linear-gradient(90deg,transparent,#c9a84c,transparent)' }}/>
                  </div>

                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 18, color: '#999', marginTop: 10 }}>
                    has successfully completed the course
                  </div>
                  <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, fontWeight: 400, color: '#2c2c2c', lineHeight: 1.65, maxWidth: 680, marginTop: 4 }}>
                    Combo: n8n Starter Course + WhatsApp AI Business Automation with n8n
                  </div>

                  <Divider width={90}/>

                  <div>
                    <div style={{ fontSize: 9, letterSpacing: 5, textTransform: 'uppercase', color: '#bbb', marginBottom: 3 }}>Completed On</div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 500, color: '#555', fontStyle: 'italic' }}>DD / MM / YYYY</div>
                  </div>
                </div>

                {/* Gold seal */}
                <div style={{ position: 'absolute', bottom: 46, left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
                  <Seal />
                </div>

                {/* Footer */}
                <div style={{ position: 'absolute', bottom: 20, left: 36, right: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 2 }}>
                  <div style={{ fontSize: 7.5, letterSpacing: 1, color: '#bbb', textTransform: 'uppercase', lineHeight: 1.7 }}>
                    Computer-generated certificate<br/>Issued upon course completion
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 9, letterSpacing: 3, color: '#ccc', textTransform: 'uppercase' }}>FM-XXXX</div>
                    <div style={{ fontSize: 7.5, letterSpacing: 1, color: '#bbb', marginTop: 2 }}>Issued On: DD / MM / YYYY</div>
                  </div>
                </div>

              </div>{/* end 1400×780 */}
          </div>

          <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--t2)', lineHeight: 1.6 }}>
            Complete all modules and earn your <b style={{ color: 'var(--t)', fontWeight: 600 }}>official ForgeMind AI certificate</b> — share it on LinkedIn, add it to your portfolio, or show it to your clients.
          </p>
        </div>
      </div>
    </section>
  )
}
