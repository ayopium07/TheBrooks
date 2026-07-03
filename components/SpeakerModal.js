"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function SpeakerModal({ speaker, closeModal }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  if (!speaker) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
        {speaker.avatar && (
          <div className="modal-img"><img src={speaker.avatar} alt={speaker.name} /></div>
        )}
        <div className="modal-content">
          <h3 className="speaker-name">{speaker.name}</h3>
          <p className="speaker-role">{speaker.role}</p>
          <div className="speaker-bio">{speaker.bio}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
