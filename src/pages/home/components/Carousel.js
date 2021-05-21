import React, { useRef } from "react";
import Card from "../../../components/Card";

const Carousel = ({ movies }) => {
  const ref = useRef(null);

  return (
    <div className="carousel-container">
      <div className="scroll-wrap" ref={ref}>
        <div className="card-list">
          {movies.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
      <span
        className="control-prev control"
        onClick={() => (ref.current.scrollLeft -= 400)}
      ></span>
      <span
        className="control-next control"
        onClick={() => (ref.current.scrollLeft += 400)}
      ></span>
    </div>
  );
};

export default Carousel;
