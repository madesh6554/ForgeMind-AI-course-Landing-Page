import { useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

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

/* Double for seamless loop — translateX(-50%) = exactly one copy */
const track = [...cards, ...cards]
const CARD_W = 300
const GAP = 20

function GetCard({ card }) {
  return (
    <div style={{
      padding: '28px 24px', background: 'var(--bg3)',
      border: `1px solid ${card.borderColor}`, borderRadius: 14,
      cursor: 'default', transition: 'border-color .22s ease, box-shadow .22s ease',
      height: '100%', boxSizing: 'border-box',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--red2)'
        e.currentTarget.style.boxShadow = '0 8px 30px var(--rg)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = card.borderColor
        e.currentTarget.style.boxShadow = ''
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16, border: `1px solid ${card.iconStyle.borderColor}`,
        color: card.iconStyle.color,
      }}>
        {card.icon}
      </div>
      <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{card.title}</h4>
      <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.65 }}>{card.desc}</p>
    </div>
  )
}

export default function WhatYouGet() {
  const isMobile = useIsMobile()
  const trackRef = useRef(null)

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }

  return (
    <section className="rv" style={{
      background: 'var(--bg2)', padding: isMobile ? '52px 0' : '88px 0',
      position: 'relative',
    }}>
      {/* Top border line — fades at edges */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(255,255,255,0.07) 16%, rgba(255,255,255,0.07) 84%, transparent 88%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      {/* Bottom border line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(255,255,255,0.07) 16%, rgba(255,255,255,0.07) 84%, transparent 88%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="ctr">
        <div className="shc">
          <div className="slbl">What You'll Get Inside</div>
          <div className="stl">Everything included in the combo</div>
        </div>
      </div>

      {/* Marquee — maskImage fades edges at pixel level, no color-matching needed */}
      <div
        style={{
          marginTop: 40,
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 25%, black 75%, transparent 85%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 25%, black 75%, transparent 85%, transparent 100%)',
        }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            alignItems: 'stretch',
            width: 'max-content',
            animation: 'marqueeScroll 32s linear infinite',
            willChange: 'transform',
          }}
        >
          {track.map((card, i) => (
            <div key={i} style={{ paddingRight: GAP, flexShrink: 0, width: CARD_W }}>
              <GetCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
