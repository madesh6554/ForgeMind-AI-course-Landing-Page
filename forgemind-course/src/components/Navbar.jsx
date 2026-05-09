import { useEffect, useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const BoltIcon = () => (
  <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
    <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

export default function Navbar() {
  const navRef = useRef(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handler = () => {
      if (navRef.current)
        navRef.current.style.borderBottomColor = window.scrollY > 10 ? 'var(--bdr)' : 'transparent'
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav ref={navRef} style={{
      position: 'sticky', top: 0, zIndex: 100, padding: '14px 0',
      background: 'rgba(11,11,15,.85)', backdropFilter: 'blur(24px)',
      borderBottom: '1px solid transparent', transition: 'border-color .2s'
    }}>
      <div className="ctr" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="https://forgemind.in" className="logo">
          <div className="logo-i"><BoltIcon /></div>
          ForgeMind<span>AI</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 16 }}>
          {!isMobile && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '4px 12px',
              background: 'var(--grng)', border: '1px solid rgba(34,197,94,.2)',
              borderRadius: 100, fontSize: 11, color: 'var(--grn)', fontWeight: 500
            }}>
              <CheckIcon /> Verified Meta Tech Provider
            </div>
          )}
          <a href="#pricing" className="btn-p" style={{
            padding: isMobile ? '8px 16px' : '10px 24px',
            fontSize: isMobile ? 13 : 14, borderRadius: 8
          }}>
            {isMobile ? 'Enroll' : 'Enroll Now'}
          </a>
        </div>
      </div>
    </nav>
  )
}
