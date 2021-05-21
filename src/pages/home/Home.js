import React from "react";
import { Hero, Popular, NowPlaying, TopRated } from "./components/index";

const Home = () => {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <main>
        <NowPlaying />
        <Popular />
        <TopRated />
      </main>
    </div>
  );
};

export default Home;
