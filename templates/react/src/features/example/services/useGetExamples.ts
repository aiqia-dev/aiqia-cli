
import { useQuery } from '@tanstack/react-query';
import { getExamples } from './queries';
import { getExamplesKey } from './keys';

export function useGetExamples() {
  return useQuery({
    queryKey: getExamplesKey(),
    queryFn: () => getExamples(),
  });
}
