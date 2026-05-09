const VideoIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
const ChatIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
const GridIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
const QAIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg>
const QuizIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const UsersIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>

const cards = [
  { icon: <VideoIcon />, title: 'n8n Masterclass', desc: 'Complete foundation in workflow building — from zero to confident automation builder.', borderColor: 'var(--bdr)', iconStyle: { borderColor: 'var(--rgs)', color: 'var(--red2)' } },
  { icon: <ChatIcon />, title: 'WhatsApp Business Automation', desc: 'Build production-ready WhatsApp bots for sales, support, bookings, and customer engagement at scale.', borderColor: 'rgba(37,211,102,.25)', iconStyle: { borderColor: 'rgba(37,211,102,.3)', color: 'var(--wa)' } },
  { icon: <GridIcon />, title: 'Dashboard Creation', desc: 'Build a single-view dashboard to monitor all your automated workflows, leads, and conversations in one place.', borderColor: 'rgba(250,204,21,.2)', iconStyle: { borderColor: 'rgba(250,204,21,.3)', color: 'var(--yel)' } },
  { icon: <QAIcon />, title: 'Live Q&A Sessions', desc: 'Get your doubts cleared in real-time. Join live sessions with the instructor and community.', borderColor: 'rgba(139,92,246,.2)', iconStyle: { borderColor: 'rgba(139,92,246,.3)', color: '#a78bfa' } },
  { icon: <QuizIcon />, title: 'Quizzes & Assessments', desc: 'Test your understanding after every module to solidify your learning.', borderColor: 'var(--bdr)', iconStyle: { borderColor: 'var(--rgs)', color: 'var(--red2)' } },
  { icon: <UsersIcon />, title: 'Lifetime Access', desc: 'Learn at your own pace with forever access to all modules and future updates. Revisit any lesson, anytime.', borderColor: 'var(--bdr)', iconStyle: { borderColor: 'var(--rgs)', color: 'var(--red2)' } },
]

function GetCard({ card }) {
  return (
    <div style={{
      flex: '0 0 260px', padding: '28px 24px', background: 'var(--bg3)',
      border: `1px solid ${card.borderColor}`, borderRadius: 12, cursor: 'default',
      transition: '.2s'
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='var(--red2)'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 30px var(--rg)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor=card.borderColor; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='' }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center',
        justifyContent: 'center', marginBottom: 18, fontSize: 20,
        border: `1px solid ${card.iconStyle.borderColor}`, color: card.iconStyle.color
      }}>
        {card.icon}
      </div>
      <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{card.title}</h4>
      <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6 }}>{card.desc}</p>
    </div>
  )
}

export default function WhatYouGet() {
  const doubled = [...cards, ...cards]
  return (
    <section className="rv" style={{ borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)', background: 'var(--bg2)', overflow: 'hidden', padding: '88px 0' }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">What You'll Get Inside</div>
          <div className="stl">Everything included in the combo</div>
        </div>
      </div>

      {/* Marquee — full width */}
      <div style={{ position: 'relative', paddingBottom: 48 }}>
        <div style={{
          position: 'absolute', top: 0, bottom: 48, left: 0, width: 120,
          background: 'linear-gradient(90deg,var(--bg2),transparent)', zIndex: 2, pointerEvents: 'none'
        }}/>
        <div style={{
          position: 'absolute', top: 0, bottom: 48, right: 0, width: 120,
          background: 'linear-gradient(270deg,var(--bg2),transparent)', zIndex: 2, pointerEvents: 'none'
        }}/>
        <div
          style={{ display: 'flex', gap: 16, width: 'max-content', animation: 'marqueeScroll 22s linear infinite', padding: '0 16px' }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState='paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState='running'}
        >
          {doubled.map((card, i) => <GetCard key={i} card={card} />)}
        </div>
      </div>
    </section>
  )
}
