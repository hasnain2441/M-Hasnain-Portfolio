"use client";
import { skills } from "../lib/data";

const categories = [
  { icon: "⬡", label: "Backend", color: "#8fb0ff", bg: "rgba(143,176,255,0.06)", border: "rgba(143,176,255,0.2)", keys: ["Languages", "Frameworks", "Databases"] },
  { icon: "◈", label: "Infrastructure", color: "#f0b56e", bg: "rgba(240,181,110,0.06)", border: "rgba(240,181,110,0.2)", keys: ["Tools"] },
  { icon: "✦", label: "Security", color: "#a78bfa", bg: "rgba(167,139,250,0.06)", border: "rgba(167,139,250,0.2)", keys: ["Security", "Real-time"] },
  { icon: "◎", label: "AI / ML", color: "#34d399", bg: "rgba(52,211,153,0.06)", border: "rgba(52,211,153,0.2)", keys: ["AI / ML"] },
];

export default function Skills() {
  const skillMap = Object.fromEntries(skills);

  return (
    <section id="skills" style={{ background: "#0b0d13", padding: "64px 0" }}>
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#8fb0ff", margin: 0 }}>What I bring</p>
          <h2 style={{ marginTop: "8px", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: "#e8eaf0", fontFamily: "var(--font-display)" }}>Core Skills</h2>
        </div>

        <div className="stagger-children" style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}>
          {categories.map((cat) => (
            <div key={cat.label} style={{ borderRadius: "16px", border: `1px solid ${cat.border}`, background: cat.bg, padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <span style={{ fontSize: "16px", color: cat.color }}>{cat.icon}</span>
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: cat.color }}>{cat.label}</span>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {cat.keys.map((k) => skillMap[k] && (
                  <li key={k}>
                    <p style={{ margin: "0 0 4px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: cat.color, opacity: 0.7 }}>{k}</p>
                    <p style={{ margin: 0, fontSize: "13px", color: "#8c95ab", lineHeight: 1.5 }}>{skillMap[k]}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
