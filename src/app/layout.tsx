import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Drawer } from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';

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
        <main className='container mx-auto ml-10 my-2'>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
