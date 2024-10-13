import { useMemo } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useFetchDataWithSWR(url: string) {
  const { data, error, isLoading } = useSWR<any, Error>(url, fetcher);

  const memoizedValue = useMemo(
    () => ({
      data,
      isLoading,
      error,
    }),
    [data, error, isLoading]
  );

  return memoizedValue;
}
