import { useState, useRef } from 'react'

const tools = [
  { name: 'WhatsApp',        src: '/logos/whatsapp.png' },
  { name: 'n8n',             src: '/logos/n8n.png' },
  { name: 'Google Sheets',   src: '/logos/google-sheets-icon.png' },
  { name: 'Gmail',           src: '/logos/gmail.png' },
  { name: 'Meta',            src: '/logos/meta.png' },
  { name: 'Telegram',        src: '/logos/telegram.png' },
  { name: 'ChatGPT',         src: '/logos/chatgpt-icon.png' },
  { name: 'Claude AI',       src: '/logos/claude.png' },
  { name: 'Gemini',          src: '/logos/gemini.png' },
  { name: 'Google Drive',    src: '/logos/google-drive.png' },
  { name: 'Google Calendar', src: '/logos/google-calendar.png' },
  { name: 'Google Docs',     src: '/logos/google-docs.png' },
  { name: 'Shopify',         src: '/logos/Shopify.png' },
  { name: 'Facebook',        src: '/logos/facebook.png' },
  { name: 'Instagram',       src: '/logos/instagram.png' },
  { name: 'LinkedIn',        src: '/logos/linkedin.png' },
  { name: 'YouTube',         src: '/logos/youtube.png' },
  { name: 'Apify',           src: '/logos/apify-logo.png' },
]

/* Double the list — animation moves exactly -50% = one full copy, perfectly seamless */
const track = [...tools, ...tools]

const GAP = 28 /* px — each item reserves this as right padding so -50% is exact */

function LogoItem({ tool, paused }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{ paddingRight: GAP, flexShrink: 0, position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon tile */}
      <div style={{
        width: 50, height: 50, borderRadius: 14,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hovered
          ? 'rgba(229,9,20,0.12)'
          : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hovered ? 'rgba(229,9,20,0.4)' : 'rgba(255,255,255,0.09)'}`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: hovered
          ? '0 6px 24px rgba(229,9,20,0.22), inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 2px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)',
        transform: hovered ? 'translateY(-4px) scale(1.10)' : 'translateY(0) scale(1)',
        transition: 'all .22s cubic-bezier(.16,1,.3,1)',
        cursor: 'default',
      }}>
        <img
          src={tool.src} alt={tool.name}
          onError={e => { e.currentTarget.style.display = 'none' }}
          style={{ width: 30, height: 30, objectFit: 'contain' }}
        />
      </div>

      {/* Tooltip — appears above on hover */}
      <div style={{
        position: 'absolute',
        bottom: 'calc(100% + 6px)',
        left: '50%',
        transform: `translateX(-50%) translateY(${hovered ? 0 : 4}px)`,
        opacity: hovered ? 1 : 0,
        pointerEvents: 'none',
        transition: 'opacity .18s ease, transform .18s ease',
        zIndex: 20,
      }}>
        <div style={{
          background: 'rgba(12,12,18,0.90)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgba(229,9,20,0.35)',
          borderRadius: 8,
          padding: '5px 11px',
          fontSize: 11, fontWeight: 700,
          color: 'var(--red2)',
          whiteSpace: 'nowrap',
          letterSpacing: '0.04em',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5), 0 0 0 1px rgba(229,9,20,0.08)',
        }}>
          {tool.name}
        </div>
        {/* caret */}
        <div style={{
          position: 'absolute', top: '100%', left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: '5px solid rgba(229,9,20,0.35)',
        }} />
      </div>
    </div>
  )
}

export default function ToolsStrip() {
  const trackRef = useRef(null)

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'  }
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }

  return (
    <div style={{
      background: 'rgba(10,10,15,0.65)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      padding: '18px 0 16px',
      position: 'relative',
    }}>
      {/* Top line — invisible at edges, sharp fade-in at ~15%, solid in center */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(255,255,255,0.07) 16%, rgba(255,255,255,0.07) 84%, transparent 88%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      {/* Bottom line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent 0%, transparent 12%, rgba(255,255,255,0.07) 16%, rgba(255,255,255,0.07) 84%, transparent 88%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      {/* Section label — inside container */}
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        textAlign: 'center', marginBottom: 12,
        fontSize: 10, fontWeight: 600, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--t3)',
      }}>
        Tools you'll learn in this course
      </div>

      {/* Scrolling track — gradient overlays fake the edge fade (no mask = tooltips visible) */}
      <div style={{ position: 'relative' }}>
        <div
          style={{ overflowX: 'clip', overflowY: 'visible' }}
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 'max-content',
              animation: 'marqueeScroll 28s linear infinite',
              willChange: 'transform',
            }}
          >
            {track.map((t, i) => (
              <LogoItem key={i} tool={t} />
            ))}
          </div>
        </div>

        {/* Left edge fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '8%',
          background: 'linear-gradient(to right, #0a0a0f, transparent)',
          pointerEvents: 'none', zIndex: 2,
        }} />
        {/* Right edge fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '8%',
          background: 'linear-gradient(to left, #0a0a0f, transparent)',
          pointerEvents: 'none', zIndex: 2,
        }} />
      </div>
    </div>
  )
}
