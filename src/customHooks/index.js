import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect( async () => {
    setLoading(true)
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setLoading(false)
      setData(json);
    } catch (error) {
      setError(error);
    }
  }, [url]);

  return { data, error, loading };
};
