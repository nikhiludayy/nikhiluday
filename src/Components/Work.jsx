import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Button from "./Button";
const Work = () => {
  let [images, setimages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let scrollval = Math.floor(latest * 100);

    if (scrollval === 0) {
      showHideImages([]);
    } else if (scrollval === 1) {
      showHideImages([0]);
    } else if (scrollval === 2) {
      showHideImages([0, 1]);
    } else if (scrollval === 5) {
      showHideImages([0, 1, 2]);
    } else if (scrollval === 6) {
      showHideImages([0, 1, 2, 3]);
    } else if (scrollval === 7) {
      showHideImages([0, 1, 2, 3, 4]);
    } else if (scrollval === 8) {
      showHideImages([0, 1, 2, 3, 4, 5]);
    }
  });

  let showHideImages = (arr) => {
    setimages((prev) =>
      prev.map((items, index) => {
        return arr.indexOf(index) === -1
          ? { ...items, isActive: false }
          : { ...items, isActive: true };
      })
    );
  };
  return (
    <div className=" h-screen  mx-auto lg:my-[4em] flex flex-col  ">
      <div className="relative lg:scale-[.95] xl:scale-[1.2] scale-[1.2] lg:py-[8em] py-[19.5em] ">
        <div className="relative -z-20 blur-[1px]">
          <div className="absolute lg:top-[15em] lg:left-[12em] lg:w-[15em] lg:h-[15em]   lg:shadow-[inset_25px_-25px_30px_-22px_#3b82f6] top-[-10em] left-[5em] rounded-full  w-[20em] h-[20em] -z-20   shadow-[inset_10px_20px_20px_-10px_#3b82f6]"></div>

          <div className="absolute  lg:top-[-6em] lg:right-[13em] lg:w-[20em] lg:h-[20em]  lg:shadow-[inset_-25px_25px_30px_-22px_#3b82f6]  top-[15em] right-[5em] rounded-full  w-[20em] h-[20em] -z-20   shadow-[inset_-10px_-20px_20px_-10px_#3b82f6]"></div>
        </div>

        <div className=" flex flex-col items-center justify-center leading-[3.8em]">
          <div className="flex items-center justify-center gap-2">
            <div className="w-20 h-20 object-cover rounded-full shadow-[-10px_0_10px_-6px_#3b82f6] overflow-hidden">
              <img src="/src/assets/avatar.jpg" alt="" />
            </div>
            <h1 className="px-10 py-7 shadow-[inset_-10px_0_5px_-5px_#3b82f6] text-center rounded-e-[3em] border-opacity-30 text-sm">
              Hello, I'm Nikhil
            </h1>
          </div>
          <div className="flex items-center text-center gap-2 mt-5">
            <span className="text-[4em] font-medium text-purple-400">
              DIGITAL
            </span>{" "}
            <h1 className="text-xs">
              // Based in <br />
              Rajasthan, India
            </h1>
          </div>
          <div>
            <span className="text-[4.2em] font-medium text-yellow-200">
              <h1>&nbsp;EXPERIENCE</h1>
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <h1 className="text-[4em] font-medium">DESIGNER</h1>
            <Button title={"Let's Connect"} />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-xs">
              // UI/UX Designer <br /> Full-Stack Developer
            </h1>
            <h1 className="text-[4em] font-medium">
              &<span className="  text-blue-400">DEVELOPER.</span>{" "}
            </h1>
          </div>
          <div className="leading-6 text-center mt-5">
            <p className="text-xl">
              I create a digital experience that borders on <br />
              <span className="text-purple-400"> efficiency</span>,
              <span className="text-yellow-200"> aesthetics </span>
              and <span className="text-blue-400">functionality.</span>
            </p>
          </div>
        </div>

        <div className="hidden  absolute top-0  w-full h-full pointer-events-none ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] "
                  src={elem.url}
                  key={index}
                  style={{ top: elem.top, left: elem.left }}
                ></img>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
