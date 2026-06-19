"use client";

import React, { useState, useEffect } from 'react';
import { useCMS } from '@/context/CMSContext';

export default function ExperiencePage() {
  const { state, isHydrated } = useCMS();

  // Carousel and Lightbox state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Touch swipe states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;
  const totalItems = state?.gallery ? state.gallery.length : 0;

  // Next and Prev functions
  const handleNext = () => {
    if (totalItems === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    if (totalItems === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null || !state?.gallery) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % state.gallery.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + state.gallery.length) % state.gallery.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, state?.gallery]);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying || lightboxIndex !== null || totalItems === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, lightboxIndex, totalItems]);

  // Swipe handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  if (!isHydrated) {
    return <div style={{ minHeight: '100vh', background: 'var(--color-brooks-blue)' }}></div>;
  }

  return (
    <div className="page-view active-view" id="view-experience">
      {/* Redesigned Experience Hero Section */}
      <section className="experience-hero-section">
        <div className="container">
          <div className="experience-hero-grid">
            <div className="experience-hero-text reveal-left active">
              <span className="experience-tag">✦ RETREAT EXPERIENCE</span>
              <h1>The Camp Experience</h1>
              <p className="about-lead">What awaits you at The CONFLUENCE CAMP RETREAT 2026? A sacred space structured to help you disconnect from the world and connect with Heaven.</p>
              <p className="about-lead" style={{ fontSize: '1rem', opacity: 0.88, marginTop: '14px' }}>
                We gather not for entertainment, but for an encounter. Through structured prayer watches, study sessions, and fellowship, we host the presence of God. Prepare your heart.
              </p>
            </div>
            <div className="experience-hero-showcase reveal-right active">
              <div className="experience-stats-card">
                <div className="stat-item">
                  <span className="stat-number">3 Days</span>
                  <span className="stat-label">Consecrated Devotion</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">8 Watches</span>
                  <span className="stat-label">Of Prayer & Worship</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Campers Confluenced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Pillars Grid Section */}
      <section className="bg-off-white" style={{ padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal active">
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 700, marginBottom: '12px', opacity: 0.75 }}>
              Spiritual Pillars
            </p>
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 16px', fontSize: 'clamp(2rem, 4vw, 2.6rem)', textTransform: 'uppercase' }}>
              The Core Parameters
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '0 auto' }}></div>
          </div>

          <div className="features-grid reveal active">
            {/* Worship Sessions */}
            <div className="feature-card">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3>Worship Sessions</h3>
              <p>Corporate devotion led by anointed worship ministers. These sessions are structured to create a path into the throne room, elevating your spirit to behold His glory.</p>
            </div>

            {/* Teaching & Word */}
            <div className="feature-card">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.232.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>Teaching & Word</h3>
              <p>Facilitators will share teachings focused on spiritual growth, sound doctrines, Christian leadership, and purpose in the marketplace.</p>
            </div>

            {/* Intercessory Prayers */}
            <div className="feature-card">
              <div className="reason-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Intercessory Prayers</h3>
              <p>Intensive hours of prayer, spiritual building, and personal intercession. We pray to build spiritual capacity and break demonic yokes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation & Welfare Split Section */}
      <section className="bg-off-white" style={{ padding: '90px 0', borderTop: '1px solid rgba(10, 102, 194, 0.06)' }}>
        <div className="container">
          <div className="grid-2 reveal active" style={{ alignItems: 'center', gap: '50px' }}>
            <div className="experience-details-text">
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 700, marginBottom: '12px', opacity: 0.75 }}>
                Welfare & Lodging
              </p>
              <h3>Accommodation & Feeding</h3>
              <div id="cms-experience-call-text">
                {state.experienceCallText.split("\n\n").filter(p => p.trim() !== "").map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="backpack-list-card">
                <h4>🎒 What to Bring</h4>
                <ul>
                  <li>📖 Holy Bible & Notebook</li>
                  <li>✍️ Writing Materials</li>
                  <li>👕 Decent Clothing (Warm outfits recommended)</li>
                  <li>🧴 Personal toiletries & bedspread</li>
                  <li>❤️ An open heart, ready to receive</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Gallery Section */}
      <section className="bg-off-white" style={{ padding: '90px 0', borderTop: '1px solid rgba(10, 102, 194, 0.06)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal active">
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brooks-blue)', fontWeight: 700, marginBottom: '12px', opacity: 0.75 }}>
              Visual Testimony
            </p>
            <h2 style={{ color: 'var(--color-brooks-blue)', margin: '0 0 16px', fontSize: 'clamp(2rem, 4vw, 2.6rem)', textTransform: 'uppercase' }}>
              Memory Gallery
            </h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 16px', fontFamily: 'var(--font-body)' }}>
              Snapshots from previous editions and outreach projects of The Brooks Ministry.
            </p>
            <div style={{ width: '48px', height: '3px', background: 'var(--color-sunlight)', borderRadius: '2px', margin: '0 auto' }}></div>
          </div>

          {!state.gallery || state.gallery.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#475569' }}>No photos in gallery.</p>
          ) : (
            <div className="gallery-carousel-wrapper reveal active">
              {/* Autoplay Progress Timer Bar */}
              <div className="carousel-progress-bar-container">
                <div 
                  className={`carousel-progress-bar ${isPlaying && lightboxIndex === null ? 'animating' : 'paused'}`}
                  key={currentIndex}
                />
              </div>

              {/* Main Slideshow Viewport */}
              <div 
                className="slideshow-viewport"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
              >
                {/* Slideshow Track */}
                <div className="slideshow-track">
                  {state.gallery.map((img, idx) => {
                    const isActive = idx === currentIndex;
                    const slideClass = `slideshow-slide ${isActive ? 'active' : 'inactive'}`;

                    return (
                      <div 
                        className={slideClass} 
                        key={img.id}
                        onClick={() => {
                          if (isActive) {
                            setLightboxIndex(idx);
                          }
                        }}
                      >
                        <img src={img.url} alt={img.title} className="slideshow-image" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Controls Panel */}
              <div className="carousel-controls-bottom">
                {/* Play/Pause Button */}
                <button 
                  className={`carousel-play-pause-btn ${isPlaying ? 'playing' : 'paused'}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isPlaying ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                      <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </button>

                {/* Pagination Dots */}
                <div className="carousel-dots">
                  {state.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && state.gallery && state.gallery[lightboxIndex] && (
        <div 
          className="lightbox-overlay active"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button 
            className="lightbox-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Lightbox navigation */}
          <button 
            className="lightbox-nav-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + state.gallery.length) % state.gallery.length);
            }}
            aria-label="Previous lightbox image"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={state.gallery[lightboxIndex].url} 
              alt={state.gallery[lightboxIndex].title} 
              className="lightbox-image" 
            />
            <div className="lightbox-caption">
              <h3>{state.gallery[lightboxIndex].title}</h3>
              <p>Testimony {lightboxIndex + 1} of {state.gallery.length}</p>
            </div>
          </div>

          <button 
            className="lightbox-nav-btn next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % state.gallery.length);
            }}
            aria-label="Next lightbox image"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
