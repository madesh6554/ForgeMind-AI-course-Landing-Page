import { useRef, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const images = [
  '/reviews/review1.png',
  '/reviews/review2.png',
  '/reviews/review3.png',
  '/reviews/review4.png',
  '/reviews/review5.png',
  '/reviews/review6.png',
]

function ReviewCard({ src }) {
  return (
    <div style={{
      flexShrink: 0,
      width: 280,
      height: 480,
      borderRadius: 20,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 8px 40px rgba(0,0,0,.5)',
      background: '#111',
      userSelect: 'none',
    }}>
      <img
        src={src}
        alt="Student review"
        draggable={false}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '50% 35%',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

const CARD_GAP = 24
const SPEED = 0.6
const track = [...images, ...images]

export default function Reviews() {
  const trackRef = useRef(null)
  const wrapRef = useRef(null)
  const isMobile = useIsMobile()

  const state = useRef({
    x: 0,
    loopWidth: 0,
    paused: false,
    dragging: false,
    dragStartX: 0,
    dragStartPos: 0,
    rafId: null,
  })

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    // loopWidth = width of one set of images (half the total track)
    const updateLoop = () => {
      state.current.loopWidth = el.scrollWidth / 2
    }
    updateLoop()

    const tick = () => {
      const s = state.current
      if (!s.paused && !s.dragging) {
        s.x -= SPEED
        if (Math.abs(s.x) >= s.loopWidth) {
          s.x += s.loopWidth
        }
      }
      el.style.transform = `translateX(${s.x}px)`
      s.rafId = requestAnimationFrame(tick)
    }

    state.current.rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(state.current.rafId)
  }, [])

  // ── Mouse ──
  const onMouseEnter = () => { state.current.paused = true }
  const onMouseLeave = () => {
    state.current.paused = false
    state.current.dragging = false
    if (wrapRef.current) wrapRef.current.style.cursor = 'grab'
  }
  const onMouseDown = (e) => {
    state.current.dragging = true
    state.current.dragStartX = e.pageX
    state.current.dragStartPos = state.current.x
    if (wrapRef.current) wrapRef.current.style.cursor = 'grabbing'
  }
  const onMouseMove = (e) => {
    if (!state.current.dragging) return
    state.current.x = state.current.dragStartPos + (e.pageX - state.current.dragStartX)
  }
  const onMouseUp = () => {
    state.current.dragging = false
    if (wrapRef.current) wrapRef.current.style.cursor = 'grab'
  }

  // ── Touch ──
  const onTouchStart = (e) => {
    state.current.dragging = true
    state.current.paused = true
    state.current.dragStartX = e.touches[0].pageX
    state.current.dragStartPos = state.current.x
  }
  const onTouchMove = (e) => {
    if (!state.current.dragging) return
    e.preventDefault()
    state.current.x = state.current.dragStartPos + (e.touches[0].pageX - state.current.dragStartX)
  }
  const onTouchEnd = () => {
    state.current.dragging = false
    state.current.paused = false  // resume from current position — no jump
  }

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
          marginTop: 40,
          overflow: 'hidden',
          cursor: 'grab',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            gap: CARD_GAP,
            padding: '12px 0',
            willChange: 'transform',
          }}
        >
          {track.map((src, i) => (
            <ReviewCard key={i} src={src} />
          ))}
        </div>
      </div>
    </section>
  )
}
