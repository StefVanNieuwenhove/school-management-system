import { H2 } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Fragment, PropsWithChildren } from 'react';
import { CreateClassForm } from '@/components/form';
import { DialogForm } from '@/components/layout';

type AdminClassesLayoutProps = PropsWithChildren & {};

const AdminClassesLayout = ({ children }: AdminClassesLayoutProps) => {
  return (
    <Fragment>
      <section className='flex flex-row justify-between items-center border-b pb-2 mb-2'>
        <H2>Classes</H2>
        <DialogForm
          title='Create a new class'
          description='Create a new class to add and manage students.'
          trigger={
            <Button variant={'default'} size={'icon'}>
              <Plus className='w-4 h-4' />
            </Button>
          }
          form={<CreateClassForm />}
        />
      </section>
      {children}
    </Fragment>
  );
};

export default AdminClassesLayout;
