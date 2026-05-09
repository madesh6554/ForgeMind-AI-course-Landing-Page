import { useIsMobile } from '../hooks/useIsMobile'

const courses = [
  {
    num: '1', title: 'N8N Starter Course', sub: 'Part 1 · 10 Modules · Workflow Foundation',
    color: 'var(--red)',
    items: [
      'Understand n8n basics — nodes, triggers, flows, errors, credentials',
      'Connect Google Sheets, Gmail, webhooks, CRMs and APIs',
      'Build automations for reports, reminders, and internal workflows',
      'Think in workflow logic — design and debug with confidence',
    ],
    takeaways: [
      'End-to-end automation strategy design',
      'API interactions & authentication',
      'Building AI-assisted chat workflows',
      'Designing scalable, production-ready systems',
    ],
  },
  {
    num: '2', title: 'WhatsApp AI Business Automation', sub: 'Part 2 · 8 Modules · Production-Ready Bots',
    color: 'var(--wa)',
    items: [
      'Connect WhatsApp Cloud API with n8n step by step',
      'Build menu-based and AI-powered WhatsApp bots',
      'Work with templates, dynamic data, and response flows',
      'Automate enquiries, follow-ups, reminders, and order updates',
      'Design flows that are 80% structured + 20% AI-assisted',
    ],
    takeaways: [
      'WhatsApp API & n8n production integration',
      'Template management & bulk marketing',
      'Shopify & e-commerce integrations',
      'Real project bots — Metro, Sales, Subtitle & more',
    ],
  },
]

export default function About() {
  const isMobile = useIsMobile()

  return (
    <section className="rv" style={{ padding: isMobile ? '52px 0' : '80px 0', borderBottom: '1px solid var(--bdr)', background: 'var(--bg2)' }}>
      <div className="ctr">
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 48 }}>
          <div className="slbl">About the Combo</div>
          <div className="stl" style={{ marginBottom: 12 }}>Two courses. One complete skill set.</div>
          <div style={{ fontSize: isMobile ? 14 : 16, color: 'var(--t2)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto', padding: isMobile ? '0 4px' : 0 }}>
            Build the two skills every modern automation specialist needs — workflow automation with n8n, and production-ready WhatsApp business bots.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
          {courses.map(c => (
            <div key={c.num} style={{
              padding: isMobile ? '24px 20px' : '32px 28px',
              background: 'var(--bg3)', border: '1px solid var(--bdr)',
              borderRadius: 14, position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column', gap: 0
            }}>
              {/* Top colour bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c.color }}/>

              {/* Ghost number */}
              <div style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: 40, fontWeight: 700,
                color: 'var(--bdr)', position: 'absolute', top: 14, right: 18, lineHeight: 1
              }}>{c.num}</div>

              {/* Header */}
              <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 4, paddingRight: 32 }}>{c.title}</h3>
              <div style={{ fontSize: 12, color: 'var(--t3)', marginBottom: 14 }}>{c.sub}</div>

              {/* Course content */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', marginBottom: 20 }}>
                {c.items.map((item, i) => (
                  <li key={i} style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ width: 5, height: 5, background: c.color, borderRadius: '50%', flexShrink: 0, marginTop: 7 }}/>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Divider + takeaways */}
              <div style={{ borderTop: '1px solid var(--bdr)', paddingTop: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: c.color, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10, fontFamily: "'JetBrains Mono',monospace" }}>
                  Walk away with
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {c.takeaways.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--t2)' }}>
                      <span style={{ color: c.color, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
