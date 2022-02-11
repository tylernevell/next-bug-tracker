import useSWR from 'swr';
import { fetcher } from '../util/fetcher';

export function useBugs() {
  const { data: bugs } = useSWR('/api/bugs', fetcher);
  return { bugs };
}
