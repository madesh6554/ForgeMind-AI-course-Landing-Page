import { useIsMobile } from '../hooks/useIsMobile'

const courses = [
  {
    num: '1', title: 'N8N Starter Course', color: 'var(--red)',
    takeaways: [
      'End-to-end automation strategy design',
      'API interactions & authentication',
      'Building AI-assisted chat workflows',
      'Designing scalable, production-ready systems',
    ],
  },
  {
    num: '2', title: 'WhatsApp AI Business Automation', color: 'var(--wa)',
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
            Build the two skills every modern business needs
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
              <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 20, paddingRight: 32 }}>{c.title}</h3>

              {/* Takeaways */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.takeaways.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--t2)' }}>
                    <span style={{ color: c.color, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
