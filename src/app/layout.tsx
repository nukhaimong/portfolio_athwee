// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ui/them-provider';
import Navbar from '@/components/ui/Navbar';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Athwee - Content Creator & Filmmaker',
  description: 'Content creator, filmmaker, and video editor from Bangladesh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
