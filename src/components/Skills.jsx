import React from "react";
import Section from "./Section";
import Button from "./Button";
import Program from "./Program";
import { RightCurve, LeftCurve } from "./design/Collaboration";
import { BottomLine} from "./design/Hero";


const Skills = () => {
  const program = [
    { title: "html", url: "" },
    { title: "css" },
    { title: "js" },
    { title: "npm" },
    { title: "figma" },
    { title: "tailwind" },
    { title: "node" },
    { title: "express" },
    { title: "mongo" },
    { title: "react" },
    { title: "next" },
    { title: "redux" },
    { title: "gsap" },
    { title: "framer" },
    { title: "git" },
    { title: "github" },
    { title: "c" },
    { title: "cpp" },
  ];
  const scills = [
    { title: "Software engineering", id: 3 },
    { title: "Teaching", id: 1 },
    { title: "Drawing", id: 2 },
  ];
  return (
    <Section id={"skills"}
      customPadding={"py-14 lg:py-16 xl:py-[8rem] -mb-4"}
    >
      <div className="container lg:flex ">
        <div className=" max-w-[30rem]">
          <h2 className="h2 mb-4 md:mb-8">Technologies Skills And Fremwork&nbsp; That I Know</h2>
          <ul className=" max-w-[22rem] mb-10 md:mb-14">
            {scills.map((item) => (
              <li
                key={item.id}
                className="mb-2 py-3 flex items-center gap-4"
              >
                <img src="src/assets/check.svg" />
                <h6>{item.title}</h6>
              </li>
            ))}
          </ul>
          <Button className={" font-code text-xs font-bold"}>Contact Me</Button>
          <p className="body-2 text-n-4 lg:w-[22rem]  mt-10">With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          {/* / */}
          <div className="relative left-1/2 flex md:w-[32rem] w-[21rem] aspect-square rounded-full -translate-x-1/2 scale:75 md:scale-100 -top-10  md:mt-10 lg:mt-6 mt-20">
            <div className=" overflow-hidden rounded-full">
              <Program className={""} />
            </div>

            <LeftCurve />
            {/* <RightCurve /> */}
          </div>
          {/* / */}
        </div>
      </div>
      
    </Section>
  );
};

export default Skills;
