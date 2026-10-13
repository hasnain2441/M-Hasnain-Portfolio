"use client";
import { about } from "../lib/data";

const TECHS = ["Python","Django","DRF","PostgreSQL","Redis","Celery","Channels","Docker","AWS S3","JWT","RBAC","FHIR R4","OpenAI","Swagger","CI/CD","Git"];

const STATS = [
  { num: "1+", label: "Years of experience" },
  { num: "5",  label: "Projects built" },
  { num: "4",  label: "Live deployments" },
  { num: "7",  label: "Tech areas covered" },
];

const CARDS = [
  { icon: "⬡", title: "Multi-tenant architecture", body: "Store and hotel data kept fully isolated per tenant, served through tenant-scoped DRF APIs." },
  { icon: "✦", title: "Access control", body: "Custom MBAC and RBAC with module-level permissions across enterprise roles." },
  { icon: "◎", title: "Real-time systems", body: "Django Channels and Redis for timed quizzes, WebSocket monitoring and live notifications." },
  { icon: "◈", title: "Integrations and AI", body: "NPHIES claims over FHIR R4 and OAuth2, plus OpenAI quiz generation, all run through Celery." },
];

export default function About() {
  const doubled = [...TECHS, ...TECHS];

  return (
    <section style={{ borderTop: "1px solid #222a3c", background: "#0f1219", overflow: "hidden", paddingBottom: "64px" }}>

      {/* Scrolling tech bar */}
      <div style={{ borderBottom: "1px solid #222a3c", padding: "18px 0", overflow: "hidden", position: "relative" }}>
        <div style={{ display: "flex", gap: "32px", width: "max-content", animation: "marquee 28s linear infinite" }}>
          {doubled.map((t, i) => (
            <span key={i} style={{ fontSize: "13px", fontWeight: 600, color: "#8c95ab", whiteSpace: "nowrap", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "32px" }}>
              {t}
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#8fb0ff", display: "inline-block", flexShrink: 0 }} />
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 40px 0" }}>

        {/* Stats row */}
        <div className="reveal stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "#222a3c", borderRadius: "16px", overflow: "hidden", marginBottom: "64px" }}>
          {STATS.map(({ num, label }) => (
            <div key={label} style={{ background: "#121622", padding: "28px 24px", textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "#8fb0ff", lineHeight: 1, fontFamily: "var(--font-display)" }}>{num}</p>
              <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#8c95ab", lineHeight: 1.4 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* What I do */}
        <div style={{ display: "grid", gap: "40px", gridTemplateColumns: "0.8fr 1.2fr" }} className="about-grid">
          <div className="reveal-left">
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8fb0ff", margin: 0 }}>What I do</p>
            <h2 style={{ marginTop: "12px", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: "#e8eaf0", lineHeight: 1.2, fontFamily: "var(--font-display)" }}>Building backends<br />that hold up.</h2>
            <p style={{ marginTop: "20px", fontSize: "15px", lineHeight: 1.8, color: "#8c95ab", borderLeft: "2px solid #8fb0ff", paddingLeft: "16px" }}>{about}</p>
          </div>

          <div className="reveal-right" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {CARDS.map((c) => (
              <div key={c.title} style={{ borderRadius: "14px", border: "1px solid #222a3c", background: "#121622", padding: "20px", transition: "border-color 0.2s,transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(143,176,255,0.35)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#222a3c"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <span style={{ fontSize: "20px", color: "#8fb0ff" }}>{c.icon}</span>
                <h3 style={{ margin: "10px 0 8px", fontSize: "14px", fontWeight: 700, color: "#e8eaf0", fontFamily: "var(--font-display)" }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: "13px", color: "#8c95ab", lineHeight: 1.6 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
