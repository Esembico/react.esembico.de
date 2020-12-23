export default function load(url, setLoading, setData, setError) {
  setLoading(true);
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setData(json);
      setLoading(false);
      setError(null);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
}
