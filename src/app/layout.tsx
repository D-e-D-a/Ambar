import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ambar-chi.vercel.app'),
  title: {
    template: '%s | Ambar Studio',
    default: 'Ambar Studio',
  },
  description: 'Ambar studio omogucava prstupacno rentiranje skupocjenih alata na teritoriji CG',
  keywords:
    'rentanje alata, luksuzni alati, CG, Ambar studio, visokokvalitetni alati, pristupacno rentiranje',
  publisher: 'Starko LLC',
  openGraph: {
    // Open Graph metadata for social sharing
    title: 'Ambar Studio', // OG Title
    description: 'Ambar studio omogucava prstupacno rentiranje skupocjenih alata na teritoriji CG', // OG Description
    url: 'https://ambar-chi.vercel.app', // OG URL for the page
    siteName: 'Ambar Studio', // Site name for OG
    images: [
      {
        url: 'https://ambar-chi.vercel.app/barn.png', // OG Image URL
        width: 1200, // Image width
        height: 630, // Image height
        alt: 'Ambar Studio Tools', // Alt text for the image
      },
    ],
  },
  twitter: {
    // Twitter Card metadata
    card: 'summary_large_image', // Type of Twitter card (summary_large_image for rich media cards)
    title: 'Ambar Studio', // Twitter Title
    description: 'Ambar studio omogucava prstupacno rentiranje skupocjenih alata na teritoriji CG', // Twitter Description
    images: 'https://ambar-chi.vercel.app/barn.png', // Twitter Image URL
  },
  robots: 'index, follow', // Robots meta tag for SEO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MaxWidthWrapper className="min-h-screen flex flex-col justify-between">
          <Header />
          {children}
          <Footer />
        </MaxWidthWrapper>
        <Toaster />
      </body>
    </html>
  );
}
