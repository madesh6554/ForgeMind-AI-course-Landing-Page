import { useState } from 'react'
import CoursePreview from './CoursePreview'
import { useIsMobile } from '../hooks/useIsMobile'
import { PaperclipIcon, ClockIcon } from './Icons'

const part1 = [
  { week: 'Part 1 – Week 1', title: 'Unit 0: Course Introduction — What You\'ll Be Able to Build', attach: 1, time: '4m 26s', items: ['Welcome to the n8n Starter Course: What to Expect and How This Will Transform Your Business'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg> },
  { week: 'Part 1 – Week 2', title: 'Unit 1: n8n Fundamentals — Setting Up Your Automation Engine', attach: 11, time: '57m 11s', items: ['What is n8n? How Businesses Use It to Eliminate Repetitive Work', 'Introduction to n8n and No-Code Automation', 'Key Concepts in Automation Every Business Owner Should Know', 'Installation guide for MacOS + Cloud hosting on Hostinger', 'Installation guide for Windows + Guide for non-cloud hosting', 'n8n Fundamentals: A Deep Dive into Trigger Nodes', 'n8n Self-Hosted AI Starter Kit - Local Docker Installation Guide', 'Common Setup Issues & Quick Fixes', 'The Heart of the Workflow: n8n Data Flow & Transformation', 'Node Reference Sheet — Your Go-To Cheat Sheet', 'Quiz 1'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
  { week: 'Part 1 – Week 3', title: 'Unit 2: Connecting Your Business Tools — Mastering HTTP Node and Webhooks', attach: 7, time: '43m 22s', items: ['Connect to Anything: Intro to the n8n HTTP Node', 'More into HTTP: Webhooks, Responses & JSON Basics', 'HTTP Basics and JSON for Beginners', 'From Docs to Data: A Hands-On HTTP GET Request', 'Your First n8n Webhook: A Practical Introduction', 'Sending Data with n8n: The HTTP POST Request', 'Quiz 2'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg> },
  { week: 'Part 1 – Week 4', title: 'Unit 3: API Interactions and Authentication — Securely Connecting Your Services', attach: 7, time: '42m 35s', items: ['The Automation Mindset: Thinking in APIs', 'API Basics: Understanding the Internet\'s Language', 'Fetching Live Data: Using an API Key in n8n', 'Beyond the API Key: Bearer Tokens & OAuth2 Explained', 'Google Sheets & n8n: The Complete OAuth2 Setup Guide', 'Unlocking Full API Power: HTTP Request vs. Native Nodes', 'Quiz 3'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
  { week: 'Part 1 – Week 5', title: 'Unit 4: Adding AI to Your Business Workflows — Smarter Automations with n8n', attach: 10, time: '1h 56m', items: ['Intro to Generative AI: Your First Steps with n8n\'s AI Nodes', 'Unlocking Superpowers: Advanced AI Nodes in n8n', 'Bonus – Unlocking Google Gemini in n8n', 'The Art of the Prompt: Models, Tokens, and AI Communication', 'Beyond the Prompt: Building an AI Agent with Tools & Memory', 'The n8n AI Toolkit Part 1: Agents, Chains & Specialized Nodes', 'Persona Generation Workflow (n8n)', 'The n8n AI Toolkit Part 2: Classification, Sentiment & Data Extraction', 'Customer Query Classifier (n8n)', 'Quiz 4'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33"/></svg> },
  { week: 'Part 1 – Week 6', title: 'Unit 5: Making Your Workflows Bulletproof — Error Handling and Optimization', attach: 6, time: '24m 1s', items: ['Bulletproof Your Workflows: Error Handling, Logs & Optimization', 'Taking Your n8n Workflows Live: Deployment, Security & Maintenance', 'Testing and Debugging Tips', 'Next Levels of Optimization: n8n API, Reusable Workflows & Server Health', 'Workflow Design Best Practices & Common Patterns', 'Quiz 5'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94z"/></svg> },
  { week: 'Part 1 – Week 7', title: 'Unit 6: Hands-On Projects — Build Real Automations for Your Business', attach: 11, time: '1h 12m 37s', items: ['Project 1.1: Social Media Automation', 'Automated Social Media Content Generator', 'Project 1.2 & 1.3: Connecting Facebook API', 'Project 2: Data Collection & Reporting', 'AI-Powered Lead Scraper, Qualifier & Outreach Automation', 'Project 3: Daily Digest with APIs', 'Automated Daily News & Stock Digest Delivery', 'Quiz 6'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { week: 'Part 1 – Week 8', title: 'Unit 7: Course Recap — Your Automation Roadmap Going Forward', attach: 3, time: '6m 23s', items: ['Your n8n Journey: A Complete Course Recap', 'Real-World Impact: n8n Case Studies & Success Stories', 'Final Quiz'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
  { week: 'Part 1 – Week 9', title: 'Bonus Unit — WhatsApp Preview + Live Q&A (5 Sessions · 1/Week)', attach: 2, time: '1h 25m', items: ['Bonus Lesson: Connecting WhatsApp with n8n — A Sneak Peek into Part 2', '5 Live Q&A Sessions with Experts — 1 session per week, attend any available session at your convenience to get your doubts cleared', 'Community Support — Join our exclusive community of automation builders, share workflows, ask questions, and grow together'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg> },
  { week: 'Part 1 – Week 10', title: 'Giveaway — Ready-to-Use Templates & Business Workflow Library', attach: 10, time: '3m', items: ['Data Collection Workflow', 'Automated GitHub Issue Monitoring', 'Gmail Classification', 'Order Notification Automation', 'Sentiment Analysis Workflow', 'API Integration Workflow', 'Forgemind AI\'s n8n Template Library', 'Free 1000+ Workflows', '2500+ Official n8n Workflows'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
]

const part2 = [
  { week: 'Part 2 – Week 1', title: 'Unit 0: Course Overview — What Your WhatsApp Will Be Able to Do', attach: 2, time: '2m 58s', items: ['Course Overview — The Roadmap to a Fully Automated WhatsApp Business'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg> },
  { week: 'Part 2 – Week 2', title: 'Unit 1: Professional Environment Setup — Getting Your WhatsApp API Ready', attach: 15, time: '43m 12s', items: ['Meta Developer Onboarding — Setting Up Your Business Account Step by Step', 'Connecting WhatsApp API to n8n', 'The Permanent Access Token', 'Meta Business & WhatsApp Integration Guide', 'Getting Verified for WhatsApp API', 'Quiz: Unit 1'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
  { week: 'Part 2 – Week 3', title: 'Unit 2: Template Management — Sending the Right Message at the Right Time', attach: 11, time: '55m 46s', items: ['Designing Approved Templates', 'Sending Templates with n8n Variables', 'Bulk Marketing Workflow', 'Delivery & Read Tracking', 'Quiz: Unit 2'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { week: 'Part 2 – Week 4', title: 'Unit 3: Project Workflows — Build a Working WhatsApp Bot from Scratch', attach: 6, time: '35m 21s', items: ['Metro Bot: Phase 1 — Build a Menu-Based WhatsApp Bot', 'Metro Bot: Phase 2 — Add Smart Replies, Data Lookup & Dynamic Responses', 'Quiz: Unit 3'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { week: 'Part 2 – Week 5', title: 'Unit 4: Application Workflows — Connect WhatsApp to Your Online Store', attach: 6, time: '12m 38s', items: ['Shopify Store Connection — Automate Order Updates & Customer Notifications', 'Shopify Integration Guide', 'Quiz: Unit 4'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg> },
  { week: 'Part 2 – Week 6', title: 'Unit 5: Bonus — Build a WhatsApp Subtitle Bot', attach: 3, time: '9m 28s', items: ['Subtitle Bot — Auto-Generate Subtitles for Videos Sent via WhatsApp', 'Guide to the WhatsApp Subtitle Bot'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { week: 'Part 2 – Week 7', title: 'Bonus Resources — 6 Ready-to-Deploy Business Bots', attach: 17, time: 'Self-paced', items: ['Module 1: Building the AI Task Manager', 'Module 2: The AI Expense Tracker', 'Module 3: Appointment Booking', 'Module 4: Sales Agent', 'Module 5: Customer Chat Agent', 'Module 6: Lead Scraper'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> },
  { week: 'Bonus – New', title: 'Behind the Build — Watch Us Create 3 Real Bots from Scratch', attach: 3, time: 'Coming soon', isBonus: true, items: ['Lead Scraper — Complete build process from zero to a working lead generation bot', 'AI Expense Tracker — Build a WhatsApp bot that logs, categorizes & reports expenses', 'Hospital Appointment Booking — Full walkthrough of building a booking system on WhatsApp'], icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
]

function ModuleItem({ mod, isWa, isMobile }) {
  const [open, setOpen] = useState(false)
  const accentColor = mod.isBonus ? 'var(--yel)' : (isWa ? 'var(--wa)' : 'var(--red2)')
  const dotLeft = isMobile ? 0 : 0

  return (
    <div style={{ position: 'relative', paddingLeft: isMobile ? 52 : 68, marginBottom: 10 }}>
      <div style={{
        position: 'absolute', left: 0, top: 0,
        width: isMobile ? 40 : 48, height: isMobile ? 40 : 48,
        border: `2px solid ${mod.isBonus ? 'var(--yel)' : (isWa ? 'var(--wa)' : 'var(--red)')}`,
        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2, color: accentColor,
        background: mod.isBonus ? 'rgba(250,204,21,.06)' : 'var(--bg)'
      }}>
        {mod.icon}
      </div>

      <div style={{
        background: 'var(--bg3)',
        border: mod.isBonus ? '1px solid rgba(250,204,21,.2)' : '1px solid var(--bdr)',
        borderRadius: 12, overflow: 'hidden'
      }}>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: '100%', padding: isMobile ? '14px 16px' : '18px 22px',
            background: 'none', border: 'none', color: 'var(--t)',
            fontFamily: 'inherit', textAlign: 'left', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 12
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 600,
              color: accentColor, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4
            }}>{mod.week}</div>
            <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 600, lineHeight: 1.4 }}>{mod.title}</div>
          </div>
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
              <span style={{ fontSize: 11, color: 'var(--t3)', display: 'flex', alignItems: 'center', gap: 3 }}><PaperclipIcon size={11} />{mod.attach}</span>
              <span style={{ fontSize: 11, color: 'var(--t3)', display: 'flex', alignItems: 'center', gap: 3 }}><ClockIcon size={11} />{mod.time}</span>
            </div>
          )}
          <svg
            width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            style={{ flexShrink: 0, color: 'var(--t3)', transition: 'transform .3s', transform: open ? 'rotate(180deg)' : 'none' }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {open && (
          <div style={{ padding: isMobile ? '0 16px 16px' : '0 22px 20px', borderTop: '1px solid var(--bdr)' }}>
            {isMobile && (
              <div style={{ display: 'flex', gap: 12, paddingTop: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: 'var(--t3)' }}>📎 {mod.attach}</span>
                <span style={{ fontSize: 11, color: 'var(--t3)' }}>⏱ {mod.time}</span>
              </div>
            )}
            <ul style={{ listStyle: 'none', paddingTop: isMobile ? 0 : 16 }}>
              {mod.items.map((item, i) => (
                <li key={i} style={{ padding: '5px 0', fontSize: 13, color: mod.isBonus ? 'var(--yel)' : 'var(--t2)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ width: 5, height: 5, background: accentColor, borderRadius: '50%', flexShrink: 0, marginTop: 6 }}/>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Modules() {
  const isMobile = useIsMobile()

  return (
    <section id="modules" className="rv" style={{ borderBottom: '1px solid var(--bdr)', padding: isMobile ? '52px 0' : '88px 0' }}>
      <div className="ctr">
        <div className="shc">
          <div className="slbl">Training Plan Overview</div>
          <div className="stl">All 18 Modules</div>
          <div className="sdsc">Two complete courses. One structured learning path.</div>
        </div>

        <CoursePreview />

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: isMobile ? 19 : 23,
            top: 24, bottom: 24,
            width: 2, background: 'var(--bdr)'
          }}/>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px',
            borderRadius: 8, fontSize: isMobile ? 11 : 13, fontWeight: 600,
            marginBottom: 16, marginLeft: isMobile ? 52 : 68,
            background: 'var(--rg)', color: 'var(--red2)', border: '1px solid var(--rgs)'
          }}>PART 1 — N8N STARTER COURSE</div>

          {part1.map((mod, i) => <ModuleItem key={i} mod={mod} isWa={false} isMobile={isMobile} />)}

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px',
            borderRadius: 8, fontSize: isMobile ? 11 : 13, fontWeight: 600,
            marginBottom: 16, marginLeft: isMobile ? 52 : 68, marginTop: 32,
            background: 'var(--wag)', color: 'var(--wa)', border: '1px solid rgba(37,211,102,.2)'
          }}>PART 2 — WHATSAPP AUTOMATION</div>

          {part2.map((mod, i) => <ModuleItem key={i} mod={mod} isWa={true} isMobile={isMobile} />)}
        </div>
      </div>
    </section>
  )
}
