import { useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const images = [
  '/Review%20Images/ChatGPT%20Image%20May%2018%2C%202026%2C%2005_27_37%20PM%20(1).png',
  '/Review%20Images/ChatGPT%20Image%20May%2018%2C%202026%2C%2005_27_39%20PM%20(2).png',
  '/Review%20Images/ChatGPT%20Image%20May%2018%2C%202026%2C%2005_27_43%20PM%20(3).png',
  '/Review%20Images/ChatGPT%20Image%20May%2018%2C%202026%2C%2005_27_44%20PM%20(4).png',
  '/Review%20Images/ChatGPT%20Image%20May%2018%2C%202026%2C%2005_27_45%20PM%20(5).png',
  '/Review%20Images/ChatGPT%20Image%20May%2018%2C%202026%2C%2005_27_46%20PM%20(6).png',
]

function ReviewCard({ src }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 260,
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
        style={{ display: 'block', width: '100%', height: 'auto' }}
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
