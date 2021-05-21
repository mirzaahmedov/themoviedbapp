import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { fetchAll } from "../../utils/utils";
import { Card } from "../../components/index";

const Search = withRouter(({ location }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const queries = new URLSearchParams(new URLSearchParams(location.search));
    fetchAll(setMovies, ["search", "movie"], ["query=" + queries.get("query")]);
  }, [location.search]);

  return (
    <div className="search-results">
      {/* <h1 className="section-headline">{movies.total_results} results found</h1> */}
      <div className="grid">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
});

export default Search;
