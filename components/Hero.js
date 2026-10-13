"use client";
import { profile } from "../lib/data";
import { useState, useEffect } from "react";

const LINES = [
  "real-time systems",
  "secure REST APIs",
  "multi-tenant ERPs",
  "AI-powered features",
  "billing platforms",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = LINES[idx];
    let timeout;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % LINES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span style={{ color: "#8fb0ff" }}>
      {displayed}
      <span style={{ borderRight: "2px solid #8fb0ff", marginLeft: "2px", animation: "blink 1s step-end infinite" }} />
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section id="top" style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#0b0d13" }}>
      <style>{`
        @keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes floatB{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes floatC{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes fadeSlideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes ping{75%,100%{transform:scale(2);opacity:0}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        .float-a{animation:floatA 4s ease-in-out infinite}
        .float-b{animation:floatB 5s ease-in-out infinite 0.8s}
        .float-c{animation:floatC 3.5s ease-in-out infinite 0.4s}
        .fu1{animation:fadeSlideUp 0.7s ease forwards}
        .fu2{animation:fadeSlideUp 0.7s ease 0.15s forwards;opacity:0}
        .fu3{animation:fadeSlideUp 0.7s ease 0.3s forwards;opacity:0}
        .fu4{animation:fadeSlideUp 0.7s ease 0.45s forwards;opacity:0}
        .fu5{animation:fadeSlideUp 0.7s ease 0.6s forwards;opacity:0}
        .hero-grid{display:grid;min-height:100vh;align-items:center;gap:48px;grid-template-columns:1fr 1fr;max-width:1280px;margin:0 auto;padding:0 40px}
        .hero-text{padding-top:80px;padding-bottom:64px}
        .hero-photo-col{position:relative;display:flex;align-items:center;justify-content:center;height:600px}
        .mob-stats{display:none;gap:10px;margin-top:28px;flex-wrap:wrap}
        .mob-stat{flex:1;min-width:100px;border-radius:14px;border:1px solid rgba(143,176,255,0.15);background:#121622;padding:14px 16px}
        @media(max-width:860px){
          .hero-grid{grid-template-columns:1fr;min-height:unset;padding-top:32px;padding-bottom:60px;gap:36px}
          .hero-text{padding-top:0;padding-bottom:0;order:2;text-align:center}
          .hero-text .fu1{justify-content:center}
          .hero-text .fu3{justify-content:center}
          .hero-text p{margin-left:auto;margin-right:auto}
          .hero-photo-col{height:auto;order:1}
          .hero-photo-frame{height:320px !important;width:240px !important}
          .float-a,.float-b,.float-c{display:none}
          .mob-stats{display:flex}
          .hero-btns{justify-content:center !important}
        }
      `}</style>

      {/* Grid background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(143,176,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(143,176,255,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "-160px", left: "25%", height: "500px", width: "500px", borderRadius: "50%", background: "rgba(143,176,255,0.08)", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, right: "25%", height: "400px", width: "400px", borderRadius: "50%", background: "rgba(240,181,110,0.06)", filter: "blur(120px)", pointerEvents: "none" }} />

      <div className="hero-grid" style={{ position: "relative", zIndex: 1 }}>
        {/* Left — Text */}
        <div className="hero-text">
          {/* Name + typewriter */}
          <h1 className="fu2" style={{ fontSize: "clamp(28px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#e8eaf0", margin: 0, fontFamily: "var(--font-display)" }}>
            Muhammad Hasnain
          </h1>
          <p className="fu2" style={{ marginTop: "10px", fontSize: "clamp(18px,3vw,32px)", fontWeight: 600, color: "#8c95ab", fontFamily: "var(--font-display)", lineHeight: 1.2 }}>
            I build <Typewriter />
          </p>

          {/* Badge */}
          <div className="fu1" style={{ marginTop: "16px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "9999px", border: "1px solid rgba(143,176,255,0.25)", background: "rgba(143,176,255,0.08)", padding: "8px 16px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8fb0ff" }}>
            <span style={{ position: "relative", display: "flex", height: "8px", width: "8px" }}>
              <span style={{ position: "absolute", display: "inline-flex", height: "100%", width: "100%", borderRadius: "50%", background: "#8fb0ff", opacity: 0.75, animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span style={{ position: "relative", display: "inline-flex", height: "8px", width: "8px", borderRadius: "50%", background: "#8fb0ff" }} />
            </span>
            Open to work
          </div>

          {/* Mobile stats */}
          <div className="mob-stats fu5">
            <div className="mob-stat">
              <p style={{ margin: 0, fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8c95ab" }}>Experience</p>
              <p style={{ margin: "4px 0 0", fontSize: "22px", fontWeight: 900, color: "#e8eaf0", lineHeight: 1 }}>1+ <span style={{ fontSize: "12px", fontWeight: 500, color: "#8c95ab" }}>Years</span></p>
            </div>
            <div className="mob-stat">
              <p style={{ margin: 0, fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8c95ab" }}>Projects</p>
              <p style={{ margin: "4px 0 0", fontSize: "22px", fontWeight: 900, color: "#e8eaf0", lineHeight: 1 }}>5+ <span style={{ fontSize: "12px", fontWeight: 500, color: "#8c95ab" }}>Live</span></p>
            </div>
          </div>

          {/* Role */}
          <div className="fu3" style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ height: "1px", width: "40px", background: "#8fb0ff" }} />
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#8fb0ff", margin: 0 }}>Python / Django Developer · {profile.company}</p>
          </div>

          {/* Description */}
          <p className="fu4" style={{ marginTop: "24px", maxWidth: "480px", fontSize: "16px", lineHeight: 1.8, color: "#8c95ab" }}>
            Backend developer at {profile.company}. Multi-tenant ERPs, billing and e-learning platforms — with access control, real-time features and AI built in.
          </p>

          {/* CTA Buttons */}
          <div className="fu5 hero-btns" style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <button onClick={() => scrollTo("projects")} type="button"
              style={{ borderRadius: "9999px", background: "linear-gradient(90deg,#8fb0ff,#a8c4ff)", padding: "13px 26px", fontSize: "13px", fontWeight: 700, color: "#0b0d13", border: "none", cursor: "pointer", boxShadow: "0 8px 24px rgba(143,176,255,0.3)", transition: "transform 0.2s,box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(143,176,255,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(143,176,255,0.3)"; }}>
              View Projects
            </button>
            <a href="/Muhammad_Hasnain_CV.pdf" download
              onClick={e => { e.preventDefault(); window.open("/Muhammad_Hasnain_CV.pdf", "_blank"); }}
              style={{ borderRadius: "9999px", border: "1.5px solid #222a3c", background: "#121622", padding: "13px 26px", fontSize: "13px", fontWeight: 700, color: "#e8eaf0", cursor: "pointer", textDecoration: "none", transition: "border-color 0.2s,box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#8fb0ff"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(143,176,255,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#222a3c"; e.currentTarget.style.boxShadow = "none"; }}>
              Download CV
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=m.hasnain2441@gmail.com&su=Job%20Opportunity%20%E2%80%93%20Python%2FDjango%20Developer&body=Hi%20Hasnain%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity."
              target="_blank" rel="noopener noreferrer"style={{ borderRadius: "9999px", border: "1.5px solid #222a3c", background: "#121622", padding: "13px 26px", fontSize: "13px", fontWeight: 700, color: "#e8eaf0", cursor: "pointer", textDecoration: "none", transition: "border-color 0.2s,box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#8fb0ff"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(143,176,255,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#222a3c"; e.currentTarget.style.boxShadow = "none"; }}>
              Email Me
            </a>
          </div>

          {/* Stack tags */}
          <div className="fu5" style={{ marginTop: "36px" }}>
            <p style={{ marginBottom: "10px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8c95ab" }}>Core stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Django", "DRF", "PostgreSQL", "Celery", "Redis", "AWS"].map((t) => (
                <span key={t} style={{ borderRadius: "8px", border: "1px solid #222a3c", background: "#121622", padding: "6px 12px", fontSize: "12px", fontWeight: 500, color: "#8fb0ff", fontFamily: "var(--font-mono)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Photo + floating cards */}
        <div className="hero-photo-col">
          <div className="hero-photo-frame" style={{ position: "relative", height: "480px", width: "340px", flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "28px", background: "linear-gradient(135deg,rgba(143,176,255,0.2),rgba(240,181,110,0.15))", filter: "blur(24px)" }} />
            <img src="/Hasnain.jpg" alt="Muhammad Hasnain"
              style={{ position: "relative", height: "100%", width: "100%", borderRadius: "28px", objectFit: "cover", objectPosition: "top", border: "1px solid rgba(143,176,255,0.15)", boxShadow: "0 32px 80px rgba(143,176,255,0.12)", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", borderRadius: "0 0 28px 28px", background: "linear-gradient(to top,#0b0d13,transparent)" }} />
          </div>

          {/* Floating cards */}
          <div className="float-a" style={{ position: "absolute", left: "0px", top: "60px", borderRadius: "16px", border: "1px solid #222a3c", background: "#121622", padding: "16px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", minWidth: "130px" }}>
            <p style={{ margin: 0, fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8c95ab" }}>Experience</p>
            <p style={{ margin: "6px 0 0", fontSize: "26px", fontWeight: 900, color: "#e8eaf0", lineHeight: 1 }}>1+ <span style={{ fontSize: "13px", fontWeight: 500, color: "#8c95ab" }}>Years</span></p>
          </div>

          <div className="float-b" style={{ position: "absolute", right: "0px", bottom: "80px", borderRadius: "16px", border: "1px solid #222a3c", background: "#121622", padding: "16px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", minWidth: "130px" }}>
            <p style={{ margin: 0, fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8c95ab" }}>Projects</p>
            <p style={{ margin: "6px 0 0", fontSize: "26px", fontWeight: 900, color: "#e8eaf0", lineHeight: 1 }}>5+ <span style={{ fontSize: "13px", fontWeight: 500, color: "#8c95ab" }}>Live</span></p>
          </div>

          <div className="float-c" style={{ position: "absolute", right: "0px", top: "60px", borderRadius: "12px", border: "1px solid rgba(143,176,255,0.2)", background: "rgba(143,176,255,0.08)", padding: "10px 16px", boxShadow: "0 4px 20px rgba(143,176,255,0.1)" }}>
            <p style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "#8fb0ff", whiteSpace: "nowrap" }}>✦ Backend Specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
}
