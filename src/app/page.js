"use client";
import { Aboutme } from "./components/Aboutme";
import { Shortcuts } from "./components/Shortcuts";
import { Hero } from "./components/Hero";


export default function Home() {
  return (
    <div className="flex flex-col">   
    <Hero />
    <Shortcuts />
    <Aboutme />

    </div>
  );
}
