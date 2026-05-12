import { useState, useEffect, useRef, useCallback } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { ShoppingCartIcon, CalendarIcon, BotIcon, TrendingUpIcon, BarChartIcon, MegaphoneIcon, TagIcon, MessageCircleIcon } from './Icons'

const DURATION = 4000

const carouselData = [
  { icon: <ShoppingCartIcon size={16} />, name: 'Store Bot', notif: 'New Order Placed!', chats: [{ t: 'in', m: 'Hi! Your order #1234 has been confirmed' }, { t: 'out', m: 'Great! When will it arrive?' }, { t: 'in', m: 'Expected delivery: Tomorrow, 2–4 PM' }] },
  { icon: <CalendarIcon size={16} />, name: 'Booking Bot', notif: 'Slot Confirmed!', chats: [{ t: 'in', m: 'Hi! Reply 1 for Morning, 2 for Afternoon' }, { t: 'out', m: '1' }, { t: 'in', m: 'Your slot is booked: Tomorrow 10 AM. See you!' }] },
  { icon: <BotIcon size={16} />, name: 'Support Bot', notif: 'Query Resolved!', chats: [{ t: 'out', m: 'My order is wrong!' }, { t: 'in', m: 'Sorry about that! Can you share your order ID?' }, { t: 'out', m: '#5678' }, { t: 'in', m: 'Got it, raising a replacement request now.' }] },
  { icon: <TrendingUpIcon size={16} />, name: 'Sales Bot', notif: 'New Lead Qualified!', chats: [{ t: 'in', m: 'Hi! Interested in our product? Reply YES to see pricing' }, { t: 'out', m: 'YES' }, { t: 'in', m: 'Great! Our starter plan is ₹999/mo. Want a demo?' }] },
  { icon: <BarChartIcon size={16} />, name: 'Follow-up Bot', notif: 'Follow-up Sent!', chats: [{ t: 'in', m: 'Hi Rajesh! You visited our site yesterday. Any questions?' }, { t: 'out', m: "Yes! What's your turnaround time?" }, { t: 'in', m: '2–3 business days. Want to place an order?' }] },
  { icon: <MegaphoneIcon size={16} />, name: 'Campaign Bot', notif: 'Campaign Delivered!', chats: [{ t: 'in', m: 'FLASH SALE! 30% off today only. Use code FORGE30' }, { t: 'in', m: 'Tap to shop: forgemind.in/shop' }, { t: 'out', m: 'Just placed my order!' }] },
  { icon: <TagIcon size={16} />, name: 'Lead Bot', notif: '12 Leads Captured!', chats: [{ t: 'in', m: 'Hi! Saw your ad on Instagram. What does your service include?' }, { t: 'in', m: 'Check our brochure [link]' }, { t: 'out', m: 'Wow! How do I sign up?' }] },
  { icon: <MessageCircleIcon size={16} />, name: 'AI Chat Bot', notif: 'AI Reply Sent!', chats: [{ t: 'out', m: 'Do you deliver to Chennai?' }, { t: 'in', m: 'Yes we do! Delivery takes 3–5 days.' }, { t: 'out', m: 'What about Coimbatore?' }, { t: 'in', m: 'Same! 3–5 days. Want to place an order?' }] },
]

const items = [
  { icon: <ShoppingCartIcon size={16} />, title: 'Order Updates', desc: 'Auto-send order confirmations, shipping updates, and delivery notifications.' },
  { icon: <CalendarIcon size={16} />, title: 'Appointment Booking', desc: 'Let customers book slots directly through WhatsApp with automated reminders.' },
  { icon: <BotIcon size={16} />, title: 'Customer Support Bot', desc: 'Handle FAQs, complaints, and queries 24/7 — without a single human involved.' },
  { icon: <TrendingUpIcon size={16} />, title: 'Sales Agent', desc: 'Qualify leads, send catalogs, follow up, and close sales — all automated.' },
  { icon: <BarChartIcon size={16} />, title: 'Follow-ups & Reminders', desc: 'Never lose a lead. Automated follow-ups that re-engage cold prospects.' },
  { icon: <MegaphoneIcon size={16} />, title: 'Bulk Campaigns', desc: 'Send targeted promotions to thousands with approved templates and read tracking.' },
  { icon: <TagIcon size={16} />, title: 'Lead Scraping', desc: 'Auto-capture leads from Instagram, Facebook, and websites into WhatsApp flows.' },
  { icon: <MessageCircleIcon size={16} />, title: 'AI-Assisted Chat', desc: '80% rule-based + 20% AI-powered. Smart replies that feel genuinely human.' },
]

function PhoneMockup({ data, isMobile }) {
  const [visibleChats, setVisibleChats] = useState([])
  const [showTyping, setShowTyping] = useState(false)
  const [chatOpacity, setChatOpacity] = useState(1)

  useEffect(() => {
    const timers = []
    setChatOpacity(0)
    const reset = setTimeout(() => {
      setVisibleChats([])
      setShowTyping(false)
      setChatOpacity(1)
      data.chats.forEach((chat, i) => {
        timers.push(setTimeout(() => setVisibleChats(prev => [...prev, chat]), i * 300))
      })
      timers.push(setTimeout(() => setShowTyping(true), data.chats.length * 300))
    }, 220)
    return () => {
      clearTimeout(reset)
      timers.forEach(clearTimeout)
    }
  }, [data])

  const phoneMaxWidth = isMobile ? 200 : 240

  return (
    <div style={{ position: 'relative', maxWidth: phoneMaxWidth, margin: '0 auto' }}>
      <div style={{
        position: 'absolute', top: -14, right: -14,
        background: 'var(--wa)', color: '#fff', borderRadius: 12, padding: '6px 10px',
        fontSize: 10, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4,
        boxShadow: '0 4px 20px rgba(37,211,102,.3)', animation: 'floatBadge 3s ease-in-out infinite',
        zIndex: 2, whiteSpace: 'nowrap', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis'
      }}>
        {data.notif}
      </div>
      <div style={{
        background: '#1a1a1e', borderRadius: 36, padding: 10,
        boxShadow: '0 32px 80px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.06)'
      }}>
        <div style={{ borderRadius: 26, overflow: 'hidden', aspectRatio: '9/18', background: '#0b141a', display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#1f2c34', padding: '36px 12px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#00a884', fontSize: 14 }}>‹</span>
            <div style={{
              width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', background: 'linear-gradient(135deg,#128c7e,#25d366)', color: '#fff'
            }}>{data.icon}</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#e9edef' }}>{data.name}</div>
              <div style={{ fontSize: 9, color: '#8696a0' }}>online</div>
            </div>
          </div>
          <div style={{
            background: '#0b141a', padding: '10px 8px', flex: 1,
            display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'flex-end',
            opacity: chatOpacity, transition: 'opacity 0.2s ease'
          }}>
            {visibleChats.map((b, i) => (
              <div key={i} style={{
                maxWidth: '85%', padding: '8px 11px', borderRadius: 8,
                fontSize: 11, lineHeight: 1.5, color: '#e9edef',
                background: b.t === 'in' ? '#1f2c34' : '#005c4b',
                alignSelf: b.t === 'in' ? 'flex-start' : 'flex-end',
                borderTopLeftRadius: b.t === 'in' ? 2 : 8,
                borderTopRightRadius: b.t === 'out' ? 2 : 8,
              }}>
                {b.m}
                <div style={{ fontSize: 8, color: '#8696a0', textAlign: 'right', marginTop: 3 }}>
                  {b.t === 'out' ? '✓✓ ' : ''}{10 + i}:1{i} AM
                </div>
              </div>
            ))}
            {showTyping && (
              <div style={{
                alignSelf: 'flex-start', background: '#1f2c34', padding: '10px 14px',
                borderRadius: 8, display: 'flex', gap: 4, alignItems: 'center'
              }}>
                {[0, 200, 400].map((delay, i) => (
                  <span key={i} style={{
                    width: 6, height: 6, background: '#8696a0', borderRadius: '50%',
                    animation: `typingDot 1.4s infinite ${delay}ms`
                  }}/>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WhatsAppCarousel({ sectionRef }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const intervalRef = useRef(null)
  const isMobile = useIsMobile()

  const startAuto = useCallback((idx) => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % carouselData.length)
    }, DURATION)
  }, [])

  useEffect(() => {
    startAuto(0)
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleSelect = (idx) => {
    setActiveIdx(idx)
    startAuto(idx)
  }

  return (
    <section ref={sectionRef} id="wa-section" className="rv" style={{ padding: isMobile ? '52px 0' : '88px 0' }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">Why WhatsApp Automation?</div>
          <div className="stl">Your customers are already there.<br/>Your business should be too.</div>
          {/* Stats strip */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 20 : 28, flexWrap: 'wrap', padding: '8px 0 20px' }}>
            {[
              { num: '2B+', lbl: 'WhatsApp users globally' },
              { num: '98%', lbl: 'Message open rate' },
              { num: '75%', lbl: 'Customers prefer chat' },
            ].map(s => (
              <div key={s.lbl} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: 'var(--wa)' }}>{s.num}</div>
                <div style={{ fontSize: 11, color: 'var(--t3)', marginTop: 2 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="sdsc" style={{ margin: '0 auto', fontSize: isMobile ? 14 : 16 }}>
            Every industry is moving to WhatsApp for sales, support, and operations. Here's what you'll be able to automate
          </div>
        </div>

        {/* Main carousel grid — stacks on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 24 : 60,
          alignItems: 'flex-start',
          marginTop: 40
        }}>
          <PhoneMockup data={carouselData[activeIdx]} isMobile={isMobile} />

          {/* Desktop: vertical list */}
          {!isMobile && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {items.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleSelect(i)}
                  style={{
                    padding: '10px 16px',
                    borderRadius: 12, cursor: 'pointer', transition: 'all .3s', marginBottom: 2,
                    position: 'relative',
                    border: activeIdx === i ? '1px solid var(--wa)' : '1px solid transparent',
                    background: activeIdx === i ? 'var(--bg3)' : 'transparent',
                  }}
                >
                  {activeIdx === i && (
                    <div style={{
                      position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                      width: 3, height: '60%', background: 'var(--wa)', borderRadius: 2
                    }}/>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: activeIdx === i ? 4 : 0 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8, display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      background: activeIdx === i ? 'var(--wag)' : 'var(--bg)',
                      color: activeIdx === i ? 'var(--wa)' : 'var(--t3)',
                      transition: 'background .3s, color .3s'
                    }}>{item.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--t)' }}>{item.title}</div>
                  </div>
                  {activeIdx === i && (
                    <div style={{ fontSize: 12, color: 'var(--t2)', lineHeight: 1.5, paddingLeft: 42 }}>
                      {item.desc}
                    </div>
                  )}
                  <div style={{ width: '100%', height: 2, background: 'var(--bdr)', borderRadius: 2, marginTop: 6 }}>
                    <div style={{
                      height: '100%', background: 'var(--wa)', borderRadius: 2,
                      width: activeIdx === i ? '100%' : '0%',
                      transition: activeIdx === i ? `width ${DURATION}ms linear` : 'none'
                    }}/>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile: horizontal scrollable chip strip */}
        {isMobile && (
          <div style={{
            display: 'flex', gap: 8, overflowX: 'auto', padding: '4px 0 8px',
            scrollSnapType: 'x mandatory', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch',
            marginTop: 4
          }}>
            {items.map((item, i) => (
              <div
                key={i}
                onClick={() => handleSelect(i)}
                style={{
                  flex: '0 0 auto', scrollSnapAlign: 'start',
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 12px', borderRadius: 100, cursor: 'pointer',
                  border: activeIdx === i ? '1px solid var(--wa)' : '1px solid var(--bdr)',
                  background: activeIdx === i ? 'var(--wag)' : 'var(--bg3)',
                  color: activeIdx === i ? 'var(--wa)' : 'var(--t3)',
                  fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', transition: 'all .2s'
                }}
              >
                {item.icon}
                <span style={{ color: activeIdx === i ? 'var(--t)' : 'var(--t2)' }}>{item.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* Dots */}
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: isMobile ? 12 : 20 }}>
          {carouselData.map((_, i) => (
            <div key={i} onClick={() => handleSelect(i)} style={{
              width: activeIdx === i ? 20 : 6, height: 6,
              borderRadius: activeIdx === i ? 3 : '50%',
              background: activeIdx === i ? 'var(--wa)' : 'var(--bdr)',
              cursor: 'pointer', transition: 'all .2s'
            }}/>
          ))}
        </div>

        {/* What you can build & sell — green badge style */}
        <div style={{ marginTop: isMobile ? 40 : 56 }}>
          <div style={{ textAlign: 'center', fontSize: 11, fontWeight: 600, color: 'var(--t3)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20, fontFamily: "'JetBrains Mono',monospace" }}>
            Build these & sell to businesses
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? 10 : 14,
          }}>
            {[
              { icon: <TagIcon size={13}/>, name: 'Lead Scraper Bot', desc: 'Auto-capture & qualify leads from Instagram and Facebook', price: '₹3,000 – ₹8,000' },
              { icon: <CalendarIcon size={13}/>, name: 'Appointment Bot', desc: 'Book, reschedule & remind clients through WhatsApp', price: '₹3,500 – ₹7,000' },
              { icon: <ShoppingCartIcon size={13}/>, name: 'Order Update Bot', desc: 'Send auto order confirmations, shipping & delivery alerts', price: '₹2,500 – ₹6,000' },
              { icon: <BotIcon size={13}/>, name: 'Customer Support Bot', desc: 'Handle FAQs and complaints 24/7 without human effort', price: '₹4,000 – ₹10,000' },
            ].map((b, i) => (
              <div key={i} style={{
                background: 'rgba(37,211,102,0.06)',
                border: '1px solid rgba(37,211,102,0.2)',
                borderRadius: 14,
                padding: isMobile ? '14px 12px' : '18px 16px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Glow */}
                <div style={{ position: 'absolute', top: -30, right: -30, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,211,102,0.15), transparent 70%)', pointerEvents: 'none' }} />

                {/* Badge-style header */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  background: 'var(--wa)', color: '#fff',
                  borderRadius: 100, padding: '4px 10px',
                  fontSize: 10, fontWeight: 700,
                  marginBottom: 10,
                  boxShadow: '0 3px 12px rgba(37,211,102,0.35)',
                }}>
                  {b.icon}
                  {b.name}
                </div>

                <div style={{ fontSize: isMobile ? 11 : 12, color: 'var(--t2)', lineHeight: 1.5, marginBottom: 10 }}>
                  {b.desc}
                </div>

                {/* Sell price */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: 11, fontWeight: 700, color: 'var(--wa)',
                  fontFamily: "'JetBrains Mono',monospace",
                }}>
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Sell for {b.price}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
