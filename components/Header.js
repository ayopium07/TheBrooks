"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(prev => !prev);
  const closeMobile = () => setMobileOpen(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Confluence", href: "/confluence" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" }
  ];

  // Admin route should hide header if needed, but keeping it visible matches default
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header id="site-header" className={scrolled ? "scrolled" : ""}>
        <div className="nav-container-wrapper">
          <Link href="/" className="logo">
            <img src="/TBMlogo.png" alt="The Brooks Ministry Logo" className="logo-image" />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="nav-menu-container">
            <ul className="nav-menu" id="desktop-nav">
              {navItems.map(item => (
                <li key={item.href} className={`nav-item ${isActive(item.href) ? "active" : ""}`}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            id="hamburger-toggle"
            onClick={toggleMobile}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Backdrop */}
      <div
        className={`drawer-backdrop ${mobileOpen ? "active" : ""}`}
        id="drawer-backdrop-el"
        onClick={closeMobile}
      ></div>
      <aside className={`mobile-drawer ${mobileOpen ? "open" : ""}`} id="mobile-drawer-el">
        <ul className="mobile-nav-list" id="mobile-nav">
          {navItems.map(item => (
            <li key={item.href} className={`mobile-nav-item ${isActive(item.href) ? "active" : ""}`}>
              <Link href={item.href} onClick={closeMobile}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "30px" }}>
          <p>Organised by The Brooks Ministry</p>
        </div>
      </aside>
    </>
  );
}
