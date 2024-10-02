import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Drawer } from '@/components/navigation';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'School Management System',
  description: 'School Management System, smartschool clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Drawer />
        {children}
      </body>
    </html>
  );
}
