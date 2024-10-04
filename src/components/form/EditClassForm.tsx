'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditClassSchema } from '@/lib/validation';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { updateClass } from '@/db/class';
import { toast } from 'sonner';
import { PropsWithChildren } from 'react';

type EditClassFormProps = PropsWithChildren & {
  id: string;
};

const EditClassForm = ({ id }: EditClassFormProps) => {
  const form = useForm<z.infer<typeof EditClassSchema>>({
    resolver: zodResolver(EditClassSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof EditClassSchema>) => {
    const response = await updateClass({ id: id, name: data.name });
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
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='pb-3'>
              <FormLabel className='text-sm font-medium pl-2'>
                Name <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder='Math 101' autoFocus />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full focus:underline'>
          Create
        </Button>
      </form>
    </Form>
  );
};

export default EditClassForm;
