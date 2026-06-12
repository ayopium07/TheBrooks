"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay slightly to allow the DOM to render the new page
    const timer = setTimeout(() => {
      if (!('IntersectionObserver' in window)) {
        const animTargets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        animTargets.forEach(target => target.classList.add('active'));
        return;
      }

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.05
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const animTargets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      animTargets.forEach(target => observer.observe(target));
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
