"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 800); // Transition duration in style.css is 0.8s
      return () => clearTimeout(hideTimer);
    }, 1600); // Hold for 1600ms

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="splash-screen"
      className={`splash-screen ${fadeOut ? "fade-out" : ""}`}
    >
      <div className="splash-bg-glow"></div>
      <div className="splash-content">
        {/* Next.js static asset root path */}
        <img src="/Asset 8mom.png" alt="The Brooks Logo" className="splash-logo" />
        <h1 className="splash-title">The Brooks</h1>
        <div className="splash-loader">
          <div className="splash-loader-bar"></div>
        </div>
      </div>
    </div>
  );
}
