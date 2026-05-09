import { useIsMobile } from '../hooks/useIsMobile'
import { SearchIcon, CreditCardIcon, ActivityIcon, ClockIcon, BuildingIcon, UsersIcon, ZapIcon } from './Icons'

const ClockTagIcon = () => <ClockIcon size={11} />
const BuildingTagIcon = () => <BuildingIcon size={11} />
const UsersTagIcon = () => <UsersIcon size={11} />
const ActivityTagIcon = () => <ActivityIcon size={11} />

const projects = [
  {
    num: '01 / LEAD SCRAPER', icon: <SearchIcon size={28} />, title: 'Lead Scraper Bot',
    desc: 'Finds prospects, starts a WhatsApp conversation, qualifies them, and pushes verified leads into your CRM — automatically.',
    tags: [
      { icon: <ClockTagIcon />, text: '6+ hrs/week saved', style: { background: 'rgba(250,204,21,.1)', border: '1px solid rgba(250,204,21,.2)', color: 'var(--yel)' } },
      { icon: null, text: '₹15K – ₹40K', style: { background: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.18)', color: 'var(--wa)' } },
      { icon: <BuildingTagIcon />, text: 'Any Business', style: { background: 'rgba(255,255,255,.04)', border: '1px solid var(--bdr)', color: 'var(--t2)' } },
      { icon: null, text: '● Beginner', style: { background: 'rgba(37,211,102,.06)', border: '1px solid rgba(37,211,102,.15)', color: 'var(--wa)' } },
    ]
  },
  {
    num: '02 / EXPENSE TRACKER', icon: <CreditCardIcon size={28} />, title: 'Expense Tracker Bot',
    desc: 'Send a WhatsApp message, your expenses get logged, categorised, and reported — without touching a spreadsheet ever again.',
    tags: [
      { icon: <ClockTagIcon />, text: '4+ hrs/week saved', style: { background: 'rgba(250,204,21,.1)', border: '1px solid rgba(250,204,21,.2)', color: 'var(--yel)' } },
      { icon: null, text: '₹10K – ₹25K', style: { background: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.18)', color: 'var(--wa)' } },
      { icon: <UsersTagIcon />, text: 'SMBs & Teams', style: { background: 'rgba(255,255,255,.04)', border: '1px solid var(--bdr)', color: 'var(--t2)' } },
      { icon: null, text: '● Beginner', style: { background: 'rgba(37,211,102,.06)', border: '1px solid rgba(37,211,102,.15)', color: 'var(--wa)' } },
    ]
  },
  {
    num: '03 / APPOINTMENT BOOKING', icon: <ActivityIcon size={28} />, title: 'Appointment Booking Bot',
    desc: 'Patients book, reschedule, and get reminders — all through WhatsApp. No calls, no manual scheduling, no missed appointments.',
    tags: [
      { icon: <ClockTagIcon />, text: '8+ hrs/week saved', style: { background: 'rgba(250,204,21,.1)', border: '1px solid rgba(250,204,21,.2)', color: 'var(--yel)' } },
      { icon: null, text: '₹20K – ₹50K', style: { background: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.18)', color: 'var(--wa)' } },
      { icon: <ActivityTagIcon />, text: 'Clinics & Hospitals', style: { background: 'rgba(255,255,255,.04)', border: '1px solid var(--bdr)', color: 'var(--t2)' } },
      { icon: null, text: '● Intermediate', style: { background: 'rgba(250,204,21,.06)', border: '1px solid rgba(250,204,21,.15)', color: 'var(--yel)' } },
    ]
  },
]

export default function BuildWithUs() {
  const isMobile = useIsMobile()

  return (
    <section className="rv" style={{ padding: isMobile ? '52px 0' : '80px 0', borderBottom: '1px solid var(--bdr)', background: 'var(--bg)' }}>
      <div className="ctr">
        <div style={{
          display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: isMobile ? 16 : 24, marginBottom: isMobile ? 32 : 48,
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px',
              background: 'var(--rg)', border: '1px solid var(--rgs)', borderRadius: 100,
              fontSize: 11, fontWeight: 600, color: 'var(--red2)', letterSpacing: 1,
              textTransform: 'uppercase', marginBottom: 14
            }}><ZapIcon size={12} /> Exclusive Bonus Modules</div>
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
          gap: 1, background: 'var(--bdr)',
          border: '1px solid var(--bdr)', borderRadius: 16, overflow: 'hidden'
        }}>
          {projects.map((p, i) => (
            <div key={i} style={{ padding: isMobile ? '28px 24px' : '36px 32px', background: 'var(--bg3)' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--t3)', letterSpacing: 2, marginBottom: 16 }}>{p.num}</div>
              <div style={{ marginBottom: 12, color: 'var(--red2)' }}>{p.icon}</div>
              <div style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, color: 'var(--t)', letterSpacing: -.3, marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 20 }}>{p.desc}</div>
              <div style={{ width: '100%', height: 1, background: 'var(--bdr)', marginBottom: 16 }}/>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.tags.map((tag, j) => (
                  <span key={j} style={{ padding: '5px 12px', borderRadius: 100, fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4, ...tag.style }}>
                    {tag.icon}{tag.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
