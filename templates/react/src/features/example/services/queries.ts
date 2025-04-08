import { api } from '@/lib/axios';
import { ExampleData } from './types';

export const getExample = async (): Promise<ExampleData> => {
  const response = await api.get(`/example`);
  return response.data;
};
