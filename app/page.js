"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCMS } from '@/context/CMSContext';
import CountdownTimer from '@/components/CountdownTimer';
import SpeakerModal from '../components/SpeakerModal';

export default function HomePage() {
  const { state, isHydrated } = useCMS();
  const [modalSpeaker, setModalSpeaker] = useState(null);

  const openModal = (speaker) => setModalSpeaker(speaker);
  const closeModal = () => setModalSpeaker(null);

  // Helper to split text by paragraphs
  const renderParagraphs = (text, isLead = false) => {
    if (!text) return null;
    return text.split("\n\n").filter(p => p.trim() !== "").map((p, idx) => (
      <p
        key={idx}
        className={isLead ? "about-lead" : ""}
        style={isLead ? {} : { fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: "1.75", color: "#2c2c3e", margin: "0 0 15px 0" }}
        dangerouslySetInnerHTML={{ __html: p.trim().replace(/\n/g, '<br>') }}
      />
    ));
  };

  const getCtaLink = (hash) => {
    if (hash === "#register") return "/register";
    if (hash === "#volunteer") return "/volunteer";
    if (hash === "#partners") return "/partners";
    if (hash === "#about") return "/about";
    if (hash === "#contact") return "/contact";
    if (hash === "#experience") return "/experience";
    if (hash === "#faq") return "/faq";
    if (hash === "#home") return "/";
    return hash || "/";
  };

  const speakersList = Array.isArray(state.speakers) ? state.speakers : [];
  const featuredSpeaker = speakersList.find(speaker => /conver|convener/i.test(speaker.role) || speaker.name === "Erioluwa Adeyinka");
  const otherSpeakers = featuredSpeaker
    ? speakersList.filter(speaker => speaker.id !== featuredSpeaker.id)
    : speakersList;

  // Prevent flash of static values before local storage loads
  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-brooks-blue)' }}></div>;
  }

  return (
    <div className="page-view active-view" id="view-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-grid">
          {/* Left Side: Text and Countdown Content */}
          <div className="hero-text-side">
            <h1 className="hero-title" id="cms-hero-title">
              {state.retreatTagline || "The CONFLUENCE CAMP RETREAT 2026"}
            </h1>
            <div className="hero-tag" id="cms-hero-tag">Theme: {state.retreatTheme}</div>

            {/* Live Countdown Timer */}
            <CountdownTimer targetDateStr={state.retreatCountdownTarget} />

            <div className="hero-meta">
              <div className="hero-meta-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span id="cms-meta-dates">{state.retreatDates}</span>
              </div>
              <div className="hero-meta-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span id="cms-meta-venue">{state.retreatVenue}</span>
              </div>
              <div className="hero-meta-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Free Registration</span>
              </div>
            </div>

            <div className="btn-group">
              <Link href="/register" className="btn btn-primary">Register Now</Link>
              <Link href="/volunteer" className="btn btn-secondary">Volunteer</Link>
            </div>
          </div>

          {/* Right Side: Image Showcase */}
          <div className="hero-image-side">
              <div className="hero-img-frame">
              <img src="/heroo.jpeg" alt="The CONFLUENCE CAMP RETREAT" />
            </div>
          </div>
        </div>
      </section>

      {modalSpeaker && (
        <SpeakerModal speaker={modalSpeaker} closeModal={closeModal} />
      )}

      {/* Vision Section */}
      <section id="home-vision-sec" className="bg-brooks">
        <div className="container">
          <div className="vision-grid">
            <div className="reveal-left active">
              <h2 style={{ textAlign: 'left', marginBottom: '24px', paddingBottom: '10px' }} id="cms-home-vision-header">
                {state.homeVisionHeader}
              </h2>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-sunlight)', marginBottom: '30px' }}></div>
              <div id="cms-home-vision-text">
                {renderParagraphs(state.homeVisionText)}
              </div>
              <blockquote className="featured-quote">
                <span id="cms-home-vision-quote">{state.homeVisionQuote}</span> <br />
                <span id="cms-home-vision-quote-ref" style={{
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  color: 'var(--color-sunlight)',
                  display: 'block',
                  marginTop: '10px'
                }}>{state.homeVisionQuoteRef}</span>
              </blockquote>
            </div>

            <div className="glass-card reveal-right active" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
              <h3 style={{ color: 'var(--color-sunlight)', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px' }}>
                Retreat Details
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li><strong>🗓 Dates:</strong> {state.retreatDates}</li>
                <li><strong>📍 Venue:</strong> {state.retreatVenue.split(',')[0]}</li>
                <li><strong>💰 Fee:</strong> 100% Free</li>
                <li><strong>🏠 Accommodation:</strong> Provided (Free)</li>
                <li><strong>🍲 Feeding:</strong> Provided (Free)</li>
              </ul>
              <Link href="/register" className="btn btn-primary" style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                Register For Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Announcements Section */}
      {state.announcementActive && (
        <section className="bg-off-white" id="announcements-sec-wrap">
          <div className="container">
            <div className="announcement-card animate-pulse-slow">
              <div className="announcement-header">
                <span className="announcement-badge">
                  <span className="pulse-dot"></span>
                  Latest Announcement
                </span>
              </div>
              <div className="announcement-content">
                <div className="announcement-body">
                  <p id="cms-announcement-text" className="force-white-bold">{state.announcementText}</p>
                </div>
                <div className="announcement-action">
                  <Link href={getCtaLink(state.announcementCtaHash)} className="btn btn-primary" id="cms-announcement-cta">
                    {state.announcementCtaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Attend Section */}
      <section className="bg-brooks">
        <div className="container">
          <h2>Why Attend The CONFLUENCE CAMP RETREAT?</h2>
          <p style={{ textAlign: 'center', maxWidth: '680px', margin: '-20px auto 50px', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            The CONFLUENCE CAMP RETREAT is for those who desire more than inspiration; it is for those seeking genuine transformation.
          </p>

          <div className="why-attend-grid">
            <div className="reason-item glass-card reveal-scale active">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="reason-title">Encounter God</h3>
                <p>Encounter God in a deeper and more personal way — beyond the ordinary into the extraordinary.</p>
              </div>
            </div>

            <div className="reason-item glass-card reveal-scale active">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.232.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="reason-title">Biblical Teaching</h3>
                <p>Receive biblical teaching that strengthens your faith and daily walk with God.</p>
              </div>
            </div>

            <div className="reason-item glass-card reveal-scale active">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 className="reason-title">Worship & Prayer</h3>
                <p>Experience powerful moments of worship, prayer, and spiritual impartation.</p>
              </div>
            </div>

            <div className="reason-item glass-card reveal-scale active">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h3 className="reason-title">Purpose & Destiny</h3>
                <p>Gain clarity concerning purpose, calling, and the direction God has for your life.</p>
              </div>
            </div>

            <div className="reason-item glass-card reveal-scale active">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="reason-title">Kingdom Community</h3>
                <p>Connect with a community of believers who share a genuine hunger for God.</p>
              </div>
            </div>

            <div className="reason-item glass-card reveal-scale active">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="reason-title">Step Away & Focus</h3>
                <p>Step away from the distractions of everyday life to focus fully and completely on God.</p>
              </div>
            </div>

            <div className="reason-item glass-card reveal-scale active">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="reason-title">Leave Transformed</h3>
                <p>Leave refreshed, empowered, and equipped for the next season of your journey with God.</p>
              </div>
            </div>
          </div>

          {/* Theme Banner */}
          <div className="reveal active" style={{ marginTop: '70px', position: 'relative', textAlign: 'center', overflow: 'hidden', padding: '70px 30px' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(240,180,41,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
            <div style={{ width: '50px', height: '3px', background: 'var(--color-sunlight)', margin: '0 auto 28px', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-sunlight)', marginBottom: '20px', fontWeight: 700, opacity: 0.9 }}>This Year's Theme</p>
            <div style={{ fontSize: '8rem', lineHeight: 0.5, color: 'var(--color-sunlight)', opacity: 0.15, fontFamily: 'Georgia, serif', marginBottom: '10px', userSelect: 'none' }}>"</div>
            <h3 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '0.01em', margin: '0 auto 20px', maxWidth: '700px', textTransform: 'uppercase' }}>
              {state.retreatTheme}
            </h3>
            <p style={{ maxWidth: '560px', margin: '0 auto 28px', color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
              An invitation to fix our gaze on God, experience His glory afresh, and be transformed by what we behold.
            </p>
            <div style={{ width: '50px', height: '3px', background: 'var(--color-sunlight)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/register" className="btn btn-primary btn-lg">Register for The CONFLUENCE CAMP RETREAT 2026</Link>
          </div>
        </div>
      </section>

      {/* Speakers Section on Homepage */}
      {speakersList.length > 0 && (
      <section className="bg-off-white" id="homepage-speakers-sec" style={{ padding: '90px 0', borderBottom: '1px solid rgba(10, 102, 194, 0.05)' }}>
        <div className="container">
          <div className="ministers-intro">
            <span className="section-label">Guest & Worship Ministers</span>
            <h2>Meet those leading us into worship and encounter</h2>
            <p>These ministers are prepared to carry the retreat atmosphere with powerful praise, teaching, and prophetic ministry.</p>
          </div>

          <>
            {featuredSpeaker && (
                <div className="featured-speaker-wrap">
                  <article className="speaker-card speaker-card-featured" key={featuredSpeaker.id} onClick={() => openModal(featuredSpeaker)} style={{ cursor: 'pointer' }}>
                    <div className="featured-speaker-grid">
                      <div className="speaker-avatar-wrap speaker-avatar-large">
                        {featuredSpeaker.avatar ? (
                          <img src={featuredSpeaker.avatar} alt={featuredSpeaker.name} />
                        ) : (
                          <svg className="speaker-placeholder-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '90px', height: '90px', color: 'rgba(252, 238, 33, 0.9)', transition: 'transform 0.4s ease' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        )}
                      </div>
                      <div className="featured-speaker-copy">
                        <span className="featured-badge">Convener</span>
                        <h3 className="speaker-name">{featuredSpeaker.name}</h3>
                        <p className="speaker-role">{featuredSpeaker.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              <div className="speakers-grid" id="cms-speakers-list">
                {otherSpeakers.map(speaker => {
                  const isPlaceholder = !speaker.avatar || (!speaker.avatar.startsWith("http") && !speaker.avatar.startsWith("/") && speaker.avatar.length <= 4);
                  return (
                    <article className="speaker-card" key={speaker.id} onClick={() => openModal(speaker)} style={{ cursor: 'pointer' }}>
                      <div className="speaker-avatar-wrap">
                        {isPlaceholder ? (
                          <svg className="speaker-placeholder-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '70px', height: '70px', color: 'rgba(252, 238, 33, 0.75)', transition: 'transform 0.4s ease' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        ) : (
                          <img src={speaker.avatar} alt={speaker.name} />
                        )}
                      </div>
                      <div className="card-body">
                        <h3 className="speaker-name">{speaker.name}</h3>
                        <p className="speaker-role">{speaker.role}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
        </div>
      </section>
      )}

      {/* Retreat Portals & Directories */}
      <section className="bg-off-white" style={{ borderBottom: 'none' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Explore the Retreat</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px', color: 'var(--color-text-muted)' }}>
            Navigate through our retreat portals to prepare your heart and logistics for The CONFLUENCE CAMP RETREAT 2026.
          </p>

          <div className="explore-grid">
            <div className="explore-card reveal-scale active">
              <div>
                <div className="explore-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="explore-card-title">Camp Experience</h3>
                <p className="explore-card-text">
                  Understand the spiritual guidelines, lodging accommodations, free welfare feeding systems, and details on what items you need to pack for the 3-day camp.
                </p>
              </div>
              <div>
                <Link href="/experience" className="explore-action-btn explore-action-btn-secondary">
                  View Experience &rarr;
                </Link>
              </div>
            </div>

            <div className="explore-card reveal-scale active">
              <div>
                <div className="explore-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="explore-card-title">Ministers & Speakers</h3>
                <p className="explore-card-text">
                  Meet the vessels, preachers, and worship leaders prepared by the Holy Spirit to guide us into transforming encounters with the Glory of God.
                </p>
              </div>
              <div>
                <Link href="/#homepage-speakers-sec" className="explore-action-btn explore-action-btn-secondary">
                  Meet Speakers &rarr;
                </Link>
              </div>
            </div>

            <div className="explore-card reveal-scale active">
              <div>
                <div className="explore-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="explore-card-title">Frequently Asked Questions</h3>
                <p className="explore-card-text">
                  Find instant answers to questions regarding transportation routes, pick-up hubs, guidelines for daily campers, and registration requirements.
                </p>
              </div>
              <div>
                <Link href="/faq" className="explore-action-btn explore-action-btn-secondary">
                  Read FAQs &rarr;
                </Link>
              </div>
            </div>

            <div className="explore-card explore-card-highlight reveal-scale active">
              <div>
                <div className="explore-icon-box">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="explore-card-title">Camp Registration</h3>
                <p className="explore-card-text">
                  Secure your free entry pass, hostel reservations, and meal tickets. Registration is free but strictly mandatory for logistics and feeding.
                </p>
              </div>
              <div>
                <Link href="/register" className="explore-action-btn explore-action-btn-primary">
                  Register Free Now &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
