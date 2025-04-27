import React from "react";
import Footer from "./Footer";

const Aboutme = () => {
  const data = [
    {
      id: 1,
      profile: "Design",
      content:
        "With a proven track record in designing websites, I deliver robust and user-friendly digital designs that are seamlessly integrated with development. My expertise ensures that each project not only looks great but also performs flawlessly, providing an exceptional user experience from start to finish.",
    },
    {
      id: 2,
      profile: "Development",
      content:
        "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions, and interaction. I use Next.js and React.js for development and incorporate GSAP and Framer Motion for animations",
    },
    {
      id: 3,
      profile: "The full package",
      content:
        "What sets me apart is my ability to deliver complete full-stack applications from concept to implementation. My keen eye for design, along with my expertise in frontend and backend development, including database integration, allows me to create exceptional projects",
    },
  ];
  return (
    <div className="px-4 sm:px-2 text-zinc-300 ">
      {/* <div className="h-screen mx-auto  lg:py-[8em] py-[19.5em] ">
        <div className="relative flex flex-col items-center justify-center">
        <div className="relative blur-[1px]">
          <div className="absolute lg:top-[15em] lg:left-[em] lg:w-[15em] lg:h-[15em]   lg:shadow-[inset_25px_-25px_30px_-22px_#3b82f6] top-[-10em] right-[1em] rounded-full  w-[20em] h-[20em] -z-20   shadow-[inset_10px_20px_20px_-10px_#3b82f6]"></div>

          <div className="absolute  lg:top-[-6em] lg:right-[13em] lg:w-[20em] lg:h-[20em]  lg:shadow-[inset_-25px_25px_30px_-22px_#3b82f6]  top-[15em] left-[1em] rounded-full  w-[20em] h-[20em] -z-20   shadow-[inset_-10px_-20px_20px_-10px_#3b82f6]"></div>
        </div>
          <h1 className="relative z-50 sm:text-6xl text-zinc-300 leading-snug font-medium text-[4.5em]">
            Hello! <br /> I'm Nikhil Uday 👋
            <br /> Crafting Digital <br />
            Excellence
          </h1>
        </div>
      </div> */}
      <div className="h-screen  mx-auto lg:my-[4em] flex flex-col">
        <div className="relative lg:scale-[.95] xl:scale-[1.2] scale-[1.2] lg:py-[8em] py-[19.5em] ">
          <div className="-z-20">
            <div className="relative -z-20 blur-[1px]">
              <div className="absolute lg:top-[15em] lg:left-[12em] lg:w-[15em] lg:h-[15em]   shadow-[inset_25px_-25px_30px_-22px_#3b82f6] top-[-10em] left-[5em] rounded-full  w-[20em] h-[20em] -z-20   lg:shadow-[inset_10px_20px_20px_-10px_#3b82f6]"></div>

              <div className="absolute  lg:top-[-6em] lg:right-[13em] lg:w-[20em] lg:h-[20em]  shadow-[inset_-25px_25px_30px_-22px_#3b82f6]  top-[20em] right-[5em] rounded-full  w-[20em] h-[20em] -z-20   lg:shadow-[inset_-10px_-20px_20px_-10px_#3b82f6]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center leading-[3.8em]">
            <h1 className="sm:text-6xl text-zinc-300 leading-snug font-medium text-[4em]">
              Hello! <br /> I'm Nikhil Uday 👋
              <br /> Crafting Digital <br />
              Excellence
            </h1>
          </div>
        </div>
      </div>
      <div className="relative h-screen  mx-auto -mt-20 sm:mb-20">
        <div className="">
          <div className="relative  blur-[1px]">
            <div className="absolute lg:top-[25em] lg:left-[4em] lg:w-[15em] lg:h-[15em]   lg:shadow-[inset_25px_-25px_30px_-22px_#3b82f6] top-[-9em] left-[1em] rounded-full  w-[20em] h-[20em] -z-20   shadow-[inset_10px_20px_20px_-10px_#3b82f6]"></div>

            <div className="absolute  lg:top-[-6em] lg:right-[5em] lg:w-[20em] lg:h-[20em]  lg:shadow-[inset_-25px_25px_30px_-22px_#3b82f6]  top-[50em] right-[2em] rounded-full  w-[20em] h-[20em] -z-20   shadow-[inset_-10px_-20px_20px_-10px_#3b82f6]"></div>
          </div>
        </div>
        <div class="relative z-50 flex flex-col items-start justify-center  gap-3 px-10 py-12 sm:flex-row">
          <h1 class="text-left tracking-widest text-2xl  md:text-3xl lg:text-4xl">
            As a Software Engineer, I excel in building scalable applications,
            enhancing user experiences, and streamlining development processes.
          </h1>
          <div class="flex-grow text-lg">
            <p class="text-right font-light tracking-widest">
              My proficiency in design, coding, and interaction sets me apart
              within the domain of software engineering.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap w-11/12  gap-4 text-zinc-400">
            {data.map((elem, index) => {
              return (
                <div key={index} className="flex-grow w-64 px-2 pb-10 ">
                  <div className="flex flex-col gap-5">
                    <h1 className="border-b border-zinc-100 border-opacity-30 text-2xl">
                      {elem.id}
                    </h1>
                    <h1 className="text-3xl tracking-wider">{elem.profile}</h1>
                    <p className="sm:text-base text-lg">{elem.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
