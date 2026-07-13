"use client";

import React, { useState } from 'react';
import { useCMS } from '@/context/CMSContext';

export default function RegisterPage() {
  const { state, isHydrated, registerCamper, updateCMSState } = useCMS();
  const [submitted, setSubmitted] = useState(false);

  // Local form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [church, setChurch] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [accommodation, setAccommodation] = useState("Yes");
  const [volunteerInterest, setVolunteerInterest] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !church || !gender || !occupation || !emergencyName || !emergencyPhone) {
      alert("Please fill all required fields.");
      return;
    }
    const camperData = {
      id: "reg-" + Date.now(),
      firstName,
      lastName,
      email,
      phone,
      church,
      gender,
      occupation,
      emergencyName,
      emergencyPhone,
      accommodation,
      volunteerInterest,
      timestamp: new Date().toLocaleString()
    };
    registerCamper(camperData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setChurch("");
    setGender("");
    setOccupation("");
    setEmergencyName("");
    setEmergencyPhone("");
    setAccommodation("Yes");
    setVolunteerInterest(false);
    setSubmitted(false);
  };

  const handleSwitchToLocal = () => {
    updateCMSState({ registrationMode: "local" });
  };

  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-brooks-blue)' }}></div>;
  }

  const isLocalMode = state.registrationMode === "local";
  const isRegistrationClosed = false;

  return (
    <div className="page-view active-view" id="view-register">
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2>Register for The CONFLUENCE CAMP RETREAT 2026</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '-20px auto 40px', color: 'var(--color-text-muted)' }}>
            Attendance is free, but registration is mandatory to secure accommodation, meals, and entry.
          </p>

          <div className="form-container">
            {isRegistrationClosed ? (
              <div id="registration-closed-panel">
                <div className="glass-card" style={{ border: 'none', background: '#F8F7F4', textAlign: 'center', padding: '60px 30px' }}>
                  <div className="closed-icon" style={{ margin: '0 auto 20px', background: 'rgba(239, 83, 80, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#ef5350', width: '70px', height: '70px' }}>
                    <svg width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 style={{ color: 'var(--color-brooks-blue)', marginBottom: '15px', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800 }}>Registration is Closed</h3>
                  <p style={{ fontSize: '1.1rem', color: '#2c2c3e', maxWidth: '500px', margin: '0 auto 25px', lineHeight: 1.6 }}>
                    We have reached maximum capacity and registration for The CONFLUENCE CAMP RETREAT 2026 has officially closed. We look forward to seeing you at our next event!
                  </p>
                  <a href={state.whatsappLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: 'white', boxShadow: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    💬 Join our WhatsApp Community
                  </a>
                </div>
              </div>
            ) : submitted ? (
              /* Success Redirection Panel */
              <div id="registration-success-panel">
                <div className="glass-card success-screen" style={{ border: 'none', background: '#F8F7F4' }}>
                  <div className="success-icon" style={{ margin: '0 auto 20px', background: 'rgba(76, 175, 80, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--color-success)', width: '60px', height: '60px' }}>
                    <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 style={{ color: 'var(--color-brooks-blue)', marginBottom: '10px' }}>Registration Received!</h2>
                  <p style={{ marginTop: '15px', fontSize: '1.05rem', color: '#2c2c3e' }}>Thank you for registering for The CONFLUENCE CAMP RETREAT 2026. Your details have been secured.</p>

                  <div style={{ background: 'rgba(252,238,33,0.05)', padding: '20px', borderRadius: 'var(--border-radius-md)', border: '1px dashed rgba(10, 102, 194, 0.2)', margin: '30px 0' }}>
                    <h4 style={{ color: 'var(--color-brooks-blue)', marginBottom: '8px', fontWeight: 800 }}>📢 CRITICAL NEXT STEP</h4>
                    <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#2c2c3e' }}>To receive feeding timetables, room assignments, and pre-camp prayer guides, you must join our WhatsApp Community.</p>
                    <a href={state.whatsappLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: 'white', boxShadow: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      💬 Join WhatsApp Community
                    </a>
                  </div>

                  <button className="btn btn-secondary" onClick={handleReset} style={{ background: 'rgba(10, 102, 194, 0.08)', borderColor: 'rgba(10, 102, 194, 0.15)', color: 'var(--color-brooks-blue)', fontWeight: 700 }}>
                    Register Another Camper
                  </button>
                </div>
              </div>
            ) : isLocalMode ? (
              /* Registration Form Panel */
              <div id="registration-form-panel">
                <div className="glass-card reveal active" style={{ marginBottom: '30px', border: 'none', background: '#F8F7F4' }}>
                  <form id="retreat-reg-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="reg-first-name" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>First Name *</label>
                        <input
                          type="text"
                          id="reg-first-name"
                          placeholder="John"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          style={{ color: '#1a1a2e', background: '#ffffff', border: '1px solid rgba(10,102,194,0.25)' }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="reg-last-name" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Last Name *</label>
                        <input
                          type="text"
                          id="reg-last-name"
                          placeholder="Doe"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          style={{ color: '#1a1a2e', background: '#ffffff', border: '1px solid rgba(10,102,194,0.25)' }}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="reg-email" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Email Address *</label>
                        <input
                          type="email"
                          id="reg-email"
                          placeholder="john.doe@gmail.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ color: '#1a1a2e', background: '#ffffff', border: '1px solid rgba(10,102,194,0.25)' }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="reg-phone" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Phone Number *</label>
                        <input
                          type="tel"
                          id="reg-phone"
                          placeholder="08012345678"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          style={{ color: '#1a1a2e', background: '#ffffff', border: '1px solid rgba(10,102,194,0.25)' }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="reg-church" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Denomination / Local Church *</label>
                      <input
                        type="text"
                        id="reg-church"
                        placeholder="e.g. RCCG, Winners Chapel, CAC, etc."
                        required
                        value={church}
                        onChange={(e) => setChurch(e.target.value)}
                        style={{ color: '#1a1a2e', background: '#ffffff', border: '1px solid rgba(10,102,194,0.25)' }}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="reg-gender" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Gender *</label>
                        <select
                          id="reg-gender"
                          required
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          style={{ color: '#1a1a2e', background: '#ffffff', border: '1px solid rgba(10,102,194,0.25)' }}
                        >
                          <option value="" style={{ color: '#1a1a2e' }}>Select Gender</option>
                          <option value="Male" style={{ color: '#1a1a2e' }}>Male</option>
                          <option value="Female" style={{ color: '#1a1a2e' }}>Female</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="reg-occupation" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Category *</label>
                        <select
                          id="reg-occupation"
                          required
                          value={occupation}
                          onChange={(e) => setOccupation(e.target.value)}
                          style={{ color: '#1a1a2e', background: '#ffffff', border: '1px solid rgba(10,102,194,0.25)' }}
                        >
                          <option value="" style={{ color: '#1a1a2e' }}>Select Category</option>
                          <option value="Student" style={{ color: '#1a1a2e' }}>University Student</option>
                          <option value="Professional" style={{ color: '#1a1a2e' }}>Young Professional</option>
                          <option value="Leader" style={{ color: '#1a1a2e' }}>Christian Leader / Pastor</option>
                          <option value="Other" style={{ color: '#1a1a2e' }}>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="reg-emergency-name" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Emergency Contact Name *</label>
                        <input
                          type="text"
                          id="reg-emergency-name"
                          placeholder="Full Name"
                          required
                          value={emergencyName}
                          onChange={(e) => setEmergencyName(e.target.value)}
                          style={{ color: '#1a1a2e', background: '#ffffff', border: '1px solid rgba(10,102,194,0.25)' }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="reg-emergency-phone" style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Emergency Phone *</label>
                        <input
                          type="tel"
                          id="reg-emergency-phone"
                          placeholder="Phone Number"
                          required
                          value={emergencyPhone}
                          onChange={(e) => setEmergencyPhone(e.target.value)}
                          style={{ color: '#1a1a2e', background: '#ffffff', border: '1px solid rgba(10,102,194,0.25)' }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ color: 'var(--color-brooks-blue)', fontWeight: 700 }}>Will you require accommodation in Redemption City? *</label>
                      <div className="checkbox-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                        <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#2c2c3e', fontWeight: 500 }}>
                          <input
                            type="radio"
                            name="accommodation-need"
                            value="Yes"
                            required
                            checked={accommodation === "Yes"}
                            onChange={() => setAccommodation("Yes")}
                          /> Yes, I will require accommodation.
                        </label>
                        <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#2c2c3e', fontWeight: 500 }}>
                          <input
                            type="radio"
                            name="accommodation-need"
                            value="No"
                            checked={accommodation === "No"}
                            onChange={() => setAccommodation("No")}
                          /> No, I will arrange my own accommodation.
                        </label>
                      </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '16px' }}>
                      <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#2c2c3e', fontWeight: 500 }}>
                        <input
                          type="checkbox"
                          id="reg-volunteer-interest"
                          checked={volunteerInterest}
                          onChange={(e) => setVolunteerInterest(e.target.checked)}
                        /> I am interested in volunteering for a department during the retreat.
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '15px' }}>
                      Submit Registration
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              /* Google Form Embedded Alternative */
              <div id="registration-embed-panel">
                <div className="embed-form-card" style={{ background: '#F8F7F4', border: '1px solid rgba(10, 102, 194, 0.12)', borderRadius: 'var(--border-radius-lg)', padding: '50px 30px', textAlign: 'center' }}>
                  <div className="embed-iframe-mock" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ color: 'var(--color-brooks-blue)', marginBottom: '20px' }}>
                      <svg width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <h3 style={{ color: 'var(--color-brooks-blue)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '8px' }}>Retreat Registration Form</h3>
                    <p style={{ marginBottom: '25px', color: '#475569', maxWidth: '460px', lineHeight: 1.6 }}>You are about to be redirected to our Google Form to submit your registration details.</p>
                    <a href={state.googleFormRegLink} id="cms-gform-reg-link" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                      Open Registration Form
                    </a>
                    <button className="btn btn-secondary" onClick={handleSwitchToLocal} style={{ marginTop: '15px', background: 'rgba(10, 102, 194, 0.08)', borderColor: 'rgba(10, 102, 194, 0.15)', color: 'var(--color-brooks-blue)', fontWeight: 700 }}>
                      Use Local Form
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
