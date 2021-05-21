import React from "react";
import img from "../assets/img/home.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <img src={img} alt="Godzilla vs King Kong" />
      <div className="hero-text">
        <h1 className="site-headline">
          Discover Thousands of amazing Movies, Tv Series and Tv Shows
        </h1>
        <button className="action-btn">Discover Now</button>
      </div>
    </div>
  );
};

export default Hero;
