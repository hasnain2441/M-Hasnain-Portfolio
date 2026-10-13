"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "scroll-anim-styles";
    style.textContent = `
      .reveal{opacity:0;transform:translateY(40px);transition:opacity 0.7s cubic-bezier(.22,1,.36,1),transform 0.7s cubic-bezier(.22,1,.36,1);}
      .reveal.visible{opacity:1;transform:translateY(0);}
      .reveal-left{opacity:0;transform:translateX(-40px);transition:opacity 0.7s cubic-bezier(.22,1,.36,1),transform 0.7s cubic-bezier(.22,1,.36,1);}
      .reveal-left.visible{opacity:1;transform:translateX(0);}
      .reveal-right{opacity:0;transform:translateX(40px);transition:opacity 0.7s cubic-bezier(.22,1,.36,1),transform 0.7s cubic-bezier(.22,1,.36,1);}
      .reveal-right.visible{opacity:1;transform:translateX(0);}
      .stagger-children>*{opacity:0;transform:translateY(30px);transition:opacity 0.6s cubic-bezier(.22,1,.36,1),transform 0.6s cubic-bezier(.22,1,.36,1);}
      .stagger-children.visible>*:nth-child(1){opacity:1;transform:translateY(0);transition-delay:0s}
      .stagger-children.visible>*:nth-child(2){opacity:1;transform:translateY(0);transition-delay:0.1s}
      .stagger-children.visible>*:nth-child(3){opacity:1;transform:translateY(0);transition-delay:0.2s}
      .stagger-children.visible>*:nth-child(4){opacity:1;transform:translateY(0);transition-delay:0.3s}
      .stagger-children.visible>*:nth-child(5){opacity:1;transform:translateY(0);transition-delay:0.4s}
      .stagger-children.visible>*:nth-child(6){opacity:1;transform:translateY(0);transition-delay:0.5s}
      #scroll-orb-1,#scroll-orb-2,#scroll-orb-3{position:fixed;border-radius:50%;pointer-events:none;z-index:0;will-change:transform;}
      #scroll-orb-1{width:600px;height:600px;background:radial-gradient(circle,rgba(143,176,255,0.07) 0%,transparent 70%);top:-200px;left:-100px;}
      #scroll-orb-2{width:500px;height:500px;background:radial-gradient(circle,rgba(240,181,110,0.05) 0%,transparent 70%);top:40vh;right:-150px;}
      #scroll-orb-3{width:400px;height:400px;background:radial-gradient(circle,rgba(143,176,255,0.05) 0%,transparent 70%);bottom:10vh;left:20%;}
      #scroll-progress{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#8fb0ff,#f0b56e);z-index:9999;width:0%;transition:width 0.1s linear;box-shadow:0 0 8px rgba(143,176,255,0.5);}
      .cursor-dot{position:fixed;width:6px;height:6px;border-radius:50%;background:#8fb0ff;pointer-events:none !important;z-index:1;opacity:0;transform:translate(-50%,-50%);transition:opacity 0.3s;}
      .cursor-ring{position:fixed;width:32px;height:32px;border-radius:50%;border:1.5px solid rgba(143,176,255,0.45);pointer-events:none !important;z-index:1;opacity:0;transform:translate(-50%,-50%);transition:opacity 0.3s;}
    `;
    document.head.appendChild(style);

    const progressBar = document.createElement("div");
    progressBar.id = "scroll-progress";
    document.body.appendChild(progressBar);

    ["scroll-orb-1", "scroll-orb-2", "scroll-orb-3"].forEach((id) => {
      if (!document.getElementById(id)) {
        const orb = document.createElement("div");
        orb.id = id;
        document.body.appendChild(orb);
      }
    });

    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    let dot = null, ring = null, rafId;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    if (!isTouchDevice) {
      dot = document.createElement("div"); dot.className = "cursor-dot";
      ring = document.createElement("div"); ring.className = "cursor-ring";
      document.body.appendChild(dot); document.body.appendChild(ring);
      const onMouseMove = (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        dot.style.opacity = "1"; ring.style.opacity = "1";
        dot.style.left = mouseX + "px"; dot.style.top = mouseY + "px";
      };
      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12;
        ring.style.left = ringX + "px"; ring.style.top = ringY + "px";
        rafId = requestAnimationFrame(animateRing);
      };
      animateRing();
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseleave", () => { dot.style.opacity = "0"; ring.style.opacity = "0"; });
    }

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (scrollTop / docHeight) * 100 + "%";
      const orb1 = document.getElementById("scroll-orb-1");
      const orb2 = document.getElementById("scroll-orb-2");
      const orb3 = document.getElementById("scroll-orb-3");
      if (orb1) orb1.style.transform = `translateY(${scrollTop * 0.15}px)`;
      if (orb2) orb2.style.transform = `translateY(${-scrollTop * 0.1}px)`;
      if (orb3) orb3.style.transform = `translateY(${scrollTop * 0.08}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    const observe = () =>
      document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.stagger-children").forEach((el) => observer.observe(el));
    observe();
    const t = setTimeout(observe, 300);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(t);
      observer.disconnect();
      document.getElementById("scroll-anim-styles")?.remove();
      document.getElementById("scroll-progress")?.remove();
      document.getElementById("scroll-orb-1")?.remove();
      document.getElementById("scroll-orb-2")?.remove();
      document.getElementById("scroll-orb-3")?.remove();
      dot?.remove(); ring?.remove();
    };
  }, []);

  return null;
}
