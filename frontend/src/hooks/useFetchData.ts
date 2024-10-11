import { useState, useEffect } from 'react';

export function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    try {
      (async () => {
        const response = await fetch(url);
        const data = await response.json();
        if (!ignore) {
          setData(data);
        }
      })();
    } catch (error) {
      if (!ignore) {
        console.error('Fetch error:', error);
      }
    } finally {
      setLoading(false);
    }

    return () => {
      ignore = true;
    };
  }, []);

  return { loading, data };
}
