import React from 'react';
import FileTreeGenerator from '@/components/FTG/ftgm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'File Tree Generator',
    description: 'A CLI tool for generating visual representations of directory tree structures in multiple programming languages.',
    keywords: 'file tree, directory structure, CLI tool, multiple programming languages',
    openGraph: {
        title: 'File Tree Generator',
        description: 'A CLI tool for generating visual representations of directory tree structures in multiple programming languages.',
        images: [{
            url: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/FTG%20Icon%20(3).png',
            width: 800,
            height: 200,
            alt: 'FTG Logo',
        }],
    },
};

const Page = () => {
    return <FileTreeGenerator />;
};

export default Page;
