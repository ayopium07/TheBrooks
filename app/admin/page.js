"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCMS } from '@/context/CMSContext';

export default function AdminPage() {
  const { state, isHydrated, updateCMSState, resetCMSState } = useCMS();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Tabs state: 'settings' | 'pages' | 'speakers' | 'faqs' | 'gallery' | 'registrations' | 'volunteers' | 'partners'
  const [activeTab, setActiveTab] = useState("settings");

  // Settings form states
  const [retreatTheme, setRetreatTheme] = useState("");
  const [retreatTagline, setRetreatTagline] = useState("");
  const [retreatDates, setRetreatDates] = useState("");
  const [retreatCountdownTarget, setRetreatCountdownTarget] = useState("");
  const [retreatVenue, setRetreatVenue] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const [registrationMode, setRegistrationMode] = useState("");
  const [googleFormRegLink, setGoogleFormRegLink] = useState("");
  const [announcementActive, setAnnouncementActive] = useState(false);
  const [announcementText, setAnnouncementText] = useState("");
  const [announcementCtaText, setAnnouncementCtaText] = useState("");
  const [announcementCtaHash, setAnnouncementCtaHash] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  // Page Texts state
  const [pageToEdit, setPageToEdit] = useState("home");
  const [homeVisionHeader, setHomeVisionHeader] = useState("");
  const [homeVisionText, setHomeVisionText] = useState("");
  const [homeVisionQuote, setHomeVisionQuote] = useState("");
  const [homeVisionQuoteRef, setHomeVisionQuoteRef] = useState("");
  const [aboutHeroText, setAboutHeroText] = useState("");
  const [aboutIdentityText, setAboutIdentityText] = useState("");
  const [aboutStrategyText, setAboutStrategyText] = useState("");
  const [aboutMandateText, setAboutMandateText] = useState("");
  const [volunteerCallText, setVolunteerCallText] = useState("");
  const [partnersCallText, setPartnersCallText] = useState("");
  const [partnersBankName, setPartnersBankName] = useState("");
  const [partnersAccountName, setPartnersAccountName] = useState("");
  const [partnersAccountNo, setPartnersAccountNo] = useState("");
  const [experienceCallText, setExperienceCallText] = useState("");

  // CRUD Speaker form states
  const [showSpeakerForm, setShowSpeakerForm] = useState(false);
  const [editSpeakerId, setEditSpeakerId] = useState("");
  const [editSpeakerName, setEditSpeakerName] = useState("");
  const [editSpeakerRole, setEditSpeakerRole] = useState("");
  const [editSpeakerAvatar, setEditSpeakerAvatar] = useState("");
  const [editSpeakerBio, setEditSpeakerBio] = useState("");

  // CRUD FAQ form states
  const [showFaqForm, setShowFaqForm] = useState(false);
  const [editFaqId, setEditFaqId] = useState("");
  const [editFaqQ, setEditFaqQ] = useState("");
  const [editFaqA, setEditFaqA] = useState("");

  // CRUD Gallery form states
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [editImgTitle, setEditImgTitle] = useState("");
  const [editImgUrl, setEditImgUrl] = useState("");

  // Check login session on mount
  useEffect(() => {
    const logged = sessionStorage.getItem("confluence_admin_logged_in") === "true";
    if (logged) {
      setIsLoggedIn(true);
    }
  }, []);

  // Sync state values when context hydrates or changes
  useEffect(() => {
    if (isHydrated && state) {
      setRetreatTheme(state.retreatTheme || "");
      setRetreatTagline(state.retreatTagline || "");
      setRetreatDates(state.retreatDates || "");
      let targetStr = state.retreatCountdownTarget || "";
      if (targetStr.includes("+")) {
        targetStr = targetStr.split("+")[0];
      } else if (targetStr.endsWith("Z")) {
        targetStr = targetStr.substring(0, targetStr.length - 1);
      }
      if (targetStr && !targetStr.includes("T")) {
        targetStr = `${targetStr}T09:00`;
      }
      const parts = targetStr.split(":");
      if (parts.length >= 2) {
        setRetreatCountdownTarget(parts.slice(0, 2).join(":"));
      } else {
        setRetreatCountdownTarget(targetStr);
      }
      setRetreatVenue(state.retreatVenue || "");
      setWhatsappLink(state.whatsappLink || "");
      setRegistrationMode(state.registrationMode || "local");
      setGoogleFormRegLink(state.googleFormRegLink || "");
      setAnnouncementActive(!!state.announcementActive);
      setAnnouncementText(state.announcementText || "");
      setAnnouncementCtaText(state.announcementCtaText || "");
      setAnnouncementCtaHash(state.announcementCtaHash || "");
      setContactPhone(state.contactPhone || "");
      setContactEmail(state.contactEmail || "");

      // Page Texts
      setHomeVisionHeader(state.homeVisionHeader || "");
      setHomeVisionText(state.homeVisionText || "");
      setHomeVisionQuote(state.homeVisionQuote || "");
      setHomeVisionQuoteRef(state.homeVisionQuoteRef || "");
      setAboutHeroText(state.aboutHeroText || "");
      setAboutIdentityText(state.aboutIdentityText || "");
      setAboutStrategyText(state.aboutStrategyText || "");
      setAboutMandateText(state.aboutMandateText || "");
      setVolunteerCallText(state.volunteerCallText || "");
      setPartnersCallText(state.partnersCallText || "");
      setPartnersBankName(state.partnersBankName || "");
      setPartnersAccountName(state.partnersAccountName || "");
      setPartnersAccountNo(state.partnersAccountNo || "");
      setExperienceCallText(state.experienceCallText || "");
    }
  }, [isHydrated, state]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "TheConfluence" && password === "confluence2026") {
      sessionStorage.setItem("confluence_admin_logged_in", "true");
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("confluence_admin_logged_in");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    const updated = {
      retreatTheme,
      retreatTagline,
      retreatDates,
      retreatCountdownTarget: retreatCountdownTarget.includes("T") ? (retreatCountdownTarget.split(":").length === 2 ? `${retreatCountdownTarget}:00` : retreatCountdownTarget) : `${retreatCountdownTarget}T09:00:00`,
      retreatVenue,
      whatsappLink,
      registrationMode,
      googleFormRegLink,
      announcementActive,
      announcementText,
      announcementCtaText,
      announcementCtaHash,
      contactPhone,
      contactEmail
    };
    updateCMSState(updated);
    alert("Retreat configurations saved successfully!");
  };

  const handleSavePageTexts = (e) => {
    e.preventDefault();
    const updated = {
      homeVisionHeader,
      homeVisionText,
      homeVisionQuote,
      homeVisionQuoteRef,
      aboutHeroText,
      aboutIdentityText,
      aboutStrategyText,
      aboutMandateText,
      volunteerCallText,
      partnersCallText,
      partnersBankName,
      partnersAccountName,
      partnersAccountNo,
      experienceCallText
    };
    updateCMSState(updated);
    alert("Page texts saved successfully!");
  };

  const handleResetCMS = () => {
    if (confirm("Restore original values, default list data, and clear test forms?")) {
      resetCMSState();
      window.location.reload();
    }
  };

  // CRUD Speakers
  const handleAddSpeakerClick = () => {
    setEditSpeakerId("");
    setEditSpeakerName("");
    setEditSpeakerRole("");
    setEditSpeakerAvatar("");
    setEditSpeakerBio("");
    setShowSpeakerForm(true);
  };

  const handleEditSpeakerClick = (speaker) => {
    setEditSpeakerId(speaker.id);
    setEditSpeakerName(speaker.name);
    setEditSpeakerRole(speaker.role);
    setEditSpeakerAvatar(speaker.avatar || "");
    setEditSpeakerBio(speaker.bio);
    setShowSpeakerForm(true);
  };

  const handleDeleteSpeaker = (id) => {
    if (confirm("Are you sure you want to delete this speaker profile?")) {
      const filtered = state.speakers.filter(s => s.id !== id);
      updateCMSState("speakers", filtered);
    }
  };

  const handleSpeakerSubmit = (e) => {
    e.preventDefault();
    if (!editSpeakerName || !editSpeakerRole || !editSpeakerBio) {
      alert("Please fill all required fields.");
      return;
    }
    let updatedList = [...(state.speakers || [])];
    if (editSpeakerId) {
      updatedList = updatedList.map(s => s.id === editSpeakerId ? {
        id: editSpeakerId,
        name: editSpeakerName,
        role: editSpeakerRole,
        avatar: editSpeakerAvatar,
        bio: editSpeakerBio
      } : s);
    } else {
      updatedList.push({
        id: "spk-" + Date.now(),
        name: editSpeakerName,
        role: editSpeakerRole,
        avatar: editSpeakerAvatar,
        bio: editSpeakerBio
      });
    }
    updateCMSState("speakers", updatedList);
    setShowSpeakerForm(false);
  };

  // CRUD FAQs
  const handleAddFaqClick = () => {
    setEditFaqId("");
    setEditFaqQ("");
    setEditFaqA("");
    setShowFaqForm(true);
  };

  const handleEditFaqClick = (faq) => {
    setEditFaqId(faq.id);
    setEditFaqQ(faq.question);
    setEditFaqA(faq.answer);
    setShowFaqForm(true);
  };

  const handleDeleteFaq = (id) => {
    if (confirm("Are you sure you want to delete this FAQ item?")) {
      const filtered = state.faqs.filter(f => f.id !== id);
      updateCMSState("faqs", filtered);
    }
  };

  const handleFaqSubmit = (e) => {
    e.preventDefault();
    if (!editFaqQ || !editFaqA) {
      alert("Please fill all required fields.");
      return;
    }
    let updatedList = [...(state.faqs || [])];
    if (editFaqId) {
      updatedList = updatedList.map(f => f.id === editFaqId ? {
        id: editFaqId,
        question: editFaqQ,
        answer: editFaqA
      } : f);
    } else {
      updatedList.push({
        id: "faq-" + Date.now(),
        question: editFaqQ,
        answer: editFaqA
      });
    }
    updateCMSState("faqs", updatedList);
    setShowFaqForm(false);
  };

  // CRUD Gallery
  const handleAddGalleryClick = () => {
    setEditImgTitle("");
    setEditImgUrl("");
    setShowGalleryForm(true);
  };

  const handleDeleteGallery = (id) => {
    if (confirm("Are you sure you want to delete this photo?")) {
      const filtered = state.gallery.filter(g => g.id !== id);
      updateCMSState("gallery", filtered);
    }
  };

  const handleGallerySubmit = (e) => {
    e.preventDefault();
    if (!editImgTitle || !editImgUrl) {
      alert("Please fill all required fields.");
      return;
    }
    const updatedList = [...(state.gallery || [])];
    updatedList.push({
      id: "gal-" + Date.now(),
      title: editImgTitle,
      url: editImgUrl
    });
    updateCMSState("gallery", updatedList);
    setShowGalleryForm(false);
  };

  // Clear lists
  const handleClearRegs = () => {
    if (confirm("Clear all registered campers?")) {
      updateCMSState("registrations", []);
    }
  };

  const handleClearVols = () => {
    if (confirm("Clear all volunteer applications?")) {
      updateCMSState("volunteers", []);
    }
  };

  const handleClearParts = () => {
    if (confirm("Clear all partnership records?")) {
      updateCMSState("partners", []);
    }
  };

  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at 80% 20%, #082d54 0%, #031427 100%)' }}></div>;
  }

  // Styles block for admin overrides
  const adminStyles = (
    <style dangerouslySetInnerHTML={{ __html: `
      :root {
        --admin-bg-glass: rgba(3, 28, 54, 0.75);
        --admin-card-glass: rgba(3, 28, 54, 0.45);
        --admin-glow: 0 0 25px rgba(252, 238, 33, 0.15);
        --admin-glow-strong: 0 0 35px rgba(252, 238, 33, 0.35);
        --color-primary: #0A66C2;
        --color-primary-light: #49A3D3;
        --color-accent: #FCEE21;
        --color-border: rgba(73, 163, 211, 0.2);
      }
      .admin-body-wrap {
        background: radial-gradient(circle at 80% 20%, #082d54 0%, #031427 100%);
        color: #e2e8f0;
        min-height: 100vh;
      }
      .lock-shield-icon {
        width: 72px;
        height: 72px;
        background: rgba(73, 163, 211, 0.08);
        border: 1.5px solid rgba(73, 163, 211, 0.25);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 24px;
        color: var(--color-accent);
        box-shadow: 0 0 20px rgba(73, 163, 211, 0.2);
        transition: transform 0.4s;
      }
      .login-card:hover .lock-shield-icon {
        transform: scale(1.05) rotate(5deg);
        background: rgba(252, 238, 33, 0.08);
        border-color: var(--color-accent);
        box-shadow: var(--admin-glow);
      }
      .login-logo h1 {
        font-family: var(--font-heading);
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-pure-white);
        margin: 0;
        letter-spacing: 2px;
      }
      .login-logo p {
        font-size: 0.8rem;
        color: var(--color-accent);
        letter-spacing: 3px;
        text-transform: uppercase;
        margin-top: 6px;
        margin-bottom: 30px;
      }
      .admin-input-wrapper input {
        padding-left: 45px;
        font-size: 0.95rem;
        border-radius: 8px;
        border: 1px solid rgba(73, 163, 211, 0.25);
        background: rgba(3, 28, 54, 0.6);
        color: #ffffff;
        width: 100%;
        height: 48px;
        transition: all 0.3s ease;
      }
      .admin-input-wrapper input:focus {
        border-color: var(--color-accent);
        box-shadow: 0 0 15px rgba(252, 238, 33, 0.15);
        outline: none;
        background: rgba(3, 28, 54, 0.8);
      }
      .admin-sidebar {
        background: var(--admin-bg-glass);
        backdrop-filter: blur(15px);
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 24px 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .admin-menu-btn {
        background: transparent;
        color: #94a3b8;
        border: none;
        padding: 14px 18px;
        border-radius: 10px;
        text-align: left;
        cursor: pointer;
        font-weight: 500;
        font-size: 0.85rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
      }
      .admin-menu-btn.active {
        background: rgba(252, 238, 33, 0.08);
        color: var(--color-accent);
        font-weight: 600;
        border: 1px solid rgba(252, 238, 33, 0.2);
        padding-left: 22px;
      }
      .admin-menu-btn span.badge {
        margin-left: auto;
        background: rgba(255, 255, 255, 0.06);
        color: #94a3b8;
        font-size: 0.75rem;
        padding: 2px 8px;
        border-radius: var(--border-radius-pill);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      .admin-menu-btn.active span.badge {
        background: rgba(252, 238, 33, 0.12);
        color: var(--color-accent);
        border-color: rgba(252, 238, 33, 0.25);
      }
      .admin-content-card {
        background: var(--admin-card-glass) !important;
        backdrop-filter: blur(20px);
        border-radius: 16px;
        border: 1px solid rgba(73, 163, 211, 0.15) !important;
        padding: 35px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;
      }
      .admin-section-header h3::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 40px;
        height: 2px;
        background: var(--color-accent);
        box-shadow: 0 0 10px rgba(252, 238, 33, 0.5);
      }
      .admin-table tbody tr {
        background: rgba(3, 28, 54, 0.35);
        transition: background 0.3s;
      }
      .admin-table tbody tr:hover {
        background: rgba(10, 102, 194, 0.12);
      }
      .admin-table td {
        padding: 16px 20px;
        border-top: 1px solid rgba(73, 163, 211, 0.08);
        border-bottom: 1px solid rgba(73, 163, 211, 0.08);
        color: var(--color-off-white);
      }
      .admin-table td:first-child {
        border-left: 1px solid rgba(73, 163, 211, 0.08);
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .admin-table td:last-child {
        border-right: 1px solid rgba(73, 163, 211, 0.08);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      .admin-action-btn {
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        cursor: pointer;
        padding: 6px;
        border-radius: 4px;
        margin-right: 6px;
        transition: background 0.2s;
      }
      .admin-action-btn:hover {
        background: rgba(255,255,255,0.15);
      }
    ` }} />
  );

  if (!isLoggedIn) {
    return (
      <div className="admin-body-wrap" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        {adminStyles}
        <div className="login-card" style={{ width: '100%', maxWidth: '440px', padding: '50px 40px', textAlign: 'center', border: '1px solid var(--color-border)', background: 'var(--admin-bg-glass)', backdropFilter: 'blur(25px)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg), 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(10, 102, 194, 0.1)', position: 'relative' }}>
          <div className="lock-shield-icon">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
            </svg>
          </div>
          
          <div className="login-logo">
            <img src="/TBMlogo.png" alt="The Brooks Ministry Logo" style={{ height: '60px', width: 'auto', margin: '0 auto 20px', display: 'block' }} />
            <h1>The CONFLUENCE CAMP RETREAT</h1>
            <p>Admin Workspace Gateway</p>
          </div>
          
          {loginError && (
            <div className="login-error" style={{ display: 'block', background: 'rgba(239, 83, 80, 0.1)', border: '1px solid rgba(239, 83, 80, 0.35)', color: '#ff5252', padding: '14px', borderRadius: 'var(--border-radius-sm)', fontSize: '0.85rem', marginBottom: '25px' }}>
              {loginError}
            </div>
          )}
          
          <form id="admin-login-form" onSubmit={handleLogin}>
            <div className="admin-input-group" style={{ marginBottom: '24px', textAlign: 'left' }}>
              <label htmlFor="login-username" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '8px', display: 'block' }}>Admin Username</label>
              <div className="admin-input-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <span className="admin-input-icon" style={{ position: 'absolute', left: '15px', color: 'var(--color-text-muted)' }}>👤</span>
                <input
                  type="text"
                  id="login-username"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            
            <div className="admin-input-group" style={{ marginBottom: '30px', textAlign: 'left' }}>
              <label htmlFor="login-password" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '8px', display: 'block' }}>Access Password</label>
              <div className="admin-input-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <span className="admin-input-icon" style={{ position: 'absolute', left: '15px', color: 'var(--color-text-muted)' }}>🔑</span>
                <input
                  type="password"
                  id="login-password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '20px' }}>Unlock CMS Console</button>
          </form>
          
          <Link href="/" className="back-btn-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary-light)', textDecoration: 'none', fontSize: '0.85rem' }}>
            ← Exit Gateway to Public Site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-body-wrap" id="admin-dashboard-container">
      {adminStyles}
      {/* Top sticky bar */}
      <header className="admin-header" style={{ background: 'rgba(3, 20, 39, 0.85)', borderBottom: '1px solid var(--color-border)', backdropFilter: 'blur(16px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="admin-header-wrap" style={{ maxWidth: '1300px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="admin-header-title">
            <h2 style={{ fontSize: '1.35rem', letterSpacing: '2px', color: 'var(--color-pure-white)', margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/TBMlogo.png" alt="TBM Logo" style={{ height: '30px', width: 'auto' }} />
              The CONFLUENCE CAMP RETREAT 2026 <span style={{ background: 'rgba(73, 163, 211, 0.08)', border: '1px solid rgba(73, 163, 211, 0.2)', color: 'var(--color-primary-light)', fontSize: '0.65rem', fontWeight: 600, padding: '3px 10px', borderRadius: 'var(--border-radius-pill)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>CMS Dashboard</span>
            </h2>
          </div>
          <div className="admin-header-nav" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/" className="back-btn-link" target="_blank" style={{ color: 'var(--color-primary-light)', textDecoration: 'none', fontSize: '0.85rem' }}>
              👁️ Preview Public Site
            </Link>
            <button className="btn btn-secondary" onClick={handleLogout} style={{ padding: '8px 18px', fontSize: '0.75rem', borderColor: 'rgba(239,83,80,0.3)', color: '#ef5350' }}>
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="admin-layout-body" style={{ maxWidth: '1300px', width: '100%', margin: '0 auto', padding: '30px 24px' }}>
        <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '30px' }}>
          
          {/* Sidebar Navigation */}
          <aside className="admin-sidebar">
            <button className={`admin-menu-btn ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>⚙️ Settings</button>
            <button className={`admin-menu-btn ${activeTab === 'pages' ? 'active' : ''}`} onClick={() => setActiveTab('pages')}>📄 Page Texts</button>
            <button className={`admin-menu-btn ${activeTab === 'speakers' ? 'active' : ''}`} onClick={() => setActiveTab('speakers')}>🎤 Speakers</button>
            <button className={`admin-menu-btn ${activeTab === 'faqs' ? 'active' : ''}`} onClick={() => setActiveTab('faqs')}>❓ FAQs</button>
            <button className={`admin-menu-btn ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => setActiveTab('gallery')}>🖼️ Gallery</button>
            <button className={`admin-menu-btn ${activeTab === 'registrations' ? 'active' : ''}`} onClick={() => setActiveTab('registrations')}>
              📝 Registrations <span className="badge">{state.registrations ? state.registrations.length : 0}</span>
            </button>
            <button className={`admin-menu-btn ${activeTab === 'volunteers' ? 'active' : ''}`} onClick={() => setActiveTab('volunteers')}>
              🤝 Volunteers <span className="badge">{state.volunteers ? state.volunteers.length : 0}</span>
            </button>
            <button className={`admin-menu-btn ${activeTab === 'partners' ? 'active' : ''}`} onClick={() => setActiveTab('partners')}>
              💎 Partners <span className="badge">{state.partners ? state.partners.length : 0}</span>
            </button>
            
            <div style={{ marginTop: 'auto', paddingTop: '25px' }}>
              <button className="btn btn-secondary" onClick={handleResetCMS} style={{ width: '100%', fontSize: '0.7rem', padding: '10px', borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}>
                Reset Defaults
              </button>
            </div>
          </aside>

          {/* Main Form Workspace Content */}
          <div className="admin-content-card">
            
            {/* Tab 1: General Settings */}
            {activeTab === 'settings' && (
              <div className="admin-tab-view active">
                <div className="admin-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '20px', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-pure-white)', margin: 0, letterSpacing: '1.5px', position: 'relative' }}>Retreat Configuration</h3>
                  <button className="btn btn-primary" onClick={handleSaveSettings} style={{ padding: '8px 18px', fontSize: '0.75rem' }}>Save Configuration</button>
                </div>
                
                <div className="admin-alert" style={{ borderRadius: '8px', padding: '15px 20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px', background: 'rgba(73, 163, 211, 0.05)', border: '1px solid rgba(73, 163, 211, 0.15)', color: 'var(--color-primary-light)' }}>
                  <span>💡 Updates to these settings sync immediately into public layouts (including countdown target date).</span>
                </div>
                
                <form onSubmit={handleSaveSettings}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Retreat Theme Focus *</label>
                      <input type="text" value={retreatTheme} onChange={(e) => setRetreatTheme(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Hero Top Tagline *</label>
                      <input type="text" value={retreatTagline} onChange={(e) => setRetreatTagline(e.target.value)} required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Retreat Dates Text *</label>
                      <input type="text" value={retreatDates} onChange={(e) => setRetreatDates(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Countdown Target Date & Time (Lagos Time) *</label>
                      <input type="datetime-local" value={retreatCountdownTarget} onChange={(e) => setRetreatCountdownTarget(e.target.value)} required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Retreat Venue *</label>
                    <input type="text" value={retreatVenue} onChange={(e) => setRetreatVenue(e.target.value)} required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>WhatsApp Community Link *</label>
                      <input type="text" value={whatsappLink} onChange={(e) => setWhatsappLink(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Registration Form System *</label>
                      <select value={registrationMode} onChange={(e) => setRegistrationMode(e.target.value)}>
                        <option value="local">Local Database Registration</option>
                        <option value="google">External Google Sheets Link</option>
                      </select>
                    </div>
                  </div>
                  
                  {registrationMode === "google" && (
                    <div className="form-group">
                      <label>Google Registration Form URL</label>
                      <input type="text" value={googleFormRegLink} onChange={(e) => setGoogleFormRegLink(e.target.value)} placeholder="https://docs.google.com/forms/..." />
                    </div>
                  )}

                  <div className="admin-divider-header" style={{ margin: '35px 0 20px', color: 'var(--color-accent)', fontSize: '1rem', letterSpacing: '1.5px', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    📢 Announcement Banner Settings <span style={{ opacity: 0.4, fontSize: '0.8rem' }}>(homepage alert)</span>
                  </div>
                  
                  <div className="form-group">
                    <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.9rem', color: '#e2e8f0' }}>
                      <input type="checkbox" checked={announcementActive} onChange={(e) => setAnnouncementActive(e.target.checked)} style={{ width: '18px', height: '18px', accentColor: 'var(--color-accent)' }} /> Activate Announcement Alert Banner
                    </label>
                  </div>
                  
                  <div className="form-group">
                    <label>Banner Message Text</label>
                    <input type="text" value={announcementText} onChange={(e) => setAnnouncementText(e.target.value)} placeholder="e.g. Hostels are filling up. Register today!" />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Button CTA Label</label>
                      <input type="text" value={announcementCtaText} onChange={(e) => setAnnouncementCtaText(e.target.value)} placeholder="e.g. Register Now" />
                    </div>
                    <div className="form-group">
                      <label>Button Link Anchor ID</label>
                      <input type="text" value={announcementCtaHash} onChange={(e) => setAnnouncementCtaHash(e.target.value)} placeholder="e.g. #register" />
                    </div>
                  </div>

                  <div className="admin-divider-header" style={{ margin: '35px 0 20px', color: 'var(--color-accent)', fontSize: '1rem', letterSpacing: '1.5px', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    📞 Public Contact Details <span style={{ opacity: 0.4, fontSize: '0.8rem' }}>(footer channels)</span>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Inquiry Phone *</label>
                      <input type="text" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Inquiry Email *</label>
                      <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Tab 2: Page Texts Editor */}
            {activeTab === 'pages' && (
              <div className="admin-tab-view active">
                <div className="admin-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '20px', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-pure-white)', margin: 0, letterSpacing: '1.5px', position: 'relative' }}>Page Texts Content Editor</h3>
                  <button className="btn btn-primary" onClick={handleSavePageTexts} style={{ padding: '8px 18px', fontSize: '0.75rem' }}>Save Page Texts</button>
                </div>
                
                <div className="admin-alert" style={{ borderRadius: '8px', padding: '15px 20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px', background: 'rgba(73, 163, 211, 0.05)', border: '1px solid rgba(73, 163, 211, 0.15)', color: 'var(--color-primary-light)' }}>
                  <span>💡 Select a page below to edit its static text blocks, headlines, and details. Changes sync instantly across the site.</span>
                </div>

                <div className="form-group">
                  <label>Select Page to Edit</label>
                  <select value={pageToEdit} onChange={(e) => setPageToEdit(e.target.value)} style={{ marginBottom: '25px' }}>
                    <option value="home">Home Page</option>
                    <option value="about">About Page</option>
                    <option value="volunteer">Volunteer Page</option>
                    <option value="partners">Partners Page</option>
                    <option value="experience">Experience Page</option>
                  </select>
                </div>

                <form onSubmit={handleSavePageTexts}>
                  {/* Home Page Fields */}
                  {pageToEdit === 'home' && (
                    <div className="page-editor-section">
                      <div className="admin-divider-header" style={{ color: 'var(--color-accent)', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '8px', marginBottom: '20px' }}>🏡 Home Page Vision Section</div>
                      
                      <div className="form-group">
                        <label>Vision Header *</label>
                        <input type="text" value={homeVisionHeader} onChange={(e) => setHomeVisionHeader(e.target.value)} required />
                      </div>
                      
                      <div className="form-group">
                        <label>Vision Paragraphs *</label>
                        <textarea value={homeVisionText} onChange={(e) => setHomeVisionText(e.target.value)} required placeholder="Use double-newlines to separate paragraphs..." style={{ minHeight: '180px' }}></textarea>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Featured Scripture *</label>
                          <textarea value={homeVisionQuote} onChange={(e) => setHomeVisionQuote(e.target.value)} required style={{ minHeight: '80px' }}></textarea>
                        </div>
                        <div className="form-group">
                          <label>Scripture Reference / Citation *</label>
                          <input type="text" value={homeVisionQuoteRef} onChange={(e) => setHomeVisionQuoteRef(e.target.value)} required />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* About Page Fields */}
                  {pageToEdit === 'about' && (
                    <div className="page-editor-section">
                      <div className="admin-divider-header" style={{ color: 'var(--color-accent)', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '8px', marginBottom: '20px' }}>ℹ️ About Page Content</div>
                      
                      <div className="form-group">
                        <label>Who We Are (Hero Paragraphs) *</label>
                        <textarea value={aboutHeroText} onChange={(e) => setAboutHeroText(e.target.value)} required placeholder="Use double-newlines to separate paragraphs..." style={{ minHeight: '200px' }}></textarea>
                      </div>

                      <div className="form-group">
                        <label>Our Identity Card Description *</label>
                        <textarea value={aboutIdentityText} onChange={(e) => setAboutIdentityText(e.target.value)} required style={{ minHeight: '80px' }}></textarea>
                      </div>

                      <div className="form-group">
                        <label>Our Strategy Card Description *</label>
                        <textarea value={aboutStrategyText} onChange={(e) => setAboutStrategyText(e.target.value)} required style={{ minHeight: '80px' }}></textarea>
                      </div>

                      <div className="form-group">
                        <label>The Mission Mandate Quote *</label>
                        <textarea value={aboutMandateText} onChange={(e) => setAboutMandateText(e.target.value)} required style={{ minHeight: '80px' }}></textarea>
                      </div>
                    </div>
                  )}

                  {/* Volunteer Page Fields */}
                  {pageToEdit === 'volunteer' && (
                    <div className="page-editor-section">
                      <div className="admin-divider-header" style={{ color: 'var(--color-accent)', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '8px', marginBottom: '20px' }}>🤝 Volunteer Page Content</div>
                      
                      <div className="form-group">
                        <label>Call to Service (Hero Paragraphs) *</label>
                        <textarea value={volunteerCallText} onChange={(e) => setVolunteerCallText(e.target.value)} required placeholder="Use double-newlines to separate paragraphs..." style={{ minHeight: '180px' }}></textarea>
                      </div>
                    </div>
                  )}

                  {/* Partners Page Fields */}
                  {pageToEdit === 'partners' && (
                    <div className="page-editor-section">
                      <div className="admin-divider-header" style={{ color: 'var(--color-accent)', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '8px', marginBottom: '20px' }}>💎 Partners Page Content</div>
                      
                      <div className="form-group">
                        <label>Call to Partnership (Hero Paragraphs) *</label>
                        <textarea value={partnersCallText} onChange={(e) => setPartnersCallText(e.target.value)} required placeholder="Use double-newlines to separate paragraphs..." style={{ minHeight: '180px' }}></textarea>
                      </div>

                      <div className="admin-divider-header" style={{ color: 'var(--color-accent)', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '8px', marginBottom: '20px', marginTop: '35px' }}>🏦 Partner Bank Account Details</div>
                      
                      <div className="form-row">
                        <div className="form-group">
                          <label>Bank Name *</label>
                          <input type="text" value={partnersBankName} onChange={(e) => setPartnersBankName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                          <label>Account Name *</label>
                          <input type="text" value={partnersAccountName} onChange={(e) => setPartnersAccountName(e.target.value)} required />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Account Number *</label>
                        <input type="text" value={partnersAccountNo} onChange={(e) => setPartnersAccountNo(e.target.value)} required />
                      </div>
                    </div>
                  )}

                  {/* Experience Page Fields */}
                  {pageToEdit === 'experience' && (
                    <div className="page-editor-section">
                      <div className="admin-divider-header" style={{ color: 'var(--color-accent)', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '8px', marginBottom: '20px' }}>⛺ Experience Page Content</div>
                      
                      <div className="form-group">
                        <label>Accommodation & Welfare (Hero Paragraphs) *</label>
                        <textarea value={experienceCallText} onChange={(e) => setExperienceCallText(e.target.value)} required placeholder="Use double-newlines to separate paragraphs..." style={{ minHeight: '180px' }}></textarea>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* Tab 3: Speakers Management */}
            {activeTab === 'speakers' && (
              <div className="admin-tab-view active">
                <div className="admin-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '20px', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-pure-white)', margin: 0, letterSpacing: '1.5px', position: 'relative' }}>Speaker Registry</h3>
                  <button className="btn btn-primary" onClick={handleAddSpeakerClick} style={{ padding: '8px 18px', fontSize: '0.75rem' }}>+ Add Speaker</button>
                </div>
                
                <div className="admin-table-container">
                  <table className="admin-table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                    <thead>
                      <tr style={{ textAlign: 'left' }}>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Avatar</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Name</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Role / Designation</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Biography</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase', width: '100px' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(!state.speakers || state.speakers.length === 0) ? (
                        <tr>
                          <td colSpan="5" style={{ textAlign: 'center' }}>No speakers found.</td>
                        </tr>
                      ) : (
                        state.speakers.map(spk => (
                          <tr key={spk.id}>
                            <td>
                              <div className="speaker-avatar-wrap" style={{ width: '40px', height: '40px', fontSize: '0.9rem', margin: 0, borderRadius: '50%', background: 'rgba(252, 238, 33, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                {spk.avatar || spk.name.substring(0, 2).toUpperCase()}
                              </div>
                            </td>
                            <td><strong>{spk.name}</strong></td>
                            <td>{spk.role}</td>
                            <td>
                              <span style={{ fontSize: '0.8rem', display: 'block', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {spk.bio}
                              </span>
                            </td>
                            <td>
                              <button className="admin-action-btn" onClick={() => handleEditSpeakerClick(spk)}>✏️</button>
                              <button className="admin-action-btn" onClick={() => handleDeleteSpeaker(spk.id)}>🗑️</button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {showSpeakerForm && (
                  <div className="glass-card" style={{ marginTop: '35px', borderColor: 'rgba(252, 238, 33, 0.3)', background: 'rgba(18, 30, 24, 0.8)' }}>
                    <h4 style={{ color: 'var(--color-accent)', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                      {editSpeakerId ? "Edit Speaker Profile" : "Add New Speaker Profile"}
                    </h4>
                    <form onSubmit={handleSpeakerSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Speaker Full Name *</label>
                          <input type="text" value={editSpeakerName} onChange={(e) => setEditSpeakerName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                          <label>Designation / Role *</label>
                          <input type="text" value={editSpeakerRole} onChange={(e) => setEditSpeakerRole(e.target.value)} placeholder="e.g. Guest Speaker, Host" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Avatar Monogram Letters *</label>
                        <input type="text" value={editSpeakerAvatar} onChange={(e) => setEditSpeakerAvatar(e.target.value)} maxLength="2" placeholder="e.g. PS" required style={{ width: '100px', textAlign: 'center' }} />
                      </div>
                      <div className="form-group">
                        <label>Profile Biography *</label>
                        <textarea value={editSpeakerBio} onChange={(e) => setEditSpeakerBio(e.target.value)} required placeholder="Describe the speaker's calling..."></textarea>
                      </div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <button type="submit" className="btn btn-primary">Save Profile</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setShowSpeakerForm(false)}>Cancel</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* Tab 4: FAQs Management */}
            {activeTab === 'faqs' && (
              <div className="admin-tab-view active">
                <div className="admin-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '20px', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-pure-white)', margin: 0, letterSpacing: '1.5px', position: 'relative' }}>Frequently Asked Questions</h3>
                  <button className="btn btn-primary" onClick={handleAddFaqClick} style={{ padding: '8px 18px', fontSize: '0.75rem' }}>+ Add FAQ</button>
                </div>
                
                <div className="admin-table-container">
                  <table className="admin-table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                    <thead>
                      <tr style={{ textAlign: 'left' }}>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Question</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Answer Content</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase', width: '100px' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(!state.faqs || state.faqs.length === 0) ? (
                        <tr>
                          <td colSpan="3" style={{ textAlign: 'center' }}>No FAQs found.</td>
                        </tr>
                      ) : (
                        state.faqs.map(faq => (
                          <tr key={faq.id}>
                            <td><strong>{faq.question}</strong></td>
                            <td>
                              <span style={{ fontSize: '0.8rem', display: 'block', maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {faq.answer}
                              </span>
                            </td>
                            <td>
                              <button className="admin-action-btn" onClick={() => handleEditFaqClick(faq)}>✏️</button>
                              <button className="admin-action-btn" onClick={() => handleDeleteFaq(faq.id)}>🗑️</button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {showFaqForm && (
                  <div className="glass-card" style={{ marginTop: '35px', borderColor: 'rgba(252, 238, 33, 0.3)', background: 'rgba(18, 30, 24, 0.8)' }}>
                    <h4 style={{ color: 'var(--color-accent)', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                      {editFaqId ? "Edit FAQ Item" : "Create FAQ Item"}
                    </h4>
                    <form onSubmit={handleFaqSubmit}>
                      <div className="form-group">
                        <label>Question / Inquiry Title *</label>
                        <input type="text" value={editFaqQ} onChange={(e) => setEditFaqQ(e.target.value)} required />
                      </div>
                      <div className="form-group">
                        <label>Answer explanation text *</label>
                        <textarea value={editFaqA} onChange={(e) => setEditFaqA(e.target.value)} required placeholder="Provide clear logistics answers..."></textarea>
                      </div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <button type="submit" className="btn btn-primary">Save FAQ</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setShowFaqForm(false)}>Cancel</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* Tab 5: Gallery Management */}
            {activeTab === 'gallery' && (
              <div className="admin-tab-view active">
                <div className="admin-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '20px', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-pure-white)', margin: 0, letterSpacing: '1.5px', position: 'relative' }}>Photo Gallery Management</h3>
                  <button className="btn btn-primary" onClick={handleAddGalleryClick} style={{ padding: '8px 18px', fontSize: '0.75rem' }}>+ Add Photo</button>
                </div>
                
                <div className="admin-table-container">
                  <table className="admin-table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                    <thead>
                      <tr style={{ textAlign: 'left' }}>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Preview</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Description</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Source Link</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase', width: '100px' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(!state.gallery || state.gallery.length === 0) ? (
                        <tr>
                          <td colSpan="4" style={{ textAlign: 'center' }}>No photos found.</td>
                        </tr>
                      ) : (
                        state.gallery.map(img => (
                          <tr key={img.id}>
                            <td>
                              <img src={img.url} alt={img.title} style={{ width: '50px', height: '35px', objectFit: 'cover', borderRadius: '4px' }} />
                            </td>
                            <td><strong>{img.title}</strong></td>
                            <td>
                              <span style={{ fontSize: '0.75rem', display: 'block', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {img.url}
                              </span>
                            </td>
                            <td>
                              <button className="admin-action-btn" onClick={() => handleDeleteGallery(img.id)}>🗑️</button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {showGalleryForm && (
                  <div className="glass-card" style={{ marginTop: '35px', borderColor: 'rgba(252, 238, 33, 0.3)', background: 'rgba(18, 30, 24, 0.8)' }}>
                    <h4 style={{ color: 'var(--color-accent)', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Upload Gallery Asset</h4>
                    <form onSubmit={handleGallerySubmit}>
                      <div className="form-group">
                        <label>Description / Tag *</label>
                        <input type="text" value={editImgTitle} onChange={(e) => setEditImgTitle(e.target.value)} placeholder="e.g. Deliverance session" required />
                      </div>
                      <div className="form-group">
                        <label>Source Image URL *</label>
                        <input type="text" value={editImgUrl} onChange={(e) => setEditImgUrl(e.target.value)} placeholder="https://images.unsplash.com/..." required />
                      </div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <button type="submit" className="btn btn-primary">Save Asset</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setShowGalleryForm(false)}>Cancel</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* Tab 6: Registrations List */}
            {activeTab === 'registrations' && (
              <div className="admin-tab-view active">
                <div className="admin-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '20px', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-pure-white)', margin: 0, letterSpacing: '1.5px', position: 'relative' }}>Camper Attendance Directory</h3>
                  <button className="btn btn-secondary" onClick={handleClearRegs} style={{ padding: '6px 12px', fontSize: '0.75rem', borderColor: 'rgba(239,83,80,0.3)', color: '#ef5350' }}>Clear Logs</button>
                </div>
                
                <div className="admin-table-container">
                  <table className="admin-table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                    <thead>
                      <tr style={{ textAlign: 'left' }}>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Camper Name</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Gender</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Category</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Church Denomination</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Contact Channels</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Accommodation</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Volunteer Interest?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(!state.registrations || state.registrations.length === 0) ? (
                        <tr>
                          <td colSpan="7" style={{ textAlign: 'center' }}>No camper registrations recorded yet.</td>
                        </tr>
                      ) : (
                        state.registrations.map((r, idx) => (
                          <tr key={r.id || idx}>
                            <td><strong>{r.firstName} {r.lastName}</strong></td>
                            <td>{r.gender}</td>
                            <td>
                              <span className="tag-badge tag-badge-blue">{r.occupation}</span>
                            </td>
                            <td>{r.church}</td>
                            <td>
                              <span style={{ fontSize: '0.8rem' }}>
                                ✉️ {r.email}<br />📞 {r.phone}
                              </span>
                            </td>
                            <td>
                              {r.accommodation === "Yes" ? (
                                <span className="tag-badge tag-badge-yellow">🏠 Required</span>
                              ) : (
                                <span style={{ opacity: 0.6 }}>Self-Arranged</span>
                              )}
                            </td>
                            <td>
                              {r.volunteerInterest ? (
                                <span className="tag-badge tag-badge-green">💡 Yes</span>
                              ) : (
                                <span style={{ opacity: 0.6 }}>No</span>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 7: Volunteers List */}
            {activeTab === 'volunteers' && (
              <div className="admin-tab-view active">
                <div className="admin-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '20px', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-pure-white)', margin: 0, letterSpacing: '1.5px', position: 'relative' }}>Volunteer Directory</h3>
                  <button className="btn btn-secondary" onClick={handleClearVols} style={{ padding: '6px 12px', fontSize: '0.75rem', borderColor: 'rgba(239,83,80,0.3)', color: '#ef5350' }}>Clear Logs</button>
                </div>
                
                <div className="admin-table-container">
                  <table className="admin-table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                    <thead>
                      <tr style={{ textAlign: 'left' }}>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Volunteer Name</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Preferred Choice (1st / 2nd)</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Contact Channels</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Skills / Background</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(!state.volunteers || state.volunteers.length === 0) ? (
                        <tr>
                          <td colSpan="4" style={{ textAlign: 'center' }}>No volunteer applications recorded yet.</td>
                        </tr>
                      ) : (
                        state.volunteers.map((v, idx) => (
                          <tr key={v.id || idx}>
                            <td><strong>{v.name}</strong></td>
                            <td>
                              1st: <span className="tag-badge tag-badge-yellow">{v.dept1}</span><br />
                              2nd: <span style={{ opacity: 0.7, fontSize: '0.75rem' }}>{v.dept2}</span>
                            </td>
                            <td>
                              <span style={{ fontSize: '0.8rem' }}>
                                ✉️ {v.email}<br />📞 {v.phone}
                              </span>
                            </td>
                            <td>
                              <span style={{ fontSize: '0.8rem', display: 'block', maxWidth: '250px' }}>
                                {v.experience || "N/A"}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 8: Partners List */}
            {activeTab === 'partners' && (
              <div className="admin-tab-view active">
                <div className="admin-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(73, 163, 211, 0.15)', paddingBottom: '20px', marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-pure-white)', margin: 0, letterSpacing: '1.5px', position: 'relative' }}>Partnerships Ledger</h3>
                  <button className="btn btn-secondary" onClick={handleClearParts} style={{ padding: '6px 12px', fontSize: '0.75rem', borderColor: 'rgba(239,83,80,0.3)', color: '#ef5350' }}>Clear Logs</button>
                </div>
                
                <div className="admin-table-container">
                  <table className="admin-table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                    <thead>
                      <tr style={{ textAlign: 'left' }}>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Partner / Org Name</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Partnership Focus</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Contact Channels</th>
                        <th style={{ color: 'var(--color-accent)', padding: '15px 20px', fontSize: '0.75rem', textTransform: 'uppercase' }}>Pledge Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(!state.partners || state.partners.length === 0) ? (
                        <tr>
                          <td colSpan="4" style={{ textAlign: 'center' }}>No partnership records recorded yet.</td>
                        </tr>
                      ) : (
                        state.partners.map((p, idx) => (
                          <tr key={p.id || idx}>
                            <td><strong>{p.name}</strong></td>
                            <td>
                              <span className="tag-badge tag-badge-green">{p.type}</span>
                            </td>
                            <td>
                              <span style={{ fontSize: '0.8rem' }}>
                                ✉️ {p.email}<br />📞 {p.phone}
                              </span>
                            </td>
                            <td>
                              <span style={{ fontSize: '0.8rem', display: 'block', maxWidth: '250px' }}>
                                {p.notes || "N/A"}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
