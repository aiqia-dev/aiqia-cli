
import { QueryKey } from '@tanstack/react-query';

export const getExamplesKey = (): QueryKey => ['examples'];
export const getExampleKey = (id?: number): QueryKey => ['example', id];
