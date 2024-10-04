import { z } from 'zod';

export const CreateClassSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
});

export const EditClassSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
});
