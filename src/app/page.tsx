import { VortexHero } from "@/components/vortex-hero";
import { SkillsGrid } from "@/components/skills-grid";
import { Projects } from "@/components/projects";

export default function HomePage() {
  return (
    <main>
      <VortexHero />
      <Projects />
      <SkillsGrid />
    </main>
  );
}
