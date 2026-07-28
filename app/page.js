"use client";

import React from 'react';
import Link from 'next/link';
import { useCMS } from '@/context/CMSContext';

export default function HomePage() {
  const { state, isHydrated } = useCMS();

  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-brooks-blue)' }}></div>;
  }

  return (
    <div className="page-view active-view" id="view-home">

      {/* ── Hero ── */}
      <section className="tbm-hero">

        {/* Dot-grid texture */}
        <div className="tbm-hero-texture" aria-hidden="true" />

        {/* Logo — fills the right side like a built-in background image */}
        <img
          src="/TBMlogo.png"
          alt="The Brooks"
          className="tbm-hero-logo"
        />

        {/* Text — left side only */}
        <div className="tbm-hero-inner">
          <div className="tbm-hero-left">

            <div className="tbm-eyebrow-pill">
              <span className="tbm-eyebrow-pulse" aria-hidden="true" />
              A Kingdom Movement
            </div>

            <h1 className="tbm-title">
              <span className="tbm-title-the">The</span>
              <span className="tbm-title-brooks">Brooks</span>
            </h1>

            <div className="tbm-tagline-wrap">
              <div className="tbm-gold-bar" aria-hidden="true" />
              <p className="tbm-tagline">
                Raising frontliners, pioneers, and kingdom-sent agents
                of transformation for this generation and the ones to come.
              </p>
            </div>

            <div className="tbm-service-info">
              <span className="tbm-service-badge">Sunday Service</span>
              <div className="tbm-service-rows">
                <div className="tbm-service-row">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>[Time — To Be Updated]</span>
                </div>
                <div className="tbm-service-divider" aria-hidden="true" />
                <div className="tbm-service-row">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>[Location — To Be Updated]</span>
                </div>
              </div>
            </div>

            <div className="tbm-cta-row">
              <Link href="/about" className="tbm-btn-solid">About The Brooks</Link>
              <Link href="/partners" className="tbm-btn-outline">Partner With Us</Link>
            </div>

          </div>
        </div>
      </section>


      {/* ── Vision Section ── */}
      <section id="home-vision-sec" className="bg-brooks">
        <div className="container">
          <div className="vision-grid">
            <div className="reveal-left active">
              <h2 style={{ textAlign: 'left', marginBottom: '24px', paddingBottom: '10px' }}>
                Who We Are
              </h2>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-sunlight)', marginBottom: '30px' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: 'rgba(255,255,255,0.88)', margin: '0 0 15px 0' }}>
                The Brooks Ministry is a non-denominational Christian ministry with a singular focus: raising frontliners and pioneers for the Kingdom of God.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: 'rgba(255,255,255,0.88)', margin: '0 0 15px 0' }}>
                We exist to see a generation of young people who are not merely church-attending believers, but spiritually activated, doctrinally grounded, and kingdom-sent agents of transformation.
              </p>
              <blockquote className="featured-quote">
                <span>&ldquo;To see a generation of spiritually active, doctrinally grounded, and purpose-driven young believers deployed as kingdom-sent agents of transformation across the nations.&rdquo;</span>
                <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--color-sunlight)', display: 'block', marginTop: '10px' }}>
                  — The Brooks Mandate
                </span>
              </blockquote>
            </div>

            <div className="glass-card reveal-right active" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
              <h3 style={{ color: 'var(--color-sunlight)', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px' }}>
                What We Do
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>⛪ <strong>Sunday Services</strong> — Weekly gatherings built on prayer and the Word</li>
                <li>📖 <strong>Bible Study Groups</strong> — Deep-dive scriptural grounding</li>
                <li>🎓 <strong>Campus Outreaches</strong> — Taking the Gospel to universities</li>
                <li>⛺ <strong>Annual Camp Retreat</strong> — The Confluence Camp Retreat</li>
                <li>🌍 <strong>Kingdom Missions</strong> — Local evangelism and discipleship</li>
              </ul>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why The Brooks ── */}
      <section className="wtb-section">

        {/* Section header */}
        <div className="wtb-header">
          <div className="wtb-header-eyebrow">
            <span className="wtb-eyebrow-line" aria-hidden="true" />
            Our Values
            <span className="wtb-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 className="wtb-heading">Why The Brooks?</h2>
          <p className="wtb-subheading">
            We don't just build a church — we build an army of frontliners
            carrying faith into every sphere of society.
          </p>
        </div>

        {/* Cards grid */}
        <div className="container">
          <div className="wtb-grid">
            {[
              {
                num: "01",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Encounter God",
                desc: "Encounter God in a deeper and more personal way — beyond the ordinary into the extraordinary.",
              },
              {
                num: "02",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.232.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                title: "Biblical Teaching",
                desc: "Receive biblical teaching that strengthens your faith and daily walk with God.",
              },
              {
                num: "03",
                icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
                title: "Worship & Prayer",
                desc: "Experience powerful moments of worship, prayer, and spiritual impartation.",
              },
              {
                num: "04",
                icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                title: "Purpose & Destiny",
                desc: "Gain clarity concerning purpose, calling, and the direction God has for your life.",
              },
              {
                num: "05",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Kingdom Community",
                desc: "Connect with a community of believers who share a genuine hunger for God.",
              },
              {
                num: "06",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                title: "Leave Transformed",
                desc: "Leave refreshed, empowered, and equipped for the next season of your journey with God.",
              },
            ].map((item) => (
              <div key={item.title} className="wtb-card">
                <div className="wtb-card-top">
                  <span className="wtb-card-num">{item.num}</span>
                  <div className="wtb-card-icon-wrap">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="wtb-card-title">{item.title}</h3>
                <p className="wtb-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* ── Confluence Teaser ── */}
      <section className="confluence-teaser-section">
        {/* Background decorative element */}
        <div className="confluence-teaser-glow" aria-hidden="true" />

        <div className="container">
          <div className="confluence-teaser-grid">
            
            {/* Left Column: Description & Action */}
            <div className="confluence-teaser-left">
              <span className="confluence-teaser-eyebrow">Annual Event</span>
              <h2 className="confluence-teaser-heading">The Confluence Camp Retreat</h2>
              <p className="confluence-teaser-text">
                Every year, The Brooks convenes the Confluence Camp Retreat — an intense 3-day gathering of believers for worship, prayer, and deep biblical teaching in a camp environment.
              </p>
              <p className="confluence-teaser-text text-secondary">
                The 2026 edition themed <strong>Behold the Glory of God</strong> took place on 23rd–25th July at Redemption City of God, gathering over 500 participants for four powerful sessions: Opening Night, Day Two, Glory Night, and Thanksgiving.
              </p>
              <div className="confluence-teaser-cta-wrap">
                <Link href="/confluence" className="confluence-teaser-btn">
                  Explore Confluence Sessions
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive cards */}
            <div className="confluence-teaser-right">
              <div className="confluence-teaser-cards">
                {[
                  { icon: "🌙", label: "Opening Night", desc: "Worship & the opening message" },
                  { icon: "☀️", label: "Day Two", desc: "Morning, Afternoon & Evening sessions" },
                  { icon: "✨", label: "Glory Night", desc: "A night of deep encounter" },
                  { icon: "🙏", label: "Thanksgiving", desc: "Closing service & commissioning" },
                ].map((s, idx) => (
                  <div key={s.label} className="confluence-teaser-card">
                    <div className="confluence-teaser-card-icon-wrap">
                      <span className="confluence-teaser-card-icon">{s.icon}</span>
                    </div>
                    <div className="confluence-teaser-card-content">
                      <h4 className="confluence-teaser-card-title">{s.label}</h4>
                      <p className="confluence-teaser-card-desc">{s.desc}</p>
                    </div>
                    <span className="confluence-teaser-card-num">0{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── Explore The Brooks ── */}
      <section className="tbm-explore-section">
        <div className="container">
          <div className="tbm-explore-header">
            <h2 className="tbm-explore-title">Explore The Brooks</h2>
            <p className="tbm-explore-subtitle">
              Everything you need to connect with, serve in, and support The Brooks Ministry.
            </p>
          </div>

          <div className="tbm-explore-grid">
            {/* Card 1: About */}
            <Link href="/about" className="tbm-explore-card reveal-scale active">
              <div className="tbm-explore-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="tbm-explore-content">
                <h3 className="tbm-explore-card-title">About The Ministry</h3>
                <p className="tbm-explore-card-desc">
                  Discover the vision, mission, identity, and programs of The Brooks Ministry. Learn who we are and what drives us.
                </p>
              </div>
              <div className="tbm-explore-arrow">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>

            {/* Card 2: Volunteer */}
            <Link href="/volunteer" className="tbm-explore-card reveal-scale active">
              <div className="tbm-explore-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <div className="tbm-explore-content">
                <h3 className="tbm-explore-card-title">Volunteer</h3>
                <p className="tbm-explore-card-desc">
                  Find your service unit and join one of our 8 departments. Serving at The Brooks is an act of worship.
                </p>
              </div>
              <div className="tbm-explore-arrow">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>

            {/* Card 3: Partner */}
            <Link href="/partners" className="tbm-explore-card reveal-scale active">
              <div className="tbm-explore-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="tbm-explore-content">
                <h3 className="tbm-explore-card-title">Partner With Us</h3>
                <p className="tbm-explore-card-desc">
                  Support the ministry through giving, sponsorship, or facility partnerships. Your seed advances the Kingdom.
                </p>
              </div>
              <div className="tbm-explore-arrow">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>

            {/* Card 4: Confluence (Highlight) */}
            <Link href="/confluence" className="tbm-explore-card tbm-explore-highlight reveal-scale active">
              <div className="tbm-explore-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
                </svg>
              </div>
              <div className="tbm-explore-content">
                <h3 className="tbm-explore-card-title">The Confluence</h3>
                <p className="tbm-explore-card-desc">
                  Watch sessions, read about past editions, and explore everything about our annual camp retreat.
                </p>
              </div>
              <div className="tbm-explore-arrow">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
