"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// ─── Session Data ────────────────────────────────────────────────────────────
// Each minister has: name, role, avatar, session label, youtube link
const SESSIONS = [
  {
    id: "opening-night",
    label: "Opening Night",
    subtitle: "23rd July 2026 — Evening",
    icon: "🌙",
    color: "var(--color-brooks-blue)",
    ministers: [
      {
        name: "John Teidi",
        role: "Worship Minister",
        avatar: "/John Teidi.JPG",
        sessionLabel: "Opening Worship",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
      {
        name: "John Buoye",
        role: "Guest Minister",
        avatar: "/John.JPG",
        sessionLabel: "Opening Night Message",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
    ],
  },
  {
    id: "day-two",
    label: "Day Two",
    subtitle: "24th July 2026 — Morning to Evening",
    icon: "☀️",
    color: "#0a5cc7",
    ministers: [
      {
        name: "Solomon Adebayo",
        role: "Worship Minister",
        avatar: "/solomon.jpeg",
        sessionLabel: "Morning Worship",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
      {
        name: "Samuel Peniel",
        role: "Guest Minister",
        avatar: "/Samuel.jpg",
        sessionLabel: "Morning Session",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
      {
        name: "Doyinsola Owolabi",
        role: "Guest Minister",
        avatar: "/doyiin.jpeg",
        sessionLabel: "Afternoon Session",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
      {
        name: "Joseph Ajayi",
        role: "Guest Minister",
        avatar: "/Ajayi.jpg",
        sessionLabel: "Evening Session",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
    ],
  },
  {
    id: "glory-night",
    label: "Glory Night",
    subtitle: "24th July 2026 — Night",
    icon: "✨",
    color: "#0a3d8f",
    ministers: [
      {
        name: "Daniel Awodele",
        role: "Worship Minister",
        avatar: "/Daniel.jpg",
        sessionLabel: "Glory Night Worship",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
      {
        name: "Prince Ben David",
        role: "Guest Minister",
        avatar: "/Ben-David.jpg",
        sessionLabel: "Glory Night Message",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
      {
        name: "Oluwanifemi Dahunsi",
        role: "Guest Minister",
        avatar: "/Oluwanifemi Dahunsi.jpg",
        sessionLabel: "Glory Night Teaching",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
    ],
  },
  {
    id: "thanksgiving",
    label: "Thanksgiving",
    subtitle: "25th July 2026 — Closing",
    icon: "🙏",
    color: "#073080",
    ministers: [
      {
        name: "Erioluwa Adeyinka",
        role: "Convener — The Brooks Ministry",
        avatar: "/Eri.JPG",
        sessionLabel: "Thanksgiving & Closing Address",
        youtubeLink: "https://www.youtube.com/@The-BrooksMinistries",
      },
    ],
  },
];

// ─── Minister Card ────────────────────────────────────────────────────────────
function MinisterCard({ minister }) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid',
        borderColor: isHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 15px 35px rgba(0,0,0,0.2)' : 'none',
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }}
    >
      {/* Decorative Glow */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '100px',
        height: '100px',
        background: 'var(--color-sunlight)',
        opacity: isHovered ? 0.15 : 0.05,
        filter: 'blur(40px)',
        borderRadius: '50%',
        transition: 'opacity 0.3s ease'
      }} />

      <div style={{
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid var(--color-sunlight)',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.2)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        zIndex: 1
      }}>
        {!imgError && minister.avatar ? (
          <img
            src={minister.avatar}
            alt={minister.name}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            style={{ width: '40px', height: '40px', color: 'var(--color-sunlight)' }}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        )}
      </div>

      <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800, margin: '0 0 6px', fontFamily: 'var(--font-heading)', zIndex: 1 }}>
        {minister.name}
      </h4>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: '0 0 16px', zIndex: 1 }}>
        {minister.role}
      </p>

      <div style={{ margin: 'auto 0 24px', zIndex: 1 }}>
        <span style={{ 
          display: 'inline-block',
          color: 'var(--color-sunlight)',
          fontSize: '0.7rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          background: 'rgba(240, 180, 41, 0.1)',
          padding: '6px 14px',
          borderRadius: '100px',
          border: '1px solid rgba(240, 180, 41, 0.2)'
        }}>
          {minister.sessionLabel}
        </span>
      </div>

      <a
        href={minister.youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          background: isHovered ? 'var(--color-sunlight)' : 'rgba(255,255,255,0.1)',
          color: isHovered ? '#000' : '#fff',
          padding: '12px 24px',
          borderRadius: '100px',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 800,
          width: '100%',
          transition: 'all 0.3s ease',
          zIndex: 1
        }}
        aria-label={`Watch ${minister.name}'s ${minister.sessionLabel} on YouTube`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        Watch Session
      </a>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ConfluencePage() {
  return (
    <div className="page-view active-view" id="view-confluence">

      {/* ── Hero ── */}
      <section className="conf-hero-section">
        <div className="conf-hero-bg-pattern" aria-hidden="true" />
        <div className="container">
          <div className="conf-hero-inner">
            <span className="conf-hero-eyebrow">✦ THE BROOKS MINISTRY PRESENTS</span>
            <h1 className="conf-hero-title">The Confluence<br />Camp Retreat</h1>
            <p className="conf-hero-theme">Theme: <strong>Behold the Glory of God</strong></p>
            <div className="conf-hero-meta">
              <div className="conf-hero-meta-item">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>23rd – 25th July, 2026</span>
              </div>
              <div className="conf-hero-meta-item">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Redemption City of God, Ogun State</span>
              </div>
            </div>
            <div className="conf-hero-badges">
              <span className="conf-badge">2nd Edition</span>
              <span className="conf-badge conf-badge-gold">100% Free</span>
              <span className="conf-badge">Open to All</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── About the Retreat ── */}
      <section className="bg-off-white" style={{ padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 700, opacity: 0.75 }}>
              About the Event
            </span>
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '10px 0 0', fontSize: 'clamp(2rem, 4vw, 2.6rem)' }}>
              What is The Confluence?
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '16px auto 0' }} />
          </div>

          <div className="grid-2 reveal active" style={{ alignItems: 'center', gap: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: '#2c2c3e', margin: 0 }}>
                The Confluence Camp Retreat is the annual camp retreat of <strong style={{ color: 'var(--color-brooks-blue)' }}>The Brooks Ministry</strong> — a gathering designed to bring believers from different backgrounds into an atmosphere of worship, prayer, teaching, fellowship, and spiritual encounter.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: '#2c2c3e', margin: 0 }}>
                It is a place where hunger meets revelation, where destinies are aligned, and where lives are transformed through the power and presence of God. More than an event, Confluence Camp is a divine meeting point — a confluence of people, purpose, and God's presence.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: '#2c2c3e', margin: 0 }}>
                Over the course of three days, participants are immersed in an environment intentionally created for spiritual growth, deeper intimacy with God, and fresh encounters that produce lasting transformation.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="glass-card" style={{ padding: '36px', background: 'var(--color-brooks-blue)', border: 'none', width: '100%' }}>
                <h3 style={{ color: 'var(--color-sunlight)', fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                  2026 Edition Highlights
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
                  <li>🗓 <strong>Dates:</strong> 23rd – 25th July, 2026</li>
                  <li>📍 <strong>Venue:</strong> Redemption City of God</li>
                  <li>💰 <strong>Registration:</strong> 100% Free</li>
                  <li>🏠 <strong>Accommodation:</strong> Fully Provided</li>
                  <li>🍲 <strong>Feeding:</strong> 3 Meals Daily (Free)</li>
                  <li>👥 <strong>Attendance:</strong> 500+ Participants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sessions & Ministers ── */}
      <section className="bg-brooks" style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-sunlight)', fontWeight: 700 }}>
              2026 Ministers & Sessions
            </span>
            <h2 style={{ color: '#fff', margin: '10px 0 0', fontSize: 'clamp(2rem, 4vw, 2.6rem)' }}>
              Watch Every Session
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '16px auto 0', fontSize: '1.05rem', lineHeight: '1.7', fontFamily: 'var(--font-body)' }}>
              Relive the moments. Click any session below to watch on our YouTube channel.
            </p>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '24px auto 0' }} />
          </div>

          <div className="conf-sessions-list">
            {SESSIONS.map((session) => (
              <div key={session.id} className="conf-session-block">
                {/* Session Header */}
                <div className="conf-session-header">
                  <div className="conf-session-icon">{session.icon}</div>
                  <div>
                    <h3 className="conf-session-title">{session.label}</h3>
                    <p className="conf-session-subtitle">{session.subtitle}</p>
                  </div>
                  <div className="conf-session-line" aria-hidden="true" />
                </div>

                {/* Ministers Grid */}
                <div className="conf-ministers-grid">
                  {session.ministers.map((minister) => (
                    <MinisterCard key={minister.name} minister={minister} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Edition ── */}
      <section className="bg-off-white" style={{ padding: '90px 0', borderTop: '1px solid rgba(10, 102, 194, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 16px', fontSize: 'clamp(2rem, 4vw, 2.4rem)' }}>
              Retreat History
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '0 auto' }} />
          </div>
          <div className="timeline">
            <div className="timeline-item timeline-left reveal-left active">
              <div className="timeline-content">
                <span className="timeline-date">2025</span>
                <h3>The Confluence Camp Retreat — First Edition</h3>
                <p>
                  The inaugural edition gathered over 200 participants for an intense 3-day retreat of prayers, teachings, and fellowship at Redemption City of God. Lives were transformed, structural campus fellowships were birthed, and a movement was ignited.
                </p>
              </div>
            </div>
            <div className="timeline-item timeline-right reveal-right active">
              <div className="timeline-content">
                <span className="timeline-date">2026</span>
                <h3>The Confluence Camp Retreat 2026 — Behold the Glory</h3>
                <p>
                  The second edition expanded to over 500 participants centred on a singular theme: <em>Behold the Glory of God</em>. Four unforgettable sessions — Opening Night, Day Two, Glory Night, and Thanksgiving — marked a new chapter of encounter and transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '80px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0a45a0 0%, #0d5cc7 50%, #0a3d8f 100%)' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <div className="reveal active">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-sunlight)', fontWeight: 700, marginBottom: '12px' }}>
              The Brooks Ministry
            </p>
            <h2 style={{ color: '#fff', margin: '0 0 16px', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', textTransform: 'uppercase' }}>
              Want to Know More About Us?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: '1.7', fontFamily: 'var(--font-body)' }}>
              The Confluence is just one of the many things we do. Discover the full vision, mission, and programs of The Brooks Ministry.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn-primary" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                About The Brooks →
              </Link>
              <Link href="/partners" className="btn btn-secondary" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
