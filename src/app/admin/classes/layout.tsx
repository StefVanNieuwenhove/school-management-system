import { H2 } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Fragment, PropsWithChildren } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CreateClassForm } from '@/components/form';

type AdminClassesLayoutProps = PropsWithChildren & {};

const AdminClassesLayout = ({ children }: AdminClassesLayoutProps) => {
  return (
    <Fragment>
      <section className='flex flex-row justify-between items-center border-b pb-2'>
        <H2>Classes</H2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={'default'} size={'icon'}>
              <Plus className='w-4 h-4' />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a new class</DialogTitle>
              <DialogDescription>
                Create a new class to add and manage students.
              </DialogDescription>
            </DialogHeader>
            <CreateClassForm />
          </DialogContent>
        </Dialog>
      </section>
      {children}
    </Fragment>
  );
};

export default AdminClassesLayout;
