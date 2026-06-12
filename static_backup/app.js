/**
 * The Confluence Camp Retreat 2026 - Public Controller & Router
 * Theme: Behold the Glory of God
 */

(function () {
  'use strict';

  // ==========================================================================
  // 01. DEFAULT CMS STATE & LOCAL STORAGE SYNC
  // ==========================================================================
  const DEFAULT_CMS_STATE = {
    retreatTheme: "Behold the Glory of God",
    retreatTagline: "The Confluence Camp Retreat 2026",
    retreatDates: "23rd – 25th July, 2026",
    retreatCountdownTarget: "2026-07-23T09:00:00",
    retreatVenue: "Redemption City of God, Ogun State, Nigeria",
    whatsappLink: "https://chat.whatsapp.com/TheConfluenceCamp2026MockLink",
    registrationMode: "local",
    googleFormRegLink: "https://docs.google.com/forms/d/e/1FAIpQLSeMockRegistrationFormLink/viewform",
    announcementActive: true,
    announcementText: "Welcome to The Confluence 2026! Secure your free lodging and feeding by registering early.",
    announcementCtaText: "Register Free",
    announcementCtaHash: "#register",
    contactPhone: "+234 (0) 803 999 8888",
    contactEmail: "retreat@thebrooksministry.org",
    contactWhatsappChannel: "https://whatsapp.com/channel/TheBrooksMinistryMockChannel",

    speakers: [
      {
        id: "spk-1",
        name: "To Be Revealed",
        role: "Guest Minister",
        avatar: "",
        bio: "Loading..."
      },
      {
        id: "spk-2",
        name: "To Be Revealed",
        role: "Worship Minister",
        avatar: "",
        bio: "Loading..."
      },
      {
        id: "spk-3",
        name: "To Be Revealed",
        role: "Retreat Convener",
        avatar: "",
        bio: "Loading..."
      }
    ],

    faqs: [
      {
        id: "faq-1",
        question: "Is registration really free? Will feeding and accommodation be provided?",
        answer: "Yes, registration is 100% free! Thanks to our partners and The Brooks Ministry, accommodation and three daily meals are fully provided for all registered campers throughout the retreat."
      },
      {
        id: "faq-2",
        question: "Who can attend The Confluence Camp Retreat?",
        answer: "The retreat is open to university students, young professionals, ministry workers, and any young adult seeking sincere spiritual growth and fellowship."
      },
      {
        id: "faq-3",
        question: "How do I get to the venue, and what should I bring?",
        answer: "The venue is Redemption City of God, Ogun State, Nigeria. Detailed travel coordinates and pickup hubs will be shared in the WhatsApp Community. Campers should bring a Holy Bible, writing materials, decent personal outfits, and toiletries."
      },
      {
        id: "faq-4",
        question: "Can I volunteer to serve in a department?",
        answer: "Absolutely! We welcome campers to volunteer in departments like Protocol, Media, Technical, Logistics, Hospitality, Registration, Prayer Team, and Welfare. You can apply on the Volunteer page."
      },
      {
        id: "faq-5",
        question: "Can I attend only a part of the retreat?",
        answer: "While we strongly recommend staying for the full 3 days (23rd – 25th July) to experience the full sequential flow of teachings and prayers, you are allowed to attend sessions as a day-camper."
      }
    ],

    gallery: [
      {
        id: "gal-1",
        title: "Intense Prayer Altars",
        url: "https://images.unsplash.com/photo-1544427920-c49bcbabf08e?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "gal-2",
        title: "Teaching & Word Discipleship",
        url: "https://images.unsplash.com/photo-1504052434569-70ad58565b90?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "gal-3",
        title: "Atmosphere of Sacred Worship",
        url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "gal-4",
        title: "Believers Fellowship & Joy",
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
      }
    ],

    homeVisionHeader: "What is Confluence Camp?",
    homeVisionText: "Confluence Camp is an annual retreat of The Brooks Ministry designed to gather believers from different backgrounds into an atmosphere of worship, prayer, teaching, fellowship, and spiritual encounter.\n\nIt is a place where hunger meets revelation, where destinies are aligned, and where lives are transformed through the power and presence of God. More than an event, Confluence Camp is a divine meeting point—a confluence of people, purpose, and God's presence.\n\nOver the course of three days, participants are immersed in an environment intentionally created for spiritual growth, deeper intimacy with God, and fresh encounters that produce lasting transformation.",
    homeVisionQuote: "\"Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.\"",
    homeVisionQuoteRef: "— Hebrews 10:25",

    aboutHeroText: "The Confluence Camp Meeting is the retreat experience of The Brooks Ministry.\n\nBorn out of a burden to see believers encounter God beyond routine gatherings, Confluence Camp was established as a space where people can pause, retreat, and intentionally seek God together and even personally.\n\nThe retreat combines sound biblical teaching, fervent prayer, heartfelt worship, community building, and moments of personal reflection to create an atmosphere where spiritual growth can flourish. Each edition is centred on a divine emphasis for the season, guiding participants into deeper intimacy with God, greater spiritual clarity, and renewed commitment to His purpose.\n\nThe Confluence Camp is for believers, young people, leaders, ministers, kingdom workers, and anyone hungry for a deeper relationship with God, spiritual growth, divine direction, and a fresh encounter with His presence.",
    aboutIdentityText: "The Brooks is a forward-looking spiritual movement dedicated to raising the next generation of Christian leaders. We bridge the gap between ancient faith and modern societal impact.",
    aboutStrategyText: "By identifying and equipping believers across all walks of life, we build a global network of visionaries prepared to establish the Kingdom of God in every sphere of influence.",
    aboutMandateText: "\"To see a generation of spiritually active, doctrinally grounded, and purpose-driven young believers deployed as kingdom-sent agents of transformation across the nations.\"",

    volunteerCallText: "At The Confluence Camp Retreat, service is an act of worship. Every chair arranged, every technical signal sent, and every meal served is a vital contribution to the spiritual atmosphere of the retreat. We invite you to consecrate your time, talents, and energy to serve the body of Christ.\n\nWhether you have professional skills in media and technical operations, or a heart to serve in welfare and hospitality, there is a place for you. Join hands with other young believers as we build an altar of encounter for this generation.",

    partnersCallText: "The Confluence Camp Retreat is convened by The Brooks Ministry as a non-profit endeavor. We serve university students and young adults across the nation with standard accommodations, balanced daily feeding, and study resources at zero cost to them.\n\nThis mandate is fully funded by individuals and corporate bodies who share our vision to see a generation raised in fire, character, and alignment. Partner with us to keep the fire burning on the altar.",
    partnersBankName: "Guaranty Trust Bank (GTBank)",
    partnersAccountName: "The Brooks Ministry",
    partnersAccountNo: "0123456789",

    experienceCallText: "We believe that spiritual focus requires freedom from logistical worries. To support your retreat experience, The Brooks Ministry provides accommodation and feeding for all registered attendees throughout the retreat, completely free of charge.\n\nSeparate hostels are secured for male and female campers with standard facilities within the Redemption City of God. Our welfare team coordinates three daily balanced meals to ensure every camper remains physically energized.",

    registrations: [],
    volunteers: [],
    partners: []
  };

  let cmsState = {};

  function loadCMS() {
    try {
      const stored = localStorage.getItem("confluence_cms_state");
      if (stored) {
        cmsState = JSON.parse(stored);
        Object.keys(DEFAULT_CMS_STATE).forEach(key => {
          if (cmsState[key] === undefined) {
            cmsState[key] = DEFAULT_CMS_STATE[key];
          }
        });
        // Reset stored speakers if they contain old names/bios to match "To Be Revealed" and "Loading..." requirements
        if (cmsState.speakers && cmsState.speakers.some(s => s.name.includes("David") || s.name.includes("Dunsin") || s.name.includes("Isaac") || s.avatar === "DO" || s.avatar === "IO" || s.bio !== "Loading...")) {
          cmsState.speakers = JSON.parse(JSON.stringify(DEFAULT_CMS_STATE.speakers));
          saveCMS();
        }
      } else {
        cmsState = JSON.parse(JSON.stringify(DEFAULT_CMS_STATE));
        localStorage.setItem("confluence_cms_state", JSON.stringify(cmsState));
      }
    } catch (e) {
      console.error("Local storage error, using memory fallback.", e);
      cmsState = JSON.parse(JSON.stringify(DEFAULT_CMS_STATE));
    }
  }

  function saveCMS() {
    try {
      localStorage.setItem("confluence_cms_state", JSON.stringify(cmsState));
    } catch (e) {
      console.error("Local storage save error.", e);
    }
  }

  // ==========================================================================
  // 02. ROUTING SYSTEM & NAVIGATION CONTROLLER
  // ==========================================================================
  const PAGE_VIEWS = [
    "home", "about", "experience", "register", "volunteer", "partners", "faq", "contact"
  ];

  function handleRoute() {
    let filename = window.location.pathname.split("/").pop().replace(".html", "").trim().toLowerCase();
    if (filename === "" || filename === "index") {
      filename = "home";
    }
    
    let targetView = filename;
    let targetElementId = null;

    let currentHash = window.location.hash.replace("#", "").trim().toLowerCase();
    if (currentHash === "speakers" || currentHash === "homepage-speakers-sec") {
      targetElementId = "homepage-speakers-sec";
    }

    // Toggle View Visibilities
    PAGE_VIEWS.forEach(viewName => {
      const viewEl = document.getElementById(`view-${viewName}`);
      if (viewEl) {
        if (viewName === targetView) {
          viewEl.classList.add("active-view");
        } else {
          viewEl.classList.remove("active-view");
        }
      }
    });

    // Update Nav Highlights (Desktop navbar shows: home, about, volunteer, partners, contact)
    const desktopItems = document.querySelectorAll("#desktop-nav .nav-item");
    desktopItems.forEach(item => {
      const targetTab = item.getAttribute("data-tab");
      if (targetTab === targetView) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update Nav Highlights (Mobile Drawer)
    const mobileItems = document.querySelectorAll("#mobile-nav .mobile-nav-item");
    mobileItems.forEach(item => {
      const targetTab = item.getAttribute("data-tab");
      if (targetTab === targetView) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    if (targetElementId) {
      setTimeout(() => {
        const targetEl = document.getElementById(targetElementId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    closeMobileDrawer();
  }

  // ==========================================================================
  // 03. MOBILE DRAWER NAVIGATION
  // ==========================================================================
  const toggleBtn = document.getElementById("hamburger-toggle");
  const drawerEl = document.getElementById("mobile-drawer-el");
  const backdropEl = document.getElementById("drawer-backdrop-el");

  function openMobileDrawer() {
    if (toggleBtn && drawerEl && backdropEl) {
      toggleBtn.classList.add("active");
      drawerEl.classList.add("open");
      backdropEl.classList.add("active");
    }
  }

  function closeMobileDrawer() {
    if (toggleBtn && drawerEl && backdropEl) {
      toggleBtn.classList.remove("active");
      drawerEl.classList.remove("open");
      backdropEl.classList.remove("active");
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      if (drawerEl.classList.contains("open")) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });
  }

  if (backdropEl) {
    backdropEl.addEventListener("click", closeMobileDrawer);
  }

  // Header Scroll State Toggle
  window.addEventListener("scroll", function () {
    const header = document.getElementById("site-header");
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });

  // ==========================================================================
  // 04. LIVE COUNTDOWN TIMER
  // ==========================================================================
  let countdownInterval;

  function initCountdown() {
    const daysEl = document.getElementById("timer-days");
    const hoursEl = document.getElementById("timer-hours");
    const minutesEl = document.getElementById("timer-minutes");
    const secondsEl = document.getElementById("timer-seconds");

    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    function updateTimer() {
      const targetStr = cmsState.retreatCountdownTarget;
      const targetDate = new Date(targetStr).getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (isNaN(targetDate) || distance < 0) {
        if (daysEl) daysEl.innerText = "00";
        if (hoursEl) hoursEl.innerText = "00";
        if (minutesEl) minutesEl.innerText = "00";
        if (secondsEl) secondsEl.innerText = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
      if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
    }

    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
  }

  // ==========================================================================
  // 05. DYNAMIC UI RENDERING (READ ACTIONS)
  // ==========================================================================
  function renderAllDynamicElements() {
    updateTextElement("cms-hero-tag", "Theme: " + cmsState.retreatTheme);
    updateTextElement("cms-hero-title", "The Confluence 2026 <span>" + cmsState.retreatTheme + "</span>", true);
    updateTextElement("cms-hero-subtitle", cmsState.retreatTheme);
    updateTextElement("cms-meta-dates", cmsState.retreatDates);
    updateTextElement("cms-meta-venue", cmsState.retreatVenue);
    
    updateTextLink("cms-gform-reg-link", cmsState.googleFormRegLink);
    updateTextElement("cms-contact-phone", cmsState.contactPhone);
    updateTextElement("cms-contact-email", cmsState.contactEmail);
    updateTextLink("cms-contact-whatsapp", cmsState.contactWhatsappChannel);
    
    const bottomFooterEl = document.querySelector("footer .footer-bottom p:nth-child(2)");
    if (bottomFooterEl) {
      bottomFooterEl.innerText = `Theme: ${cmsState.retreatTheme} | ${cmsState.retreatDates}`;
    }

    // Dynamic page text elements
    updateTextElement("cms-home-vision-header", cmsState.homeVisionHeader);
    injectParagraphs("cms-home-vision-text", cmsState.homeVisionText);
    updateTextElement("cms-home-vision-quote", cmsState.homeVisionQuote);
    updateTextElement("cms-home-vision-quote-ref", cmsState.homeVisionQuoteRef);

    injectParagraphs("cms-about-hero-text", cmsState.aboutHeroText, true); // Lead paragraphs
    updateTextElement("cms-about-identity-text", cmsState.aboutIdentityText);
    updateTextElement("cms-about-strategy-text", cmsState.aboutStrategyText);
    updateTextElement("cms-about-mandate-text", cmsState.aboutMandateText);

    injectParagraphs("cms-volunteer-call-text", cmsState.volunteerCallText);

    injectParagraphs("cms-partners-call-text", cmsState.partnersCallText);
    updateTextElement("cms-partners-bank-name", cmsState.partnersBankName);
    updateTextElement("cms-partners-account-name", cmsState.partnersAccountName);
    updateTextElement("cms-partners-account-no", cmsState.partnersAccountNo);

    injectParagraphs("cms-experience-call-text", cmsState.experienceCallText);

    // Announcement Banner
    const bannerSec = document.getElementById("announcements-sec-wrap");
    const bannerTxt = document.getElementById("cms-announcement-text");
    const bannerCta = document.getElementById("cms-announcement-cta");
    if (bannerSec && bannerTxt && bannerCta) {
      if (cmsState.announcementActive) {
        bannerSec.style.display = "block";
        bannerTxt.innerText = cmsState.announcementText;
        bannerCta.innerText = cmsState.announcementCtaText;
        
        let ctaLink = cmsState.announcementCtaHash;
        if (ctaLink === "#register") ctaLink = "register.html";
        else if (ctaLink === "#volunteer") ctaLink = "volunteer.html";
        else if (ctaLink === "#partners") ctaLink = "partners.html";
        else if (ctaLink === "#about") ctaLink = "about.html";
        else if (ctaLink === "#contact") ctaLink = "contact.html";
        else if (ctaLink === "#experience") ctaLink = "experience.html";
        else if (ctaLink === "#faq") ctaLink = "faq.html";
        else if (ctaLink === "#home") ctaLink = "index.html";
        
        bannerCta.setAttribute("href", ctaLink);
      } else {
        bannerSec.style.display = "none";
      }
    }

    // Registration Form Mode
    const localRegPanel = document.getElementById("registration-form-panel");
    const embedRegPanel = document.getElementById("registration-embed-panel");
    if (localRegPanel && embedRegPanel) {
      if (cmsState.registrationMode === "local") {
        localRegPanel.style.display = "block";
        embedRegPanel.style.display = "none";
      } else {
        localRegPanel.style.display = "none";
        embedRegPanel.style.display = "block";
      }
    }

    renderSpeakersList();
    renderFAQsList();
    renderGalleryList();
    initCountdown();
  }

  function updateTextElement(id, text, isHTML = false) {
    const el = document.getElementById(id);
    if (el) {
      if (isHTML) el.innerHTML = text;
      else el.innerText = text;
    }
  }

  function updateTextLink(id, href) {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", href);
  }

  function injectParagraphs(id, text, isLead = false) {
    const el = document.getElementById(id);
    if (!el) return;
    if (!text) return;
    const paras = text.split("\n\n").filter(p => p.trim() !== "");
    el.innerHTML = paras.map(p => {
      if (isLead) {
        return `<p class="about-lead">${p.trim().replace(/\n/g, '<br>')}</p>`;
      } else {
        return `<p style="font-family: var(--font-body); font-size: 1.15rem; line-height: 1.75; color: #2c2c3e; margin: 0;">${p.trim().replace(/\n/g, '<br>')}</p>`;
      }
    }).join("");
  }

  function renderSpeakersList() {
    const listEl = document.getElementById("cms-speakers-list");
    if (!listEl) return;

    if (!cmsState.speakers || cmsState.speakers.length === 0) {
      listEl.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px;" class="glass-card">
          <h3 style="color: var(--color-sunlight);">Speakers Coming Soon</h3>
          <p>We are currently finalizing speaker arrangements. Check back shortly for updates.</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = cmsState.speakers.map(speaker => {
      const isPlaceholder = !speaker.avatar || (!speaker.avatar.startsWith("http") && !speaker.avatar.startsWith("/") && speaker.avatar.length <= 4);
      
      const avatarHTML = isPlaceholder 
        ? `<svg class="speaker-placeholder-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 70px; height: 70px; color: rgba(252, 238, 33, 0.75); transition: transform 0.4s ease;">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
           </svg>`
        : `<img src="${speaker.avatar}" alt="${speaker.name}" />`;

      return `
        <article class="speaker-card">
          <div class="speaker-avatar-wrap">
            ${avatarHTML}
          </div>
          <h3 class="speaker-name">${speaker.name}</h3>
          <p class="speaker-role">${speaker.role}</p>
          <p class="speaker-bio">${speaker.bio}</p>
        </article>
      `;
    }).join("");
  }

  function renderFAQsList() {
    const listEl = document.getElementById("cms-faq-list");
    if (!listEl) return;

    if (!cmsState.faqs || cmsState.faqs.length === 0) {
      listEl.innerHTML = `<p style="text-align:center;">No FAQs available.</p>`;
      return;
    }

    listEl.innerHTML = cmsState.faqs.map(faq => `
      <div class="faq-item" id="faq-item-${faq.id}">
        <div class="faq-question" data-id="${faq.id}">
          <span>${faq.question}</span>
          <span class="faq-icon">▼</span>
        </div>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>${faq.answer}</p>
          </div>
        </div>
      </div>
    `).join("");

    const questions = listEl.querySelectorAll(".faq-question");
    questions.forEach(q => {
      q.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        const parent = document.getElementById(`faq-item-${id}`);
        const isActive = parent.classList.contains("active");

        listEl.querySelectorAll(".faq-item").forEach(item => {
          item.classList.remove("active");
        });

        if (!isActive) {
          parent.classList.add("active");
        }
      });
    });
  }

  function renderGalleryList() {
    const listEl = document.getElementById("cms-gallery-list");
    if (!listEl) return;

    if (!cmsState.gallery || cmsState.gallery.length === 0) {
      listEl.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">No photos in gallery.</p>`;
      return;
    }

    listEl.innerHTML = cmsState.gallery.map(img => `
      <div class="gallery-item">
        <img src="${img.url}" alt="${img.title}">
        <div class="gallery-overlay">
          <div class="gallery-text">
            <h4>${img.title}</h4>
          </div>
        </div>
      </div>
    `).join("");
  }

  // ==========================================================================
  // 06. USER SUBMISSIONS (CREATE ACTIONS)
  // ==========================================================================
  const regForm = document.getElementById("retreat-reg-form");
  if (regForm) {
    regForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const newReg = {
        firstName: document.getElementById("reg-first-name").value,
        lastName: document.getElementById("reg-last-name").value,
        email: document.getElementById("reg-email").value,
        phone: document.getElementById("reg-phone").value,
        church: document.getElementById("reg-church").value,
        gender: document.getElementById("reg-gender").value,
        occupation: document.getElementById("reg-occupation").value,
        emergencyName: document.getElementById("reg-emergency-name").value,
        emergencyPhone: document.getElementById("reg-emergency-phone").value,
        accommodation: document.querySelector('input[name="accommodation-need"]:checked').value,
        volunteerInterest: document.getElementById("reg-volunteer-interest").checked
      };

      loadCMS(); // Load fresh state
      cmsState.registrations.push(newReg);
      saveCMS();

      document.getElementById("registration-form-panel").style.display = "none";
      const successPanel = document.getElementById("registration-success-panel");
      successPanel.style.display = "block";

      const waLink = document.getElementById("cms-whatsapp-link-success");
      if (waLink) waLink.setAttribute("href", cmsState.whatsappLink);
    });
  }

  const btnRegAnother = document.getElementById("btn-reg-another");
  if (btnRegAnother) {
    btnRegAnother.addEventListener("click", function () {
      if (regForm) regForm.reset();
      document.getElementById("registration-success-panel").style.display = "none";
      document.getElementById("registration-form-panel").style.display = "block";
    });
  }

  const btnUseLocalReg = document.getElementById("btn-use-local-reg");
  if (btnUseLocalReg) {
    btnUseLocalReg.addEventListener("click", function () {
      loadCMS();
      cmsState.registrationMode = "local";
      saveCMS();
      renderAllDynamicElements();
    });
  }

  const volunteerForm = document.getElementById("volunteer-reg-form");
  if (volunteerForm) {
    volunteerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const newVol = {
        name: document.getElementById("vol-name").value,
        email: document.getElementById("vol-email").value,
        phone: document.getElementById("vol-phone").value,
        dept1: document.getElementById("vol-dept1").value,
        dept2: document.getElementById("vol-dept2").value,
        experience: document.getElementById("vol-experience").value
      };

      loadCMS();
      cmsState.volunteers.push(newVol);
      saveCMS();

      document.getElementById("volunteer-form-panel").style.display = "none";
      document.getElementById("volunteer-success-panel").style.display = "block";
    });
  }

  const btnVolReset = document.getElementById("btn-vol-reset");
  if (btnVolReset) {
    btnVolReset.addEventListener("click", function () {
      if (volunteerForm) volunteerForm.reset();
      document.getElementById("volunteer-success-panel").style.display = "none";
      document.getElementById("volunteer-form-panel").style.display = "block";
    });
  }

  const partnerForm = document.getElementById("partner-interest-form");
  if (partnerForm) {
    partnerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const newPartner = {
        name: document.getElementById("part-name").value,
        email: document.getElementById("part-email").value,
        phone: document.getElementById("part-phone").value,
        type: document.getElementById("part-type").value,
        notes: document.getElementById("part-notes").value
      };

      loadCMS();
      cmsState.partners.push(newPartner);
      saveCMS();

      document.getElementById("partner-form-panel").style.display = "none";
      document.getElementById("partner-success-panel").style.display = "block";
    });
  }

  const btnPartReset = document.getElementById("btn-part-reset");
  if (btnPartReset) {
    btnPartReset.addEventListener("click", function () {
      if (partnerForm) partnerForm.reset();
      document.getElementById("partner-success-panel").style.display = "none";
      document.getElementById("partner-form-panel").style.display = "block";
    });
  }

  const contactForm = document.getElementById("contact-msg-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactForm.style.display = "none";
      document.getElementById("contact-success-panel").style.display = "block";
    });
  }

  const btnConReset = document.getElementById("btn-con-reset");
  if (btnConReset) {
    btnConReset.addEventListener("click", function () {
      if (contactForm) contactForm.reset();
      document.getElementById("contact-success-panel").style.display = "none";
      document.getElementById("contact-msg-form").style.display = "block";
    });
  }

  // ==========================================================================
  // 07. INITIALIZATION
  // ==========================================================================
  function initScrollReveal() {
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
  }

  // ==========================================================================
  // 07. INITIALIZATION
  // ==========================================================================
  function init() {
    loadCMS();
    renderAllDynamicElements();
    initScrollReveal();

    window.addEventListener("hashchange", handleRoute);
    handleRoute();

    const scrollCue = document.getElementById("scroll-to-vision");
    if (scrollCue) {
      scrollCue.addEventListener("click", function () {
        const target = document.getElementById("home-vision-sec");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Smooth transition trigger for intro splash screen
    const splash = document.getElementById("splash-screen");
    if (splash) {
      setTimeout(() => {
        splash.classList.add("fade-out");
      }, 1600);
    }
  }

  document.addEventListener("DOMContentLoaded", init);

})();
