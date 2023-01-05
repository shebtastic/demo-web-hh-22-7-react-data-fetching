const fetcher = (url) => fetch(url).then((response) => response.json());

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
