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
    <section style={{ padding: isMobile ? '36px 0 52px' : '56px 0 80px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 500,
        background: 'radial-gradient(ellipse,var(--rg) 0%,transparent 70%)',
        pointerEvents: 'none'
      }}/>
      <div className="ctr">
        <div style={{ position: 'relative', textAlign: 'center' }}>

          <h1 className="fu" style={{
            fontSize: isMobile ? 'clamp(26px,7vw,36px)' : 'clamp(30px,5vw,54px)',
            fontWeight: 700, lineHeight: 1.12,
            letterSpacing: isMobile ? -1 : -1.5,
            marginBottom: 16, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto'
          }}>
            Automate your Business<br />
            using <em style={{ fontStyle: 'normal', color: 'var(--wa)' }}>WhatsApp</em>{' '}
            and <strong style={{ color: 'var(--red2)', fontWeight: 700 }}>n8n</strong>
          </h1>

          <p className="fu fu1" style={{
            fontSize: isMobile ? 15 : 17, color: 'var(--t2)',
            maxWidth: 520, margin: '0 auto 28px', lineHeight: 1.7,
            padding: isMobile ? '0 4px' : 0
          }}>
            Learn to build WhatsApp bots that handle replies, follow-ups, and support —{' '}
            <b style={{ color: 'var(--t)', fontWeight: 600 }}>automatically, 24/7.</b>
          </p>

          {/* Video */}
          <div className="fu fu2" style={{
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
              { label: '4.7 · 75+ Learners', icon: <StarIcon size={11} />, style: { background: 'transparent', border: '1px solid var(--bdr2)', color: 'var(--t2)' } },
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
