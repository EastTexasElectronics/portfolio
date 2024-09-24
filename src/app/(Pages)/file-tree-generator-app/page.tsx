import FTG from '@/components/FTG/ftg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'File Tree Generator',
  description: 'Generate file trees easily with our File Tree Generator app.',
  keywords: 'file tree, directory structure, generator, tool',
  openGraph: {
    title: 'File Tree Generator',
    description: 'Generate file trees easily with our File Tree Generator app.',
    images: [{
      url: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/FTG%20Icon%20(3).png',
      width: 800,
      height: 200,
      alt: 'FTG Logo',
    }],
  },
};

export default function Page() {
  return <FTG />;
}
