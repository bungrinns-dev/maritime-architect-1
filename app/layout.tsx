import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maritime Systems Architect — Operations × AI × Digital Infrastructure',
  description:
    'Naval Architect with 14 years of maritime industry experience. Builder of LAYAR and MarineOS. Exploring the intersection of maritime operations, artificial intelligence, and digital infrastructure.',
  keywords: [
    'naval architect',
    'maritime systems',
    'marine technology',
    'LAYAR',
    'MarineOS',
    'maritime SaaS',
    'ship operations',
    'maritime AI',
    'digital infrastructure',
  ],
  authors: [{ name: 'Maritime Systems Architect' }],
  openGraph: {
    title: 'Maritime Systems Architect',
    description:
      'Naval Architect with 14 years of maritime industry experience. Builder of LAYAR and MarineOS.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maritime Systems Architect',
    description:
      'Naval Architect with 14 years of maritime industry experience. Builder of LAYAR and MarineOS.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}