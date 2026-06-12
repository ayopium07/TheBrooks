"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCMS } from '@/context/CMSContext';

export default function FAQPage() {
  const { state, isHydrated } = useCMS();
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-brooks-blue)' }}></div>;
  }

  return (
    <div className="page-view active-view" id="view-faq">
      {/* Redesigned FAQ Hero Section */}
      <section className="faq-hero-section">
        <div className="container">
          <div className="faq-hero-grid">
            <div className="faq-hero-text reveal-left active">
              <span className="faq-tag">✦ LOGISTICS & FAQS</span>
              <h1>Frequently Asked Questions</h1>
              <p className="about-lead">Here are answers to common questions about logistics, schedules, feeding, and registration requirements.</p>
              <p className="about-lead" style={{ fontSize: '1rem', opacity: 0.88, marginTop: '14px' }}>
                We want you to have a stress-free experience. If your question isn't answered here, feel free to use the contact form at the bottom or message our support line.
              </p>
            </div>
            <div className="faq-hero-showcase reveal-right active">
              <div className="faq-stats-card">
                <div className="stat-item">
                  <span className="stat-number">100% Free</span>
                  <span className="stat-label">Registration & Welfare</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">Separate Hostels</span>
                  <span className="stat-label">For Male & Female Campers</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">Redemption City</span>
                  <span className="stat-label">Secure & Accessible Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Accordion Grid Container */}
      <section className="bg-off-white" style={{ padding: '90px 0' }}>
        <div className="container">
          <div className="faq-container reveal active" id="cms-faq-list">
            {!state.faqs || state.faqs.length === 0 ? (
              <p style={{ textAlign: 'center' }}>No FAQs available.</p>
            ) : (
              state.faqs.map(faq => {
                const isActive = activeId === faq.id;
                return (
                  <div className={`faq-item ${isActive ? "active" : ""}`} id={`faq-item-${faq.id}`} key={faq.id}>
                    <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                      <span>{faq.question}</span>
                      <span className="faq-icon" style={{ transform: isActive ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>▼</span>
                    </div>
                    <div className="faq-answer" style={{ display: isActive ? 'block' : 'none' }}>
                      <div className="faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Bottom Support Inquiry CTA Section */}
      <section className="bg-brooks" style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="reveal active">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-sunlight)', fontWeight: 700, marginBottom: '12px' }}>
              Still Need Help?
            </p>
            <h2 style={{ color: '#fff', margin: '0 0 16px', fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', textTransform: 'uppercase' }}>
              Ask Our Operations Desk
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '28px', lineHeight: '1.6', fontFamily: 'var(--font-body)' }}>
              If you have questions about specific pickup routes, health requirements, or group registration coordination, reach out to our communications desk.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, background: 'var(--color-sunlight)', color: 'var(--color-brooks-blue)', borderColor: 'var(--color-sunlight)', display: 'inline-block' }}>
              Contact Support Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
