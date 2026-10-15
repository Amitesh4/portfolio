import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";
import { site } from "../data/site";

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = `${site.name} · Software Developer — AI/ML & Cybersecurity`;
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
    }, 40);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
