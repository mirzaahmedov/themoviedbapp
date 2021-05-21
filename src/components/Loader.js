import React from "react";
import { motion } from "framer-motion";

const Loader = ({ visible }) => {
  return (
    <div>
      {visible && (
        <div className="loader">
          <div className="container">
            <motion.span
              className="ball"
              initial={{
                y: -100,
                scaleX: 0.9,
              }}
              animate={{
                y: 0,
                scaleX: 1.1,
                transition: {
                  duration: 0.4,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            ></motion.span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
