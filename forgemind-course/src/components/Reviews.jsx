import { useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#facc15">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const reviews = [
  {
    initial: 'P', gradient: 'linear-gradient(135deg,#dc2626,#7c2d12)',
    name: 'Pothiraja', role: 'Business Owner · Madurai', rot: -1.5,
    body: [
      'I recently purchased the n8n + WhatsApp combo course and I\'m extremely happy with my decision.',
      'The explanations are clear, step-by-step, and easy to understand — even for beginners. What I liked the most is how the course focuses on real-world use cases. It\'s practical, not just theory.',
      'Thank you, ForgeMind team. Highly recommend this to anyone who wants to grow in automation.',
    ],
  },
  {
    initial: 'S', gradient: 'linear-gradient(135deg,#25d366,#075e54)',
    name: 'Senthil Kumar', role: 'Freelance Automator · Chennai', rot: 1.2,
    body: [
      'Bro, finished the combo course last week and I had to message. Zero coding knowledge needed, as promised. Built my first n8n workflow in week 1 itself.',
      'The WhatsApp Business Automation part was the real game-changer. Set up a customer support bot for my shop in 2 days. Already got 3 freelance projects from local businesses.',
      'தமிழில் இவ்வளவு தெளிவா teach பண்றது அருமை. Best investment this year.',
    ],
  },
  {
    initial: 'R', gradient: 'linear-gradient(135deg,#3b82f6,#1e40af)',
    name: 'Rajesh K.', role: 'Retail Shop Owner · Salem', rot: -1.0,
    body: [
      'Anna, I automated my entire customer follow-up on WhatsApp using what you taught. Order confirmations, payment reminders, delivery updates — everything runs by itself now.',
      'Saving me 3+ hours every single day. The Metro Bot project was the moment everything clicked. The way you broke down each node was perfect.',
      'Now planning to offer WhatsApp automation as a service. Already have 2 interested clients.',
    ],
  },
  {
    initial: 'K', gradient: 'linear-gradient(135deg,#a78bfa,#6d28d9)',
    name: 'Kavitha R.', role: 'Boutique Owner · Coimbatore', rot: 1.5,
    body: [
      'I\'m a small boutique owner and I was scared about anything technical. But this course made everything so simple. Every concept is explained clearly in Tamil and English.',
      'My shop\'s WhatsApp now auto-replies to customers, sends them my catalog, and even confirms orders. They actually think I hired someone full-time.',
      'The dashboard module helped me see all my customer enquiries in one place. Highly recommend to small business owners.',
    ],
  },
  {
    initial: 'V', gradient: 'linear-gradient(135deg,#f59e0b,#b45309)',
    name: 'Vignesh T.', role: 'Tech Lead · Bangalore', rot: -1.2,
    body: [
      'Most comprehensive automation course I\'ve taken so far. From the basics of n8n to advanced API integrations, OAuth setup, and full WhatsApp bot deployment — everything is covered in depth.',
      'The n8n + WhatsApp combo is a killer combination. Got my Meta templates approved on the first try thanks to the guidance in template management module.',
      'If you\'re serious about automation, this is THE course. Worth every rupee.',
    ],
  },
  {
    initial: 'M', gradient: 'linear-gradient(135deg,#10b981,#047857)',
    name: 'Mohamed Haze', role: 'IT Specialist · Now in UAE', rot: 1.0,
    highlight: 1,
    body: [
      'Thank you so much, I learnt a lot from your course.',
      'I got a job offer from a company in UAE after learning from your course. The hands-on projects and real-world use cases gave me the practical edge during the interview.',
      'The Group IT Manager role focuses on AI-driven solutions, and everything I learned in the course aligned perfectly with what they needed.',
    ],
  },
  {
    initial: 'A', gradient: 'linear-gradient(135deg,#06b6d4,#0e7490)',
    name: 'Arun M.', role: 'Mechanical Engineer · Ramani Volkswagen', rot: -1.5,
    highlight: 2,
    body: [
      'Hello ForgeMind AI Team, I\'m truly thankful for the n8n course you\'ve provided. I\'ve successfully completed it, and I must say — it was highly valuable.',
      'The course helped me build a strong foundation in n8n, and the hands-on projects gave me a practical understanding that I deeply appreciate.',
      'I\'m a Mechanical Engineer working as a Technician at Ramani Volkswagen. With this n8n knowledge, I\'m now transitioning into an automation-focused role and applying n8n for industry-level business automation.',
    ],
  },
]

function ReviewCard({ review }) {
  return (
    <div style={{
      background: 'var(--bg3)', border: '1px solid var(--bdr)', borderRadius: 16,
      padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 12,
      height: 320, boxSizing: 'border-box',
      transform: `rotate(${review.rot}deg)`,
      transition: 'transform .25s ease, border-color .25s, box-shadow .25s',
      position: 'relative', overflow: 'hidden', cursor: 'default',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'
        e.currentTarget.style.borderColor = 'var(--bdr2)'
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = `rotate(${review.rot}deg)`
        e.currentTarget.style.borderColor = 'var(--bdr)'
        e.currentTarget.style.boxShadow = ''
      }}
    >
      {/* Big decorative quote mark */}
      <div style={{ position: 'absolute', top: 10, right: 16, fontSize: 72, fontFamily: 'Georgia,serif', color: 'rgba(255,255,255,.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>"</div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: 3 }}>
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
      </div>

      {/* Body paragraphs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1, overflow: 'hidden' }}>
        {review.body.map((p, i) => (
          <p key={i} style={{
            fontSize: 13, lineHeight: 1.7, margin: 0,
            color: i === review.highlight ? 'var(--t)' : 'var(--t2)',
            fontWeight: i === review.highlight ? 600 : 400,
          }}>{p}</p>
        ))}
      </div>

      {/* Meta — avatar + name + role */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 14, borderTop: '1px solid var(--bdr)' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: review.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
          {review.initial}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--t)', display: 'flex', alignItems: 'center', gap: 5 }}>
            {review.name}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--wa)" strokeWidth="2.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div style={{ fontSize: 12, color: 'var(--t3)', marginTop: 2 }}>{review.role}</div>
        </div>
      </div>
    </div>
  )
}

/* Each card item uses paddingRight for gap so translateX(-50%) lands exactly */
const CARD_W = 300
const CARD_GAP = 20
const track = [...reviews, ...reviews]

export default function Reviews() {
  const isMobile = useIsMobile()
  const trackRef = useRef(null)

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
            display: 'flex', alignItems: 'stretch',
            width: 'max-content',
            animation: 'marqueeScroll 44s linear infinite',
            willChange: 'transform',
          }}
        >
          {track.map((r, i) => (
            <div key={i} style={{ flexShrink: 0, width: CARD_W, paddingRight: CARD_GAP, boxSizing: 'content-box' }}>
              <ReviewCard review={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
