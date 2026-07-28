"use client";

import React, { useState } from 'react';
import { useCMS } from '@/context/CMSContext';

const orgData = {
  name: "God",
  role: "The Supreme Architect",
  children: [
    {
      name: "Lead Pastor",
      role: "Visionary & Set Man",
      children: [
        {
          name: "Embrace",
          role: "Portfolio",
          children: [
            { name: "Warmth Squad", desc: "Welcomes people with love and hospitality at the doors." },
            { name: "Flow Squad", desc: "Ensures smooth transitions and movement during services." },
            { name: "Connect Squad", desc: "Helps first-timers get plugged into the church family." },
            { name: "Care Collective", desc: "Provides follow-ups, calls, and spiritual check-ins." },
            { name: "Vibe Unit", desc: "Sets the atmosphere and aesthetic energy for events." },
            { name: "Fresh Welcome", desc: "Dedicated team for greeting and orienting new guests." },
          ]
        },
        {
          name: "Media & Creative",
          role: "Portfolio",
          children: [
            { name: "Media", desc: "Handles all visual broadcasting and projection." },
            { name: "Creative", desc: "Designs graphics, flyers, and branding assets." },
            { name: "Technical", desc: "Manages hardware, electrical setups, and engineering." },
            { name: "Live Streams", desc: "Broadcasts our services online to a global audience." },
            { name: "Sounds & Lighting", desc: "Creates the perfect acoustic and visual atmosphere." },
            { name: "Photography", desc: "Captures moments, testimonies, and events." },
          ]
        },
        {
          name: "Logistics & Ops",
          role: "Portfolio",
          children: [
            { name: "Protocol", desc: "Maintains order, seating arrangements, and assists ministers." },
            { name: "Hospitality", desc: "Manages guest welfare, refreshments, and relations." },
            { name: "Welfare", desc: "Provides catering and ensures physical needs are met." },
            { name: "Registration", desc: "Handles database management and tag distribution." },
          ]
        },
        {
          name: "Intercessory",
          role: "Portfolio",
          children: [
            { name: "Prayer Team", desc: "Leads spiritual warfare and continuous intercession." },
          ]
        }
      ]
    }
  ]
};

const AccordionItem = ({ node, level = 0, openPortfolio, setOpenPortfolio }) => {
  const isPortfolio = level === 2;
  const isExpanded = isPortfolio ? openPortfolio === node.name : true;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginBottom: '12px' }}>
      <div
        onClick={() => {
          if (isPortfolio) setOpenPortfolio(isExpanded ? null : node.name);
        }}
        style={{
          background: (isExpanded && isPortfolio) ? 'var(--color-brooks-blue)' : 'var(--color-pure-white)',
          border: '1px solid',
          borderColor: (isExpanded && isPortfolio) ? 'var(--color-sunlight)' : 'rgba(10, 102, 194, 0.1)',
          padding: '16px 20px',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: isPortfolio ? 'pointer' : 'default',
          boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
          transition: 'all 0.3s ease'
        }}
      >
        <div>
          <h4 style={{ margin: 0, color: (isExpanded && isPortfolio) ? '#fff' : 'var(--color-brooks-blue)', fontSize: '1.1rem', fontWeight: 800 }}>{node.name}</h4>
          {node.role && <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--color-sunlight)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{node.role}</p>}
          {node.desc && <p style={{ margin: '8px 0 0', fontSize: '0.85rem', color: (isExpanded && isPortfolio) ? 'rgba(255,255,255,0.8)' : '#666', lineHeight: 1.4 }}>{node.desc}</p>}
        </div>
        {hasChildren && isPortfolio && (
          <div style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', color: isExpanded ? 'var(--color-sunlight)' : 'var(--color-brooks-blue)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
      {hasChildren && isExpanded && (
        <div style={{ paddingLeft: '16px', marginTop: '12px', borderLeft: '2px solid var(--color-sunlight)', marginLeft: '20px' }}>
          {node.children.map((child, idx) => (
            <AccordionItem key={idx} node={child} level={level + 1} openPortfolio={openPortfolio} setOpenPortfolio={setOpenPortfolio} />
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopTreeNode = ({ node, level = 0, openPortfolio, setOpenPortfolio }) => {
  const isPortfolio = level === 2;
  const isExpanded = isPortfolio ? openPortfolio === node.name : true;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li>
      <div
        className="org-node"
        onClick={() => {
          if (isPortfolio) setOpenPortfolio(isExpanded ? null : node.name);
        }}
        style={{
          cursor: isPortfolio ? 'pointer' : 'default',
          borderColor: (isExpanded && isPortfolio) ? 'var(--color-sunlight)' : 'rgba(10, 102, 194, 0.15)',
          background: (isExpanded && isPortfolio) ? 'var(--color-brooks-blue)' : 'var(--color-pure-white)',
          transform: (isExpanded && isPortfolio) ? 'translateY(-4px)' : 'none',
          boxShadow: (isExpanded && isPortfolio) ? '0 15px 35px rgba(0,0,0,0.08)' : '0 10px 30px rgba(0,0,0,0.04)'
        }}
      >
        <h4 style={{ margin: 0, color: (isExpanded && isPortfolio) ? '#fff' : 'var(--color-brooks-blue)', fontSize: level === 0 ? '1.4rem' : '1.1rem', fontWeight: 800 }}>{node.name}</h4>
        {node.role && <p style={{ margin: '4px 0 0', fontSize: '0.75rem', color: 'var(--color-sunlight)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{node.role}</p>}
        {node.desc && <p style={{ margin: '8px 0 0', fontSize: '0.85rem', color: (isExpanded && isPortfolio) ? 'rgba(255,255,255,0.8)' : '#666', lineHeight: 1.4, maxWidth: '200px' }}>{node.desc}</p>}
      </div>
      {hasChildren && isExpanded && (
        <ul>
          {node.children.map((child, idx) => (
            <DesktopTreeNode key={idx} node={child} level={level + 1} openPortfolio={openPortfolio} setOpenPortfolio={setOpenPortfolio} />
          ))}
        </ul>
      )}
    </li>
  );
};

function TeamsOrgChart() {
  const [openPortfolio, setOpenPortfolio] = useState(null);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .org-chart-desktop { display: block; overflow-x: auto; padding-bottom: 40px; }
        .org-chart-mobile { display: none; }
        @media (max-width: 900px) {
          .org-chart-desktop { display: none; }
          .org-chart-mobile { display: block; }
        }

        /* CSS Tree Styles */
        .org-tree * { margin: 0; padding: 0; }
        .org-tree ul {
          padding-top: 30px; position: relative;
          display: flex;
          justify-content: center;
        }
        .org-tree li {
          float: left; text-align: center;
          list-style-type: none;
          position: relative;
          padding: 30px 10px 0 10px;
          transition: all 0.5s;
        }
        /* Connector lines */
        .org-tree li::before, .org-tree li::after{
          content: '';
          position: absolute; top: 0; right: 50%;
          border-top: 2px solid rgba(10, 102, 194, 0.2);
          width: 50%; height: 30px;
        }
        .org-tree li::after{
          right: auto; left: 50%;
          border-left: 2px solid rgba(10, 102, 194, 0.2);
        }
        .org-tree li:only-child::after, .org-tree li:only-child::before {
          display: none;
        }
        .org-tree li:only-child{ padding-top: 0;}
        .org-tree li:first-child::before, .org-tree li:last-child::after{
          border: 0 none;
        }
        .org-tree li:last-child::before{
          border-right: 2px solid rgba(10, 102, 194, 0.2);
          border-radius: 0 5px 0 0;
        }
        .org-tree li:first-child::after{
          border-radius: 5px 0 0 0;
        }
        .org-tree ul ul::before{
          content: '';
          position: absolute; top: 0; left: 50%;
          border-left: 2px solid rgba(10, 102, 194, 0.2);
          width: 0; height: 30px;
        }
        /* Nodes */
        .org-node {
          border: 1px solid rgba(10, 102, 194, 0.15);
          background: var(--color-pure-white);
          padding: 16px 24px;
          display: inline-block;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          transition: all 0.3s ease;
          min-width: 140px;
        }
        .org-node:hover {
          border-color: var(--color-sunlight) !important;
        }
      `}} />

      <div className="org-chart-desktop">
        <div className="org-tree reveal active">
          <ul>
            <DesktopTreeNode node={orgData} openPortfolio={openPortfolio} setOpenPortfolio={setOpenPortfolio} />
          </ul>
        </div>
      </div>

      <div className="org-chart-mobile reveal active">
        <AccordionItem node={orgData} openPortfolio={openPortfolio} setOpenPortfolio={setOpenPortfolio} />
      </div>
    </>
  );
}

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
          <div className="reveal active" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="volunteer-hero-text">
              <span className="volunteer-tag" style={{ margin: '0 auto 20px' }}>✦ SERVE IN THE MINISTRY</span>
              <h1>Join the Service Team</h1>
              <p className="about-lead" style={{ margin: '0 auto' }}>Find your service unit and volunteer in one of our core ministry departments.</p>
              <p className="about-lead" style={{ fontSize: '1rem', opacity: 0.88, margin: '14px auto 0' }}>
                We believe that every ministry moment is made possible by the prayers, planning, and service of dedicated volunteers. When you serve at The Brooks, you are not just fulfilling a role; you are ministering to the Lord and building the Kingdom.
              </p>
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
                <p key={idx} style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.75', color: '#2c2c3e', margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/TBMlogo.png" alt="The Brooks Ministry Altar Logo" style={{ width: '100%', maxWidth: '320px', opacity: 0.9, objectFit: 'contain' }} />
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
        </div>

        <div style={{ width: '100%', maxWidth: '100vw', padding: '0 20px', margin: '0 auto' }}>
          <TeamsOrgChart />
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
              <p className="expectation-desc">All volunteers are required to arrive at the service venue before the designated start time for briefing, department setup, and pre-service prayers.</p>
            </div>

            <div className="expectation-card">
              <div className="expectation-watermark">02</div>
              <div className="expectation-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="expectation-title">Spiritual Prep</h3>
              <p className="expectation-desc">Volunteers are expected to participate in pre-service prayer calls, weekly devotionals, and department alignments to remain spiritually sharp and ready.</p>
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
