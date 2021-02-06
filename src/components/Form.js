import React, { useState } from "react";
import { replaceAll, titleCase } from "../utils/utils";

const Form = ({
  setLyrics,
  songTitle,
  artistTitle,
  setArtistTitle,
  setSongTitle,
  setFlipIt,
}) => {
  const [btnState, setBtnState] = useState("waiting");
  // const [inputColor, setInputColor] = useState("auto");
  // const getLyrics = useFetchLyrics();

  const getLyrics = (songName, artistName) => {
    console.log("song", songName);
    songName = replaceAll(songName, " ", "%20");
    artistName = replaceAll(artistName, " ", "%20");
    console.log(
      "artist",
      `https://api.lyrics.ovh/v1/${artistName}/${songName}`
    );

    return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  const getBtnText = () => {
    if (btnState === "waiting") {
      return "GET LYRICS";
    } else if (btnState === "loading") {
      return "LOADING";
    } else if (btnState === "failed") {
      return "TRY AGAIN";
    } else {
      return "SUCCESS";
    }
  };

  const artistFiledStyles = songTitle
    ? { opacity: "1", pointerEvents: "auto" }
    : { opacity: "0", pointerEvents: "none" };
  const submitBtnStyles =
    artistTitle && songTitle
      ? { opacity: "1", pointerEvents: "auto" }
      : { opacity: "0", pointerEvents: "none" };
  const inputColor =
    btnState === "failed" ? "red" : btnState === "success" ? "62e751" : "#000";

  const btnClass =
    btnState === "success"
      ? " btn-success"
      : btnState === "loading"
      ? " btn-loading"
      : btnState === "failed"
      ? " btn-failed"
      : " btn-waiting";

  const artistInputStyles = {
    opacity: artistFiledStyles.opacity,
    pointerEvents: artistFiledStyles.pointerEvents,
    transition: "all 0.5s ease",
  };

  const btnStyles = {
    opacity: submitBtnStyles.opacity,
    pointerEvents: submitBtnStyles.pointerEvents,
    transition: "all 0.5s ease",
  };
  const inputStyle = {
    borderBottom: `1px ${inputColor} solid`,
  };

  const queryDescription = () => {
    let description = "Enter the song you want lyrics for<br>.";
    if (songTitle) {
      description = `Get lyrics for<br><span>${songTitle}</span>`;
    }
    if (artistTitle && songTitle) {
      description += ` by <span>${artistTitle}<span>.`;
    }
    if (btnState === "loading" && description.slice(10).includes("Get")) {
      description.replace("Get", "Getting");
    }
    if (btnState === "failed") {
      description = "Lyrics not found.<br/>Please try again.";
    }
    if (btnState === "success") {
      description = ".\n";
    }
    return description;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    if (btnState === "waiting") {
      setBtnState("loading");
      const fetchedData = getLyrics(songTitle, artistTitle).then((data) => {
        console.log(data);
        if (data.lyrics) {
          setBtnState("success");
          setLyrics(data);
          // setSongTitle(songTitle);
          setFlipIt(true);
        } else {
          setBtnState("failed");
        }
      });
    } else if (btnState === "failed") {
      // setBtnState("waiting");
      setArtistTitle("");
      setSongTitle("");
    }
  };

  const onSongHandler = (e) => {
    setBtnState("waiting");
    if (e.target.value.length <= 50) {
      setSongTitle(titleCase(e.target.value).trimStart(" "));
    }
    if (!songTitle) {
      setArtistTitle("");
      setLyrics("");
    }
  };

  const onArtistHandler = (e) => {
    setBtnState("waiting");
    if (e.target.value.length <= 50) {
      setArtistTitle(titleCase(e.target.value).trimStart(" "));
    }
  };

  return (
    <div className="form-container">
      <div style={{ width: "100%" }}>
        <div
          className="descriptor"
          dangerouslySetInnerHTML={{
            __html: queryDescription(),
          }}
        ></div>
        <form onSubmit={submitHandler} className="form">
          <label>
            <span>Song Title</span>
            <input
              style={inputStyle}
              type="text"
              value={songTitle}
              onChange={onSongHandler}
              name="songTitle"
              autoComplete="off"
            />
          </label>
          <label style={artistInputStyles}>
            <span>Artist Name</span>
            <input
              style={inputStyle}
              type="text"
              name="artistTitle"
              value={artistTitle}
              onChange={onArtistHandler}
              autoComplete="off"
            />
          </label>
          <button className={"btn-submit" + btnClass} style={btnStyles}>
            {getBtnText()}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
