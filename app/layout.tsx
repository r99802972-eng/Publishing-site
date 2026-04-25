import type { Metadata } from 'next';
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-roboto' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Northcrest Book Publishers | Professional Book Writing & Publishing',
  description: 'Northcrest Book Publishers helps authors bring their stories to life with professional book writing, editing, design, publishing, and marketing services. Turn your manuscript into a masterpiece.',
  openGraph: {
    title: 'Northcrest Book Publishers | Professional Book Writing & Publishing',
    description: 'We handle the hard part, you keep writing. From editing to publishing, we simplify the process for authors.',
    url: 'https://northcrestpublishers.com',
    siteName: 'Northcrest Book Publishers',
    images: [
      {
        url: '/north.png',
        width: 800,
        height: 600,
        alt: 'Northcrest Book Publishers Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northcrest Book Publishers',
    description: 'Professional Book Writing & Publishing Services',
    images: ['/north.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${roboto.variable} ${poppins.variable} font-sans antialiased bg-site-bg text-gray-200`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
