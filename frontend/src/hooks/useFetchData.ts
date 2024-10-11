import { useState, useEffect } from 'react';

export function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { error, loading, data };
}
