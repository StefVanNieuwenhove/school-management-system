'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { adminLinks, publicLinks, studentLinks } from '@/lib/links';
import { usePathname } from 'next/navigation';
import { H1 } from '../typography';

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className='sticky top-0 z-9999  w-full flex items-center bg-base-100 px-4 py-2 backdrop-saturate-200 backdrop-blur-2xl border-b'>
      <aside
        className={
          open
            ? 'hidden'
            : 'h-screen w-max px-4 py-6 mt-14 flex flex-col justify-between items-center overflow-scroll z-10 fixed top-0 left-0 border-r bg-base-100 backdrop-saturate-200 backdrop-blur-2xl'
        }>
        <nav className='flex flex-col space-y-2'>
          {publicLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={pathname === link.href ? 'outline' : 'ghost'}
                size={'icon'}
                className={pathname === link.href ? 'border-b-2' : ''}>
                {link.icon}
              </Button>
            </Link>
          ))}
          {adminLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={pathname === link.href ? 'outline' : 'ghost'}
                size={'icon'}
                className={pathname === link.href ? 'border-b-2' : ''}>
                {link.icon}
              </Button>
            </Link>
          ))}
          {studentLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={pathname === link.href ? 'outline' : 'ghost'}
                size={'icon'}
                className={pathname === link.href ? 'border-b-2' : ''}>
                {link.icon}
              </Button>
            </Link>
          ))}
        </nav>
      </aside>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant={'ghost'} size={'icon'}>
            <Menu className='w-6 h-6' />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className='border-b text-xl font-bold tracking-wider py-3'>
              Smart Management
            </SheetTitle>
            <SheetDescription>
              <nav className='flex flex-col space-y-2'>
                {publicLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='flex items-center'>
                    <span className=''>{link.icon}</span>
                    <Button variant={'link'} size={'default'}>
                      {link.name}
                    </Button>
                  </Link>
                ))}
                {adminLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='flex items-center'>
                    <span className=''>{link.icon}</span>
                    <Button variant={'link'} size={'default'}>
                      {link.name}
                    </Button>
                  </Link>
                ))}
                {studentLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='flex items-center'>
                    <span className=''>{link.icon}</span>
                    <Button variant={'link'} size={'default'}>
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <H1 className='w-full text-center'>Smart Management</H1>
    </header>
  );
};

export default Drawer;
