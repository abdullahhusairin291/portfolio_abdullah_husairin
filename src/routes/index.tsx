import { AboutSection } from "#/components/sections/AboutSection";
import { ContactSection } from "#/components/sections/ContactSection";
import { HeroSection } from "#/components/sections/HeroSection";
import { ProjectsSection } from "#/components/sections/ProjectsSection";
import { SkillsSection } from "#/components/sections/SkillsSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="px-4 py-8 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
