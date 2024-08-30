// src/app/(Pages)/case-study-tool/page.tsx

import React from 'react';
import { CST_Hero } from '@/components/CaseStudyTool/Hero';
import { HowItWorks } from '@/components/CaseStudyTool/how-it-works';
import  Pricing  from '@/components/CaseStudyTool/pricing';
import { CallToAction } from '@/components/CaseStudyTool/call-to-action';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study Tool - Simplify Your Business Analysis',
  description: 'Generate custom charts, summarize data with AI, and get actionable insights with our case study tool.',
  keywords: 'business analysis, data visualization, AI insights, case study tool',
  openGraph: {
    title: 'Case Study Tool - Simplify Your Business Analysis',
    description: 'Generate custom charts, summarize data with AI, and get actionable insights with our case study tool.',
    images: [{
      url: 'https://i.postimg.cc/Fs9QgCwR/image.png',
      width: 1200,
      height: 630,
      alt: 'Case Study Tool Hero',
    }],
  },
};

export default function CaseStudyToolPage() {
  return (
    <main>
      <CST_Hero />
      <HowItWorks />
      <Pricing />
      <CallToAction />
    </main>
  );
}
