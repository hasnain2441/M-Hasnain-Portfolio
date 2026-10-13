"use client";
import { useState } from "react";
import { projects } from "../lib/data";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const [preview, setPreview] = useState(null);

  return (
    <section id="projects" style={{ background: "#0b0d13", padding: "64px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>

        <div className="reveal" style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8fb0ff", margin: 0 }}>Selected work</p>
          <h2 style={{ marginTop: "8px", fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, color: "#e8eaf0", fontFamily: "var(--font-display)", margin: "8px 0 0" }}>Featured projects</h2>
        </div>

        <div className="stagger-children" style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))" }}>
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
                    <button
                      onClick={e => { e.stopPropagation(); setPreview(p); }}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "4px", padding: "11px 20px", borderRadius: "10px", background: "rgba(143,176,255,0.08)", border: "1px solid rgba(143,176,255,0.2)", color: "#8fb0ff", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "background 0.2s,border-color 0.2s", width: "100%" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(143,176,255,0.15)"; e.currentTarget.style.borderColor = "rgba(143,176,255,0.5)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(143,176,255,0.08)"; e.currentTarget.style.borderColor = "rgba(143,176,255,0.2)"; }}>
                      ↗ View Live Site
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Live preview modal */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div
            onClick={e => e.stopPropagation()}
            style={{ width: "100%", maxWidth: "1100px", height: "85vh", borderRadius: "16px", border: "1px solid #222a3c", overflow: "hidden", display: "flex", flexDirection: "column", background: "#0b0d13" }}>

            {/* Modal toolbar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderBottom: "1px solid #222a3c", background: "#121622", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57", display: "block" }} />
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e", display: "block" }} />
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840", display: "block" }} />
                </div>
                <span style={{ fontSize: "13px", color: "#8c95ab", fontFamily: "var(--font-mono)" }}>{preview.live}</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <a href={preview.live} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "12px", color: "#8fb0ff", textDecoration: "none", border: "1px solid rgba(143,176,255,0.2)", padding: "5px 12px", borderRadius: "6px" }}>
                  Open in new tab ↗
                </a>
                <button onClick={() => setPreview(null)}
                  style={{ background: "none", border: "none", color: "#8c95ab", fontSize: "20px", cursor: "pointer", lineHeight: 1, padding: "0 4px" }}>
                  ✕
                </button>
              </div>
            </div>

            <iframe
              src={preview.live}
              title={preview.name}
              style={{ flex: 1, border: "none", width: "100%", background: "#fff" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
