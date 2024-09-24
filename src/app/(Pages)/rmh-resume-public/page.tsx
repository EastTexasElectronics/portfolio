import React from 'react';
import InteractiveResume from '@/components/Portfolio/InteractiveResume';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robert Havelaar - Interactive Resume',
  description: 'Explore the interactive resume of Robert Havelaar, showcasing skills, projects, and professional experience.',
  keywords: 'Robert Havelaar, interactive resume, portfolio, skills, projects, experience',
  openGraph: {
    title: 'Robert Havelaar - Interactive Resume',
    description: 'Explore the interactive resume of Robert Havelaar, showcasing skills, projects, and professional experience.',
    images: [{
      url: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/S2L%20Logo.png',
      width: 1200,
      height: 630,
      alt: 'Robert Havelaar Interactive Resume',
    }],
  },
};

const RMHResumePublicPage = () => {
  return (
    <div>
      <InteractiveResume />
    </div>
  );
};

export default RMHResumePublicPage;
