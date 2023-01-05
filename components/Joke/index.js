import { useEffect, useState } from "react";
import useSWR from "swr";
import { useImmer } from "use-immer";

import { fetcher, fakeFetcher } from "../../lib/utils";

export default function Joke() {
  const [id, setId] = useState(0);
  const [likes, setLikes] = useImmer([]);

  // const [data, setData] = useState();

  // useEffect(() => {
  //   async function startFetching() {
  //     const response = await fetch(
  //       `https://example-apis.vercel.app/api/bad-jokes/${id}`
  //     );
  //     const newData = await response.json();

  //     setData(newData);
  //   }

  //   startFetching();
  // }, [id]);

  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );

  function handlePrevJoke() {
    setId(data.prevId);
  }

  function handleNextJoke() {
    setId(data.nextId);
  }

  function handleLike() {
    setLikes((draft) => {
      const joke = draft.find((joke) => joke.id === id);
      if (joke) {
        joke.isLiked = !joke.isLiked;
      } else {
        draft.push({
          id,
          isLiked: true,
        });
      }
    });
    // setLikes((previousLikes) => {
    //   if (previousLikes.find((joke) => joke.id === id)) {
    //     return previousLikes.map((joke) =>
    //       joke.id === id
    //         ? {
    //             ...joke,
    //             isLiked: !joke.isLiked,
    //           }
    //         : joke
    //     );
    //   }

    //   return [
    //     ...previousLikes,
    //     {
    //       id,
    //       isLiked: true,
    //     },
    //   ];
    // });
  }

  if (error) {
    return <h1>OMG ERROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke}</h1>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleLike}>
          {likes.find((joke) => joke.id === id)?.isLiked ? "Unlike" : "Like"}
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}
