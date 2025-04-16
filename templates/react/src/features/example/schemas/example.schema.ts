
import * as yup from 'yup';

export const exampleSchema = yup.object({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  licenseNumber: yup.string().required('License number is required'),
  active: yup.boolean().required('Active status is required')
}).required();

export type ExampleFormData = yup.InferType<typeof exampleSchema>;
