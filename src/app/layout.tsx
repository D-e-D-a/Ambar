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
  title: 'Ambar',
  description: 'Ambar studio omogucava prstupacno rentiranje skupocjenih alata na teritoriji CG',
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
