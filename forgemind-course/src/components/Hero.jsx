import { useState, useRef, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { StarIcon, GlobeIcon } from './Icons'

const PlayIcon = () => (
  <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
    <polygon points="8,5 20,12 8,19"/>
  </svg>
)

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section id="hero-section" style={{ padding: isMobile ? '40px 0 56px' : '72px 0 96px', position: 'relative', overflow: 'hidden' }}>

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
        width: 900, height: 600,
        background: 'radial-gradient(ellipse,rgba(229,9,20,0.13) 0%,transparent 68%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="ctr" style={{ position: 'relative', zIndex: 1 }}>

        {isMobile ? (
          /* ── Mobile: single centered column ── */
          <div style={{ textAlign: 'center' }}>
            <div className="fu" style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
              <CourseBadge />
            </div>
            <HeroHeading isMobile={true} />
            <HeroTagline isMobile={true} />
            <HeroVideo isMobile={true}  />
            <HeroCTAs isMobile={true} />
            <HeroTags isMobile={true} />
          </div>
        ) : (
          /* ── Desktop: two-column ── */
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}>
            {/* Left: text */}
            <div style={{ textAlign: 'left' }}>
              <div className="fu" style={{ marginBottom: 20 }}>
                <CourseBadge />
              </div>
              <HeroHeading isMobile={false} />
              <HeroTagline isMobile={false} />
              <HeroCTAs isMobile={false} />
              <HeroTags isMobile={false} />
            </div>

            {/* Right: video */}
            <div>
              <HeroVideo isMobile={false}  />
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

function CourseBadge() {
  return (
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
  )
}

function HeroHeading({ isMobile }) {
  return (
    <h1 className="fu fu1" style={{
      fontSize: isMobile ? 'clamp(28px,7vw,38px)' : 'clamp(36px,3.8vw,54px)',
      fontWeight: 800, lineHeight: 1.1,
      letterSpacing: isMobile ? -1 : -2,
      marginBottom: 18,
    }}>
      Learn to Automate your Business<br />
      using <em style={{ fontStyle: 'normal', color: 'var(--wa)' }}>WhatsApp</em>{' '}
      and <strong style={{ color: 'var(--red2)', fontWeight: 800 }}>n8n</strong>
    </h1>
  )
}

function HeroTagline({ isMobile }) {
  return (
    <p className="fu fu2" style={{
      fontSize: isMobile ? 15 : 17, color: 'var(--t2)',
      maxWidth: isMobile ? undefined : 460,
      margin: isMobile ? '0 auto 32px' : '0 0 32px',
      lineHeight: 1.75,
    }}>
      Learn to build WhatsApp bots that handle replies, follow-ups, and support -{' '}
      <b style={{ color: 'var(--t)', fontWeight: 600 }}>automatically, 24/7.</b>
    </p>
  )
}

const VIDEO_ID = 'W4SCclQPKvg'

// Load YT IFrame API once, resolve when ready
let _ytReady = null
function getYTReady() {
  if (!_ytReady) {
    _ytReady = new Promise(resolve => {
      if (window.YT?.Player) { resolve(); return }
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => { prev?.(); resolve() }
      const s = document.createElement('script')
      s.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(s)
    })
  }
  return _ytReady
}

function HeroVideo({ isMobile }) {
  const [playing, setPlaying] = useState(false)
  const divRef  = useRef(null)   // div where YT player replaces the inner div
  const playerRef = useRef(null)
  const readyRef  = useRef(false) // true once player is preloaded and ready

  // Preload: inject YT API + create silent player as soon as component mounts
  useEffect(() => {
    let mounted = true
    getYTReady().then(() => {
      if (!mounted || !divRef.current) return
      playerRef.current = new window.YT.Player(divRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,        // don't play yet — just preload the player
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          controls: 1,
        },
        events: {
          onReady() { readyRef.current = true },
          onStateChange(e) {
            if (e.data === window.YT.PlayerState.PLAYING) setPlaying(true)
          },
        },
      })
    })
    return () => { mounted = false; playerRef.current?.destroy?.() }
  }, [])

  function handlePlay() {
    if (readyRef.current) {
      // Player already warmed up — instant play, no delay
      playerRef.current.playVideo()
    } else {
      // Fallback: API not ready yet, force play once ready
      getYTReady().then(() => playerRef.current?.playVideo())
    }
  }

  return (
    <div className="fu fu3" style={{
      maxWidth: isMobile ? 760 : undefined,
      margin: isMobile ? '0 auto 32px' : '0',
      position: 'relative',
      paddingBottom: '56.25%',
      background: '#0f0f0f',
      borderRadius: isMobile ? 10 : 16,
      overflow: 'hidden',
      border: '1px solid var(--bdr)',
      boxShadow: '0 4px 60px var(--rg)',
    }}>

      {/* YT player lives here, preloaded silently in background */}
      <div
        ref={divRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />

      {/* Thumbnail overlay — sits on top until video is PLAYING */}
      {!playing && (
        <div
          onClick={handlePlay}
          style={{
            position: 'absolute', inset: 0, zIndex: 2,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12,
            cursor: 'pointer',
            backgroundImage: 'url(/Screenshot%202026-05-14%20132018.png)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.38)' }} />
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: isMobile ? 58 : 70, height: isMobile ? 58 : 70,
                background: 'var(--red)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 40px rgba(229,9,20,.7)',
                transition: 'transform .18s, box-shadow .18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 0 56px rgba(229,9,20,.95)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 40px rgba(229,9,20,.7)' }}
            >
              <PlayIcon />
            </div>
            <span style={{ color: '#fff', fontSize: 13, fontWeight: 600, textShadow: '0 1px 6px rgba(0,0,0,.9)', letterSpacing: '.3px' }}>
              Watch the course intro
            </span>
          </div>
        </div>
      )}

    </div>
  )
}

function HeroCTAs({ isMobile }) {
  return (
    <div className="fu fu3" style={{
      display: 'flex', alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'flex-start',
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
  )
}

function HeroTags({ isMobile }) {
  return (
    <div className="fu fu3" style={{
      display: 'flex', alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: 8, flexWrap: 'wrap'
    }}>
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
  )
}
