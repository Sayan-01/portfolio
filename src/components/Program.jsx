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
    <img
      className={className}
      src={skillRing}
    />
  );
};

export default Program;
