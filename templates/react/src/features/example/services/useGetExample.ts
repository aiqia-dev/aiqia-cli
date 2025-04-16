
import { useQuery } from '@tanstack/react-query';
import { getExample } from './queries';
import { getExampleKey } from './keys';

export function useGetExample(id?: number) {
  return useQuery({
    queryKey: getExampleKey(id),
    queryFn: () => getExample(id as number),
    enabled: !!id,
  });
}
