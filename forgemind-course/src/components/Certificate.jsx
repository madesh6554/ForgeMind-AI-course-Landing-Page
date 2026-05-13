export default function Certificate() {
  return (
    <section className="rv" style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)',
      padding: '88px 0'
    }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">Certification</div>
          <div className="stl">Get certified upon completion</div>
          <div className="sdsc">Finish the course and receive a professional certificate from ForgeMind AI.</div>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <img
            src="/logos/certificate 2 with watermark.png"
            alt="ForgeMind AI Certificate of Completion"
            style={{
              width: '100%', height: 'auto', display: 'block',
              borderRadius: 8, boxShadow: '0 20px 80px rgba(0,0,0,.7)',
            }}
          />
          <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--t2)', lineHeight: 1.6 }}>
            Complete all modules and earn your <b style={{ color: 'var(--t)', fontWeight: 600 }}>official ForgeMind AI certificate</b> — share it on LinkedIn, add it to your portfolio, or show it to your clients.
          </p>
        </div>
      </div>
    </section>
  )
}
