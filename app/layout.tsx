import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quantum Link Innovations - Advanced VoLTE Solutions',
  description: 'Leading provider of next-generation VoLTE and telecommunications infrastructure solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
