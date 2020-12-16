export function isCached(url) {
  const entry = localStorage.getItem(`cache-${url}`);
  if (!entry) {
    return false;
  }
  const time = JSON.parse(entry).time;
  const maxAge = parseInt(localStorage.getItem("max-cache-age"));

  if (Date.now() - time > maxAge) {
    return false;
  }

  return true;
}

export function load(url, force) {
  return new Promise((resolve, reject) => {
    if ((force || !isCached(url)) && navigator.onLine === "Online") {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          const cache = {
            time: Date.now(),
            data: json,
          };
          localStorage.setItem(`cache-${url}`, JSON.stringify(cache));
          resolve(json);
        })
        .catch(reject);
    } else {
      const data = JSON.parse(localStorage.getItem(`cache-${url}`)).data;
      resolve(data);
    }
  });
}
