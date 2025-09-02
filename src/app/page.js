"use client";
import { Aboutme } from "./components/Aboutme";
import { Shortcuts } from "./components/Shortcuts";
import { Hero } from "./components/Hero";
import { ProjectSection } from "./components/ProjectSection";
import { CertificationsExperience } from "./components/CertificationsExperience";


export default function Home() {
  return (
    <div>   
    <Hero />
    <Shortcuts />
    <Aboutme />
    <ProjectSection />
    <CertificationsExperience />
    </div>
  );
}
