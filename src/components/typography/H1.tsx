import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

const H1 = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl',
        className
      )}>
      {children}
    </h1>
  );
};

export default H1;
