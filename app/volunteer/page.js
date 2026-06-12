"use client";

import React, { useState } from 'react';
import { useCMS } from '@/context/CMSContext';

export default function VolunteerPage() {
  const { state, isHydrated, registerVolunteer } = useCMS();
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dept1, setDept1] = useState("");
  const [dept2, setDept2] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !dept1 || !dept2) {
      alert("Please fill all required fields.");
      return;
    }
    const volunteerData = {
      id: "vol-" + Date.now(),
      name,
      email,
      phone,
      dept1,
      dept2,
      experience,
      timestamp: new Date().toLocaleString()
    };
    registerVolunteer(volunteerData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setDept1("");
    setDept2("");
    setExperience("");
    setSubmitted(false);
  };

  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-brooks-blue)' }}></div>;
  }

  return (
    <div className="page-view active-view" id="view-volunteer">
      {/* Redesigned Volunteer Hero Section */}
      <section className="volunteer-hero-section">
        <div className="container">
          <div className="volunteer-hero-grid">
            <div className="volunteer-hero-text reveal-left active">
              <span className="volunteer-tag">✦ SERVE AT THE ALTAR</span>
              <h1>Join the Volunteer Team</h1>
              <p className="about-lead">Be an active builder of the altar. Serve in one of our core logistics and spiritual support departments.</p>
              <p className="about-lead" style={{ fontSize: '1rem', opacity: 0.88, marginTop: '14px' }}>
                We believe that every camper's encounter is paved by the prayers, planning, and service of dedicated volunteers. When you join the volunteer team, you are not just executing logistics; you are ministering to the Lord and preparing a tabernacle for His glory.
              </p>
            </div>
            <div className="volunteer-hero-showcase reveal-right active">
              <div className="volunteer-stats-card">
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Consecrated Volunteers</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">8 Teams</span>
                  <span className="stat-label">Specialized Departments</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">1 Focus</span>
                  <span className="stat-label">Beholding His Glory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Mandate Section */}
      <section className="bg-off-white" style={{ padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <h2 style={{ color: 'var(--color-brooks-blue)', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, textTransform: 'uppercase' }}>
              The Call to Service
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '16px auto 0' }}></div>
          </div>

          <div className="grid-2 reveal active" style={{ alignItems: 'center', gap: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} id="cms-volunteer-call-text">
              {state.volunteerCallText.split("\n\n").filter(p => p.trim() !== "").map((p, idx) => (
                <p key={idx} style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: '1.75', color: '#2c2c3e', margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/Asset 8mom.png" alt="The Brooks Ministry Altar Logo" style={{ width: '100%', maxWidth: '320px', opacity: 0.9, objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Department Showcase Grid Section */}
      <section className="bg-off-white" style={{ padding: '90px 0', borderTop: '1px solid rgba(10, 102, 194, 0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 700, marginBottom: '12px', opacity: 0.75 }}>
              Find Your Place
            </p>
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 16px', fontSize: 'clamp(2rem, 4vw, 2.6rem)', textTransform: 'uppercase' }}>
              Available Departments
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '0 auto' }}></div>
          </div>

          <div className="dept-showcase-grid reveal active">
            <div className="dept-card">
              <div className="dept-icon-box">🛡️</div>
              <h3 className="dept-title">Protocol</h3>
              <p className="dept-desc">Responsible for guest welcoming, keeping order, managing seating arrangements, and assisting dignitaries.</p>
              <span className="dept-tag">Welcoming & Order</span>
            </div>

            <div className="dept-card">
              <div className="dept-icon-box">📸</div>
              <h3 className="dept-title">Media & Creative</h3>
              <p className="dept-desc">Photography, videography, livestreaming coordination, graphic assets management, and social media coverage.</p>
              <span className="dept-tag">Creative & Socials</span>
            </div>

            <div className="dept-card">
              <div className="dept-icon-box">🔊</div>
              <h3 className="dept-title">Technical & Sound</h3>
              <p className="dept-desc">Sound engineering, stage lighting, electrical setup, equipment configuration, and power management.</p>
              <span className="dept-tag">Sound & Production</span>
            </div>

            <div className="dept-card">
              <div className="dept-icon-box">🚚</div>
              <h3 className="dept-title">Logistics & Ops</h3>
              <p className="dept-desc">Handling transportation logistics, campsite arrivals, hall layout setup, and heavy-lifting coordination.</p>
              <span className="dept-tag">Transport & Setup</span>
            </div>

            <div className="dept-card">
              <div className="dept-icon-box">🛎️</div>
              <h3 className="dept-title">Hospitality</h3>
              <p className="dept-desc">Managing camper relations, guest welfare, room allocation directories, and information desk support.</p>
              <span className="dept-tag">Relations & Care</span>
            </div>

            <div className="dept-card">
              <div className="dept-icon-box">📝</div>
              <h3 className="dept-title">Registration</h3>
              <p className="dept-desc">Managing the database of campers, tag distribution, security check-in clearances, and arrivals tracking.</p>
              <span className="dept-tag">Data & Check-in</span>
            </div>

            <div className="dept-card">
              <div className="dept-icon-box">🔥</div>
              <h3 className="dept-title">Prayer Team</h3>
              <p className="dept-desc">Leading intercessory prayer cover before, during, and after sessions, holding active spiritual watch shifts.</p>
              <span className="dept-tag">Spiritual Altar</span>
            </div>

            <div className="dept-card">
              <div className="dept-icon-box">🍲</div>
              <h3 className="dept-title">Welfare & Food</h3>
              <p className="dept-desc">Supervising food distribution, managing kitchen operations, ensuring camper hydration and dining cleanliness.</p>
              <span className="dept-tag">Catering & Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations & Guidelines Section */}
      <section className="bg-brooks" style={{ padding: '90px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-sunlight)', fontWeight: 700, marginBottom: '12px' }}>
              Guidelines & Commitments
            </p>
            <h2 style={{ color: '#fff', margin: '0 0 16px', fontSize: 'clamp(2rem, 4vw, 2.6rem)', textTransform: 'uppercase' }}>
              Volunteer Expectations
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '0 auto' }}></div>
          </div>

          <div className="expectations-grid reveal active">
            <div className="expectation-card">
              <div className="expectation-watermark">01</div>
              <div className="expectation-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="expectation-title">Early Arrival</h3>
              <p className="expectation-desc">All volunteers are required to arrive at the Redemption City of God on the morning of Wednesday, 22nd July, for briefing and initial hall setup.</p>
            </div>

            <div className="expectation-card">
              <div className="expectation-watermark">02</div>
              <div className="expectation-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="expectation-title">Spiritual Prep</h3>
              <p className="expectation-desc">Volunteers are expected to participate in all pre-retreat prayer calls and department alignments to remain spiritually alert.</p>
            </div>

            <div className="expectation-card">
              <div className="expectation-watermark">03</div>
              <div className="expectation-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                </svg>
              </div>
              <h3 className="expectation-title">Unity & Service</h3>
              <p className="expectation-desc">Willingness to assist outside your primary department if need arises, maintaining a servant heart and collaborative spirit throughout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-off-white volunteer-form-wrapper" style={{ padding: '90px 0', borderTop: '1px solid rgba(10, 102, 194, 0.06)' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 16px', textTransform: 'uppercase' }}>Application Portal</h2>
            <p style={{ color: '#475569', maxWidth: '500px', margin: '0 auto' }}>Fill out the form below to submit your volunteer application. Our department heads will review and reach out.</p>
          </div>

          <div className="glass-card reveal active" style={{ background: 'rgba(10, 102, 194, 0.03)', border: '1px solid rgba(10, 102, 194, 0.12)', padding: '40px', borderRadius: 'var(--border-radius-lg)' }}>
            {!submitted ? (
              <div id="volunteer-form-panel">
                <form id="volunteer-reg-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="vol-name" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Full Name *</label>
                    <input
                      type="text"
                      id="vol-name"
                      placeholder="John Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="vol-email" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Email Address *</label>
                      <input
                        type="email"
                        id="vol-email"
                        placeholder="john.doe@gmail.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-phone" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Phone Number *</label>
                      <input
                        type="tel"
                        id="vol-phone"
                        placeholder="08012345678"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="vol-dept1" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Preferred Department *</label>
                      <select
                        id="vol-dept1"
                        required
                        value={dept1}
                        onChange={(e) => setDept1(e.target.value)}
                        style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                      >
                        <option value="">Select First Choice</option>
                        <option value="Protocol">Protocol</option>
                        <option value="Media">Media</option>
                        <option value="Technical">Technical</option>
                        <option value="Logistics">Logistics</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Registration">Registration</option>
                        <option value="Prayer Team">Prayer Team</option>
                        <option value="Welfare">Welfare</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-dept2" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Alternative Department *</label>
                      <select
                        id="vol-dept2"
                        required
                        value={dept2}
                        onChange={(e) => setDept2(e.target.value)}
                        style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                      >
                        <option value="">Select Second Choice</option>
                        <option value="Protocol">Protocol</option>
                        <option value="Media">Media</option>
                        <option value="Technical">Technical</option>
                        <option value="Logistics">Logistics</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Registration">Registration</option>
                        <option value="Prayer Team">Prayer Team</option>
                        <option value="Welfare">Welfare</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="vol-experience" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Short Service Background / Skills</label>
                    <textarea
                      id="vol-experience"
                      placeholder="Describe any past experience in church or event management..."
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      style={{ borderColor: 'rgba(10, 102, 194, 0.2)', color: '#2c2c3e', background: 'rgba(255, 255, 255, 0.85)' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    Submit Volunteer Application
                  </button>
                </form>
              </div>
            ) : (
              <div id="volunteer-success-panel" style={{ textAlign: 'center', padding: '20px' }}>
                <div className="success-icon" style={{ width: '60px', height: '60px', margin: '0 auto 20px', background: 'rgba(76, 175, 80, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--color-success)' }}>
                  <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.6rem', marginBottom: '12px', textTransform: 'uppercase' }}>Application Received</h3>
                <p style={{ fontSize: '1rem', color: '#475569', maxWidth: '480px', margin: '0 auto 20px', fontFamily: 'var(--font-body)' }}>Thank you for offering your skills. The departmental head will reach out to you via WhatsApp / Email shortly.</p>
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
