"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const DEFAULT_CMS_STATE = {
  retreatTheme: "Behold the Glory of God",
  retreatTagline: "The CONFLUENCE CAMP RETREAT 2026",
  retreatDates: "23rd – 25th July, 2026",
  retreatCountdownTarget: "2026-07-23T09:00:00+01:00",
  retreatVenue: "Redemption City of God, Ogun State, Nigeria",
  whatsappLink: "https://chat.whatsapp.com/J2tutN6yBTFCQpA6drb6aH?s=sh&p=a&mlu=3&amv=3",
  registrationMode: "local",
  googleFormRegLink: "https://docs.google.com/forms/d/e/1FAIpQLSeMockRegistrationFormLink/viewform",
  announcementActive: true,
  announcementText: "Welcome to The CONFLUENCE CAMP RETREAT 2026! Secure your free lodging and feeding by registering early.",
  announcementCtaText: "Register Free",
  announcementCtaHash: "#register",
  contactPhone: "09011393407",
  contactEmail: "thebrooksconfluence@gmail.com",
  contactWhatsappChannel: "https://chat.whatsapp.com/J2tutN6yBTFCQpA6drb6aH?s=sh&p=a&mlu=3&amv=3",

  speakers: [
    {
      id: "spk-1",
      name: "Erioluwa Adeyinka",
      role: "Converner",
      avatar: "/Eri.JPG",
      bio: "Convener of The Confluence Camp Retreat 2026."
    },
    {
      id: "spk-2",
      name: "John Buoye",
      role: "Guest Minister",
      avatar: "/John.JPG",
      bio: "Guest Minister at The Confluence Camp Retreat 2026."
    },
    {
      id: "spk-3",
      name: "Samuel Peniel",
      role: "Guest Minister",
      avatar: "/Samuel.jpg",
      bio: "Guest Minister at The Confluence Camp Retreat 2026."
    },
    {
      id: "spk-4",
      name: "Prince Ben David",
      role: "Guest Minister",
      avatar: "/Ben-David.jpg",
      bio: "Guest Minister at The Confluence Camp Retreat 2026."
    },
    {
      id: "spk-5",
      name: "Doyinsola Owolabi",
      role: "Guest Minister",
      avatar: "",
      bio: "Guest Minister at The Confluence Camp Retreat 2026."
    },
    {
      id: "spk-6",
      name: "Oluwanifemi Dahunsi",
      role: "Guest Minister",
      avatar: "/Oluwanifemi Dahunsi.jpg",
      bio: "Guest Minister at The Confluence Camp Retreat 2026."
    },
    {
      id: "spk-7",
      name: "Joseph Ajayi",
      role: "Guest Minister",
      avatar: "/Ajayi.jpg",
      bio: "Guest Minister at The Confluence Camp Retreat 2026."
    },
    {
      id: "spk-8",
      name: "John Teidi",
      role: "Worship Minister",
      avatar: "/John Teidi.JPG",
      bio: "Worship Minister at The Confluence Camp Retreat 2026."
    },
    {
      id: "spk-9",
      name: "Solomon Adebayo",
      role: "Worship Minister",
      avatar: "",
      bio: "Worship Minister at The Confluence Camp Retreat 2026."
    },
    {
      id: "spk-10",
      name: "Daniel Awodele",
      role: "Worship Minister",
      avatar: "/Daniel.jpg",
      bio: "Worship Minister at The Confluence Camp Retreat 2026."
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
      question: "Who can attend The CONFLUENCE CAMP RETREAT?",
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
      title: "Atmosphere of Worship",
      url: "/ce1.jpg"
    },
    {
      id: "gal-2",
      title: "Fervent Prayer Watches",
      url: "/ce2.jpg"
    },
    {
      id: "gal-3",
      title: "Sound Biblical Teachings",
      url: "/ce3.jpg"
    },
    {
      id: "gal-4",
      title: "Consecrated Youth Devotion",
      url: "/ce4.jpg"
    },
    {
      id: "gal-5",
      title: "Sacred Altar Encounters",
      url: "/ce5.jpg"
    },
    {
      id: "gal-6",
      title: "Spiritual Depth & Clarity",
      url: "/ce6.jpg"
    },
    {
      id: "gal-7",
      title: "Fellowship of Believers",
      url: "/ce7.jpg"
    },
    {
      id: "gal-8",
      title: "Moments of Reflection",
      url: "/ce8.jpg"
    },
    {
      id: "gal-9",
      title: "Kingdom Impact & Action",
      url: "/ce9.jpg"
    }
  ],

  homeVisionHeader: "What is Confluence Camp?",
  homeVisionText: "Confluence Camp is an annual retreat of The Brooks Ministry designed to gather believers from different backgrounds into an atmosphere of worship, prayer, teaching, fellowship, and spiritual encounter.\n\nIt is a place where hunger meets revelation, where destinies are aligned, and where lives are transformed through the power and presence of God. More than an event, Confluence Camp is a divine meeting point—a confluence of people, purpose, and God's presence.\n\nOver the course of three days, participants are immersed in an environment intentionally created for spiritual growth, deeper intimacy with God, and fresh encounters that produce lasting transformation.",
  homeVisionQuote: "\"Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.\"",
  homeVisionQuoteRef: "— Hebrews 10:25",

  aboutHeroText: "The CONFLUENCE CAMP RETREAT is the retreat experience of The Brooks Ministry.\n\nBorn out of a burden to see believers encounter God beyond routine gatherings, Confluence Camp was established as a space where people can pause, retreat, and intentionally seek God together and even personally.\n\nThe retreat combines sound biblical teaching, fervent prayer, heartfelt worship, community building, and moments of personal reflection to create an atmosphere where spiritual growth can flourish. Each edition is centred on a divine emphasis for the season, guiding participants into deeper intimacy with God, greater spiritual clarity, and renewed commitment to His purpose.\n\nThe Confluence Camp is for believers, young people, leaders, ministers, kingdom workers, and anyone hungry for a deeper relationship with God, spiritual growth, divine direction, and a fresh encounter with His presence.",
  aboutIdentityText: "The Brooks is a forward-looking spiritual movement dedicated to raising the next generation of Christian leaders. We bridge the gap between ancient faith and modern societal impact.",
  aboutStrategyText: "By identifying and equipping believers across all walks of life, we build a global network of visionaries prepared to establish the Kingdom of God in every sphere of influence.",
  aboutMandateText: "\"To see a generation of spiritually active, doctrinally grounded, and purpose-driven young believers deployed as kingdom-sent agents of transformation across the nations.\"",

  volunteerCallText: "At The CONFLUENCE CAMP RETREAT, service is an act of worship. Every chair arranged, every technical signal sent, and every meal served is a vital contribution to the spiritual atmosphere of the retreat. We invite you to consecrate your time, talents, and energy to serve the body of Christ.\n\nWhether you have professional skills in media and technical operations, or a heart to serve in welfare and hospitality, there is a place for you. Join hands with other young believers as we build an altar of encounter for this generation.",

  partnersCallText: "The CONFLUENCE CAMP RETREAT is convened by The Brooks Ministry as a non-profit endeavor. We serve university students and young adults across the nation with standard accommodations, balanced daily feeding, and study resources at zero cost to them.\n\nThis mandate is fully funded by individuals and corporate bodies who share our vision to see a generation raised in fire, character, and alignment. Partner with us to keep the fire burning on the altar.",
  partnersBankName: "VFD Microfinance Bank",
  partnersAccountName: "Erioluwa Adeyinka",
  partnersAccountNo: "1007142350",

  experienceCallText: "We believe that spiritual focus requires freedom from logistical worries. To support your retreat experience, The Brooks Ministry provides accommodation and feeding for all registered attendees throughout the retreat, completely free of charge.\n\nSeparate hostels are secured for male and female campers with standard facilities within the Redemption City of God. Our welfare team coordinates three daily balanced meals to ensure every camper remains physically energized.",

  registrations: [],
  volunteers: [],
  partners: [],
  messages: [] // Premium messages list
};

const CMSContext = createContext(null);

export function CMSProvider({ children }) {
  const [state, setState] = useState(DEFAULT_CMS_STATE);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("confluence_cms_state");
      if (stored) {
        const parsed = JSON.parse(stored);
        // Ensure default properties exist
        const merged = { ...DEFAULT_CMS_STATE };
        Object.keys(parsed).forEach(key => {
          merged[key] = parsed[key];
        });
        // Auto-migrate old gallery if it contains unsplash images or is the legacy 4-item list
        if (merged.gallery && (merged.gallery.length === 4 || merged.gallery.some(img => img.url.includes("unsplash.com")))) {
          merged.gallery = DEFAULT_CMS_STATE.gallery;
          localStorage.setItem("confluence_cms_state", JSON.stringify(merged));
        }
        // Auto-migrate bank details if they are the old default values
        if (merged.partnersAccountNo === "0123456789" || merged.partnersAccountName === "The Brooks Ministry" || merged.partnersBankName === "Guaranty Trust Bank (GTBank)") {
          merged.partnersBankName = DEFAULT_CMS_STATE.partnersBankName;
          merged.partnersAccountName = DEFAULT_CMS_STATE.partnersAccountName;
          merged.partnersAccountNo = DEFAULT_CMS_STATE.partnersAccountNo;
          localStorage.setItem("confluence_cms_state", JSON.stringify(merged));
        }
        // Auto-migrate contact details if they are the old default values
        if (
          merged.contactEmail === "retreat@thebrooksministry.org" ||
          merged.contactPhone === "+234 (0) 803 999 8888" ||
          merged.whatsappLink === "https://chat.whatsapp.com/TheConfluenceCamp2026MockLink" ||
          merged.contactWhatsappChannel === "https://whatsapp.com/channel/TheBrooksMinistryMockChannel"
        ) {
          merged.contactEmail = DEFAULT_CMS_STATE.contactEmail;
          merged.contactPhone = DEFAULT_CMS_STATE.contactPhone;
          merged.whatsappLink = DEFAULT_CMS_STATE.whatsappLink;
          merged.contactWhatsappChannel = DEFAULT_CMS_STATE.contactWhatsappChannel;
          localStorage.setItem("confluence_cms_state", JSON.stringify(merged));
        }
        // Auto-migrate legacy countdown target format if it doesn't specify offset
        if (merged.retreatCountdownTarget === "2026-07-23T09:00:00") {
          merged.retreatCountdownTarget = DEFAULT_CMS_STATE.retreatCountdownTarget;
          localStorage.setItem("confluence_cms_state", JSON.stringify(merged));
        }

        // Replace stale placeholder speaker data with the latest minister list
        if (Array.isArray(merged.speakers) && merged.speakers.length > 0) {
          const allPlaceholders = merged.speakers.every(speaker => {
            return !speaker.name || /to be revealed|loading/i.test(speaker.name);
          });
          if (allPlaceholders) {
            merged.speakers = DEFAULT_CMS_STATE.speakers;
            localStorage.setItem("confluence_cms_state", JSON.stringify(merged));
          } else {
            // Fill missing avatars from the default speaker list for existing names.
            merged.speakers = merged.speakers.map(speaker => {
              const defaultSpeaker = DEFAULT_CMS_STATE.speakers.find(ds => ds.name === speaker.name);
              if (!defaultSpeaker) return speaker;
              return {
                ...defaultSpeaker,
                ...speaker,
                avatar: speaker.avatar || defaultSpeaker.avatar,
              };
            });
            localStorage.setItem("confluence_cms_state", JSON.stringify(merged));
          }
        }

        setState(merged);
      } else {
        localStorage.setItem("confluence_cms_state", JSON.stringify(DEFAULT_CMS_STATE));
      }
    } catch (e) {
      console.error("Local storage hydration error, using default fallback.", e);
    }
    setIsHydrated(true);
  }, []);

  const saveState = (newState) => {
    setState(newState);
    try {
      localStorage.setItem("confluence_cms_state", JSON.stringify(newState));
    } catch (e) {
      console.error("Local storage save error.", e);
    }
  };

  const updateCMSState = (key, val) => {
    if (typeof key === 'object' && key !== null) {
      const newState = { ...state, ...key };
      saveState(newState);
    } else {
      const newState = { ...state, [key]: val };
      saveState(newState);
    }
  };

  const resetCMSState = () => {
    saveState(DEFAULT_CMS_STATE);
  };

  const registerUser = (userData) => {
    const newState = {
      ...state,
      registrations: [...state.registrations, userData]
    };
    saveState(newState);
  };

  const registerVolunteer = (volunteerData) => {
    const newState = {
      ...state,
      volunteers: [...state.volunteers, volunteerData]
    };
    saveState(newState);
  };

  const registerPartner = (partnerData) => {
    const newState = {
      ...state,
      partners: [...state.partners, partnerData]
    };
    saveState(newState);
  };

  const submitMessage = (messageData) => {
    const newState = {
      ...state,
      messages: [...state.messages, messageData]
    };
    saveState(newState);
  };

  const value = {
    state,
    isHydrated,
    updateCMSState,
    resetCMSState,
    registerUser,
    registerCamper: registerUser, // Alias for compatibility
    registerVolunteer,
    registerPartner,
    submitMessage
  };

  return (
    <CMSContext.Provider value={value}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error("useCMS must be used within a CMSProvider");
  }
  return context;
}
