"use client";

import React from 'react';
import Link from 'next/link';
import { useCMS } from '@/context/CMSContext';

export default function Footer() {
  const { state } = useCMS();

  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-info">
          <Link href="/" className="logo">
            <img src="/Asset 8mom.png" alt="The Brooks Ministry Logo" className="logo-image" style={{ height: '42px' }} />
          </Link>
          <p className="footer-tagline">
            The CONFLUENCE CAMP RETREAT is convened by <strong>The Brooks Ministry</strong>. We are dedicated to raising young believers in spiritual depth, alignment, and kingdom obedience.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/tbm_theconfluence?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon" aria-label="Instagram">
                <img src="/Instagram.png" alt="Instagram" style={{ height: '20px', width: '20px', objectFit: 'contain' }} />
              </span>
              <span>tbm_theconfluence</span>
            </a>
            <a href="https://www.instagram.com/bythebrooks_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon" aria-label="Instagram">
                <img src="/Instagram.png" alt="Instagram" style={{ height: '20px', width: '20px', objectFit: 'contain' }} />
              </span>
              <span>bythebrooks_</span>
            </a>
            <a href="https://www.youtube.com/@The-BrooksMinistries" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon" aria-label="YouTube">
                <img src="/youtube.png" alt="YouTube" style={{ height: '20px', width: '20px', objectFit: 'contain' }} />
              </span>
              <span>The Brooks Ministries</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/volunteer">Volunteer Portal</Link></li>
            <li><Link href="/partners">Support a Camper</Link></li>
            <li><Link href="/contact">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Logistics Hub</h3>
          <ul className="footer-links">
            <li><Link href="/experience">Retreat Experience</Link></li>
            <li><Link href="/#homepage-speakers-sec">Speakers</Link></li>
            <li><Link href="/faq">Frequently Asked Questions</Link></li>
            <li><Link href="/register">Register for Retreat</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 The Brooks Ministry. The CONFLUENCE CAMP RETREAT 2026. All rights reserved.</p>
        <p>Theme: {state.retreatTheme} | {state.retreatDates}</p>
      </div>
    </footer>
  );
}
