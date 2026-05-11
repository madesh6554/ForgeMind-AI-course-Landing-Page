import { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { StarIcon, GlobeIcon } from './Icons'

const PlayIcon = () => (
  <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
    <polygon points="8,5 20,12 8,19"/>
  </svg>
)

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const isMobile = useIsMobile()

  return (
    <section id="hero-section" style={{ padding: isMobile ? '40px 0 56px' : '64px 0 88px', position: 'relative', overflow: 'hidden' }}>

      {/* Dot grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Red glow */}
      <div style={{
        position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 600,
        background: 'radial-gradient(ellipse,rgba(229,9,20,0.13) 0%,transparent 68%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="ctr" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'relative', textAlign: 'center' }}>

          {/* Course badge */}
          <div className="fu" style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 14px', borderRadius: 100,
              background: 'rgba(229,9,20,0.1)',
              border: '1px solid rgba(229,9,20,0.25)',
              fontSize: 11, fontWeight: 700, color: 'var(--red2)',
              letterSpacing: '0.06em', textTransform: 'uppercase'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', display: 'inline-block', boxShadow: '0 0 6px var(--red)' }} />
              Combo Course · Tamil · No Code
            </span>
          </div>

          <h1 className="fu fu1" style={{
            fontSize: isMobile ? 'clamp(28px,7vw,38px)' : 'clamp(36px,4.5vw,58px)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: isMobile ? -1 : -2,
            marginBottom: 18, maxWidth: 820, marginLeft: 'auto', marginRight: 'auto'
          }}>
            Automate your Business<br />
            using <em style={{ fontStyle: 'normal', color: 'var(--wa)' }}>WhatsApp</em>{' '}
            and <strong style={{ color: 'var(--red2)', fontWeight: 800 }}>n8n</strong>
          </h1>

          <p className="fu fu2" style={{
            fontSize: isMobile ? 15 : 17, color: 'var(--t2)',
            maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.75,
            padding: isMobile ? '0 4px' : 0
          }}>
            Learn to build WhatsApp bots that handle replies, follow-ups, and support —{' '}
            <b style={{ color: 'var(--t)', fontWeight: 600 }}>automatically, 24/7.</b>
          </p>

          {/* Video */}
          <div className="fu fu3" style={{
            maxWidth: 760, margin: '0 auto 32px', position: 'relative',
            paddingBottom: isMobile ? '56.25%' : '42.75%',
            background: 'var(--bg3)', borderRadius: isMobile ? 10 : 14,
            overflow: 'hidden', border: '1px solid var(--bdr)',
            boxShadow: '0 4px 60px var(--rg)'
          }}>
            {videoLoaded ? (
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            ) : (
              <div
                onClick={() => setVideoLoaded(true)}
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', gap: 14, cursor: 'pointer',
                  background: 'linear-gradient(180deg,rgba(220,38,38,.05),var(--bg3))', transition: '.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.background='var(--bg3h)'}
                onMouseLeave={e => e.currentTarget.style.background='linear-gradient(180deg,rgba(220,38,38,.05),var(--bg3))'}
              >
                <div style={{
                  width: isMobile ? 52 : 64, height: isMobile ? 52 : 64,
                  background: 'var(--red)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 40px var(--rgs)'
                }}>
                  <PlayIcon />
                </div>
                <span style={{ color: 'var(--t3)', fontSize: 13, fontWeight: 500 }}>Watch the course intro</span>
              </div>
            )}
          </div>

          {/* CTA row */}
          <div className="fu fu3" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 12, flexWrap: 'wrap', marginBottom: 20,
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <a href="https://wa.me/919342245724?text=Hi!%20I%20want%20to%20enroll%20in%20the%20N8N%20%2B%20WhatsApp%20Combo%20Course%20%E2%82%B94%2C999" target="_blank" rel="noopener noreferrer" className="btn-p" style={{
              width: isMobile ? '100%' : 'auto', justifyContent: 'center',
              fontSize: isMobile ? 15 : 16
            }}>Enroll Now — ₹4,999 →</a>
            <a href="#modules" className="btn-g" style={{
              width: isMobile ? '100%' : 'auto', justifyContent: 'center',
              fontSize: isMobile ? 15 : 16
            }}>View Curriculum</a>
          </div>

          {/* Tags */}
          <div className="fu fu3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
            {[
              { label: 'COMBO COURSE', icon: null, style: { background: 'var(--red)', color: '#fff' } },
              { label: '4.7 · 350+ Learners', icon: <StarIcon size={11} />, style: { background: 'transparent', border: '1px solid var(--bdr2)', color: 'var(--t2)' } },
              { label: 'Tamil', icon: <GlobeIcon size={11} />, style: { background: 'transparent', border: '1px solid var(--bdr2)', color: 'var(--t2)' } },
            ].map(tag => (
              <span key={tag.label} style={{ padding: '5px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4, ...tag.style }}>
                {tag.icon}{tag.label}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
