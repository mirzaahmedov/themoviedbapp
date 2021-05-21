import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { fetchAll } from "../../../utils/utils";

const NowPlaying = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetchAll(setMovies, ["movie", "now_playing"]);
  }, []);

  return (
    <div>
      <h2 className="section-headline">Now Playing</h2>
      {movies && <Carousel movies={movies} />}
    </div>
  );
};

export default NowPlaying;
