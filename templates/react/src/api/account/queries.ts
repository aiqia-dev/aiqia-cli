import { api } from '@/lib/axios';
import { MockData } from './types';

export const getMock = async (): Promise<MockData> => {
  const response = await api.get(`/mock`);
  return response.data;
};
