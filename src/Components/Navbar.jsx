import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { h1 } from "framer-motion/client";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const isLargeScreen = window.innerWidth > 640;
  const scale = useTransform(scrollYProgress, [0, 0.05,0.5], [1, 0.8,0.5]);
  const rotate = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0, 0]);
  const PosX = useTransform(
    scrollYProgress,
    [0, 0.02],
    isLargeScreen ? ["35%", "92%"] : ["40%", "88%"]
  );
  const PX = useTransform(
    scrollYProgress,
    [0, 0.06],
    ["1rem 1rem", "3rem .5rem"]
  );
  const Py = useTransform(scrollYProgress, [0, 0.06], ["1rem", "2rem"]);
  const Posy = useTransform(scrollYProgress, [0, 0.3], isLargeScreen ? ["1%", "20%"] : [".5%", "20%"]);
  // State to store flex direction and gap
  const [flexDirection, setFlexDirection] = useState("row");
  const [gap, setGap] = useState("3.5rem");

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Change flex-direction and gap based on scroll position
      if (latest > 0.01) {
        setFlexDirection("column");
        setGap("2.5rem");
      } else {
        setFlexDirection("row");
        setGap("3.5rem");
      }
    });

    // Cleanup to unsubscribe from scrollYProgress when component unmounts
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="relative max-w-screen-2xl mx-auto px-5 py-4 flex items-center justify-between  border-b-[1px] border-zinc-700 ">
      <div className="nleft items-center  flex">
        <div className="border-zinc-100 border-s-2 border-e-2  border-opacity-20  rounded-3xl px-4 py-2">
          <Link to={"/"} className="flex items-center gap-1 ">
            <span
              style={{ boxShadow: "0 0 .45em #00FF19" }}
              className="inline-block bg-green-500 w-3 h-3 rounded-full "
            ></span>
            <h2 className="text-[1rem] leading-none font-bold select-none ">
              nikhiluday
            </h2>
          </Link>
        </div>
      </div>
      <motion.div
        style={{
          scale,
          rotate,
          left: PosX,
          top: Posy,
          padding: PX,
          flexDirection: flexDirection,
          // Dynamically change flex-direction
          gap: gap,
          transition: "flex-direction 0.3s ease, gap 0.3s ease", // Dynamically change gap
        }}
        className="nav fixed  sm:left-[35%] links flex items-center gap-14 z-10 backdrop-blur-sm px-2 py-8 mix-blend-difference rounded-full "
      >
        {["Home", "Projects", "", "About Me"].map((elem, index) =>
          elem.length === 0 ? (
            <span key={index} className="w-0.5 h-6 bg-zinc-500"></span>
          ) : (
            <Link
              key={index}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="text-sm font-medium flex items-center gap-1"
              to={
                elem === "Home" ? "/" : elem.replace(/\s+/g, "").toLowerCase()
              }
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
      <div className="hidden sm:block ">
        <Button title={"Get Started"} />
      </div>
    </div>
  );
};

export default Navbar;
