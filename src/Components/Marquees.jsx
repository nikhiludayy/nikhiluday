import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  const images = [
    [
      "../src/assets/app.svg",
      "../src/assets/react.svg",
      "../src/assets/css.svg",
      "../src/assets/express.svg",
      "../src/assets/git.svg",
      "../src/assets/html.svg",
      "../src/assets/java.svg",
      "../src/assets/javascript.svg",
      "../src/assets/mongodb.svg",
      "../src/assets/nextjs.svg",
      "../src/assets/node.svg",
      "../src/assets/psql.svg",
      "../src/assets/python.svg",
      "../src/assets/shadcn.svg",
      "../src/assets/sql.svg",
      "../src/assets/tailwind.svg",
      "../src/assets/typescript.svg",
      "../src/assets/docker-mark-blue.svg",
      "../src/assets/redux.svg",
      "../src/assets/spring-boot-svgrepo-com.svg",
      "../src/assets/figma.svg",
      "../src/assets/maven-svgrepo-com.svg",
      "../src/assets/adobe-after-effects-svgrepo-com.svg",
      "../src/assets/adobe-illustrator-svgrepo-com.svg",
      "../src/assets/adobe-photoshop-svgrepo-com.svg",
      "../src/assets/adobe-premiere-svgrepo-com.svg",
    ],
    [
      "../src/assets/app.svg",
      "../src/assets/react.svg",
      "../src/assets/css.svg",
      "../src/assets/express.svg",
      "../src/assets/git.svg",
      "../src/assets/html.svg",
      "../src/assets/java.svg",
      "../src/assets/javascript.svg",
      "../src/assets/mongodb.svg",
      "../src/assets/nextjs.svg",
      "../src/assets/node.svg",
      "../src/assets/psql.svg",
      "../src/assets/python.svg",
      "../src/assets/shadcn.svg",
      "../src/assets/sql.svg",
      "../src/assets/tailwind.svg",
      "../src/assets/typescript.svg",
      "../src/assets/docker-mark-blue.svg",
      "../src/assets/redux.svg",
      "../src/assets/spring-boot-svgrepo-com.svg",
      "../src/assets/figma.svg",
      "../src/assets/maven-svgrepo-com.svg",
      "../src/assets/adobe-after-effects-svgrepo-com.svg",
      "../src/assets/adobe-illustrator-svgrepo-com.svg",
      "../src/assets/adobe-photoshop-svgrepo-com.svg",
      "../src/assets/adobe-premiere-svgrepo-com.svg",
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
