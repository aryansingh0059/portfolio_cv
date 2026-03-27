import {Contact}  from "@/components/main/contact";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Resume } from "@/components/main/resume";
import { Certificates } from "@/components/main/certificates";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col gap-24 md:gap-28">
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Certificates />
        <Contact/>
        <Encryption />
        
      </div>
    </main>
  );
}
