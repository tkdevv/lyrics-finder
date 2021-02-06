import { useEffect } from "react";

const useFetchLyrics = () => {
  let p1 = "ghost";
  const getLyrics = (songTitle, artistTitle) => {
    return fetch(`https://api.lyrics.ovh/v1/${artistTitle}/${songTitle}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  };

  console.log(getLyrics());
  return getLyrics;
};

export default useFetchLyrics;
