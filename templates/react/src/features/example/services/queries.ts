
import { Example } from './types';

export const getExamples = async (): Promise<Example[]> => {
  // In a real implementation, this would call the actual API
  // For now, we'll return mock data
  return [
    { id: 1, name: 'John Doe', phone: '(123) 456-7890', email: 'john@example.com', licenseNumber: 'DL12345', active: true },
    { id: 2, name: 'Jane Smith', phone: '(234) 567-8901', email: 'jane@example.com', licenseNumber: 'DL23456', active: true },
    { id: 3, name: 'Mark Johnson', phone: '(345) 678-9012', email: 'mark@example.com', licenseNumber: 'DL34567', active: false }
  ];
};

export const getExample = async (id: number): Promise<Example> => {
  // In a real implementation, this would call the actual API with the ID
  const examples = await getExamples();
  const example = examples.find(d => d.id === id);
  
  if (!example) {
    throw new Error(`Example with id ${id} not found`);
  }
  
  return example;
};

export const saveExample = async (example: Omit<Example, 'id'> & { id?: number }): Promise<Example> => {
  // In a real implementation, this would call the actual API to save the example
  // For now, we'll just return a mock response
  return {
    ...example,
    id: example.id || Math.floor(Math.random() * 1000),
  };
};
