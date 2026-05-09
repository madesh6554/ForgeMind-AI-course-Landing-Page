import { useState } from 'react'

const VerifiedTick = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M22.5 12.5C22.5 13.3 22.1 14.1 21.5 14.6L22.1 15.6C22.3 16 22.3 16.5 22.1 16.9C21.9 17.3 21.5 17.6 21.1 17.7L20 18C19.2 18.2 18.6 18.8 18.4 19.6L18.1 20.7C18 21.1 17.7 21.5 17.3 21.7C16.9 21.9 16.4 21.9 16 21.7L15 21.1C14.5 20.5 13.7 20.1 12.9 20.1H11.1C10.3 20.1 9.5 20.5 9 21.1L8 21.7C7.6 21.9 7.1 21.9 6.7 21.7C6.3 21.5 6 21.1 5.9 20.7L5.6 19.6C5.4 18.8 4.8 18.2 4 18L2.9 17.7C2.5 17.6 2.1 17.3 1.9 16.9C1.7 16.5 1.7 16 1.9 15.6L2.5 14.6C3.1 14.1 3.5 13.3 3.5 12.5V11.5C3.5 10.7 3.1 9.9 2.5 9.4L1.9 8.4C1.7 8 1.7 7.5 1.9 7.1C2.1 6.7 2.5 6.4 2.9 6.3L4 6C4.8 5.8 5.4 5.2 5.6 4.4L5.9 3.3C6 2.9 6.3 2.5 6.7 2.3C7.1 2.1 7.6 2.1 8 2.3L9 2.9C9.5 3.5 10.3 3.9 11.1 3.9H12.9C13.7 3.9 14.5 3.5 15 2.9L16 2.3C16.4 2.1 16.9 2.1 17.3 2.3C17.7 2.5 18 2.9 18.1 3.3L18.4 4.4C18.6 5.2 19.2 5.8 20 6L21.1 6.3C21.5 6.4 21.9 6.7 22.1 7.1C22.3 7.5 22.3 8 22.1 8.4L21.5 9.4C20.9 9.9 20.5 10.7 20.5 11.5V12.5H22.5Z" fill="#0668E1"/>
    <path d="M9.5 12.5L11.5 14.5L15.5 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function MetaBadge({ size = 'sm' }) {
  const [hovered, setHovered] = useState(false)

  const s = size === 'xs'
    ? { logo: 11, fontSize: 9, gap: 5, px: '3px 8px', radius: 8 }
    : { logo: 14, fontSize: 11, gap: 6, px: '5px 10px', radius: 10 }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      {hovered && (
        <div style={{
          position: 'absolute', bottom: 'calc(100% + 8px)', left: 0,
          width: 220, zIndex: 50, pointerEvents: 'none',
          background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12, padding: '12px 14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          animation: 'fu .2s ease both'
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Verified Meta Tech Provider</div>
          <div style={{ fontSize: 11, color: '#9ca3af', lineHeight: 1.5 }}>This provider is officially verified by Meta.</div>
          <div style={{
            position: 'absolute', bottom: -5, left: 16,
            width: 10, height: 10, background: '#1A1A1A',
            border: '1px solid rgba(255,255,255,0.1)',
            borderTop: 'none', borderLeft: 'none',
            transform: 'rotate(45deg)'
          }}/>
        </div>
      )}

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: s.gap,
        padding: s.px, borderRadius: s.radius,
        border: `1px solid ${hovered ? '#0668E1' : 'rgba(6,104,225,0.35)'}`,
        background: hovered ? 'rgba(6,104,225,0.12)' : 'rgba(6,104,225,0.05)',
        backdropFilter: 'blur(8px)', cursor: 'default', transition: 'all .2s'
      }}>
        <img src="/logos/meta.png" alt="Meta" style={{ width: s.logo, height: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: s.fontSize, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', letterSpacing: '-.01em' }}>
          Verified Meta Tech Provider
        </span>
        <VerifiedTick size={s.logo * 0.9} />
      </div>
    </div>
  )
}
