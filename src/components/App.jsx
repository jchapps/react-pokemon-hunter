import React, { useState } from "react";

import SearchBar from "./SearchBar";
import GifList from "./GifList";
import Gif from "./Gif";

const giphy = require("giphy-api")({
  apiKey: "ZaRbsW8yjh3WqveezxKKt8LXJ4SiWwWj",
  https: true,
});

const App = () => {
  const [gifIdSelected, setGifIdSelected] = useState("8UGGp7rQvfhe63HrFq");
  const [giIdList, setGiIdList] = useState([
    "U2nN0ridM4lXy",
    "fSvqyvXn1M3btN8sDh",
    "QYn97FfN2QNd4wtGQw",
    "slVWEctHZKvWU",
    "HtqFbL7el09oY",
    "jP4pPl5z1lccFcGvR0",
    "vsyKKf1t22nmw",
    "xuXzcHMkuwvf2",
  ]);
  const fetchGiphy = (keyword) => {
    giphy.search(
      {
        q: keyword,
        rating: "g",
        limit: 10,
      },
      (err, res) => {
        setGiIdList(res.data.map((gif) => gif.id));
      }
    );
  };
  const changeSelectGif = (newSelectedGifId) => {
    setGifIdSelected(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={gifIdSelected} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIdList={giIdList} changeSelectGif={changeSelectGif} />
      </div>
    </div>
  );
};

export default App;
