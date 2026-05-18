import { useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const images = [
  '/Review%20Images/review1.png',
  '/Review%20Images/review2.png',
  '/Review%20Images/review3.png',
  '/Review%20Images/review4.png',
  '/Review%20Images/review5.png',
  '/Review%20Images/review6.png',
]

function ReviewCard({ src }) {
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
        transition: 'transform .25s ease, box-shadow .25s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
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
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '50% 8%',
        }}
      />
    </div>
  )
}

const CARD_GAP = 24
const track = [...images, ...images]

export default function Reviews() {
  const trackRef = useRef(null)
  const isMobile = useIsMobile()

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
        style={{
          marginTop: 40, overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
        onMouseEnter={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }}
        onMouseLeave={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }}
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
            <ReviewCard key={i} src={src} />
          ))}
        </div>
      </div>
    </section>
  )
}
