"use client";
import { Shortcuts } from "./components/Shortcuts";
import { Hero } from "./components/ui/Hero";


export default function Home() {
  return (
    <div className="flex flex-col">   
    <Hero />
    <Shortcuts />

    </div>
  );
}
