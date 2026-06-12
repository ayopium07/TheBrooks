/**
 * The Confluence Camp Retreat 2026 - Admin Controller & CRUD Engine
 * Credentials: Username (TheConfluence) | Password (confluence2026)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 01. AUTHENTICATION CONTROLLER (Username: TheConfluence | Password: confluence2026)
  // ==========================================================================
  const ADMIN_CREDENTIALS = {
    username: "TheConfluence",
    password: "confluence2026"
  };

  const loginOuter = document.getElementById("login-outer-wrap");
  const dashboardContainer = document.getElementById("admin-dashboard-container");
  const loginForm = document.getElementById("admin-login-form");
  const loginErrorMsg = document.getElementById("login-error-msg");
  const btnLogout = document.getElementById("btn-admin-logout");

  function checkSession() {
    const isLoggedIn = sessionStorage.getItem("confluence_admin_logged_in") === "true";
    
    if (isLoggedIn) {
      if (loginOuter) loginOuter.style.display = "none";
      if (dashboardContainer) dashboardContainer.style.display = "flex";
      
      // Load and render database state
      loadCMS();
      populateAdminFields();
      renderAdminTables();
    } else {
      if (loginOuter) loginOuter.style.display = "flex";
      if (dashboardContainer) dashboardContainer.style.display = "none";
    }
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const userVal = document.getElementById("login-username").value.trim();
      const passVal = document.getElementById("login-password").value;

      if (userVal === ADMIN_CREDENTIALS.username && passVal === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem("confluence_admin_logged_in", "true");
        if (loginErrorMsg) loginErrorMsg.style.display = "none";
        loginForm.reset();
        checkSession();
      } else {
        if (loginErrorMsg) {
          loginErrorMsg.style.display = "block";
          loginErrorMsg.innerText = "Invalid username or password. Please try again.";
        }
      }
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", function () {
      sessionStorage.removeItem("confluence_admin_logged_in");
      window.location.reload();
    });
  }

  // ==========================================================================
  // 02. SHARED STATE MANAGEMENT (LOCAL STORAGE READ/WRITE)
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
        // Override stored speakers if they contain old names/bios to match "To Be Revealed" and "Loading..." requirements
        if (cmsState.speakers && cmsState.speakers.some(s => s.name.includes("David") || s.name.includes("Dunsin") || s.name.includes("Isaac") || s.avatar === "DO" || s.avatar === "IO" || s.bio !== "Loading...")) {
          cmsState.speakers = JSON.parse(JSON.stringify(DEFAULT_CMS_STATE.speakers));
          saveCMS();
        }
      } else {
        cmsState = JSON.parse(JSON.stringify(DEFAULT_CMS_STATE));
        localStorage.setItem("confluence_cms_state", JSON.stringify(cmsState));
      }
    } catch (e) {
      console.error("Local storage read error in admin, using memory state.", e);
      cmsState = JSON.parse(JSON.stringify(DEFAULT_CMS_STATE));
    }
  }

  function saveCMS() {
    try {
      localStorage.setItem("confluence_cms_state", JSON.stringify(cmsState));
      updateAdminCounters();
      renderAdminTables();
    } catch (e) {
      console.error("Local storage save error in admin.", e);
    }
  }

  function resetCMSToDefaults() {
    if (confirm("Restore original values, default list data, and clear test forms?")) {
      cmsState = JSON.parse(JSON.stringify(DEFAULT_CMS_STATE));
      saveCMS();
      window.location.reload();
    }
  }

  // ==========================================================================
  // 03. ADMIN DASHBOARD WORKSPACE CONTROLLERS
  // ==========================================================================

  // Sidebar Tab Switcher
  const adminTabBtns = document.querySelectorAll(".admin-menu-btn");
  adminTabBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const target = this.getAttribute("data-admin-tab");
      
      adminTabBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const views = document.querySelectorAll(".admin-tab-view");
      views.forEach(v => {
        v.classList.remove("active");
        if (v.getAttribute("id") === `admin-tab-${target}`) {
          v.classList.add("active");
        }
      });

      hideSpeakerEditor();
      hideFaqEditor();
      hideGalleryEditor();
    });
  });

  // Populate Admin Inputs
  function populateAdminFields() {
    setInputVal("admin-retreat-theme", cmsState.retreatTheme);
    setInputVal("admin-retreat-tag", cmsState.retreatTagline);
    setInputVal("admin-retreat-dates", cmsState.retreatDates);
    setInputVal("admin-countdown-date", cmsState.retreatCountdownTarget.split("T")[0]);
    setInputVal("admin-retreat-venue", cmsState.retreatVenue);
    setInputVal("admin-whatsapp-link", cmsState.whatsappLink);
    setInputVal("admin-reg-type", cmsState.registrationMode);
    setInputVal("admin-gform-reg-link-input", cmsState.googleFormRegLink);
    
    setCheckboxVal("admin-announcement-active", cmsState.announcementActive);
    setInputVal("admin-announcement-text-input", cmsState.announcementText);
    setInputVal("admin-announcement-cta-text", cmsState.announcementCtaText);
    setInputVal("admin-announcement-cta-hash", cmsState.announcementCtaHash);

    setInputVal("admin-contact-phone", cmsState.contactPhone);
    setInputVal("admin-contact-email", cmsState.contactEmail);

    // Populate Page Texts fields
    setInputVal("input-home-vision-header", cmsState.homeVisionHeader);
    setInputVal("input-home-vision-text", cmsState.homeVisionText);
    setInputVal("input-home-vision-quote", cmsState.homeVisionQuote);
    setInputVal("input-home-vision-quote-ref", cmsState.homeVisionQuoteRef);

    setInputVal("input-about-hero-text", cmsState.aboutHeroText);
    setInputVal("input-about-identity-text", cmsState.aboutIdentityText);
    setInputVal("input-about-strategy-text", cmsState.aboutStrategyText);
    setInputVal("input-about-mandate-text", cmsState.aboutMandateText);

    setInputVal("input-volunteer-call-text", cmsState.volunteerCallText);

    setInputVal("input-partners-call-text", cmsState.partnersCallText);
    setInputVal("input-partners-bank-name", cmsState.partnersBankName);
    setInputVal("input-partners-account-name", cmsState.partnersAccountName);
    setInputVal("input-partners-account-no", cmsState.partnersAccountNo);

    setInputVal("input-experience-call-text", cmsState.experienceCallText);

    toggleGoogleLinkWrap();
    updateAdminCounters();
  }

  function setInputVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val;
  }

  function setCheckboxVal(id, checked) {
    const el = document.getElementById(id);
    if (el) el.checked = checked;
  }

  // Toggle wrap display for Google Forms
  const regModeSelect = document.getElementById("admin-reg-type");
  if (regModeSelect) {
    regModeSelect.addEventListener("change", toggleGoogleLinkWrap);
  }

  function toggleGoogleLinkWrap() {
    const select = document.getElementById("admin-reg-type");
    const wrap = document.getElementById("admin-gform-link-wrap");
    if (select && wrap) {
      if (select.value === "google") {
        wrap.style.display = "block";
      } else {
        wrap.style.display = "none";
      }
    }
  }

  // Save Config Settings
  const btnSaveSettings = document.getElementById("btn-save-settings");
  if (btnSaveSettings) {
    btnSaveSettings.addEventListener("click", function () {
      cmsState.retreatTheme = document.getElementById("admin-retreat-theme").value;
      cmsState.retreatTagline = document.getElementById("admin-retreat-tag").value;
      cmsState.retreatDates = document.getElementById("admin-retreat-dates").value;
      
      const countDate = document.getElementById("admin-countdown-date").value;
      cmsState.retreatCountdownTarget = countDate.includes("T") ? countDate : `${countDate}T09:00:00`;
      
      cmsState.retreatVenue = document.getElementById("admin-retreat-venue").value;
      cmsState.whatsappLink = document.getElementById("admin-whatsapp-link").value;
      cmsState.registrationMode = document.getElementById("admin-reg-type").value;
      cmsState.googleFormRegLink = document.getElementById("admin-gform-reg-link-input").value;
      
      cmsState.announcementActive = document.getElementById("admin-announcement-active").checked;
      cmsState.announcementText = document.getElementById("admin-announcement-text-input").value;
      cmsState.announcementCtaText = document.getElementById("admin-announcement-cta-text").value;
      cmsState.announcementCtaHash = document.getElementById("admin-announcement-cta-hash").value;

      cmsState.contactPhone = document.getElementById("admin-contact-phone").value;
      cmsState.contactEmail = document.getElementById("admin-contact-email").value;

      saveCMS();
      alert("Retreat configurations saved successfully!");
    });
  }

  // Page select change listener
  const pageSelect = document.getElementById("admin-editor-page-select");
  if (pageSelect) {
    pageSelect.addEventListener("change", function () {
      const selected = this.value;
      const sections = document.querySelectorAll(".page-editor-section");
      sections.forEach(sec => {
        if (sec.getAttribute("id") === `editor-sec-${selected}`) {
          sec.style.display = "block";
        } else {
          sec.style.display = "none";
        }
      });
    });
  }

  // Save Page Texts
  const btnSavePages = document.getElementById("btn-save-pages");
  if (btnSavePages) {
    btnSavePages.addEventListener("click", function () {
      cmsState.homeVisionHeader = document.getElementById("input-home-vision-header").value;
      cmsState.homeVisionText = document.getElementById("input-home-vision-text").value;
      cmsState.homeVisionQuote = document.getElementById("input-home-vision-quote").value;
      cmsState.homeVisionQuoteRef = document.getElementById("input-home-vision-quote-ref").value;

      cmsState.aboutHeroText = document.getElementById("input-about-hero-text").value;
      cmsState.aboutIdentityText = document.getElementById("input-about-identity-text").value;
      cmsState.aboutStrategyText = document.getElementById("input-about-strategy-text").value;
      cmsState.aboutMandateText = document.getElementById("input-about-mandate-text").value;

      cmsState.volunteerCallText = document.getElementById("input-volunteer-call-text").value;

      cmsState.partnersCallText = document.getElementById("input-partners-call-text").value;
      cmsState.partnersBankName = document.getElementById("input-partners-bank-name").value;
      cmsState.partnersAccountName = document.getElementById("input-partners-account-name").value;
      cmsState.partnersAccountNo = document.getElementById("input-partners-account-no").value;

      cmsState.experienceCallText = document.getElementById("input-experience-call-text").value;

      saveCMS();
      alert("Page texts saved successfully!");
    });
  }

  // Reset CMS button binding
  const btnResetCMS = document.getElementById("btn-reset-cms");
  if (btnResetCMS) {
    btnResetCMS.addEventListener("click", resetCMSToDefaults);
  }

  // Update Sidebar Counts
  function updateAdminCounters() {
    updateTextElement("admin-reg-count", cmsState.registrations ? cmsState.registrations.length : 0);
    updateTextElement("admin-vol-count", cmsState.volunteers ? cmsState.volunteers.length : 0);
    updateTextElement("admin-part-count", cmsState.partners ? cmsState.partners.length : 0);
  }

  function updateTextElement(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  }

  // Render CRUD lists inside dashboard
  function renderAdminTables() {
    // 1. Speakers
    const spkBody = document.getElementById("admin-speakers-table-body");
    if (spkBody) {
      spkBody.innerHTML = cmsState.speakers.map(speaker => `
        <tr>
          <td><div class="speaker-avatar-wrap" style="width:40px; height:40px; font-size:0.9rem; margin:0;">${speaker.avatar}</div></td>
          <td><strong>${speaker.name}</strong></td>
          <td>${speaker.role}</td>
          <td><span style="font-size:0.8rem; display:block; max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${speaker.bio}</span></td>
          <td>
            <button class="admin-action-btn admin-action-btn-edit" data-edit-speaker="${speaker.id}">✏️</button>
            <button class="admin-action-btn admin-action-btn-delete" data-delete-speaker="${speaker.id}">🗑️</button>
          </td>
        </tr>
      `).join("");
      bindTableSpeakerActions();
    }

    // 2. FAQs
    const faqBody = document.getElementById("admin-faqs-table-body");
    if (faqBody) {
      faqBody.innerHTML = cmsState.faqs.map(faq => `
        <tr>
          <td><strong>${faq.question}</strong></td>
          <td><span style="font-size:0.8rem; display:block; max-width:250px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${faq.answer}</span></td>
          <td>
            <button class="admin-action-btn admin-action-btn-edit" data-edit-faq="${faq.id}">✏️</button>
            <button class="admin-action-btn admin-action-btn-delete" data-delete-faq="${faq.id}">🗑️</button>
          </td>
        </tr>
      `).join("");
      bindTableFaqActions();
    }

    // 3. Gallery
    const galBody = document.getElementById("admin-gallery-table-body");
    if (galBody) {
      galBody.innerHTML = cmsState.gallery.map(img => `
        <tr>
          <td><img src="${img.url}" style="width:50px; height:35px; object-fit:cover; border-radius:4px;"></td>
          <td><strong>${img.title}</strong></td>
          <td><span style="font-size:0.75rem; display:block; max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${img.url}</span></td>
          <td>
            <button class="admin-action-btn admin-action-btn-delete" data-delete-photo="${img.id}">🗑️</button>
          </td>
        </tr>
      `).join("");
      bindTableGalleryActions();
    }

    // 4. Attendee registrations
    const regBody = document.getElementById("admin-regs-table-body");
    if (regBody) {
      if (!cmsState.registrations || cmsState.registrations.length === 0) {
        regBody.innerHTML = `<tr><td colspan="7" style="text-align:center;">No camper registrations recorded yet.</td></tr>`;
      } else {
        regBody.innerHTML = cmsState.registrations.map(r => {
          let catBadge = '';
          if (r.occupation === 'Student') {
            catBadge = '<span class="tag-badge tag-badge-blue">Student</span>';
          } else if (r.occupation === 'Professional') {
            catBadge = '<span class="tag-badge tag-badge-green">Professional</span>';
          } else if (r.occupation === 'Leader') {
            catBadge = '<span class="tag-badge tag-badge-yellow">Leader</span>';
          } else {
            catBadge = `<span class="tag-badge" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); color: var(--color-text-muted);">${r.occupation || 'Other'}</span>`;
          }

          let accBadge = r.accommodation === 'Yes' 
            ? '<span class="tag-badge tag-badge-yellow">🏠 Required</span>' 
            : '<span class="tag-badge" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: var(--color-text-muted);">Self-Arranged</span>';

          let volBadge = r.volunteerInterest 
            ? '<span class="tag-badge tag-badge-green">💡 Yes</span>' 
            : '<span style="color:var(--color-text-muted);">No</span>';

          return `
            <tr>
              <td><strong>${r.firstName} ${r.lastName}</strong></td>
              <td>${r.gender}</td>
              <td>${catBadge}</td>
              <td>${r.church}</td>
              <td><span style="font-size:0.8rem;">✉️ ${r.email}<br>📞 ${r.phone}</span></td>
              <td>${accBadge}</td>
              <td>${volBadge}</td>
            </tr>
          `;
        }).join("");
      }
    }

    // 5. Volunteers
    const volBody = document.getElementById("admin-vols-table-body");
    if (volBody) {
      if (!cmsState.volunteers || cmsState.volunteers.length === 0) {
        volBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No volunteer applications recorded yet.</td></tr>`;
      } else {
        volBody.innerHTML = cmsState.volunteers.map(v => `
          <tr>
            <td><strong>${v.name}</strong></td>
            <td>1st: <span class="tag-badge tag-badge-yellow">${v.dept1}</span><br>2nd: <span class="tag-badge" style="background:rgba(255,255,255,0.05); color:var(--color-text-muted); border:1px solid rgba(255,255,255,0.1); font-size:0.7rem;">${v.dept2}</span></td>
            <td><span style="font-size:0.8rem;">✉️ ${v.email}<br>📞 ${v.phone}</span></td>
            <td><span style="font-size:0.8rem; display:block; max-width:250px;">${v.experience || "N/A"}</span></td>
          </tr>
        `).join("");
      }
    }

    // 6. Partners
    const partBody = document.getElementById("admin-parts-table-body");
    if (partBody) {
      if (!cmsState.partners || cmsState.partners.length === 0) {
        partBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No partnership records recorded yet.</td></tr>`;
      } else {
        partBody.innerHTML = cmsState.partners.map(p => {
          let typeBadge = `<span class="tag-badge tag-badge-yellow">${p.type}</span>`;
          if (p.type.includes("Sponsor")) {
            typeBadge = `<span class="tag-badge tag-badge-green">💰 Sponsor Camper</span>`;
          } else if (p.type.includes("Welfare")) {
            typeBadge = `<span class="tag-badge tag-badge-blue">🍛 Welfare support</span>`;
          }

          return `
            <tr>
              <td><strong>${p.name}</strong></td>
              <td>${typeBadge}</td>
              <td><span style="font-size:0.8rem;">✉️ ${p.email}<br>📞 ${p.phone}</span></td>
              <td><span style="font-size:0.8rem; display:block; max-width:250px;">${p.notes || "N/A"}</span></td>
            </tr>
          `;
        }).join("");
      }
    }
  }

  // Clear data logs
  const btnClearRegs = document.getElementById("btn-clear-regs");
  if (btnClearRegs) {
    btnClearRegs.addEventListener("click", function () {
      if (confirm("Clear all registered campers?")) {
        cmsState.registrations = [];
        saveCMS();
      }
    });
  }

  const btnClearVols = document.getElementById("btn-clear-vols");
  if (btnClearVols) {
    btnClearVols.addEventListener("click", function () {
      if (confirm("Clear all volunteer applications?")) {
        cmsState.volunteers = [];
        saveCMS();
      }
    });
  }

  const btnClearParts = document.getElementById("btn-clear-parts");
  if (btnClearParts) {
    btnClearParts.addEventListener("click", function () {
      if (confirm("Clear all partnership records?")) {
        cmsState.partners = [];
        saveCMS();
      }
    });
  }

  // --- Speakers CRUD Form ---
  const btnAddSpeakerModal = document.getElementById("btn-add-speaker-modal");
  const speakerEditorFormWrap = document.getElementById("speaker-editor-form-wrap");
  const speakerEditorForm = document.getElementById("speaker-editor-form");
  const btnCancelSpeakerEdit = document.getElementById("btn-cancel-speaker-edit");

  if (btnAddSpeakerModal) {
    btnAddSpeakerModal.addEventListener("click", function () {
      document.getElementById("speaker-editor-title").innerText = "Add New Speaker";
      document.getElementById("edit-speaker-id").value = "";
      if (speakerEditorForm) speakerEditorForm.reset();
      speakerEditorFormWrap.style.display = "block";
      speakerEditorFormWrap.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (btnCancelSpeakerEdit) {
    btnCancelSpeakerEdit.addEventListener("click", hideSpeakerEditor);
  }

  function hideSpeakerEditor() {
    if (speakerEditorFormWrap) speakerEditorFormWrap.style.display = "none";
  }

  if (speakerEditorForm) {
    speakerEditorForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const spkId = document.getElementById("edit-speaker-id").value;
      const spkName = document.getElementById("edit-speaker-name").value;
      const spkRole = document.getElementById("edit-speaker-role").value;
      const spkAvatar = document.getElementById("edit-speaker-avatar").value;
      const spkBio = document.getElementById("edit-speaker-bio").value;

      if (spkId) {
        const index = cmsState.speakers.findIndex(s => s.id === spkId);
        if (index !== -1) {
          cmsState.speakers[index] = { id: spkId, name: spkName, role: spkRole, avatar: spkAvatar, bio: spkBio };
        }
      } else {
        const newSpk = {
          id: "spk-" + Date.now(),
          name: spkName,
          role: spkRole,
          avatar: spkAvatar,
          bio: spkBio
        };
        cmsState.speakers.push(newSpk);
      }

      saveCMS();
      hideSpeakerEditor();
    });
  }

  function bindTableSpeakerActions() {
    const editBtns = document.querySelectorAll("[data-edit-speaker]");
    editBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-edit-speaker");
        const speaker = cmsState.speakers.find(s => s.id === id);
        if (speaker) {
          document.getElementById("speaker-editor-title").innerText = "Edit Speaker Profile";
          document.getElementById("edit-speaker-id").value = speaker.id;
          document.getElementById("edit-speaker-name").value = speaker.name;
          document.getElementById("edit-speaker-role").value = speaker.role;
          document.getElementById("edit-speaker-avatar").value = speaker.avatar || "";
          document.getElementById("edit-speaker-bio").value = speaker.bio;

          speakerEditorFormWrap.style.display = "block";
          speakerEditorFormWrap.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const deleteBtns = document.querySelectorAll("[data-delete-speaker]");
    deleteBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-delete-speaker");
        if (confirm("Are you sure you want to delete this speaker profile?")) {
          cmsState.speakers = cmsState.speakers.filter(s => s.id !== id);
          saveCMS();
        }
      });
    });
  }

  // --- FAQs CRUD Form ---
  const btnAddFaqModal = document.getElementById("btn-add-faq-modal");
  const faqEditorFormWrap = document.getElementById("faq-editor-form-wrap");
  const faqEditorForm = document.getElementById("faq-editor-form");
  const btnCancelFaqEdit = document.getElementById("btn-cancel-faq-edit");

  if (btnAddFaqModal) {
    btnAddFaqModal.addEventListener("click", function () {
      document.getElementById("faq-editor-title").innerText = "Add FAQ Item";
      document.getElementById("edit-faq-id").value = "";
      if (faqEditorForm) faqEditorForm.reset();
      faqEditorFormWrap.style.display = "block";
      faqEditorFormWrap.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (btnCancelFaqEdit) {
    btnCancelFaqEdit.addEventListener("click", hideFaqEditor);
  }

  function hideFaqEditor() {
    if (faqEditorFormWrap) faqEditorFormWrap.style.display = "none";
  }

  if (faqEditorForm) {
    faqEditorForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const faqId = document.getElementById("edit-faq-id").value;
      const faqQ = document.getElementById("edit-faq-q").value;
      const faqA = document.getElementById("edit-faq-a").value;

      if (faqId) {
        const index = cmsState.faqs.findIndex(f => f.id === faqId);
        if (index !== -1) {
          cmsState.faqs[index] = { id: faqId, question: faqQ, answer: faqA };
        }
      } else {
        const newFaq = {
          id: "faq-" + Date.now(),
          question: faqQ,
          answer: faqA
        };
        cmsState.faqs.push(newFaq);
      }

      saveCMS();
      hideFaqEditor();
    });
  }

  function bindTableFaqActions() {
    const editBtns = document.querySelectorAll("[data-edit-faq]");
    editBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-edit-faq");
        const faq = cmsState.faqs.find(f => f.id === id);
        if (faq) {
          document.getElementById("faq-editor-title").innerText = "Edit FAQ Item";
          document.getElementById("edit-faq-id").value = faq.id;
          document.getElementById("edit-faq-q").value = faq.question;
          document.getElementById("edit-faq-a").value = faq.answer;

          faqEditorFormWrap.style.display = "block";
          faqEditorFormWrap.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const deleteBtns = document.querySelectorAll("[data-delete-faq]");
    deleteBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-delete-faq");
        if (confirm("Are you sure you want to delete this FAQ item?")) {
          cmsState.faqs = cmsState.faqs.filter(f => f.id !== id);
          saveCMS();
        }
      });
    });
  }

  // --- Gallery CRUD Form ---
  const btnAddPhoto = document.getElementById("btn-add-photo");
  const galleryEditorFormWrap = document.getElementById("gallery-editor-form-wrap");
  const galleryEditorForm = document.getElementById("gallery-editor-form");
  const btnCancelGalleryEdit = document.getElementById("btn-cancel-gallery-edit");

  if (btnAddPhoto) {
    btnAddPhoto.addEventListener("click", function () {
      if (galleryEditorForm) galleryEditorForm.reset();
      galleryEditorFormWrap.style.display = "block";
      galleryEditorFormWrap.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (btnCancelGalleryEdit) {
    btnCancelGalleryEdit.addEventListener("click", hideGalleryEditor);
  }

  function hideGalleryEditor() {
    if (galleryEditorFormWrap) galleryEditorFormWrap.style.display = "none";
  }

  if (galleryEditorForm) {
    galleryEditorForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const newImg = {
        id: "gal-" + Date.now(),
        title: document.getElementById("edit-img-title").value,
        url: document.getElementById("edit-img-url").value
      };

      cmsState.gallery.push(newImg);
      saveCMS();
      hideGalleryEditor();
    });
  }

  function bindTableGalleryActions() {
    const deleteBtns = document.querySelectorAll("[data-delete-photo]");
    deleteBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-delete-photo");
        if (confirm("Are you sure you want to delete this photo?")) {
          cmsState.gallery = cmsState.gallery.filter(img => img.id !== id);
          saveCMS();
        }
      });
    });
  }

  // ==========================================================================
  // 04. INITIALIZE PAGE LOAD CHECK
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", function () {
    checkSession();
    
    // Dismiss splash screen
    const splash = document.getElementById("splash-screen");
    if (splash) {
      setTimeout(() => {
        splash.classList.add("fade-out");
      }, 1600);
    }
  });

})();
