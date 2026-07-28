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
            <strong>The Brooks Ministry</strong> is a non-denominational Christian movement dedicated to raising frontliners, pioneers, and kingdom-sent agents of transformation for this generation.
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
            <li><Link href="/confluence">The Confluence</Link></li>
            <li><Link href="/volunteer">Volunteer</Link></li>
            <li><Link href="/partners">Partner With Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-links">
            <li><Link href="/confluence">Confluence Camp Retreat</Link></li>
            <li><Link href="/about#about-programs-sec">Past Programs</Link></li>
            <li><Link href="/volunteer">Service Departments</Link></li>
            <li><Link href="/partners">Partnership Tiers</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 The Brooks Ministry. All rights reserved.</p>
        <p>Raising frontliners &amp; pioneers for the Kingdom of God.</p>
      </div>
    </footer>
  );
}
