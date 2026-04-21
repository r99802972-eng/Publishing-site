import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Benjamin Publishers – Book Writing, Editing & Publishing Services',
  description: 'Benjamin Publishers helps authors bring their stories to life with professional book writing, editing, design, publishing, and marketing services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
