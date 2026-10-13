"use client";
import ScrollAnimations from "../components/ScrollAnimations";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { profile } from "../lib/data";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0d13", color: "#e8eaf0" }}>
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer style={{ borderTop: "1px solid #222a3c", background: "#0b0d13" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "28px 40px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontSize: "13px", color: "#8c95ab" }}>
          <span>© {new Date().getFullYear()} Muhammad Hasnain</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </div>
  );
}
