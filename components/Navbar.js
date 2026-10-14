"use client";
import { useState, useEffect } from "react";

const navItems = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
      let current = "top";
      for (const sec of sections) {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 40, borderBottom: "1px solid #222a3c", background: "rgba(11,13,19,0.88)", backdropFilter: "blur(16px)" }}>
      <div className="section-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>

        <button onClick={() => scrollTo("top")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "#e8eaf0", display: "flex", alignItems: "center", gap: "10px", padding: 0 }}>
          <img src="/Hasnain.jpg" alt="M. Hasnain" style={{ height: "32px", width: "32px", borderRadius: "50%", objectFit: "cover", objectPosition: "top", boxShadow: "0 0 0 2px rgba(143,176,255,0.4)" }} />
          M. Hasnain
        </button>

        {/* Desktop pill nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", borderRadius: "9999px", border: "1px solid #222a3c", background: "#121622", padding: "4px" }} className="desk-nav">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              style={{ borderRadius: "9999px", padding: "7px 14px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "all 0.2s", background: active === item.id ? "#8fb0ff" : "transparent", color: active === item.id ? "#0b0d13" : "#8c95ab" }}>
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setIsOpen((p) => !p)}
          style={{ display: "none", height: "38px", width: "38px", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1px solid #222a3c", background: "#121622", color: "#e8eaf0", cursor: "pointer", fontSize: "16px" }}
          className="mob-btn" aria-label="Toggle navigation">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div style={{ borderTop: "1px solid #222a3c", background: "#0b0d13", padding: "12px 24px 16px" }}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              style={{ display: "block", width: "100%", textAlign: "left", borderRadius: "10px", padding: "10px 14px", fontSize: "14px", fontWeight: 600, border: "none", cursor: "pointer", background: active === item.id ? "#8fb0ff" : "transparent", color: active === item.id ? "#0b0d13" : "#8c95ab", marginBottom: "4px" }}>
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desk-nav { display: none !important; }
          .mob-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
