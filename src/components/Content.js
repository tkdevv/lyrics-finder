import React, { useState, useEffect } from "react";
import Form from "./Form";
import Menu from "./Menu";
import Lyrics from "./Lyrics";

const Content = () => {
  const [lyrics, setLyrics] = useState({});
  const [songTitle, setSongTitle] = useState("");
  const [artistTitle, setArtistTitle] = useState("");
  const [flipIt, setFlipIt] = useState(false);
  const getFlipBoardStyles = flipIt ? "rotateY(180deg)" : "rotateY(0deg)";

  const flipBoardStyles = {
    transform: getFlipBoardStyles,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Menu
        flipIt={flipIt}
        setFlipIt={setFlipIt}
        setArtistTitle={setArtistTitle}
        setSongTitle={setSongTitle}
      />

      <div className="scene">
        <div style={flipBoardStyles} className="plane">
          <div className="page front">
            <div className="front-content">
              <Form
                setLyrics={setLyrics}
                songTitle={songTitle}
                artistTitle={artistTitle}
                setArtistTitle={setArtistTitle}
                setSongTitle={setSongTitle}
                setFlipIt={setFlipIt}
              />
            </div>
          </div>
          <div className="page back">
            <h4 className="back-content">
              <Lyrics
                lyrics={lyrics}
                setLyrics={setLyrics}
                songTitle={songTitle}
                artistTitle={artistTitle}
                setArtistTitle={setArtistTitle}
                setSongTitle={setSongTitle}
                setFlipIt={setFlipIt}
              />
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
