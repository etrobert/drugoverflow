import './globals.css';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Drug Overflow',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'flex flex-col justify-between p-4 min-h-screen text-xl',
        )}
      >
        {children}
      </body>
    </html>
  );
}
