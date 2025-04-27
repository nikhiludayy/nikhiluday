import React from "react";
import Button from "../Components/Button";
import { h1 } from "framer-motion/client";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]); 
  return (
    <div className="relative max-w-screen-2xl mx-auto px-5 py-4 flex items-center justify-between  border-b-[1px] border-zinc-700 ">
      <div className="nleft items-center  flex">
        {/* <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus_logo"
        /> */}
        <div className="border-zinc-100 border-s-2 border-e-2  border-opacity-20  rounded-3xl px-4 py-2">
          
            <Link to={"/"} className="flex items-center gap-1 ">
              <span
                style={{ boxShadow: "0 0 .45em #00FF19" }}
                className="inline-block bg-green-500 w-3 h-3 rounded-full "
              ></span>
              <h2 className="text-[1rem] leading-none font-bold select-none ">nikhiluday</h2>
              
            </Link>
          
        </div>
        
      </div>
      <motion.div 
    style={{ scale }}
    className="nav sm:fixed sm:left-[35%] links flex gap-14 z-10 backdrop-blur-sm p-4 mix-blend-difference rounded-full border-none"
  >
    {["Home", "Projects", "", "About Me"].map((elem, index) =>
      elem.length === 0 ? (
        <span key={index} className="w-0.5 h-6 bg-zinc-500"></span>
      ) : (
        <Link
          key={index}
          className="text-sm flex items-center gap-1"
          to={elem === "Home" ? "/" : elem.replace(/\s+/g, "").toLowerCase()}
        >
          {index === 1 ? (
            <span
              style={{ boxShadow: "0 0 .45em #00FF19" }}
              className="inline-block bg-green-500 w-1 h-1 rounded-full"
            ></span>
          ) : null}
          {elem}
        </Link>
      )
    )}
  </motion.div>
      <div className="hidden sm:block "><Button title={"Get Started"} /></div>
    </div>
  );
};

export default Navbar;
