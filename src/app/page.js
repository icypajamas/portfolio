"use client";
import { Aboutme } from "./components/Aboutme";
import { Shortcuts } from "./components/Shortcuts";
import { Hero } from "./components/Hero";
import { ProjectSection } from "./components/ProjectSection";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";


export default function Home() {
  return (
    <>
    <Hero />
    <Shortcuts />
    <Aboutme />
    <ProjectSection />
    <Certifications />
    <Contact />
    </>
    
  );
}
