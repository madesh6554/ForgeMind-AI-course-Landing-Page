import { useState } from 'react'

const faqs = [
  { q: 'Do I need coding experience?', a: 'Not at all. This combo is built for complete beginners. Everything is no-code using n8n. If you can explain your process in simple words, this combo will help you turn it into working automation.' },
  { q: 'What about the WhatsApp API — is it the real production API?', a: <>The course uses Meta test numbers for learning. Production API setup is not covered in the course, but registered businesses (GST/MSME) needing a production number can contact us at{' '}<a href="https://wa.me/919342245724" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--wa)', fontWeight: 600, textDecoration: 'none' }}>+91 93422 45724</a>.</> },
  { q: 'Is the course in Tamil or English?', a: 'Tamil with English technical terminology — making it accessible for Tamil speakers while keeping you aligned with industry-standard language.' },
  { q: 'How long will I have access?', a: 'Lifetime access. Once you enroll, all modules, updates, and community resources are yours forever. 100% pre-recorded — watch and rewatch whenever you want.' },
  { q: 'Can I buy the courses separately?', a: 'Yes, but the combo saves you ₹800. Both courses complement each other — n8n gives you the foundation, WhatsApp automation gives you the business application.' },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: '1px solid var(--bdr)', borderRadius: 10, background: 'var(--bg3)', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '16px 20px', background: 'none', border: 'none',
          color: open ? 'var(--red2)' : 'var(--t)', fontFamily: 'inherit', fontSize: 14, fontWeight: 600,
          textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 12, transition: 'color .2s'
        }}
      >
        {faq.q}
        <svg
          width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          style={{ flexShrink: 0, transition: 'transform .3s', transform: open ? 'rotate(45deg)' : 'none', color: open ? 'var(--red2)' : 'var(--t3)' }}
        >
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
      {open && (
        <div style={{ padding: '0 20px 18px', fontSize: 14, color: 'var(--t2)', lineHeight: 1.7 }}>
          {faq.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="rv" style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--bdr)', padding: '88px 0' }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">FAQ</div>
          <div className="stl">Got questions?</div>
        </div>
        <div style={{ maxWidth: 660, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
        </div>
      </div>
    </section>
  )
}
