import { useState, useEffect, useRef, useCallback } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { ShoppingCartIcon, CalendarIcon, BotIcon, TrendingUpIcon, BarChartIcon, MegaphoneIcon, TagIcon, MessageCircleIcon, CheckIcon, ClockIcon, BuildingIcon, UsersIcon, CreditCardIcon, TargetIcon } from './Icons'

const DURATION = 4000

const carouselData = [
  { icon: <ShoppingCartIcon size={16} />, name: 'Store Bot', notif: 'New Order Placed!', chats: [{ t: 'in', m: 'Hi! Your order #1234 has been confirmed' }, { t: 'out', m: 'Great! When will it arrive?' }, { t: 'in', m: 'Expected delivery: Tomorrow, 2–4 PM' }], left: [{ icon: <CheckIcon size={11} />, text: 'Auto confirmations' }, { icon: <ClockIcon size={11} />, text: '3+ hrs/week saved' }], right: [{ icon: <CreditCardIcon size={11} />, text: 'Sell ₹2,500–₹6,000' }, { icon: <ShoppingCartIcon size={11} />, text: 'E-commerce & retail' }] },
  { icon: <CalendarIcon size={16} />, name: 'Booking Bot', notif: 'Slot Confirmed!', chats: [{ t: 'in', m: 'Hi! Reply 1 for Morning, 2 for Afternoon' }, { t: 'out', m: '1' }, { t: 'in', m: 'Your slot is booked: Tomorrow 10 AM. See you!' }], left: [{ icon: <CheckIcon size={11} />, text: 'Book 24/7 via WhatsApp' }, { icon: <ClockIcon size={11} />, text: '5+ hrs/week saved' }], right: [{ icon: <CreditCardIcon size={11} />, text: 'Sell ₹3,500–₹7,000' }, { icon: <BuildingIcon size={11} />, text: 'Clinics & salons' }] },
  { icon: <BotIcon size={16} />, name: 'Support Bot', notif: 'Query Resolved!', chats: [{ t: 'out', m: 'My order is wrong!' }, { t: 'in', m: 'Sorry about that! Can you share your order ID?' }, { t: 'out', m: '#5678' }, { t: 'in', m: 'Got it, raising a replacement request now.' }], left: [{ icon: <CheckIcon size={11} />, text: 'FAQs answered instantly' }, { icon: <ClockIcon size={11} />, text: '6+ hrs/week saved' }], right: [{ icon: <CreditCardIcon size={11} />, text: 'Sell ₹4,000–₹10,000' }, { icon: <BuildingIcon size={11} />, text: 'Any business' }] },
  { icon: <TrendingUpIcon size={16} />, name: 'Sales Bot', notif: 'New Lead Qualified!', chats: [{ t: 'in', m: 'Hi! Interested in our product? Reply YES to see pricing' }, { t: 'out', m: 'YES' }, { t: 'in', m: 'Great! Our starter plan is ₹999/mo. Want a demo?' }], left: [{ icon: <CheckIcon size={11} />, text: 'Leads auto-qualified' }, { icon: <ClockIcon size={11} />, text: '4+ hrs/week saved' }], right: [{ icon: <CreditCardIcon size={11} />, text: 'Sell ₹3,000–₹8,000' }, { icon: <TrendingUpIcon size={11} />, text: 'Sales teams' }] },
  { icon: <BarChartIcon size={16} />, name: 'Follow-up Bot', notif: 'Follow-up Sent!', chats: [{ t: 'in', m: 'Hi Rajesh! You visited our site yesterday. Any questions?' }, { t: 'out', m: "Yes! What's your turnaround time?" }, { t: 'in', m: '2–3 business days. Want to place an order?' }], left: [{ icon: <CheckIcon size={11} />, text: 'Cold leads re-engaged' }, { icon: <ClockIcon size={11} />, text: '4+ hrs/week saved' }], right: [{ icon: <CreditCardIcon size={11} />, text: 'Sell ₹2,500–₹5,000' }, { icon: <TargetIcon size={11} />, text: 'All industries' }] },
  { icon: <MegaphoneIcon size={16} />, name: 'Campaign Bot', notif: 'Campaign Delivered!', chats: [{ t: 'in', m: 'FLASH SALE! 30% off today only. Use code FORGE30' }, { t: 'in', m: 'Tap to shop: forgemind.in/shop' }, { t: 'out', m: 'Just placed my order!' }], left: [{ icon: <CheckIcon size={11} />, text: 'Reach 1000s instantly' }, { icon: <ClockIcon size={11} />, text: '8+ hrs/week saved' }], right: [{ icon: <CreditCardIcon size={11} />, text: 'Sell ₹3,000–₹7,000' }, { icon: <TagIcon size={11} />, text: 'Retail & brands' }] },
  { icon: <TagIcon size={16} />, name: 'Lead Bot', notif: '12 Leads Captured!', chats: [{ t: 'in', m: 'Hi! Saw your ad on Instagram. What does your service include?' }, { t: 'in', m: 'Check our brochure [link]' }, { t: 'out', m: 'Wow! How do I sign up?' }], left: [{ icon: <CheckIcon size={11} />, text: 'Leads from IG & FB' }, { icon: <ClockIcon size={11} />, text: '6+ hrs/week saved' }], right: [{ icon: <CreditCardIcon size={11} />, text: 'Sell ₹3,000–₹8,000' }, { icon: <UsersIcon size={11} />, text: 'Agencies & freelancers' }] },
  { icon: <MessageCircleIcon size={16} />, name: 'AI Chat Bot', notif: 'AI Reply Sent!', chats: [{ t: 'out', m: 'Do you deliver to Chennai?' }, { t: 'in', m: 'Yes we do! Delivery takes 3–5 days.' }, { t: 'out', m: 'What about Coimbatore?' }, { t: 'in', m: 'Same! 3–5 days. Want to place an order?' }], left: [{ icon: <CheckIcon size={11} />, text: '80% automated replies' }, { icon: <ClockIcon size={11} />, text: '7+ hrs/week saved' }], right: [{ icon: <CreditCardIcon size={11} />, text: 'Sell ₹5,000–₹12,000' }, { icon: <BotIcon size={11} />, text: 'Any business' }] },
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
  const chipStripRef = useRef(null)
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

  useEffect(() => {
    const strip = chipStripRef.current
    const chip = strip?.children[activeIdx]
    if (!strip || !chip) return
    const stripLeft = strip.getBoundingClientRect().left
    const chipLeft = chip.getBoundingClientRect().left
    strip.scrollBy({ left: chipLeft - stripLeft - strip.clientWidth / 2 + chip.clientWidth / 2, behavior: 'smooth' })
  }, [activeIdx])

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
          {/* Phone + floating badges wrapper */}
          <div style={{ position: 'relative', padding: isMobile ? 0 : '0 110px' }}>
            <PhoneMockup data={carouselData[activeIdx]} isMobile={isMobile} />

            {/* Left side badges */}
            <div key={`left-${activeIdx}`} style={{ position: 'absolute', left: isMobile ? -4 : 0, top: '25%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {carouselData[activeIdx].left.map((badge, i) => (
                <div key={i} style={{
                  background: i === 1 ? 'rgba(250,204,21,0.12)' : 'rgba(37,211,102,0.12)',
                  border: `1px solid ${i === 1 ? 'rgba(250,204,21,0.3)' : 'rgba(37,211,102,0.3)'}`,
                  color: i === 1 ? '#fcd34d' : 'var(--wa)',
                  borderRadius: isMobile ? 8 : 100,
                  padding: isMobile ? '5px 7px' : '6px 12px',
                  fontSize: isMobile ? 9 : 11, fontWeight: 600,
                  whiteSpace: isMobile ? 'normal' : 'nowrap',
                  maxWidth: isMobile ? 72 : 'none', lineHeight: 1.3,
                  display: 'flex', alignItems: 'center', gap: 4,
                  animation: `badgeEnter 0.4s ease ${i * 0.28}s both, floatBadge ${5 + i * 0.8}s ease-in-out ${i * 0.28 + 0.4}s infinite`,
                  boxShadow: i === 1 ? '0 4px 16px rgba(250,204,21,0.15)' : '0 4px 16px rgba(37,211,102,0.15)',
                }}>{badge.icon}{badge.text}</div>
              ))}
            </div>

            {/* Right side badges */}
            <div key={`right-${activeIdx}`} style={{ position: 'absolute', right: isMobile ? -4 : 0, top: '40%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {carouselData[activeIdx].right.map((badge, i) => (
                <div key={i} style={{
                  background: i === 0 ? 'rgba(37,211,102,0.12)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${i === 0 ? 'rgba(37,211,102,0.3)' : 'rgba(255,255,255,0.12)'}`,
                  color: i === 0 ? 'var(--wa)' : 'var(--t2)',
                  borderRadius: isMobile ? 8 : 100,
                  padding: isMobile ? '5px 7px' : '6px 12px',
                  fontSize: isMobile ? 9 : 11, fontWeight: 600,
                  whiteSpace: isMobile ? 'normal' : 'nowrap',
                  maxWidth: isMobile ? 72 : 'none', lineHeight: 1.3,
                  display: 'flex', alignItems: 'center', gap: 4,
                  animation: `badgeEnter 0.4s ease ${0.14 + i * 0.28}s both, floatBadge ${5.5 + i * 0.8}s ease-in-out ${0.14 + i * 0.28 + 0.4}s infinite`,
                  boxShadow: i === 0 ? '0 4px 16px rgba(37,211,102,0.15)' : 'none',
                }}>{badge.icon}{badge.text}</div>
              ))}
            </div>
          </div>

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
          <div ref={chipStripRef} style={{
            display: 'flex', gap: 8, overflowX: 'auto', padding: '4px 0 8px',
            scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch',
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

      </div>
    </section>
  )
}
