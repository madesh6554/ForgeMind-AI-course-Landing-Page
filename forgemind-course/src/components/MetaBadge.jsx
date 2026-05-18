import { useState } from 'react'

export default function MetaBadge({ size = 'sm' }) {
  const [hovered, setHovered] = useState(false)

  const s = size === 'xs'
    ? { logoH: 13, fontSize: 9, gap: 5, px: '3px 8px', radius: 8 }
    : { logoH: 16, fontSize: 11, gap: 6, px: '5px 10px', radius: 10 }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      {hovered && (
        <div style={{
          position: 'absolute', bottom: 'calc(100% + 8px)', left: 0,
          width: 240, zIndex: 50, pointerEvents: 'none',
          background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12, padding: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          animation: 'fu .2s ease both'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <img
              src="/logos/mbp-badge-dark.png"
              alt="Meta Business Partner Badge"
              style={{ width: 48, height: 48, objectFit: 'contain', flexShrink: 0 }}
            />
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                Meta Business Partner
              </div>
              <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>
                Officially certified by Meta
              </div>
            </div>
          </div>
          <div style={{ fontSize: 11, color: '#9ca3af', lineHeight: 1.5 }}>
            ForgeMind AI is an officially recognised Meta Business Partner, certified for expertise in Meta's advertising & automation ecosystem.
          </div>
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
        border: `1px solid ${hovered ? 'rgba(6,104,225,0.7)' : 'rgba(6,104,225,0.35)'}`,
        background: hovered ? 'rgba(6,104,225,0.12)' : 'rgba(6,104,225,0.05)',
        backdropFilter: 'blur(8px)', cursor: 'default', transition: 'all .2s'
      }}>
        <img
          src="/logos/mbp-inline-white.svg"
          alt="Meta Business Partners"
          style={{ height: s.logoH, width: 'auto', objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
