'use client';
import React from 'react';
import { useState, useMemo } from 'react';

function isMobile() {
  return /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function buildWhatsAppUrl(phone, text) {
  const msg = encodeURIComponent(text);
  const cleanPhone = phone.replace(/[^\d]/g, "");
  if (isMobile()) {
    return `whatsapp://send?phone=${cleanPhone}&text=${msg}`;
  }
  return `https://wa.me/${cleanPhone}?text=${msg}`;
}

export default function WhatsAppFloat({
  phone,
  defaultMessage = "Hi! I’d like to know more about Protek products.",
  enableChatBox = true,
  position = "bottom-right",
  ariaLabel = "Chat on WhatsApp",
  zIndex = 9999,
  color = "#25D366",
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const containerPosStyle = useMemo(() => {
    return {
      position: "fixed",
      right: position === "bottom-right" ? "20px" : undefined,
      left: position === "bottom-left" ? "20px" : undefined,
      bottom: "20px",
      zIndex: zIndex,
    };
  }, [position, zIndex]);

  const handleMainClick = () => {
    if (enableChatBox) {
      setOpen((s) => !s);
      return;
    }
    const url = buildWhatsAppUrl(phone, defaultMessage);
    window.open(url, "_blank");
  };

  const handleSend = () => {
    const message = text.trim() || defaultMessage;
    const url = buildWhatsAppUrl(phone, message);
    window.open(url, "_blank");
    setOpen(false);
    setText("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={containerPosStyle}>
      {/* Chatbox */}
      {enableChatBox && open && (
        <div
          style={{
            width: 290,
            background: "#fff",
            borderRadius: 12,
            boxShadow:
              "0 10px 30px rgba(0,0,0,.08), 0 6px 12px rgba(0,0,0,.06)",
            marginBottom: 10,
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,.06)",
          }}
        >
          <div
            style={{
              padding: "10px 12px",
              background: color,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            <span>WhatsApp — Protek</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                fontSize: 18,
              }}
            >
              ×
            </button>
          </div>

          <div style={{ padding: 12 }}>
            <div style={{ fontSize: 12, color: "#667085", marginBottom: 6 }}>
              Type your message. Press Enter to send.
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onKeyDown}
              rows={3}
              placeholder={defaultMessage}
              style={{
                width: "100%",
                resize: "none",
                borderRadius: 8,
                border: "1px solid #E4E7EC",
                padding: "10px 12px",
                outline: "none",
                fontSize: 14,
              }}
            />
            <button
              onClick={handleSend}
              style={{
                marginTop: 8,
                width: "100%",
                border: "none",
                borderRadius: 8,
                padding: "10px 12px",
                background: color,
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Send on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleMainClick}
        aria-label={ariaLabel}
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "none",
          background: color,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow:
            "0 10px 20px rgba(0,0,0,.15), 0 4px 8px rgba(0,0,0,.08)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
      >
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          <path d="m9 10 2 2 4-4"/>
        </svg>
      </button>
    </div>
  );
}
