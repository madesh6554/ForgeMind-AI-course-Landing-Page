export default function FinalCTA() {
  return (
    <section className="rv" style={{ padding: '88px 0', textAlign: 'center' }}>
      <div className="ctr">
        <h2 style={{
          fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, letterSpacing: -1, marginBottom: 14
        }}>
          Your customers are on{' '}
          <em style={{ fontStyle: 'normal', color: 'var(--wa)' }}>WhatsApp</em>.<br/>
          Your automation should be too.
        </h2>
        <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 32 }}>
          Join 75+ students who are automating their businesses with AI.
        </p>
        <a href="https://wa.me/919342245724?text=Hi!%20I%20want%20to%20enroll%20in%20the%20N8N%20%2B%20WhatsApp%20Combo%20Course%20%E2%82%B94%2C999" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ fontSize: 17, padding: '16px 44px' }}>
          Enroll Now — ₹4,999 →
        </a>
      </div>
    </section>
  )
}
