import { z } from 'zod';

export const exampleSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  phone: z.string().nonempty({ message: 'Phone is required' }),
  email: z.string().email({ message: 'Invalid email format' }).nonempty({ message: 'Email is required' }),
  licenseNumber: z.string().nonempty({ message: 'License number is required' }),
  active: z.boolean().nonempty({ message: 'Active status is required' })
});

export type ExampleFormData = z.infer<typeof exampleSchema>;

