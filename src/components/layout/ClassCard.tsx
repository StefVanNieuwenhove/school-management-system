'use client';

import { Class } from '@/db/schema';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Edit, Trash } from 'lucide-react';
import { toast } from 'sonner';
import { deleteClass } from '@/db/class';
import DialogForm from './DialogForm';
import { EditClassForm } from '../form';

const ClassCard = ({ name, id }: Class) => {
  const onDelete = async () => {
    const response = await deleteClass(id);
    if (response.type === 'success') {
      toast.success(response.message, {
        duration: 5000,
        position: 'bottom-right',
        richColors: true,
      });
    } else {
      toast.error(response.message, {
        duration: 5000,
        position: 'bottom-right',
        richColors: true,
      });
    }
  };
  return (
    <Card className='w-1/5'>
      <CardHeader className='border-b'>
        <CardTitle className='capitalize truncate'>{name}</CardTitle>
        <CardDescription className='truncate'>id: {id}</CardDescription>
      </CardHeader>
      <CardContent className='border-b py-2'>
        <p>Content</p>
      </CardContent>
      <CardFooter className='space-x-2 flex justify-end py-2'>
        <Button variant={'default'} size={'icon'} onClick={onDelete}>
          <Trash className='w-4 h-4' />
        </Button>
        <DialogForm
          title='Edit class'
          description='Edit class details.'
          form={<EditClassForm id={id} />}
          trigger={
            <Button variant={'default'} size={'icon'}>
              <Edit className='w-4 h-4' />
            </Button>
          }
        />
      </CardFooter>
    </Card>
  );
};

export default ClassCard;
