import { useIsMobile } from '../hooks/useIsMobile'
import { useState } from 'react'

/* ── tiny inline SVGs so we don't need extra deps ── */
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
)
const IconCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)
const IconActivity = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)
const IconZap = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

/* pipeline node mini-icons */
const PSearch = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
const PChat = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
const PAI = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const PChart = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
const PSheet = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
const PCal = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
const PCheck = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>

const NR = { bg: 'rgba(220,38,38,.1)', border: '1px solid rgba(220,38,38,.22)', color: 'var(--red2)' }
const NG = { bg: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.2)', color: 'var(--wa)' }
const NP = { bg: 'rgba(139,92,246,.1)', border: '1px solid rgba(139,92,246,.22)', color: '#a78bfa' }
const NY = { bg: 'rgba(250,204,21,.08)', border: '1px solid rgba(250,204,21,.2)', color: 'var(--yel)' }

const cards = [
  {
    num: '01',
    label: '01 / Lead Scraper',
    accent: 'rgba(220,38,38,',
    borderHover: 'rgba(220,38,38,.4)',
    shadowHover: '0 24px 64px rgba(0,0,0,.45), 0 0 40px rgba(220,38,38,.07) inset',
    blob: 'radial-gradient(circle, rgba(220,38,38,.18), transparent 70%)',
    icon: <IconSearch />,
    iconStyle: { bg: 'rgba(220,38,38,.12)', border: '1px solid rgba(220,38,38,.25)', color: 'var(--red2)' },
    title: 'Lead Scraper Bot',
    desc: 'Finds prospects, starts a WhatsApp conversation, qualifies them, and pushes verified leads into your CRM — automatically.',
    pipeline: [
      { icon: <PSearch />, label: 'Scrape', style: NR },
      { icon: <PChat />, label: 'WhatsApp', style: NG },
      { icon: <PAI />, label: 'AI Qualify', style: NP },
      { icon: <PChart />, label: 'CRM Push', style: NY },
    ],
    tags: [
      { text: '⏱ 6+ hrs/week saved', style: { bg: 'rgba(250,204,21,.1)', border: '1px solid rgba(250,204,21,.2)', color: 'var(--yel)' } },
      { text: '₹15K – ₹40K', style: { bg: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.18)', color: 'var(--wa)' } },
      { text: '🏢 Any Business', style: { bg: 'rgba(255,255,255,.04)', border: '1px solid var(--bdr)', color: 'var(--t2)' } },
      { text: '● Beginner', style: { bg: 'rgba(37,211,102,.06)', border: '1px solid rgba(37,211,102,.15)', color: 'var(--wa)' } },
    ],
  },
  {
    num: '02',
    label: '02 / Expense Tracker',
    accent: 'rgba(37,211,102,',
    borderDefault: 'rgba(37,211,102,.18)',
    borderHover: 'rgba(37,211,102,.45)',
    shadowHover: '0 24px 64px rgba(0,0,0,.45), 0 0 40px rgba(37,211,102,.07) inset',
    blob: 'radial-gradient(circle, rgba(37,211,102,.14), transparent 70%)',
    featured: true,
    icon: <IconCard />,
    iconStyle: { bg: 'rgba(37,211,102,.1)', border: '1px solid rgba(37,211,102,.25)', color: 'var(--wa)' },
    title: 'Expense Tracker Bot',
    desc: 'Send a WhatsApp message, your expenses get logged, categorised, and reported — without touching a spreadsheet ever again.',
    pipeline: [
      { icon: <PChat />, label: 'Message', style: NG },
      { icon: <PAI />, label: 'AI Parse', style: NP },
      { icon: <PSheet />, label: 'Log Sheet', style: NY },
      { icon: <PChart />, label: 'Report', style: NG },
    ],
    tags: [
      { text: '⏱ 4+ hrs/week saved', style: { bg: 'rgba(250,204,21,.1)', border: '1px solid rgba(250,204,21,.2)', color: 'var(--yel)' } },
      { text: '₹10K – ₹25K', style: { bg: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.18)', color: 'var(--wa)' } },
      { text: '🏭 SMBs & Teams', style: { bg: 'rgba(255,255,255,.04)', border: '1px solid var(--bdr)', color: 'var(--t2)' } },
      { text: '● Beginner', style: { bg: 'rgba(37,211,102,.06)', border: '1px solid rgba(37,211,102,.15)', color: 'var(--wa)' } },
    ],
  },
  {
    num: '03',
    label: '03 / Appointment Booking',
    accent: 'rgba(250,204,21,',
    borderHover: 'rgba(250,204,21,.4)',
    shadowHover: '0 24px 64px rgba(0,0,0,.45), 0 0 40px rgba(250,204,21,.05) inset',
    blob: 'radial-gradient(circle, rgba(250,204,21,.12), transparent 70%)',
    icon: <IconActivity />,
    iconStyle: { bg: 'rgba(250,204,21,.1)', border: '1px solid rgba(250,204,21,.25)', color: 'var(--yel)' },
    title: 'Appointment Booking Bot',
    desc: 'Patients book, reschedule, and get reminders — all through WhatsApp. No calls, no manual scheduling, no missed appointments.',
    pipeline: [
      { icon: <PChat />, label: 'Book', style: NG },
      { icon: <PCal />, label: 'Schedule', style: NP },
      { icon: <PChart />, label: 'Remind', style: NY },
      { icon: <PCheck />, label: 'Confirm', style: NG },
    ],
    tags: [
      { text: '⏱ 8+ hrs/week saved', style: { bg: 'rgba(250,204,21,.1)', border: '1px solid rgba(250,204,21,.2)', color: 'var(--yel)' } },
      { text: '₹20K – ₹50K', style: { bg: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.18)', color: 'var(--wa)' } },
      { text: '🏥 Clinics & Hospitals', style: { bg: 'rgba(255,255,255,.04)', border: '1px solid var(--bdr)', color: 'var(--t2)' } },
      { text: '● Intermediate', style: { bg: 'rgba(250,204,21,.06)', border: '1px solid rgba(250,204,21,.15)', color: 'var(--yel)' } },
    ],
  },
]

function PipelineNode({ icon, label, style, active }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 4,
      fontSize: 10, fontWeight: 600, letterSpacing: '.4px',
      padding: '3px 8px', borderRadius: 6, whiteSpace: 'nowrap', flexShrink: 0,
      background: style.bg, border: style.border, color: style.color,
      transition: 'opacity .3s, transform .3s',
      opacity: active ? 1 : 0.55,
      transform: active ? 'scale(1.04)' : 'scale(1)',
    }}>
      {icon}{label}
    </div>
  )
}

function Card({ card, isMobile }) {
  const [hovered, setHovered] = useState(false)
  const [activeNode, setActiveNode] = useState(-1)

  const startPulse = () => {
    setHovered(true)
    let i = 0
    const tick = () => {
      setActiveNode(i % 4)
      i++
    }
    tick()
    const interval = setInterval(tick, 400)
    return interval
  }

  const handleEnter = () => {
    const interval = startPulse()
    // store interval on the element via closure — cleared on leave
    handleEnter._interval = interval
  }
  const handleLeave = () => {
    setHovered(false)
    setActiveNode(-1)
    clearInterval(handleEnter._interval)
  }

  const borderColor = hovered
    ? card.borderHover
    : card.borderDefault || 'rgba(255,255,255,.08)'

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: 'relative',
        background: 'var(--bg3)',
        border: `1px solid ${borderColor}`,
        borderRadius: 20,
        padding: isMobile ? '24px 20px' : '28px 28px',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'border-color .35s, transform .35s, box-shadow .35s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? card.shadowHover : 'none',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 260, height: 260, borderRadius: '50%',
        background: card.blob, pointerEvents: 'none',
        opacity: hovered ? 1 : 0, transition: 'opacity .45s',
      }} />

      {/* Watermark number */}
      <div style={{
        position: 'absolute', top: 14, right: 22,
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 72, fontWeight: 700, lineHeight: 1,
        color: 'rgba(255,255,255,.03)',
        userSelect: 'none', pointerEvents: 'none', letterSpacing: -3,
      }}>{card.num}</div>

      {/* Most Popular badge */}
      {card.featured && (
        <div style={{
          position: 'absolute', top: 18, right: 18,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 12px',
          background: 'rgba(37,211,102,.1)', border: '1px solid rgba(37,211,102,.25)',
          borderRadius: 100, fontSize: 10, fontWeight: 600, color: 'var(--wa)',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: 'var(--wa)', flexShrink: 0,
            animation: 'bwuPulse 1.6s ease-in-out infinite',
          }} />
          Most Popular
        </div>
      )}

      {/* Label */}
      <div style={{
        fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
        color: 'var(--t3)', letterSpacing: 2, textTransform: 'uppercase',
        marginBottom: 18, display: 'block',
      }}>{card.label}</div>

      {/* Pipeline bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 0,
        background: 'var(--bg2)', border: '1px solid var(--bdr)',
        borderRadius: 10, padding: '9px 12px',
        marginBottom: 24, overflow: 'hidden',
      }}>
        {card.pipeline.map((node, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <PipelineNode icon={node.icon} label={node.label} style={node.style} active={hovered && activeNode === i} />
            {i < card.pipeline.length - 1 && (
              <span style={{ color: 'var(--t3)', fontSize: 11, margin: '0 3px', opacity: .4 }}>→</span>
            )}
          </div>
        ))}
      </div>

      {/* Icon */}
      <div style={{
        width: 44, height: 44, borderRadius: 12, marginBottom: 14,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: card.iconStyle.bg, border: card.iconStyle.border, color: card.iconStyle.color,
      }}>
        {card.icon}
      </div>

      {/* Title */}
      <div style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, color: 'var(--t)', letterSpacing: -.3, marginBottom: 10 }}>
        {card.title}
      </div>

      {/* Desc */}
      <div style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 22 }}>
        {card.desc}
      </div>

      {/* Divider */}
      <div style={{ width: '100%', height: 1, background: 'var(--bdr)', marginBottom: 16 }} />

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {card.tags.map((tag, i) => (
          <span key={i} style={{
            padding: '5px 12px', borderRadius: 100, fontSize: 11, fontWeight: 600,
            background: tag.style.bg, border: tag.style.border, color: tag.style.color,
          }}>
            {tag.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function BuildWithUs() {
  const isMobile = useIsMobile()

  return (
    <section className="rv" style={{ padding: isMobile ? '52px 0' : '80px 0', borderBottom: '1px solid var(--bdr)', background: 'var(--bg)' }}>
      <style>{`
        @keyframes bwuPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(.75); }
        }
      `}</style>
      <div className="ctr">

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: isMobile ? 16 : 24, marginBottom: isMobile ? 32 : 56,
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 16px',
              background: 'var(--rg)', border: '1px solid var(--rgs)', borderRadius: 100,
              fontSize: 11, fontWeight: 600, color: 'var(--red2)', letterSpacing: 1,
              textTransform: 'uppercase', marginBottom: 14,
            }}>
              <IconZap /> Exclusive Bonus Modules
            </div>
            <div className="stl" style={{ marginBottom: 0 }}>
              Build <span style={{ color: 'var(--wa)' }}>along with us.</span>
            </div>
          </div>
          <div style={{ maxWidth: isMobile ? '100%' : 380, fontSize: 14, color: 'var(--t2)', lineHeight: 1.7 }}>
            We'll open our screen, start from a blank canvas, and build 3 production-ready{' '}
            <span style={{ color: 'var(--wa)', fontWeight: 600 }}>WhatsApp automations</span>{' '}
            together — line by line, decision by decision.
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {cards.map((card, i) => (
            <Card key={i} card={card} isMobile={isMobile} />
          ))}
        </div>

      </div>
    </section>
  )
}
