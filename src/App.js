import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Movie, Search } from "./pages/index";
import { Nav, Loader } from "./components/index";

const App = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const nav = document.querySelector("nav");

    document.addEventListener("scroll", () => {
      if (
        document.scrollingElement.scrollTop > 40 &&
        !nav.classList.contains("active")
      ) {
        nav.classList.add("active");
      } else if (
        document.scrollingElement.scrollTop < 40 &&
        nav.classList.contains("active")
      ) {
        nav.classList.remove("active");
      }
    });

    window.onload = function () {
      setVisible(false);
    };
  }, []);

  return (
    <div className="App">
      <Loader visible={visible} />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/movie/:id" exact={true}>
            <Movie />
          </Route>
          <Route path="/search" exact={true}>
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
