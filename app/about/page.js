"use client";

import React from 'react';
import { useCMS } from '@/context/CMSContext';

export default function AboutPage() {
  const { state, isHydrated } = useCMS();

  // Helper to split text by paragraphs
  const renderParagraphs = (text, isLead = false) => {
    if (!text) return null;
    return text.split("\n\n").filter(p => p.trim() !== "").map((p, idx) => (
      <p
        key={idx}
        className={isLead ? "about-lead" : ""}
        style={isLead ? { fontSize: '1rem', opacity: 0.88, marginTop: '14px' } : { fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: "1.75", color: "#2c2c3e", margin: "0 0 15px 0" }}
        dangerouslySetInnerHTML={{ __html: p.trim().replace(/\n/g, '<br>') }}
      />
    ));
  };

  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-brooks-blue)' }}></div>;
  }

  return (
    <div className="page-view active-view" id="view-about">
      {/* Redesigned About Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-text reveal-left active">
              <span className="about-tag">✦ THE MINISTRY</span>
              <h1>About The Brooks</h1>
              <div id="cms-about-hero-text">
                <p className="about-lead">
                  <strong style={{ color: 'var(--color-sunlight)', fontWeight: 800 }}>The Brooks</strong> is a non-denominational Christian movement with a singular focus: raising frontliners and pioneers for the Kingdom of God.
                </p>
                <p className="about-lead" style={{ fontSize: '1.05rem', opacity: 0.88, marginTop: '14px' }}>
                  Through campus outreaches, university fellowships, Bible study groups, camps, and local evangelism, we create pathways for students and young leaders to discover their place in God's purpose and deploy into purposeful kingdom service.
                </p>
              </div>
            </div>
            <div className="about-hero-showcase reveal-right active" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <img src="/Asset 8mom.png" alt="The Brooks" className="about-hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="bg-off-white" style={{ padding: '90px 0 70px' }}>
        <div className="container">
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: 'var(--color-brooks-blue)', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0 }}>
              The Brooks
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '16px auto 0' }}></div>
          </div>

          {/* Grid: Text Left, Image Right */}
          <div className="grid-2 reveal active" style={{ alignItems: 'center', gap: '50px' }}>
            {/* Left Side: Text Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: '#2c2c3e', margin: 0 }}>
                The Brooks is a non-denominational Christian ministry with a singular focus: raising frontliners and pioneers for the kingdom of God. We exist to see a generation of young people who are not merely church-attending believers, but spiritually activated, doctrinally grounded, and kingdom-sent agents of transformation.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: '#2c2c3e', margin: 0 }}>
                Through campus outreaches, university fellowships, Bible study groups, camps, and local evangelism, the ministry creates pathways for students and young leaders to discover their place in God's purpose, develop their spiritual capacity, and deploy into purposeful kingdom service.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: '#2c2c3e', margin: 0 }}>
                Our conviction is simple: the next generation of kingdom pioneers will be built on the altar of prayer, the foundation of sound scripture, and the fire of consecrated living.
              </p>
            </div>

            {/* Right Side: Image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/Asset 5mom.png" alt="The Brooks Ministry Logo" style={{ width: '100%', maxWidth: '420px', mixBlendMode: 'multiply', opacity: 0.95, objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Identity & Strategy Section (Redesigned) */}
      <section className="tbm-identity-section">
        <div className="container">
          <div className="tbm-identity-grid">
            {/* Our Identity */}
            <div className="tbm-identity-card reveal-left active">
              <div className="tbm-identity-icon-wrapper">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="tbm-identity-title">Our Identity</h3>
              <p id="cms-about-identity-text" className="tbm-identity-text">
                {state.aboutIdentityText}
              </p>
            </div>

            {/* Our Strategy */}
            <div className="tbm-identity-card reveal-right active">
              <div className="tbm-identity-icon-wrapper">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="tbm-identity-title">Our Strategy</h3>
              <p id="cms-about-strategy-text" className="tbm-identity-text">
                {state.aboutStrategyText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile Section */}
      <section className="bg-off-white" style={{ padding: '100px 0', borderTop: '1px solid rgba(10, 102, 194, 0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            {/* Image Side */}
            <div className="reveal-left active" style={{ position: 'relative' }}>
              <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)' }}>
                <img src="/Eri.JPG" alt="Pastor Erioluwa Adeyinka" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/5' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 66, 170, 0.4) 0%, transparent 50%)' }}></div>
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--color-sunlight)', width: '120px', height: '120px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: -1, opacity: 0.5 }}></div>
            </div>

            {/* Text Side */}
            <div className="reveal-right active">
              <span style={{ display: 'inline-block', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 700, marginBottom: '16px', background: 'rgba(10, 66, 170, 0.05)', padding: '6px 14px', borderRadius: '20px' }}>
                Lead Pastor
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-brooks-blue)', margin: '0 0 24px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Pastor Erioluwa Adeyinka
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: 1.8, color: '#475569', margin: 0 }}>
                  Pastor Erioluwa Adeyinka is the Lead Pastor of The Brooks, driving the vision of raising frontliners and pioneers for the Kingdom of God across campuses and cities.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: 1.8, color: '#475569', margin: 0 }}>
                  With a deep passion for spiritual awakening, sound doctrine, and consecrated living, he leads a growing movement dedicated to seeing young people encounter the transforming power of the Holy Spirit.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: 1.8, color: '#475569', margin: 0 }}>
                  His apostolic leadership has birthed numerous campus fellowships, outreaches, and the annual Confluence Camp Retreat, mobilizing thousands into active Kingdom service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Primary Goal Section */}
      <section style={{ backgroundColor: 'var(--color-brooks-blue)', padding: '100px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
        <div className="container">
          <div className="reveal active" style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-sunlight)', fontWeight: 700, marginBottom: '16px' }}>
              The Brooks
            </p>
            <h2 style={{ color: '#ffffff', margin: '0 0 20px', fontSize: 'clamp(2.5rem, 5vw, 3.2rem)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', fontWeight: 800 }}>
              The Primary Goal
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
            {/* Step 1: Identify */}
            <div className="reveal-scale active" style={{ position: 'relative', background: 'var(--color-pure-white)', borderRadius: '24px', padding: '48px 40px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'transform 0.4s ease', border: '1px solid rgba(10, 66, 170, 0.1)' }}>
              <div style={{ position: 'absolute', top: '16px', right: '24px', fontSize: '8rem', fontWeight: 900, color: 'rgba(10, 66, 170, 0.04)', fontFamily: 'var(--font-heading)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                01
              </div>
              <div style={{ width: '72px', height: '72px', borderRadius: '24px', background: 'var(--color-brooks-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: '0 8px 20px rgba(10, 66, 170, 0.2)' }}>
                <svg width="32" height="32" fill="none" stroke="var(--color-sunlight)" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 800, marginBottom: '12px' }}>
                Step 01
              </p>
              <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, marginBottom: '16px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Identify
              </h3>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, margin: 0, color: 'var(--color-brooks-blue)', fontWeight: 700 }}>
                Spotting the potential in believers across various professional and social walks of life.
              </p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: 'var(--color-brooks-blue)' }}></div>
            </div>

            {/* Step 2: Empower */}
            <div className="reveal-scale active" style={{ position: 'relative', background: 'var(--color-pure-white)', borderRadius: '24px', padding: '48px 40px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'transform 0.4s ease', transitionDelay: '0.1s', border: '1px solid rgba(10, 66, 170, 0.1)' }}>
              <div style={{ position: 'absolute', top: '16px', right: '24px', fontSize: '8rem', fontWeight: 900, color: 'rgba(10, 66, 170, 0.04)', fontFamily: 'var(--font-heading)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                02
              </div>
              <div style={{ width: '72px', height: '72px', borderRadius: '24px', background: 'var(--color-brooks-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: '0 8px 20px rgba(10, 66, 170, 0.2)' }}>
                <svg width="32" height="32" fill="none" stroke="var(--color-sunlight)" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 800, marginBottom: '12px' }}>
                Step 02
              </p>
              <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, marginBottom: '16px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Empower
              </h3>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, margin: 0, color: 'var(--color-brooks-blue)', fontWeight: 700 }}>
                Providing the tools, spiritual depth, and skills needed to lead with authority.
              </p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: 'var(--color-brooks-blue)' }}></div>
            </div>

            {/* Step 3: Deploy */}
            <div className="reveal-scale active" style={{ position: 'relative', background: 'var(--color-pure-white)', borderRadius: '24px', padding: '48px 40px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'transform 0.4s ease', transitionDelay: '0.2s', border: '1px solid rgba(10, 66, 170, 0.1)' }}>
              <div style={{ position: 'absolute', top: '16px', right: '24px', fontSize: '8rem', fontWeight: 900, color: 'rgba(10, 66, 170, 0.04)', fontFamily: 'var(--font-heading)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                03
              </div>
              <div style={{ width: '72px', height: '72px', borderRadius: '24px', background: 'var(--color-brooks-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: '0 8px 20px rgba(10, 66, 170, 0.2)' }}>
                <svg width="32" height="32" fill="none" stroke="var(--color-sunlight)" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <p style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 800, marginBottom: '12px' }}>
                Step 03
              </p>
              <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, marginBottom: '16px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Deploy
              </h3>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, margin: 0, color: 'var(--color-brooks-blue)', fontWeight: 700 }}>
                Sending out visionaries, pioneers, and frontliners to the edges of cultural impact.
              </p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: 'var(--color-brooks-blue)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="reveal active" style={{ padding: '120px 40px', background: 'var(--color-pure-white)', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24rem', color: 'rgba(10, 66, 170, 0.03)', fontFamily: 'var(--font-heading)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', zIndex: 0 }}>
          "
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-river-blue)', fontWeight: 800, marginBottom: '40px' }}>
            Mission Statement
          </p>
          <blockquote style={{ margin: '0 0 40px', padding: 0, border: 'none', background: 'none' }}>
            <p id="cms-about-mandate-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontStyle: 'italic', color: 'var(--color-brooks-blue)', lineHeight: 1.4, margin: 0, letterSpacing: '-0.02em' }}>
              "{state.aboutMandateText}"
            </p>
          </blockquote>
          <div style={{ width: '60px', height: '3px', background: 'var(--color-sunlight)', margin: '0 auto 24px', borderRadius: '2px' }}></div>
          <p style={{ fontSize: '1rem', color: 'var(--color-brooks-blue)', margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            The Brooks Mandate
          </p>
        </div>
      </section>

      {/* Frontier Spirit Section */}
      <section className="bg-off-white reveal active" style={{ padding: '90px 0', borderBottom: '1px solid rgba(10, 102, 194, 0.06)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px' }}>
              <div style={{ width: '4px', height: '36px', background: 'var(--color-sunlight)', borderRadius: '2px' }}></div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--color-brooks-blue)', margin: 0, lineHeight: 1 }}>
                Frontier Spirit
              </h2>
            </div>
            <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, marginBottom: '24px' }}>
              Visionaries & Pioneers
            </h3>
            <p style={{ color: '#2c2c3e', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '20px' }}>
              We are not just building a church; we are raising an army of frontliners. These are believers who take their faith into the boardrooms, the labs, and the creative studios of the world.
            </p>
            <p style={{ color: '#2c2c3e', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: 0 }}>
              They are the pioneers of a new move of God, breaking ground where others see only obstacles.
            </p>
          </div>
        </div>
      </section>

      {/* Vision 2050 Section */}
      <section className="bg-brooks reveal active" style={{ padding: '90px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '60px' }}>
            <div style={{ width: '4px', height: '36px', background: 'var(--color-sunlight)', borderRadius: '2px' }}></div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1 }}>
              Vision 2050
            </h2>
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '60px', marginBottom: 0 }}>
            <div className="reveal-left active" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 'clamp(5rem, 10vw, 8rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--color-sunlight)', lineHeight: 1, marginBottom: '10px' }}>
                1M
              </div>
              <div style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 700, opacity: 0.9 }}>
                Kingdom Missions
              </div>
            </div>

            <div className="reveal-right active">
              <h3 style={{ color: 'var(--color-sunlight)', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '20px' }}>
                Global Transformation
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.8, margin: 0 }}>
                Our long-term benchmark is the large-scale deployment of spiritual outposts. By 2050, The Brooks aims to have established one million Kingdom missions globally, fostering a continuous cycle of disciple-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Methodology Section */}
      <section className="reveal active" style={{ backgroundColor: 'var(--color-off-white)', padding: '120px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-river-blue)', fontWeight: 800, marginBottom: '16px' }}>
              The Brooks
            </p>
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 20px', fontSize: 'clamp(2.5rem, 5vw, 3.2rem)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', fontWeight: 800 }}>
              Core Methodology
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {/* Card 1: Equipping */}
            <div className="reveal-scale active" style={{ background: 'var(--color-pure-white)', borderRadius: '24px', padding: '48px 40px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(10, 66, 170, 0.08)', transition: 'transform 0.3s ease', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--color-brooks-blue)' }}></div>
              <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10, 66, 170, 0.04)', borderRadius: '16px', marginBottom: '32px' }}>
                <svg width="28" height="28" fill="none" stroke="var(--color-brooks-blue)" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                Equipping
              </h3>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', margin: 0, fontWeight: 500 }}>
                Arming the generation with scriptural truth and practical leadership competence.
              </p>
            </div>

            {/* Card 2: Nurturing */}
            <div className="reveal-scale active" style={{ background: 'var(--color-pure-white)', borderRadius: '24px', padding: '48px 40px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(10, 66, 170, 0.08)', transition: 'transform 0.3s ease', transitionDelay: '0.1s', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--color-brooks-blue)' }}></div>
              <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10, 66, 170, 0.04)', borderRadius: '16px', marginBottom: '32px' }}>
                <svg width="28" height="28" fill="none" stroke="var(--color-brooks-blue)" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                Nurturing
              </h3>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', margin: 0, fontWeight: 500 }}>
                Providing the spiritual environment where faith and character can flourish.
              </p>
            </div>

            {/* Card 3: Discipling */}
            <div className="reveal-scale active" style={{ background: 'var(--color-pure-white)', borderRadius: '24px', padding: '48px 40px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(10, 66, 170, 0.08)', transition: 'transform 0.3s ease', transitionDelay: '0.2s', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--color-brooks-blue)' }}></div>
              <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10, 66, 170, 0.04)', borderRadius: '16px', marginBottom: '32px' }}>
                <svg width="28" height="28" fill="none" stroke="var(--color-brooks-blue)" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                Discipling
              </h3>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', margin: 0, fontWeight: 500 }}>
                Hands-on discipleship to ensure the DNA of Christ is replicated globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiring Faith Section */}
      <section className="bg-brooks reveal active" style={{ padding: '90px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '80px', height: '3px', background: 'rgba(255, 255, 255, 0.4)', marginBottom: '24px', borderRadius: '2px' }}></div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', margin: '0 0 12px', letterSpacing: '0.03em', lineHeight: '1.1' }}>
              Inspiring Faith
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontFamily: 'var(--font-body)', margin: 0 }}>
              For this generation and the ones to come.
            </p>
          </div>
        </div>
      </section>

      {/* Past Programs Section */}
      {/* Past Programs Section */}
      <section className="bg-off-white" id="about-programs-sec" style={{ borderTop: '1px solid rgba(10, 102, 194, 0.05)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 700, opacity: 0.75 }}>
              Our Journey
            </span>
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '10px 0 0', marginTop: 0 }}>
              Past Programs &amp; Events
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '16px auto 0' }}></div>
          </div>
          <div className="timeline">
            <div className="timeline-item timeline-left reveal-left active">
              <div className="timeline-content">
                <span className="timeline-date">Lambano</span>
                <h3>Lambano</h3>
                <p>
                  Lambano is a quarterly 10-hour prayer, Word, and worship session. It happens every second Friday of the month.
                </p>
              </div>
            </div>
            <div className="timeline-item timeline-right reveal-right active">
              <div className="timeline-content">
                <span className="timeline-date">Spirit Invasion</span>
                <h3>Spirit Invasion</h3>
                <p>
                  A powerful outreach and encounter program designed to bring the presence of the Holy Spirit and bring Jesus into campuses and universities.
                </p>
              </div>
            </div>
            <div className="timeline-item timeline-left reveal-left active">
              <div className="timeline-content">
                <span className="timeline-date">Worship &amp; Word</span>
                <h3>Worship and Word</h3>
                <p>
                  A Thursday evening program where we come together to worship our Maker and to read His Word.
                </p>
              </div>
            </div>
            <div className="timeline-item timeline-right reveal-right active">
              <div className="timeline-content">
                <span className="timeline-date">Love Affair</span>
                <h3>Love Affair</h3>
                <p>
                  A special Word and worship program that happened before our inaugural service.
                </p>
              </div>
            </div>
            <div className="timeline-item timeline-left reveal-left active">
              <div className="timeline-content">
                <span className="timeline-date">2025</span>
                <h3>The Confluence Camp Retreat — First Edition</h3>
                <p>
                  The inaugural camp retreat gathered over 200 participants for an intense 3 days of prayers, teachings, and fellowship. Lives were transformed, and campus fellowships were birthed from this point.
                </p>
              </div>
            </div>
            <div className="timeline-item timeline-right reveal-right active">
              <div className="timeline-content">
                <span className="timeline-date">2026</span>
                <h3>The Confluence Camp Retreat 2026 — Behold the Glory</h3>
                <p>
                  500+ participants gathered at Redemption City of God. Four powerful sessions — Opening Night, Day Two, Glory Night, and Thanksgiving — carried the theme <em>Behold the Glory of God</em> into transforming encounters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
