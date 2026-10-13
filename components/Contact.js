"use client";
import { profile } from "../lib/data";

export default function Contact() {
  return (
    <section id="contact" style={{ borderTop: "1px solid #222a3c", background: "#0f1219", padding: "64px 40px", textAlign: "center" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }} className="reveal">
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8fb0ff", margin: 0 }}>Have a project in mind?</p>
        <h2 style={{ marginTop: "12px", fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: "#e8eaf0", fontFamily: "var(--font-display)" }}>Let&apos;s build something</h2>
        <p style={{ marginTop: "16px", fontSize: "16px", lineHeight: 1.7, color: "#8c95ab" }}>
          I&apos;m looking for a Python/Django backend role. Email is the fastest way to reach me.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=m.hasnain2441@gmail.com&su=Job%20Opportunity%20%E2%80%93%20Python%2FDjango%20Developer&body=Hi%20Hasnain%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity."
          target="_blank" rel="noopener noreferrer"style={{ marginTop: "32px", display: "inline-flex", borderRadius: "9999px", background: "linear-gradient(90deg,#8fb0ff,#a8c4ff)", padding: "14px 32px", fontSize: "14px", fontWeight: 700, color: "#0b0d13", textDecoration: "none", boxShadow: "0 8px 24px rgba(143,176,255,0.3)", transition: "transform 0.2s,box-shadow 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(143,176,255,0.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(143,176,255,0.3)"; }}>
          Email Me
        </a>
        <p style={{ marginTop: "16px", fontSize: "13px", color: "#8c95ab" }}>m.hasnain2441@gmail.com</p>
        <div style={{ marginTop: "28px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          {[
            { label: "GitHub", href: profile.github },
            { label: "LinkedIn", href: profile.linkedin },
            { label: profile.phone, href: `tel:${profile.phone}` },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ borderRadius: "9999px", border: "1.5px solid #222a3c", background: "#121622", padding: "10px 20px", fontSize: "13px", fontWeight: 600, color: "#e8eaf0", textDecoration: "none", transition: "border-color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#8fb0ff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#222a3c"; }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
