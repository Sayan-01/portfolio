import React from "react";
import { skillRing } from "../assets";
const program = [
  { title: "html" , url: ''},
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
const Program = ({className}) => {
  return (
    <div className=" overflow-hidden rounded-full p-4 bg-[#0E0C15] sh">
      <img
        className={className}
        src={skillRing}
      />
    </div>
  );
};

export default Program;
