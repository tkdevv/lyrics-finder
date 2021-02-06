import React, { useEffect } from "react";
import { replaceAll } from "../utils/utils";

const Lyrics = ({
  lyrics,
  setLyrics,
  songTitle,
  artistTitle,
  setArtistTitle,
  setSongTitle,
  setFlipIt,
}) => {
  const jutsu =
    "Treat you like princess, rest in heaven Diana Piquing my interest, she got peak like Montana England breeds proper girls; where are all your good manners? Reply with pleasantries Honestly, I can't stand ya Ohh, ohh You gon' make me turn up on you Ohh, ohh You gon' make me turn up on you What you thought of me Never had me missing a beat That's just a view from a cheap seat They don't want problems with me Talk used to be cheap, nowadays it's free People are only as tough as they phone allows them to be Girl, that could never be me I found my peace, I'm about to say my piece You might not agree with me Ohh, ohh You gon' make me turn up on you Ohh, ohh You gon' make me turn up on you What I'm saying', in today really at our big, big age if you're getting' with someone right now and you're linking them for couple weeks, they should know 'This is the girl I kinda want to see' so lemme lock off the ting but obviously in the world that we live in today is not like that. He is… did that... but obviously it takes time. You're chatting' shit. First of all you shouldn't have no problems at the beginning, it should be like honeymoon That's what I said, that's what I said! The beginning is always honeymoon season. Yeah, well you overdo it and he's overdoing' it. Both of you are overdoing' it right now. Yeah, well, alright.";

  const doMagic = (data) => {
    data = data ? data : "Summer";
    const data1 = data.split("\n");
    const data2 = data1.map((char) => char + "</br>");
    const data3 = data2.join("").trimStart();
    const data4 = replaceAll(data3, "</br></br>", "</br>");
    return data4;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lyrics-container">
      <div className="lyrics-title">
        {songTitle ? `${songTitle} by ${artistTitle}` : ""}
      </div>
      <div
        className="lyrics-lyrics"
        style={{ fontWeight: "100" }}
        dangerouslySetInnerHTML={{
          __html: doMagic(lyrics.lyrics),
          // __html: doMagic(jutsu),
        }}
      ></div>
      <button
        className="more-lyrics-btn"
        onClick={() => {
          setSongTitle("");
          setArtistTitle("");
          setFlipIt(false);
          window.scrollTo(0, 0);
        }}
      >
        Get More Lyrics
      </button>
    </div>
  );
};

export default Lyrics;
