import type { Metadata } from 'next'
import S2L from '@/components/SVG2Liquid/s2l'

export const metadata: Metadata = {
    title: 'SVG 2 Liquid',
    description: 'A tool for converting SVG files to Shopify Liquid templates',
    keywords: 'SVG, Shopify, Liquid, conversion, tool',
    openGraph: {
        title: 'SVG 2 Liquid',
        description: 'A tool for converting SVG files to Shopify Liquid templates',
        images: [{
            url: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/S2L%20Logo.png',
            width: 800,
            height: 200,
            alt: 'S2L Logo',
        }],
    },
}

export default function Page() {
    return <S2L />
}
