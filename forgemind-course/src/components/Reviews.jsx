import { SmileIcon } from './Icons'

const MicIcon = () => (
  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
    <path d="M19 10v2a7 7 0 01-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
  </svg>
)
const SignalIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94"/>
    <circle cx="12" cy="12" r="1"/>
  </svg>
)
const CheckIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 10, height: 10 }}>
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const reviews = [
  {
    name: 'Senthil Kumar', initial: 'S',
    bubbles: [
      { dir: 'in', msg: 'Bro, I just finished the combo course!', time: '10:14 AM' },
      { dir: 'in', msg: 'These two courses together gave me everything I need to build complex AI agents on WhatsApp', time: '10:14 AM' },
      { dir: 'out', msg: 'That\'s amazing! What was your favorite part?', time: '10:16 AM ✓✓' },
      { dir: 'in', msg: 'The WhatsApp bot projects were insane. Built a customer support bot for my shop in 2 days', time: '10:18 AM' },
      { dir: 'in', msg: 'தமிழில் இவ்வளவு தெளிவாக teach பண்றது அருமை', time: '10:19 AM' },
    ]
  },
  {
    name: 'Manoj P.', initial: 'M',
    bubbles: [
      { dir: 'in', msg: 'Just wanted to say thank you', time: '2:30 PM' },
      { dir: 'in', msg: 'Zero coding knowledge needed, as promised. I built my first workflow in the first week itself', time: '2:31 PM' },
      { dir: 'out', msg: 'Happy to hear that!', time: '2:33 PM ✓✓' },
      { dir: 'in', msg: 'Now I\'m charging clients ₹25K per automation project', time: '2:35 PM' },
      { dir: 'in', msg: 'Best investment I made this year honestly', time: '2:35 PM' },
    ]
  },
  {
    name: 'Vignesh T.', initial: 'V', status: 'last seen today at 11:42',
    bubbles: [
      { dir: 'in', msg: 'Most comprehensive syllabus I\'ve seen. From basics to API integration, everything is covered perfectly', time: '11:40 AM' },
      { dir: 'in', msg: 'The n8n + WhatsApp combo is killer. I automated my entire lead follow-up system', time: '11:41 AM' },
      { dir: 'out', msg: 'Which project helped you the most?', time: '11:43 AM ✓✓' },
      { dir: 'in', msg: 'The Metro Bot project. It made everything click for me', time: '11:44 AM' },
      { dir: 'in', msg: 'Also the template management module was super useful for bulk campaigns', time: '11:45 AM' },
    ]
  },
  {
    name: 'Kavitha R.', initial: 'K',
    bubbles: [
      { dir: 'in', msg: 'Perfect for beginners who want to start their automation journey', time: '4:20 PM' },
      { dir: 'in', msg: 'I was scared about the technical parts but everything was explained so clearly in Tamil', time: '4:21 PM' },
      { dir: 'out', msg: 'So happy to hear that!', time: '4:22 PM ✓✓' },
      { dir: 'in', msg: 'My shop\'s WhatsApp now auto-replies to customers. They think I hired someone!', time: '4:24 PM' },
    ]
  },
  {
    name: 'Rajesh K.', initial: 'R',
    bubbles: [
      { dir: 'in', msg: 'Anna, I automated my entire customer follow-up on WhatsApp', time: '9:05 AM' },
      { dir: 'in', msg: 'Saving me 3+ hours every single day. This course is gold.', time: '9:05 AM' },
      { dir: 'out', msg: 'That\'s the goal!', time: '9:08 AM ✓✓' },
      { dir: 'in', msg: 'Now I\'m planning to offer WhatsApp automation as a service to other shops in my area', time: '9:10 AM' },
      { dir: 'in', msg: '₹15K per project easy money', time: '9:10 AM' },
    ]
  },
]

function PhoneReview({ review }) {
  return (
    <div style={{ flex: '0 0 260px', scrollSnapAlign: 'center', transition: 'transform .3s', position: 'relative' }}
      onMouseEnter={e => e.currentTarget.style.transform='translateY(-6px)'}
      onMouseLeave={e => e.currentTarget.style.transform=''}
    >
      <div style={{
        background: '#1a1a1e', borderRadius: 32, padding: 10,
        boxShadow: '0 20px 60px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.06)', position: 'relative', overflow: 'hidden'
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
          width: 72, height: 20, background: '#000', borderRadius: '0 0 12px 12px', zIndex: 11,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ width: 8, height: 8, background: '#222', borderRadius: '50%', border: '1.5px solid #333' }}/>
        </div>

        <div style={{ borderRadius: 22, overflow: 'hidden', aspectRatio: '9/17.5', background: '#0b141a', display: 'flex', flexDirection: 'column' }}>
          {/* WA header */}
          <div style={{ background: '#1f2c34', padding: '32px 12px 8px', display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 5 }}>
            <span style={{ color: '#00a884', fontSize: 14 }}>‹</span>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#128c7e,#25d366)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: '#fff' }}>{review.initial}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#e9edef' }}>{review.name}</div>
              <div style={{ fontSize: 9, color: '#8696a0' }}>{review.status || 'online'}</div>
            </div>
            <div style={{ color: '#aebac1' }}><SignalIcon /></div>
          </div>

          {/* Chat */}
          <div style={{
            background: '#0b141a', padding: '10px 8px', flex: 1,
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 4, position: 'relative'
          }}>
            {review.bubbles.map((b, i) => (
              <div key={i} style={{
                position: 'relative', zIndex: 1, maxWidth: '88%', padding: '6px 10px',
                borderRadius: 8, fontSize: 11, lineHeight: 1.45, wordBreak: 'break-word',
                background: b.dir === 'in' ? '#1f2c34' : '#005c4b',
                color: '#e9edef',
                alignSelf: b.dir === 'in' ? 'flex-start' : 'flex-end',
                borderTopLeftRadius: b.dir === 'in' ? 2 : 8,
                borderTopRightRadius: b.dir === 'out' ? 2 : 8,
              }}>
                {b.msg}
                <div style={{ fontSize: 8, color: '#8696a0', textAlign: 'right', marginTop: 2 }}>{b.time}</div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div style={{ background: '#1f2c34', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <SmileIcon size={14} />
            <div style={{ flex: 1, background: '#2a3942', borderRadius: 20, padding: '6px 10px', fontSize: 10, color: '#8696a0' }}>Type a message</div>
            <div style={{ width: 28, height: 28, background: '#00a884', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MicIcon />
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--t)' }}>{review.name}</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, color: 'var(--wa)', marginTop: 4, fontWeight: 500 }}>
          <CheckIcon /> Verified Student
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="rv" style={{ borderBottom: '1px solid var(--bdr)', overflow: 'hidden', padding: '88px 0' }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">Student Reviews</div>
          <div className="stl">Real feedback. Straight from WhatsApp.</div>
          <div className="sdsc">Unfiltered reviews from students who completed the course — no edits, no filters.</div>
        </div>
        <div style={{ display: 'flex', gap: 24, padding: '0 0 20px', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          {reviews.map((r, i) => <PhoneReview key={i} review={r} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--t3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          Swipe to see more reviews
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ animation: 'swipeHint 2s ease-in-out infinite' }}>
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
