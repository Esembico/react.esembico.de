import { useEffect, useState } from "react";

export default function useApi(url, property) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus("loading");

      try {
        const response = await fetch(url, {
          headers: { "Content-Type": "application/json" },
        });
        const json = await response.json();
        if (property) {
          setData(json[property]);
        } else {
          setData(json);
        }
        setStatus("loaded");
      } catch (err) {
        setStatus("failed");
        setError(err);
      }
    };

    fetchData();
  }, [url, property]);

  return { status, data, error };
}
