"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCMS } from '@/context/CMSContext';

export default function ContactPage() {
  const { state, isHydrated } = useCMS();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all required fields.");
      return;
    }
    // Simple mock submission as legacy app.js
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  };

  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-brooks-blue)' }}></div>;
  }

  return (
    <div className="page-view active-view" id="view-contact">
      {/* Redesigned Contact Hero Section */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-grid">
            <div className="contact-hero-text reveal-left active">
              <span className="contact-tag">✦ WE ARE ONLINE</span>
              <h1>Get in Touch</h1>
              <p className="about-lead">Have specific inquiries about transport coordinates, partnerships, or volunteering? Reach out directly.</p>
              <p className="about-lead" style={{ fontSize: '1rem', opacity: 0.88, marginTop: '14px' }}>
                Our operations desk and communications teams are available to guide you through registration queries, lodging directions, and service pathways. We look forward to hearing from you.
              </p>
            </div>
            <div className="contact-hero-showcase reveal-right active">
              <div className="contact-stats-card">
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Inquiry Response Window</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">WhatsApp</span>
                  <span className="stat-label">Instant Community Hub</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">Redemption City</span>
                  <span className="stat-label">Retreat Venue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels Showcase Grid Section */}
      <section className="bg-off-white" style={{ padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 700, marginBottom: '12px', opacity: 0.75 }}>
              Communication Hub
            </p>
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 16px', fontSize: 'clamp(2rem, 4vw, 2.6rem)', textTransform: 'uppercase' }}>
              Contact Channels
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '0 auto' }}></div>
          </div>

          <div className="contact-channels-grid reveal active">
            {/* Phone */}
            <div className="channel-card">
              <div className="channel-icon-box">📞</div>
              <h3 className="channel-title">Phone Inquiries</h3>
              <p className="channel-desc">Speak directly with our logistics team for transport bookings and emergency coordination.</p>
              <div className="channel-value">
                <a href={`tel:${state.contactPhone}`} id="cms-contact-phone">{state.contactPhone}</a>
              </div>
            </div>

            {/* Email */}
            <div className="channel-card">
              <div className="channel-icon-box">✉️</div>
              <h3 className="channel-title">Email Address</h3>
              <p className="channel-desc">Send official letters, partnership proposals, and administrative inquiries to our inbox.</p>
              <div className="channel-value">
                <a href={`mailto:${state.contactEmail}`} id="cms-contact-email">{state.contactEmail}</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="channel-card">
              <div className="channel-icon-box" style={{ background: 'rgba(37, 211, 102, 0.08)', borderColor: 'rgba(37, 211, 102, 0.25)', color: '#25D366' }}>💬</div>
              <h3 className="channel-title" style={{ color: '#25D366' }}>WhatsApp Channel</h3>
              <p className="channel-desc">Join our broadcast channel for real-time announcements, pre-retreat prayers, and camp guides.</p>
              <div className="channel-value">
                <a href={state.contactWhatsappChannel} id="cms-contact-whatsapp" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'underline' }}>Join the Channel</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Direct Message Form Section */}
      <section className="bg-off-white contact-form-wrapper" style={{ padding: '90px 0', borderTop: '1px solid rgba(10, 102, 194, 0.06)' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 16px', textTransform: 'uppercase' }}>Send a Direct Message</h2>
            <p style={{ color: '#475569', maxWidth: '500px', margin: '0 auto' }}>Have a custom question or prayer request? Fill out the form below, and our team will get back to you.</p>
          </div>

          <div className="glass-card reveal active" style={{ background: 'rgba(10, 102, 194, 0.03)', border: '1px solid rgba(10, 102, 194, 0.12)', padding: '40px', borderRadius: 'var(--border-radius-lg)' }}>
            {!submitted ? (
              <form id="contact-msg-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="con-name" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Full Name *</label>
                  <input
                    type="text"
                    id="con-name"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="con-email" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Email Address *</label>
                  <input
                    type="email"
                    id="con-email"
                    placeholder="john@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="con-message" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Message *</label>
                  <textarea
                    id="con-message"
                    placeholder="Type your message or inquiry here..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)', height: '150px' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  Send Message
                </button>
              </form>
            ) : (
              <div id="contact-success-panel" style={{ textAlign: 'center', padding: '20px' }}>
                <div className="success-icon" style={{ width: '60px', height: '60px', margin: '0 auto 20px', background: 'rgba(76, 175, 80, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--color-success)' }}>
                  <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.6rem', marginBottom: '12px', textTransform: 'uppercase' }}>Message Sent</h3>
                <p style={{ fontSize: '1rem', color: '#475569', maxWidth: '480px', margin: '0 auto 20px', fontFamily: 'var(--font-body)' }}>We have received your message and will respond to your email as soon as possible.</p>
                <button className="btn btn-secondary" onClick={handleReset} style={{ background: 'rgba(10, 102, 194, 0.08)', borderColor: 'rgba(10, 102, 194, 0.15)', color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ CTA Banner Section */}
      <section className="bg-brooks" style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="reveal active">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-sunlight)', fontWeight: 700, marginBottom: '12px' }}>
              Got Questions?
            </p>
            <h2 style={{ color: '#fff', margin: '0 0 16px', fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', textTransform: 'uppercase' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '28px', lineHeight: '1.6', fontFamily: 'var(--font-body)' }}>
              Before sending a message, consider checking our comprehensive FAQ center. We have documented answers for accommodation queries, feeding arrangements, transport schedules, and event parameters.
            </p>
            <Link href="/faq" className="btn btn-primary" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, background: 'var(--color-sunlight)', color: 'var(--color-brooks-blue)', borderColor: 'var(--color-sunlight)', display: 'inline-block' }}>
              Visit the FAQ Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
