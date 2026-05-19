import { useRef, useCallback } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const images = [
  '/reviews/review1.png',
  '/reviews/review2.png',
  '/reviews/review3.png',
  '/reviews/review4.png',
  '/reviews/review5.png',
  '/reviews/review6.png',
]

function ReviewCard({ src, dragging }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 280,
        height: 480,
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 8px 40px rgba(0,0,0,.5)',
        background: '#111',
        transition: dragging ? 'none' : 'transform .25s ease, box-shadow .25s',
        cursor: dragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        pointerEvents: dragging ? 'none' : 'auto',
      }}
      onMouseEnter={e => {
        if (dragging) return
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
        e.currentTarget.style.boxShadow = '0 24px 64px rgba(0,0,0,.7), 0 0 0 1px rgba(37,211,102,.2)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,.5)'
      }}
    >
      <img
        src={src}
        alt="Student review"
        loading="lazy"
        draggable={false}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          marginTop: '-60px',
        }}
      />
    </div>
  )
}

const CARD_GAP = 24
const track = [...images, ...images]

export default function Reviews() {
  const trackRef = useRef(null)
  const wrapRef = useRef(null)
  const isMobile = useIsMobile()

  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, animOffset: 0 })
  const draggingRef = useRef(false)

  const pauseAnim = () => {
    const el = trackRef.current
    if (!el) return
    const matrix = new DOMMatrix(getComputedStyle(el).transform)
    drag.current.animOffset = matrix.m41
    el.style.animation = 'none'
    el.style.transform = `translateX(${drag.current.animOffset}px)`
  }

  const resumeAnim = () => {
    const el = trackRef.current
    if (!el) return
    el.style.animation = 'marqueeScroll 48s linear infinite'
    el.style.transform = ''
    el.style.animationPlayState = 'running'
  }

  const onMouseDown = useCallback((e) => {
    draggingRef.current = true
    pauseAnim()
    drag.current.active = true
    drag.current.startX = e.pageX
    drag.current.scrollLeft = drag.current.animOffset
    if (wrapRef.current) wrapRef.current.style.cursor = 'grabbing'
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!drag.current.active) return
    const delta = e.pageX - drag.current.startX
    const el = trackRef.current
    if (el) el.style.transform = `translateX(${drag.current.scrollLeft + delta}px)`
  }, [])

  const stopDrag = useCallback(() => {
    if (!drag.current.active) return
    drag.current.active = false
    draggingRef.current = false
    if (wrapRef.current) wrapRef.current.style.cursor = ''
    resumeAnim()
  }, [])

  const onTouchStart = useCallback((e) => {
    pauseAnim()
    drag.current.active = true
    drag.current.startX = e.touches[0].pageX
    drag.current.scrollLeft = drag.current.animOffset
  }, [])

  const onTouchMove = useCallback((e) => {
    if (!drag.current.active) return
    const delta = e.touches[0].pageX - drag.current.startX
    const el = trackRef.current
    if (el) el.style.transform = `translateX(${drag.current.scrollLeft + delta}px)`
  }, [])

  const onTouchEnd = useCallback(() => {
    drag.current.active = false
    resumeAnim()
  }, [])

  return (
    <section className="rv" style={{ borderBottom: '1px solid var(--bdr)', padding: isMobile ? '52px 0' : '88px 0', overflow: 'hidden' }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">Echo of Results</div>
          <div className="stl">Straight from our Community</div>
          <div className="sdsc">Unfiltered reviews from people who completed the course, no edits, no filters.</div>
        </div>
      </div>

      <div
        ref={wrapRef}
        style={{
          marginTop: 40, overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          cursor: 'grab',
        }}
        onMouseEnter={() => { if (trackRef.current && !drag.current.active) trackRef.current.style.animationPlayState = 'paused' }}
        onMouseLeave={(e) => { stopDrag(e); if (trackRef.current && !drag.current.active) trackRef.current.style.animationPlayState = 'running' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={(e) => { stopDrag(e); if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex', alignItems: 'center',
            width: 'max-content',
            animation: 'marqueeScroll 48s linear infinite',
            willChange: 'transform',
            gap: CARD_GAP,
            padding: '12px 0',
          }}
        >
          {track.map((src, i) => (
            <ReviewCard key={i} src={src} dragging={false} />
          ))}
        </div>
      </div>
    </section>
  )
}
