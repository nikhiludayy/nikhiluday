import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ val, direction }) => {
  return (
    <div
      style={{
        mask: "linear-gradient(90deg,transparent,#18181b 20%,#18181b 80%,transparent)",
      }}
      className="max-w-screen-2xl mx-auto flex gap-3 px-64 overflow-hidden  "
    >
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-12 py-5 pr-12"
      >
        {val.map((elem, index) => {
          return (
            <img
              key={index}
              className="flex-shrink-0 w-[5em]"
              src={elem}
              alt=""
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-12 py-5 pr-12"
      >
        {val.map((elem, index) => {
          return (
            <img
              key={index}
              className="flex-shrink-0 w-[5em]"
              src={elem}
              alt=""
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-12 py-5 pr-12"
      >
        {val.map((elem, index) => {
          return (
            <img
              key={index}
              className="flex-shrink-0 w-[5em]"
              src={elem}
              alt=""
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Marquee;
