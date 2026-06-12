"use client";

import React, { useState } from 'react';
import { useCMS } from '@/context/CMSContext';

export default function PartnersPage() {
  const { state, isHydrated, registerPartner } = useCMS();
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !type) {
      alert("Please fill all required fields.");
      return;
    }
    const partnerData = {
      id: "part-" + Date.now(),
      name,
      email,
      phone,
      type,
      notes,
      timestamp: new Date().toLocaleString()
    };
    registerPartner(partnerData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setType("");
    setNotes("");
    setSubmitted(false);
  };

  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-brooks-blue)' }}></div>;
  }

  return (
    <div className="page-view active-view" id="view-partners">
      {/* Redesigned Partners Hero Section */}
      <section className="partners-hero-section">
        <div className="container">
          <div className="partners-hero-grid">
            <div className="partners-hero-text reveal-left active">
              <span className="partners-tag">✦ SPONSOR A CAMPER</span>
              <h1>Partner with the Vision</h1>
              <p className="about-lead">Support the retreat financially. Help us provide free feeding, lodging, and materials to university campers.</p>
              <p className="about-lead" style={{ fontSize: '1rem', opacity: 0.88, marginTop: '14px' }}>
                We believe that financial barriers should never stand in the way of a spiritual encounter. Through the generosity of our partners, we host over 500 campers completely free of charge. Your seed builds the altar.
              </p>
            </div>
            <div className="partners-hero-showcase reveal-right active">
              <div className="partners-stats-card">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Sponsorship Targets</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Free Camper Lodging & Food</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">₦15K</span>
                  <span className="stat-label">Covers One Camper</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Partnership / Power of Giving Section */}
      <section className="bg-off-white" style={{ padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <h2 style={{ color: 'var(--color-brooks-blue)', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, textTransform: 'uppercase' }}>
              The Power of Partnership
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '16px auto 0' }}></div>
          </div>

          <div className="grid-2 reveal active" style={{ alignItems: 'center', gap: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} id="cms-partners-call-text">
              {state.partnersCallText.split("\n\n").filter(p => p.trim() !== "").map((p, idx) => (
                <p key={idx} style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: '#2c2c3e', margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/Asset 8mom.png" alt="The Brooks Ministry Logo" style={{ width: '100%', maxWidth: '320px', opacity: 0.9, objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers Grid Section */}
      <section className="bg-off-white" style={{ padding: '90px 0', borderTop: '1px solid rgba(10, 102, 194, 0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 700, marginBottom: '12px', opacity: 0.75 }}>
              Choose How to Support
            </p>
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 16px', fontSize: 'clamp(2rem, 4vw, 2.6rem)', textTransform: 'uppercase' }}>
              Partnership Tiers
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '0 auto' }}></div>
          </div>

          <div className="partners-tiers-grid reveal active">
            {/* Sponsor a Camper */}
            <div className="tier-card">
              <div className="tier-icon-box">🎓</div>
              <h3 className="tier-title">Sponsor a Camper</h3>
              <p className="tier-desc">Cover the logistical cost of accommodation, 3 daily meals, and comprehensive retreat manuals for university students.</p>
              <div className="tier-amount">
                ₦15,000 <span className="tier-amount-sub">/ Camper</span>
              </div>
            </div>

            {/* Support Welfare */}
            <div className="tier-card">
              <div className="tier-icon-box">🍲</div>
              <h3 className="tier-title">Support the Welfare</h3>
              <p className="tier-desc">Contribute directly to the purchase of raw foodstuffs, kitchen operations, utility water, and campus outreach setups.</p>
              <div className="tier-amount">
                Custom <span className="tier-amount-sub">Welfare Offering</span>
              </div>
            </div>

            {/* General Support */}
            <div className="tier-card">
              <div className="tier-icon-box">🤝</div>
              <h3 className="tier-title">General Support</h3>
              <p className="tier-desc">Establish recurring support channels for long-term operations, media broadcasts, facilities rentals, and future camps.</p>
              <div className="tier-amount">
                Annual / Monthly <span className="tier-amount-sub">Pledge Details</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Banking Details Banner */}
      <section className="bg-brooks" style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <div className="reveal active">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-sunlight)', fontWeight: 700, marginBottom: '12px' }}>
              Direct Contributions
            </p>
            <h2 style={{ color: '#fff', margin: '0 0 24px', fontSize: 'clamp(2rem, 4vw, 2.5rem)', textTransform: 'uppercase' }}>
              Bank Transfer Details
            </h2>

            <div className="glass-card" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '35px 25px', borderRadius: 'var(--border-radius-lg)', display: 'inline-block', width: '100%', textAlign: 'left' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#fff' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-sunlight)', display: 'block', letterSpacing: '1px', marginBottom: '4px' }}>BANK NAME</span>
                  <strong id="cms-partners-bank-name" style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)' }}>{state.partnersBankName}</strong>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.08)' }}></div>

                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-sunlight)', display: 'block', letterSpacing: '1px', marginBottom: '4px' }}>ACCOUNT NAME</span>
                  <strong id="cms-partners-account-name" style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)' }}>{state.partnersAccountName}</strong>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.08)' }}></div>

                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-sunlight)', display: 'block', letterSpacing: '1px', marginBottom: '4px' }}>ACCOUNT NUMBER</span>
                  <strong id="cms-partners-account-no" style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--color-sunlight)', letterSpacing: '2px' }}>{state.partnersAccountNo}</strong>
                </div>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginTop: '24px', lineHeight: '1.6', fontFamily: 'var(--font-body)' }}>
              * After making a direct transfer, please fill out the Registry form below or contact our financial desk with receipt confirmations so we can audit and properly allocate your seeds.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Partnership Registry Form Section */}
      <section className="bg-off-white partners-form-wrapper" style={{ padding: '90px 0', borderTop: '1px solid rgba(10, 102, 194, 0.06)' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 16px', textTransform: 'uppercase' }}>Partnership Registry</h2>
            <p style={{ color: '#475569', maxWidth: '500px', margin: '0 auto' }}>Document your contributions or make a pledge. Fill out the registry form to coordinate with our operations desk.</p>
          </div>

          <div className="glass-card reveal active" style={{ background: 'rgba(10, 102, 194, 0.03)', border: '1px solid rgba(10, 102, 194, 0.12)', padding: '40px', borderRadius: 'var(--border-radius-lg)' }}>
            {!submitted ? (
              <div id="partner-form-panel">
                <form id="partner-interest-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="part-name" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Full Name / Organization *</label>
                    <input
                      type="text"
                      id="part-name"
                      placeholder="John Doe or Covenant Ltd"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="part-email" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Email Address *</label>
                      <input
                        type="email"
                        id="part-email"
                        placeholder="partner@gmail.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="part-phone" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Phone Number *</label>
                      <input
                        type="tel"
                        id="part-phone"
                        placeholder="08012345678"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="part-type" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Partnership Choice *</label>
                    <select
                      id="part-type"
                      required
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      <option value="">Select Option</option>
                      <option value="Sponsor Camper">Sponsor Camper (₦15,000 / camper)</option>
                      <option value="Welfare Contribution">Welfare Contribution</option>
                      <option value="General Support">General Support</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="part-notes" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Contribution Notes / Pledge Details</label>
                    <textarea
                      id="part-notes"
                      placeholder="Please specify if you want to sponsor multiple campers or require specific bank transfer details..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Submit Partnership Interest
                  </button>
                </form>
              </div>
            ) : (
              <div id="partner-success-panel" style={{ textAlign: 'center', padding: '20px' }}>
                <div className="success-icon" style={{ width: '60px', height: '60px', margin: '0 auto 20px', background: 'rgba(76, 175, 80, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--color-success)' }}>
                  <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.6rem', marginBottom: '12px', textTransform: 'uppercase' }}>Pledge Submitted</h3>
                <p style={{ fontSize: '1rem', color: '#475569', maxWidth: '480px', margin: '0 auto 20px', fontFamily: 'var(--font-body)' }}>Thank you for supporting the gospel. The Brooks Ministry financial desk will send you the dedicated account details via WhatsApp or Email.</p>

                <div style={{ background: 'rgba(10, 102, 194, 0.05)', padding: '20px', borderRadius: 'var(--border-radius-lg)', border: '1px solid rgba(10, 102, 194, 0.15)', fontSize: '0.95rem', marginBottom: '24px', textAlign: 'left', color: '#2c2c3e', fontFamily: 'var(--font-body)' }}>
                  <strong style={{ color: 'var(--color-brooks-blue)', display: 'block', marginBottom: '6px', fontFamily: 'var(--font-heading)' }}>🏦 The Brooks Ministry Account:</strong>
                  Bank: {state.partnersBankName}<br />
                  Account Name: {state.partnersAccountName}<br />
                  Account Number: {state.partnersAccountNo}
                </div>

                <button className="btn btn-secondary" onClick={handleReset} style={{ background: 'rgba(10, 102, 194, 0.08)', borderColor: 'rgba(10, 102, 194, 0.15)', color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
