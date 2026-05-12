import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const slides = [
  { thumb: '/course-images/thumbs/Week1.webp',                full: '/course-images/Week1.png',                 cap: '01 — What is n8n? — Course Introduction' },
  { thumb: '/course-images/thumbs/Week2.webp',                full: '/course-images/Week2.png',                 cap: '02 — n8n Fundamentals — Setting Up Your Engine' },
  { thumb: '/course-images/thumbs/preview-api-concepts.webp', full: '/course-images/preview-api-concepts.png',  cap: '03 — API Concepts — How Apps Talk to Each Other' },
  { thumb: '/course-images/thumbs/preview-http-request.webp', full: '/course-images/preview-http-request.png',  cap: '04 — HTTP Requests — Hands-On Visual Diagrams' },
  { thumb: '/course-images/thumbs/preview-n8n-workflow.webp', full: '/course-images/preview-n8n-workflow.png',  cap: '05 — n8n Workflow Editor — Metro Bot Build' },
  { thumb: '/course-images/thumbs/preview-whatsapp-api.webp', full: '/course-images/preview-whatsapp-api.png',  cap: '06 — WhatsApp API Setup — Meta Developer Console' },
  { thumb: '/course-images/thumbs/preview-shopify.webp',      full: '/course-images/preview-shopify.png',       cap: '07 — Shopify Integration — E-Commerce Automation' },
]

function LightboxPortal({ src, onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,.88)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#1a1a22', borderRadius: 12,
          border: '1px solid rgba(255,255,255,.1)',
          boxShadow: '0 8px 60px rgba(0,0,0,.8)',
          overflow: 'hidden', position: 'relative',
          maxWidth: 'min(860px, 92vw)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 10, right: 10, zIndex: 1,
            background: 'rgba(0,0,0,.6)', border: 'none', borderRadius: '50%',
            width: 30, height: 30, color: '#fff', fontSize: 14,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>
        <img src={src} style={{ display: 'block', width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }} />
      </div>
    </div>,
    document.body
  )
}

export default function CoursePreview() {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timerRef.current)
  }, [paused])

  useEffect(() => {
    const track = document.getElementById('preview-track')
    const card = document.getElementById(`preview-card-${active}`)
    if (track && card) {
      const trackLeft = track.getBoundingClientRect().left
      const cardLeft = card.getBoundingClientRect().left
      track.scrollBy({ left: cardLeft - trackLeft, behavior: 'smooth' })
    }
  }, [active])

  function pick(i) {
    setActive(i)
    setPaused(true)
    clearInterval(timerRef.current)
    // resume auto-scroll after 8s of no interaction
    setTimeout(() => setPaused(false), 8000)
  }

  return (
    <>
      <div style={{ margin: '0 0 52px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 11, fontWeight: 600, color: 'var(--t3)',
          letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16,
          fontFamily: "'JetBrains Mono',monospace",
        }}>
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
          </svg>
          Course Preview
        </div>

        {/* scrollable card track */}
        <div
          id="preview-track"
          style={{
            display: 'flex', gap: 14, overflowX: 'auto', scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', paddingBottom: 4, paddingTop: 6,
            scrollBehavior: 'smooth',
          }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              id={`preview-card-${i}`}
              onClick={() => { pick(i); setLightbox(s.full) }}
              style={{
                flex: '0 0 min(360px, 80vw)', scrollSnapAlign: 'start', borderRadius: 10,
                overflow: 'hidden', cursor: 'pointer', transition: 'border-color .2s, transform .3s',
                border: `2px solid ${active === i ? 'var(--red)' : 'var(--bdr)'}`,
                background: 'var(--bg3)',
                transform: active === i ? 'translateY(-3px)' : 'none',
              }}
              onMouseEnter={e => { if (active !== i) e.currentTarget.style.borderColor = 'var(--bdr2)' }}
              onMouseLeave={e => { if (active !== i) e.currentTarget.style.borderColor = 'var(--bdr)' }}
            >
              <img
                src={s.thumb}
                alt={s.cap}
                loading="lazy"
                style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                padding: '8px 12px', fontSize: 11, fontWeight: 500, color: 'var(--t2)',
                fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.3px',
              }}>{s.cap}</div>
            </div>
          ))}
        </div>

        {/* dot indicators */}
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 14 }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => pick(i)}
              style={{
                width: active === i ? 20 : 6, height: 6,
                borderRadius: active === i ? 3 : '50%',
                background: active === i ? 'var(--red)' : 'var(--bdr)',
                cursor: 'pointer', transition: 'all .2s',
              }}
            />
          ))}
        </div>
      </div>

      {lightbox && <LightboxPortal src={lightbox} onClose={() => setLightbox(null)} />}
    </>
  )
}
