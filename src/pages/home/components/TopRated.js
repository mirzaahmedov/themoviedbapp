import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { fetchAll } from "../../../utils/utils";

const TopRated = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchAll(setMovies, ["movie", "top_rated"]);
  }, []);

  return (
    <div>
      <h2 className="section-headline">Top Rated</h2>
      {movies && <Carousel movies={movies} />}
    </div>
  );
};

export default TopRated;
