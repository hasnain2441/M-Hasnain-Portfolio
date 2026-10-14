"use client";
import { useState } from "react";
import { projects } from "../lib/data";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" style={{ background: "#0b0d13", padding: "64px 0" }}>
      <div className="section-inner">

        <div className="reveal" style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8fb0ff", margin: 0 }}>Selected work</p>
          <h2 style={{ marginTop: "8px", fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, color: "#e8eaf0", fontFamily: "var(--font-display)", margin: "8px 0 0" }}>Featured projects</h2>
        </div>

        <div className="stagger-children projects-grid" style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}>
          {projects.map((p, i) => {
            const isOpen = expanded === i;
            return (
              <article key={p.name}
                style={{ display: "flex", flexDirection: "column", borderRadius: "20px", border: `1px solid ${isOpen ? "rgba(143,176,255,0.4)" : "#222a3c"}`, background: "#121622", overflow: "hidden", boxShadow: isOpen ? "0 16px 48px rgba(143,176,255,0.14)" : "0 4px 24px rgba(0,0,0,0.3)", transition: "transform 0.3s,box-shadow 0.3s,border-color 0.3s", cursor: "pointer" }}
                onMouseEnter={e => { if (!isOpen) { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(143,176,255,0.12)"; e.currentTarget.style.borderColor = "rgba(143,176,255,0.35)"; } }}
                onMouseLeave={e => { if (!isOpen) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)"; e.currentTarget.style.borderColor = "#222a3c"; } }}
                onClick={() => setExpanded(isOpen ? null : i)}>

                <div style={{ height: "3px", background: "linear-gradient(90deg,#8fb0ff,#f0b56e)", flexShrink: 0 }} />

                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#e8eaf0", margin: 0, fontFamily: "var(--font-display)", lineHeight: 1.3 }}>{p.name}</h3>
                    <span style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", border: "1px solid rgba(143,176,255,0.25)", background: "rgba(143,176,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8fb0ff", fontSize: "14px", transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {(isOpen ? p.points : p.points.slice(0, 2)).map((pt) => (
                      <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", lineHeight: 1.65, color: "#8c95ab" }}>
                        <span style={{ color: "#8fb0ff", flexShrink: 0, marginTop: "1px" }}>▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {!isOpen && p.points.length > 2 && (
                    <p style={{ margin: 0, fontSize: "12px", color: "#8fb0ff", opacity: 0.6 }}>+{p.points.length - 2} more — click to expand</p>
                  )}

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {p.stack.map((s) => (
                      <span key={s} style={{ borderRadius: "6px", border: "1px solid #222a3c", background: "#0b0d13", padding: "4px 10px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#8fb0ff", fontFamily: "var(--font-mono)" }}>{s}</span>
                    ))}
                  </div>

                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "4px", padding: "11px 20px", borderRadius: "10px", background: "rgba(143,176,255,0.08)", border: "1px solid rgba(143,176,255,0.2)", color: "#8fb0ff", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "background 0.2s,border-color 0.2s", width: "100%", textDecoration: "none", textAlign: "center" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(143,176,255,0.15)"; e.currentTarget.style.borderColor = "rgba(143,176,255,0.5)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(143,176,255,0.08)"; e.currentTarget.style.borderColor = "rgba(143,176,255,0.2)"; }}>
                      ↗ View Live Site
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>


    </section>
  );
}
