/** Home Page */

import { VortexHero } from "@/components/vortex-hero";
import { SkillsGrid } from "@/components/skills-grid";
import { Projects } from "@/components/projects";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RobertHavelaar.dev',
  description: 'A portfolio of my work',
  keywords: 'portfolio, personal website, robert havelaar, roberthavelaar.dev',
  openGraph: {
    title: 'RobertHavelaar.dev',
    description: 'A portfolio of my work',
    images: [{
      url: 'https://i.postimg.cc/Fs9QgCwR/image.png',
      width: 1200,
      height: 630,
      alt: 'RobertHavelaar.dev Hero',
    }],
  },
}

export default function HomePage() {
  return (
    <main>
      <VortexHero />
      <Projects />
      <SkillsGrid />
    </main>
  );
}
