const fetcher = (...args) => fetch(...args).then((response) => response.json());

// fetcher("/api/test", { mode: "cords" }, 123)
// in fetcher benutzt rest syntax, also werden alle einträge als array in die variable gespeichert
// im fetcher wird mit spread alles aus dem array weitergegeben

function fakeFetcher(url) {
  switch (url) {
    case `https://example-apis.vercel.app/api/bad-jokes/0`:
      return {
        id: 0,
        joke: "test",
        prevId: 11,
        nextId: 1,
      };
    default:
      return {
        id: 11,
        joke: "A programmer wen't shopping. Their shopping list said: “Buy bread. If they have eggs, buy 10.” They came back with 10 bread.",
        prevId: 10,
        nextId: 0,
      };
  }
}

export { fetcher, fakeFetcher };
