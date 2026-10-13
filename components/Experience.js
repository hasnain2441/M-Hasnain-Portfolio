"use client";
import { experience } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" style={{ borderTop: "1px solid #222a3c", background: "#0f1219", padding: "64px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div className="reveal" style={{ marginBottom: "40px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8fb0ff", margin: 0 }}>Professional Journey</p>
          <h2 style={{ marginTop: "8px", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: "#e8eaf0", fontFamily: "var(--font-display)" }}>Experience</h2>
        </div>

        <div className="stagger-children" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <article
            style={{ borderRadius: "16px", border: "1px solid #222a3c", background: "#121622", padding: "28px", transition: "transform 0.2s,box-shadow 0.2s,border-color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(143,176,255,0.1)"; e.currentTarget.style.borderColor = "rgba(143,176,255,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#222a3c"; }}>
            <div style={{ marginBottom: "12px", display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#e8eaf0", margin: 0, fontFamily: "var(--font-display)" }}>{experience.title}</h3>
              <span style={{ borderRadius: "9999px", border: "1px solid #222a3c", background: "#0b0d13", padding: "4px 14px", fontSize: "12px", fontWeight: 500, color: "#8c95ab" }}>{experience.period}</span>
            </div>
            <p style={{ marginBottom: "16px", fontSize: "13px", fontWeight: 700, color: "#8fb0ff", margin: "0 0 16px" }}>{experience.company}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {experience.points.map((pt) => (
                <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ color: "#8fb0ff", fontSize: "18px", lineHeight: "1.6", flexShrink: 0 }}>▹</span>
                  <span style={{ fontSize: "14px", lineHeight: 1.7, color: "#8c95ab" }}>{pt}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
