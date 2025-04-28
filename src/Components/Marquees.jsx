import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  const images = [
    [
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/app.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/react.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/css.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/express.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/git.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/html.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/java.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/javascript.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/mongodb.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/nextjs.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/node.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/psql.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/python.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/shadcn.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/sql.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/tailwind.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/typescript.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/docker-mark-blue.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/redux.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/spring-boot-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/figma.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/maven-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/adobe-after-effects-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/adobe-illustrator-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/adobe-photoshop-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/adobe-premiere-svgrepo-com.svg",
    ],
    [
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/app.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/react.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/css.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/express.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/git.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/html.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/java.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/javascript.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/mongodb.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/nextjs.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/node.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/psql.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/python.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/shadcn.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/sql.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/tailwind.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/typescript.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/docker-mark-blue.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/redux.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/spring-boot-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/figma.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/maven-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/adobe-after-effects-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/adobe-illustrator-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/adobe-photoshop-svgrepo-com.svg",
      "https://nikhiluday-portfolio.s3.ap-south-1.amazonaws.com/src/assets/adobe-premiere-svgrepo-com.svg",
    ],
    
  ];

  return (
    <div className="py-20  w-full relative overflow-hidden">
      {images.map((elem, index) => {
        return (
          <Marquee
            key={index}
            direction={index === 0 ? "left" : "right"}
            val={elem}
          />
        );
      })}
    </div>
  );
};

export default Marquees;
