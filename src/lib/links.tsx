import { Link } from '@/types';
import {
  Home,
  GraduationCap,
  Users,
  BookCheck,
  CalendarDays,
  BookOpenCheck,
} from 'lucide-react';

const publicLinks: Link[] = [
  {
    href: '/',
    name: 'Home',
    icon: <Home className='w-6 h-6 text-black' />,
  },
];

const adminLinks: Link[] = [
  {
    href: '/admin/classes',
    name: 'Classes',
    icon: <GraduationCap className='w-6 h-6 text-black' />,
  },
  {
    href: '/admin/student',
    name: 'Students',
    icon: <Users className='w-6 h-6 text-black' />,
  },
  {
    href: '/admin/grades',
    name: 'Grades',
    icon: <BookCheck className='w-6 h-6 text-black' />,
  },
];

const studentLinks: Link[] = [
  {
    href: '/student/shedule',
    name: 'Class Shedule',
    icon: <CalendarDays className='w-6 h-6 text-black' />,
  },
  {
    href: '/student/task',
    name: 'Tasks',
    icon: <BookOpenCheck className='w-6 h-6 text-black' />,
  },
  {
    href: '/student/grades',
    name: 'Grades',
    icon: <BookCheck className='w-6 h-6 text-black' />,
  },
];

export { publicLinks, adminLinks, studentLinks };
