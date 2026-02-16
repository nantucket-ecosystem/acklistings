import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import ForumHeader from '@/components/ForumHeader';

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const sourceSans = Source_Sans_3({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
});

export const metadata: Metadata = {
  title: 'Acklistings | Nantucket Real Estate Information Exchange',
  description:
    'Information exchange for Nantucket real estate brokers. Off-market listings, buyer needs, and industry discussion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="font-sans min-h-screen">
        <ForumHeader />
        {children}
      </body>
    </html>
  );
}
