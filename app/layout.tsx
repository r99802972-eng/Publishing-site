import type { Metadata } from 'next';
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-roboto' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Benjamin Publishers | Book Writing, Editing & Publishing Services',
  description: 'Benjamin Publishers helps authors bring their stories to life with professional book writing, editing, design, publishing, and marketing services. Turn your manuscript into a bestseller.',
  openGraph: {
    title: 'Benjamin Publishers | Book Writing, Editing & Publishing Services',
    description: 'We handle the hard part, you keep writing. From editing to publishing, we simplify the process for authors.',
    url: 'https://benjaminpublishers.com',
    siteName: 'Benjamin Publishers',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Benjamin Publishers Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benjamin Publishers',
    description: 'Professional Book Writing & Publishing Services',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} font-sans antialiased bg-dark text-gray-200`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
