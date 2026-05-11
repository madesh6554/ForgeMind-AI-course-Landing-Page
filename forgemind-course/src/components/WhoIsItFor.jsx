import { useIsMobile } from '../hooks/useIsMobile'
import { BuildingIcon, BriefcaseIcon, MonitorIcon, RocketIcon } from './Icons'

const audience = [
  { icon: <BuildingIcon size={28} />, title: 'Agency Owners & Freelancers', desc: 'Want to offer automation + WhatsApp services to your clients and charge premium rates.' },
  { icon: <BriefcaseIcon size={28} />, title: 'Business Owners & Ops Teams', desc: 'Tired of doing everything manually — follow-ups, replies, order updates, lead tracking.' },
  { icon: <MonitorIcon size={28} />, title: 'No-Code Builders & Developers', desc: 'Want a repeatable framework for building workflows and chat automations at scale.' },
  { icon: <RocketIcon size={28} />, title: 'Anyone Ready to Level Up', desc: 'Move from "I know the tools exist" to "I can build and sell real automations."' },
]

export default function WhoIsItFor() {
  const isMobile = useIsMobile()

  return (
    <section className="rv" style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--bdr)', padding: isMobile ? '52px 0' : '88px 0' }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">Who This Combo Is For</div>
          <div className="stl">Built for business owners who want results</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fill,minmax(240px,1fr))', gap: isMobile ? 12 : 16 }}>
          {audience.map((a, i) => (
            <div key={i} style={{
              padding: isMobile ? '20px 16px' : '28px 24px',
              background: 'var(--bg3)', border: '1px solid var(--bdr)',
              borderRadius: 12, transition: 'transform .25s, border-color .25s, box-shadow .25s',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--red2)'
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(229,9,20,.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--bdr)'
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div style={{ marginBottom: 10, color: 'var(--red2)' }}>{a.icon}</div>
              <h4 style={{ fontSize: isMobile ? 13 : 15, fontWeight: 600, marginBottom: 6 }}>{a.title}</h4>
              <p style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.6 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
