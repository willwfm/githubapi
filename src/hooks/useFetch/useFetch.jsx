import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(url, options);

      if (response.status === 500) {
        setError(true);
      }

      var contentType = response.headers.get("content-type");

      if (contentType.includes("application/json")) {
        const json = await response.json();
        setData(json);
      }

      setLoaded(true);
      setLoading(false);
    }

    setLoading(false);

    if (url) {
      setLoaded(false);
      setLoading(true);
      fetchUrl();
    }
  }, [url, options]);

  return [data, loading, error, loaded, setData];
};

export default useFetch;
