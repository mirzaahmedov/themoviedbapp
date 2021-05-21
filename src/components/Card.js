import React from "react";
import { withRouter } from "react-router-dom";
import { getImage } from "../utils/utils";

const Card = withRouter(({ movie, history }) => {
  return (
    <div className="card" onClick={() => history.push("/movie/" + movie.id)}>
      <img
        src={getImage(movie.poster_path, "w300")}
        alt={movie.original_title}
      />
      <div className="about-movie">
        <p>
          <span className="vote">{movie.vote_average}</span>
          <span className="info">
            {movie.vote_count} | {movie.original_language.toUpperCase()}
          </span>
        </p>
        <h3>{movie.original_title}</h3>
      </div>
    </div>
  );
});

export default Card;
