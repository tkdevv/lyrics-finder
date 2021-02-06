import React from "react";

const Menu = ({ flipIt, setFlipIt, setArtistTitle, setSongTitle }) => {
  return (
    <div className="nav">
      <div>
        <h3 className="logo">ONLYRICS</h3>
      </div>
      {flipIt && (
        <button
          onClick={() => {
            setSongTitle("");
            setArtistTitle("");
            setFlipIt(false);
          }}
          className="search-again-btn"
        >
          Search Again
        </button>
      )}
      {!flipIt && <div className="menu">{":)<3"}</div>}
    </div>
  );
};

export default Menu;
