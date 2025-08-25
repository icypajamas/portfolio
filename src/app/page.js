"use client";
import { Shortcuts } from "./components/Shortcuts";
import { AuroraBackground } from "./components/ui/aurora-background";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AuroraBackground className="h-[600px]"/>
      <Shortcuts />

    </div>
  );
}
