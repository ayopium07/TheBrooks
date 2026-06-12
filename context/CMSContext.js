"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

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
