import { useIsMobile } from '../hooks/useIsMobile'

const n8nItems = [
  'End-to-end automation strategy design',
  'API interactions & authentication',
  'Building AI-assisted chat workflows',
  'Designing scalable, production-ready systems',
]
const waItems = [
  'WhatsApp API & n8n production integration',
  'Template management & bulk marketing',
  'Shopify & e-commerce integrations',
  'Real project bots — Metro, Sales, Subtitle & more',
]

export default function KeyTakeaways() {
  const isMobile = useIsMobile()

  return (
    <section className="rv" style={{ padding: isMobile ? '52px 0' : '72px 0', borderBottom: '1px solid var(--bdr)', background: 'var(--bg2)' }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">Key Takeaways</div>
          <div className="stl">What you'll actually walk away with</div>
        </div>
        <div style={{ border: '1px solid var(--bdr)', borderRadius: 14, overflow: 'hidden', maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            background: 'var(--bg3)'
          }}>
            {/* n8n column */}
            <div style={{
              padding: isMobile ? '24px 20px' : 32,
              borderRight: isMobile ? 'none' : '1px solid var(--bdr)',
              borderBottom: isMobile ? '1px solid var(--bdr)' : 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }}/>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--t)' }}>From n8n Starter</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {n8nItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--t2)' }}>
                    <span style={{ color: 'var(--red)', flexShrink: 0, fontWeight: 600, marginTop: 1 }}>→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp column */}
            <div style={{ padding: isMobile ? '24px 20px' : 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--wa)', flexShrink: 0 }}/>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--t)' }}>From WhatsApp Automation</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {waItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--t2)' }}>
                    <span style={{ color: 'var(--wa)', flexShrink: 0, fontWeight: 600, marginTop: 1 }}>→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
