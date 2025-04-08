import { useQuery } from '@tanstack/react-query';
import { getExample } from './queries';
import { getExampleKey } from './keys';

export function useGetExample() {
  return useQuery({
    queryKey: getExampleKey(),
    queryFn: () => getExample(),
  });
}
