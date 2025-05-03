import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Work from "./Work";
import Stripes from "./Stripes";
import Products from "./Products";
import Marquees from "./Marquees";
import Cards from "./Cards";
import Footer from "./Footer";
import Button from "./Button";

const Home = () => {
  const data = [
    {
      img: `<svg class="pl-[1px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 14 14" fill="none"><path d="M11.9697 2.65784V11.3423C11.9697 11.5409 11.8908 11.7313 11.7504 11.8717C11.61 12.0121 11.4196 12.091 11.221 12.091H2.53654C2.33799 12.091 2.14756 12.0121 2.00716 11.8717C1.86676 11.7313 1.78788 11.5409 1.78788 11.3423V2.65784C1.78788 2.45928 1.86676 2.26886 2.00716 2.12846C2.14756 1.98806 2.33799 1.90918 2.53654 1.90918H11.221C11.4196 1.90918 11.61 1.98806 11.7504 2.12846C11.8908 2.26886 11.9697 2.45928 11.9697 2.65784ZM4.78253 5.80223H3.28521V10.5937H4.78253V5.80223ZM4.91729 4.15517C4.91808 4.04191 4.89655 3.9296 4.85394 3.82466C4.81132 3.71972 4.74846 3.6242 4.66892 3.54356C4.58939 3.46291 4.49476 3.39873 4.39042 3.35466C4.28608 3.31059 4.17408 3.2875 4.06082 3.28672H4.03387C3.80354 3.28672 3.58265 3.37822 3.41978 3.54108C3.25692 3.70395 3.16542 3.92484 3.16542 4.15517C3.16542 4.3855 3.25692 4.60639 3.41978 4.76926C3.58265 4.93212 3.80354 5.02362 4.03387 5.02362C4.14714 5.0264 4.25985 5.00685 4.36555 4.96606C4.47126 4.92527 4.56789 4.86406 4.64993 4.78591C4.73197 4.70776 4.79781 4.61422 4.84369 4.51062C4.88956 4.40702 4.91457 4.29539 4.91729 4.18212V4.15517ZM10.4724 7.68287C10.4724 6.24244 9.55601 5.68244 8.64563 5.68244C8.34756 5.66752 8.05078 5.731 7.7849 5.86657C7.51902 6.00214 7.29333 6.20505 7.13034 6.45506H7.08841V5.80223H5.68093V10.5937H7.17825V8.04522C7.15661 7.78422 7.23883 7.52521 7.40704 7.32448C7.57526 7.12374 7.81588 6.99748 8.07665 6.97314H8.13355C8.6097 6.97314 8.96307 7.2726 8.96307 8.02725V10.5937H10.4604L10.4724 7.68287Z" fill="#0E100F"></path></svg>`,
      link: "https://www.linkedin.com/in/nikhiluday",
      profile: "Linkedln",
    },
    {
      img: `<svg class="pb-0.5" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.4978C4.31667 1.4978 1.33334 4.48114 1.33334 8.16447C1.33334 11.1145 3.24167 13.6061 5.89167 14.4895C6.225 14.5478 6.35 14.3478 6.35 14.1728C6.35 14.0145 6.34167 13.4895 6.34167 12.9311C4.66667 13.2395 4.23334 12.5228 4.1 12.1478C4.025 11.9561 3.7 11.3645 3.41667 11.2061C3.18334 11.0811 2.85 10.7728 3.40834 10.7645C3.93334 10.7561 4.30834 11.2478 4.43334 11.4478C5.03334 12.4561 5.99167 12.1728 6.375 11.9978C6.43334 11.5645 6.60834 11.2728 6.8 11.1061C5.31667 10.9395 3.76667 10.3645 3.76667 7.81447C3.76667 7.08947 4.025 6.48947 4.45 6.0228C4.38334 5.85614 4.15 5.1728 4.51667 4.25614C4.51667 4.25614 5.075 4.08114 6.35 4.93947C6.88334 4.78947 7.45 4.71447 8.01667 4.71447C8.58334 4.71447 9.15 4.78947 9.68334 4.93947C10.9583 4.0728 11.5167 4.25614 11.5167 4.25614C11.8833 5.1728 11.65 5.85614 11.5833 6.0228C12.0083 6.48947 12.2667 7.08114 12.2667 7.81447C12.2667 10.3728 10.7083 10.9395 9.225 11.1061C9.46667 11.3145 9.675 11.7145 9.675 12.3395C9.675 13.2311 9.66667 13.9478 9.66667 14.1728C9.66667 14.3478 9.79167 14.5561 10.125 14.4895C11.4485 14.0427 12.5985 13.1921 13.4132 12.0575C14.2279 10.9229 14.6663 9.56131 14.6667 8.16447C14.6667 4.48114 11.6833 1.4978 8 1.4978Z" fill="#0E100F"></path></svg>`,
      link: "https://www.github.com/nikhiludayy",
      profile: "Github",
    },
    {
      img: `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.78787 1.34351C3.66511 1.34351 1.13131 3.87731 1.13131 7.00007C1.13131 10.1228 3.66511 12.6566 6.78787 12.6566C9.90451 12.6566 12.4444 10.1228 12.4444 7.00007C12.4444 3.87731 9.90451 1.34351 6.78787 1.34351ZM10.5241 3.95092C11.199 4.77303 11.6039 5.82214 11.6162 6.95713C11.4567 6.92645 9.86156 6.60129 8.25417 6.80374C8.21736 6.724 8.18668 6.6381 8.14987 6.55221C8.05171 6.31908 7.94127 6.0798 7.83084 5.85281C9.61003 5.12887 10.4199 4.0859 10.5241 3.95092ZM6.78787 2.17788C8.0149 2.17788 9.13762 2.63801 9.9904 3.39263C9.90451 3.51533 9.17443 4.49082 7.4566 5.135C6.66517 3.68098 5.78785 2.49077 5.65288 2.30672C6.01485 2.22083 6.39523 2.17788 6.78787 2.17788ZM4.73262 2.63188C4.86145 2.80366 5.72037 4.00001 6.52406 5.42335C4.26635 6.02459 2.27244 6.01232 2.05771 6.01232C2.3706 4.51536 3.38289 3.26993 4.73262 2.63188ZM1.95341 7.0062C1.95341 6.95713 1.95341 6.90805 1.95341 6.85896C2.16201 6.86509 4.50562 6.89578 6.91671 6.17184C7.05782 6.44178 7.18665 6.71785 7.30935 6.99394C7.248 7.01235 7.18052 7.03075 7.11917 7.04915C4.62832 7.85285 3.30314 10.0492 3.19271 10.2333C2.42581 9.38049 1.95341 8.2455 1.95341 7.0062ZM6.78787 11.8345C5.67129 11.8345 4.64059 11.4542 3.82462 10.8161C3.91052 10.6382 4.89213 8.74857 7.61611 7.79764C7.62838 7.7915 7.63452 7.7915 7.64679 7.78536C8.32778 9.54614 8.60387 11.0247 8.67748 11.448C8.09465 11.6996 7.45661 11.8345 6.78787 11.8345ZM9.48119 11.0063C9.4321 10.7118 9.17444 9.30073 8.54252 7.56451C10.0579 7.32523 11.3831 7.71788 11.5487 7.7731C11.3401 9.11668 10.5671 10.2762 9.48119 11.0063Z" fill="#0E100F"></path></svg>`,
      link: "https://dribbble.com/nikhiludayy",
      profile: "Dribble",
    },
  ];
  const data1 = [
    {
      img: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M10.75 42.15C9.62217 42.15 8.50688 41.9583 7.40415 41.575C6.30138 41.1917 5.33333 40.5667 4.5 39.7C5.66667 39.3 6.5 38.7167 7 37.95C7.5 37.1833 7.75 36.15 7.75 34.85C7.75 33.3917 8.26127 32.1521 9.2838 31.1313C10.3064 30.1104 11.548 29.6 13.0088 29.6C14.4696 29.6 15.7083 30.1104 16.725 31.1313C17.7417 32.1521 18.25 33.3917 18.25 34.85C18.25 36.9833 17.525 38.7333 16.075 40.1C14.625 41.4667 12.85 42.15 10.75 42.15ZM10.75 39.15C11.9167 39.15 12.9583 38.7333 13.875 37.9C14.7917 37.0667 15.25 36.05 15.25 34.85C15.25 34.1833 15.0417 33.6417 14.625 33.225C14.2083 32.8083 13.6667 32.6 13 32.6C12.3333 32.6 11.7917 32.8083 11.375 33.225C10.9583 33.6417 10.75 34.1833 10.75 34.85C10.75 36.15 10.6083 37.1083 10.325 37.725C10.0417 38.3417 9.51667 38.7167 8.75 38.85C8.95 38.8833 9.28333 38.9417 9.75 39.025C10.2167 39.1083 10.55 39.15 10.75 39.15ZM22.25 30.3L17.75 25.55L36.55 6.75001C37.0167 6.28334 37.5333 6.04167 38.1 6.02501C38.6667 6.00834 39.2 6.25001 39.7 6.75001L41.15 8.20001C41.65 8.70001 41.8917 9.24167 41.875 9.82501C41.8583 10.4083 41.6167 10.9333 41.15 11.4L22.25 30.3Z" fill="#00BAD5"></path></svg>`,
      title: "UI & UX",
      fill: "#00BAD5",
      content:
        "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },
    {
      img: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M4 40V35.5H8V11C8 10.175 8.29375 9.46875 8.88125 8.88125C9.46875 8.29375 10.175 8 11 8H42V11H11V35.5H23V40H4ZM27.5 40C27.075 40 26.7188 39.8563 26.4312 39.5688C26.1438 39.2812 26 38.925 26 38.5V15.5C26 15.075 26.1438 14.7188 26.4312 14.4313C26.7188 14.1438 27.075 14 27.5 14H42.5C42.925 14 43.2812 14.1438 43.5688 14.4313C43.8563 14.7188 44 15.075 44 15.5V38.5C44 38.925 43.8563 39.2812 43.5688 39.5688C43.2812 39.8563 42.925 40 42.5 40H27.5ZM29 35.5H41V17H29V35.5Z" fill="#9D95FF"></path></svg>`,
      title: "Web & Mobile App",
      fill: "#9D95FF",
      content:
        "Transforming ideas into exceptional web and mobile app experiences.",
    },
    {
      img: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.1667 4.53333 18.5333 5.6 16.1C6.66667 13.6667 8.125 11.55 9.975 9.75C11.825 7.95 13.9917 6.54167 16.475 5.525C18.9583 4.50833 21.6167 4 24.45 4C27.0833 4 29.5833 4.44167 31.95 5.325C34.3167 6.20833 36.3917 7.43333 38.175 9C39.9583 10.5667 41.375 12.425 42.425 14.575C43.475 16.725 44 19.0833 44 21.65C44 25.25 42.95 28.0917 40.85 30.175C38.75 32.2583 35.9667 33.3 32.5 33.3H28.75C28.15 33.3 27.6333 33.5333 27.2 34C26.7667 34.4667 26.55 34.9833 26.55 35.55C26.55 36.45 26.7917 37.2167 27.275 37.85C27.7583 38.4833 28 39.2167 28 40.05C28 41.3167 27.65 42.2917 26.95 42.975C26.25 43.6583 25.2667 44 24 44ZM12.35 25.3C13.0167 25.3 13.6 25.05 14.1 24.55C14.6 24.05 14.85 23.4667 14.85 22.8C14.85 22.1333 14.6 21.55 14.1 21.05C13.6 20.55 13.0167 20.3 12.35 20.3C11.6833 20.3 11.1 20.55 10.6 21.05C10.1 21.55 9.85 22.1333 9.85 22.8C9.85 23.4667 10.1 24.05 10.6 24.55C11.1 25.05 11.6833 25.3 12.35 25.3ZM18.65 16.8C19.3167 16.8 19.9 16.55 20.4 16.05C20.9 15.55 21.15 14.9667 21.15 14.3C21.15 13.6333 20.9 13.05 20.4 12.55C19.9 12.05 19.3167 11.8 18.65 11.8C17.9833 11.8 17.4 12.05 16.9 12.55C16.4 13.05 16.15 13.6333 16.15 14.3C16.15 14.9667 16.4 15.55 16.9 16.05C17.4 16.55 17.9833 16.8 18.65 16.8ZM29.35 16.8C30.0167 16.8 30.6 16.55 31.1 16.05C31.6 15.55 31.85 14.9667 31.85 14.3C31.85 13.6333 31.6 13.05 31.1 12.55C30.6 12.05 30.0167 11.8 29.35 11.8C28.6833 11.8 28.1 12.05 27.6 12.55C27.1 13.05 26.85 13.6333 26.85 14.3C26.85 14.9667 27.1 15.55 27.6 16.05C28.1 16.55 28.6833 16.8 29.35 16.8ZM35.9 25.3C36.5667 25.3 37.15 25.05 37.65 24.55C38.15 24.05 38.4 23.4667 38.4 22.8C38.4 22.1333 38.15 21.55 37.65 21.05C37.15 20.55 36.5667 20.3 35.9 20.3C35.2333 20.3 34.65 20.55 34.15 21.05C33.65 21.55 33.4 22.1333 33.4 22.8C33.4 23.4667 33.65 24.05 34.15 24.55C34.65 25.05 35.2333 25.3 35.9 25.3ZM24 41C24.3667 41 24.625 40.925 24.775 40.775C24.925 40.625 25 40.3833 25 40.05C25 39.5833 24.7583 39.15 24.275 38.75C23.7917 38.35 23.55 37.4667 23.55 36.1C23.55 34.5667 24.05 33.2167 25.05 32.05C26.05 30.8833 27.3167 30.3 28.85 30.3H32.5C35.0333 30.3 37.0833 29.5583 38.65 28.075C40.2167 26.5917 41 24.45 41 21.65C41 17.25 39.3333 13.7083 36 11.025C32.6667 8.34167 28.8167 7 24.45 7C19.5833 7 15.4583 8.64167 12.075 11.925C8.69167 15.2083 7 19.2333 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3 41 24 41Z" fill="#FEC5FB"></path></svg>`,
      title: "Design & Creative",
      fill: "#FEC5FB",
      content:
        "Crafting visually stunning design that connects deeply with your audience.",
    },
    {
      img: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M14.3 44.05L22.85 28.7L6 26.7L30.75 3.95H33.7L25.15 19.3L42 21.3L17.25 44.05H14.3ZM22.65 34.7L35.25 23.55L20.4 21.75L25.35 13.3L12.7 24.5L27.55 26.25L22.65 34.7Z" fill="#FF8709"></path></svg>`,
      title: "Development",
      fill: "#FF8709",
      content:
        "Bringing your vison to life with the latest technology and design trends.",
    },
  ];
  return (
    <div className="relative  px-4 sm:px-2 ">
      {/* <Nav
      bar /> */}
      <Work />
      <div className="relative blur-[6px]">
        <div className="absolute md:top-[30em] lg:top-[23em] lg:left-[5em] lg:w-[15em] lg:h-[15em]   lg:shadow-[inset_25px_-25px_30px_-22px_#3b82f6] top-[-15em] left-[1em] rounded-full  w-[20em] h-[20em]   shadow-[inset_10px_20px_20px_-10px_#3b82f6]"></div>

        <div className="absolute md:top-[65em] lg:top-[-4em] lg:right-[3em] lg:w-[20em] lg:h-[20em]  lg:shadow-[inset_-25px_25px_30px_-22px_#3b82f6]  top-[15em] right-[5em] rounded-full  w-[20em] h-[20em]   shadow-[inset_-10px_-20px_20px_-10px_#3b82f6]"></div>
      </div>
      <div className="relative sm:h-[32em] h-[35em] border-t border-opacity-30 border-t-zinc-100 flex flex-col gap-10 justify-between py-7 md:mt-[40em] lg:mt-20 -mt-[16em]">
        <div className="flex justify-between ">
          <div className="text-sm sm:mr-20 ">
            <h1>
              // Design, Code,
              <br />
              Engage
            </h1>
          </div>
          <div className="">
            <div className="flex items-center gap-2 justify-center border border-zinc-100  border-opacity-30 rounded-3xl p-1">
              {data.map((elem, index) => {
                return (
                  <Link
                    key={index}
                    className=" "
                    target="_blank"
                    to={elem.link}
                  >
                    <div>
                      <div
                        className="bg-white rounded-full overflow-hidden w-8 h-8 flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: elem.img }}
                      ></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2  justify-center border border-zinc-100 border-opacity-30 rounded-3xl p-1">
              <Link to={"mailto:nikhiluday0823@gmail.com"}>
                <div className="bg-white rounded-full overflow-hidden w-8 h-8 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.19175 11.5252C1.96548 11.5252 1.7675 11.4404 1.59781 11.2707C1.42811 11.101 1.34326 10.903 1.34326 10.6768V3.32322C1.34326 3.09695 1.42811 2.89897 1.59781 2.72928C1.7675 2.55958 1.96548 2.47473 2.19175 2.47473H11.8079C12.0342 2.47473 12.2322 2.55958 12.4018 2.72928C12.5715 2.89897 12.6564 3.09695 12.6564 3.32322V10.6768C12.6564 10.903 12.5715 11.101 12.4018 11.2707C12.2322 11.4404 12.0342 11.5252 11.8079 11.5252H2.19175ZM6.99983 7.25453L2.19175 4.10099V10.6768H11.8079V4.10099L6.99983 7.25453ZM6.99983 6.40604L11.7513 3.32322H2.26245L6.99983 6.40604ZM2.19175 4.10099V3.32322V10.6768V4.10099Z"
                      fill="#0E100F"
                    ></path>
                  </svg>
                </div>
              </Link>
              <h1 className="hidden sm:block text-[.7em]">
                nikhiluday0823@gmail.com
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-grow items-center justify-between ">
          <p className="basis-5/12  ">
            Empowering success in the digital landscape. Together, we shape a
            visionary future, delivering on promises and continuously pioneering
            innovation.
          </p>
          <p className="basis-1/4  ">
            My blend of design, coding, and interaction expertise distinguishes
            me within the tech industry.
          </p>
        </div>
        <div className="text-[2em] leading-10 font-semibold text-green-500">
          <h1>
            Coding the Future <br /> Architecting Innovation
          </h1>
        </div>
      </div>
      <div className="relative top-[20em] blur-[8px]">
        <div className="absolute lg:top-[15em] lg:left-[12em] lg:w-[15em] lg:h-[15em]   lg:shadow-[inset_25px_-25px_30px_-22px_#3b82f6] top-[5em] left-[1em] rounded-full  w-[20em] h-[20em]   shadow-[inset_10px_20px_20px_-10px_#3b82f6]"></div>

        <div className="absolute  lg:top-[-6em] lg:right-[13em] lg:w-[20em] lg:h-[20em]  lg:shadow-[inset_-25px_25px_30px_-22px_#3b82f6]  top-[35em] right-[5em] rounded-full  w-[20em] h-[20em]   shadow-[inset_-10px_-20px_20px_-10px_#3b82f6]"></div>
      </div>

      {/*  */}

      <div className="relative border-t border-opacity-30 border-t-zinc-100 my-14 ">
        <div className="absolute right-5 -top-5 bg-white rounded-full w-9 h-9 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M14.3 44.05L22.85 28.7L6 26.7L30.75 3.95H33.7L25.15 19.3L42 21.3L17.25 44.05H14.3ZM22.65 34.7L35.25 23.55L20.4 21.75L25.35 13.3L12.7 24.5L27.55 26.25L22.65 34.7Z"
              fill="#0E100F"
            ></path>
          </svg>
        </div>
        <div className="absolute top-32 right-4">
         <Link to={"/aboutme"}> <Button title="About ME" /></Link> 
        </div>
        <div className="flex flex-col py-8 gap-36">
          <div className="text-center">
            <p className="tracking-wide p-4">
              I specialize in crafting tailored solutions that merge technical
              precision with creative design. Whether building systems or visual
              experiences, I consistently push boundaries with a deep commitment
              to quality and innovation.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10">
            <h1 className="text-4xl font-semibold text-purple-400 tracking-wider">
              WHAT I DO
            </h1>
            <div className="h-full flex flex-row flex-wrap w-11/12 gap-4">
              {data1.map((elem, index) => {
                return (
                  <div key={index} className="flex-grow w-64  ">
                    <div className="shadow-inner shadow-[#ffffff26]  border border-zinc-100 border-opacity-30 rounded-lg pt-12 pb-10 pl-6 pr-10 ">
                      <div className="flex flex-col pt-28  gap-3">
                        <div
                          className=" rounded-full overflow-hidden w-12 h-12 flex items-center justify-center"
                          dangerouslySetInnerHTML={{ __html: elem.img }}
                        ></div>
                        <h1
                          style={{ color: elem.fill }}
                          className="text-xl font-medium"
                        >
                          {elem.title}
                        </h1>
                        <p>{elem.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <Stripes />
      <Products /> */}
      <div className="relative flex flex-col items-center border-t border-opacity-30 border-t-zinc-100 sm:mt-0 mt-[15em] ">
        <div className="pt-10">
          <h1 className="text-4xl font-semibold text-purple-400 tracking-wider">
            MY TECH STACK
          </h1>
        </div>
        <div className="text-center px-4 pt-10">
          <p className="text-2xl tracking-wide 10">
            My expertise spans a diverse range of technologies, enabling me to
            deliver comprehensive and cutting-edge solutions across various
            platforms.
          </p>
        </div>
        <div>
          <Marquees />
        </div>
      </div>
      <div className="relative top-[-30em] blur-[8px]">
        <div className="absolute lg:top-[15em] lg:left-[5em] lg:w-[15em] lg:h-[15em]   lg:shadow-[inset_25px_-25px_30px_-22px_#3b82f6] top-[-15em] left-[1em] rounded-full  w-[20em] h-[20em]   shadow-[inset_10px_20px_20px_-10px_#3b82f6]"></div>

        <div className="absolute  lg:top-[-6em] lg:right-[5em] lg:w-[20em] lg:h-[20em]  lg:shadow-[inset_-25px_25px_30px_-22px_#3b82f6]  top-[15em] right-[5em] rounded-full  w-[20em] h-[20em]   shadow-[inset_-10px_-20px_20px_-10px_#3b82f6]"></div>
      </div>
      <Cards />
    </div>
  );
};

export default Home;
