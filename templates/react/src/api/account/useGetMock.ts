import { useQuery } from '@tanstack/react-query';
import { getMock } from './queries';
import { getMockKey } from './keys';

export function useGetMock() {
  return useQuery({
    queryKey: getMockKey(),
    queryFn: () => getMock(),
  });
}
