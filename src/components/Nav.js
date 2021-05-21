import React, { useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { withRouter } from "react-router-dom";

const Nav = withRouter(({ history }) => {
  const term = useRef(null);
  const controller = useAnimation();

  useEffect(() => {
    window.addEventListener("load", () => {
      controller.start({
        y: 0,
      });
    });
  }, [controller]);

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={controller}
      transition={{ delay: 1 }}
    >
      <h3 className="logo">MOVIEPEDIA</h3>
      <div className="search-form">
        <input
          ref={term}
          type="text"
          className="search-control"
          placeholder="Search..."
        />
        <button
          className="search-btn"
          onClick={() => {
            history.push("/search?query=" + term.current.value);
          }}
        >
          <BiSearch />
        </button>
      </div>
    </motion.nav>
  );
});

export default Nav;
