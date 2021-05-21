import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { fetchOne, getImage, fetchAll, fetchCasts } from "../../utils/utils";

const Movie = withRouter(({ match }) => {
  const [movie, setMovie] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetchOne(setMovie, ["movie", match.params.id]);
    fetchAll(setTrailers, ["movie", match.params.id, "videos"]);
    fetchCasts(setCasts, ["movie", match.params.id, "credits"]);
  }, [match.params.id]);

  useEffect(() => {
    console.log(casts);
  }, [casts]);

  return (
    <div className="movie-showcase">
      <div className="wrap">
        {movie && (
          <img
            src={getImage(movie.backdrop_path)}
            alt={movie.original_title}
            className="movie-backdrop"
          />
        )}
      </div>
      {movie && (
        <div className="info">
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
        </div>
      )}
      {casts && (
        <div className="profiles">
          {casts.slice(0, 10).map((cast) => (
            <div className="profile" key={cast.id}>
              <img
                src={getImage(cast.profile_path, "w185")}
                alt={cast.original_name}
                className="profile-img"
              />
              <h3 className="original-name">{cast.original_name}</h3>
              <p className="character">{cast.character}</p>
            </div>
          ))}
        </div>
      )}
      {trailers && (
        <div className="trailers">
          {trailers.slice(0, 4).map((trailer) => (
            <iframe
              src={"https://www.youtube.com/embed/" + trailer.key}
              frameBorder="0"
              title={trailer.name}
              width="300"
              height="200"
              key={trailer.id}
            ></iframe>
          ))}
        </div>
      )}
    </div>
  );
});

export default Movie;
