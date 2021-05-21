import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { fetchAll } from "../../../utils/utils";

const Popular = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchAll(setMovies, ["movie", "popular"]);
  }, []);

  return (
    <div>
      <h2 className="section-headline">Popular</h2>
      {movies && <Carousel movies={movies} />}
    </div>
  );
};

export default Popular;
