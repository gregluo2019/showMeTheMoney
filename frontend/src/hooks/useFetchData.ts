import { useState, useEffect } from 'react';

export function useFetchData(url: string) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;

    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!ignore) {
          setData(data);
          setError(false);
        }
      } catch (error) {
        setError(true);
        if (!ignore) {
          console.error('Fetch error:', error);
        }
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { error, isLoading, data };
}
