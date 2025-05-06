import { z } from 'zod';

export const exampleSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  phone: z.string().min(1, { message: 'Phone is required' }),
  email: z.string().email({ message: 'Invalid email format' }),
  licenseNumber: z.string().min(1, { message: 'License number is required' }),
  active: z.boolean(),
});

export type ExampleFormData = z.infer<typeof exampleSchema>;
