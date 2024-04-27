import React from "react";
import Section from "./Section";
import Text from "./Text";
import { Gradient } from "./design/Services";
import Button from "./Button";
import { airbnb1, check2, grid, loading1, project3, reactShoe } from "../assets";
import { roadmap1, roadmap2, roadmap3 } from "../assets";


const Project = () => {
  const projects = [
    {
      id: "0",
      title: "Airbnb Clone Full Stack",
      text: "This is a full stack Airbnb clone based on MERN stack. In this project user can create or delete his/her own listing, giving reviews, and use filter and search v of betterresult. Moreover, the webapp has the facility of Log in, Sign in and Logout. And complete CRUD operation can be done on the website.",
      date: "Dec 2023",
      status: "done",
      imageUrl: airbnb1,
      colorful: true,
      github: "https://github.com/Sayan-01/wanderland",
      link: "https://wanderland-sayan.onrender.com/",
    },
    {
      id: "1",
      title: "React Animated Webpage",
      text: "I convert the Nike landing page into a animated mordern landing page. Here I used React Js and Framer as base framework and animation tool.On this webpage, when we click on any of the three shoes below, we can see that shoe is scaled with smooth rotation.",
      date: "Jan 2024",
      status: "done",
      imageUrl: reactShoe,
      colorful: false,
      github: "https://github.com/Sayan-01",
    },
    {
      id: "2",
      title: "Portfolio Website",
      text: "This is my portfolio website, this website is built with React, React Router DOM, GSP etc. In this website you can see some parallax effect and in this project I use modern react features like reusable component and real dom virtual dom concept as well. The website has been developed to be fully responsive and compatible with mobile phones and tablets.",
      date: "May 2024",
      status: "process",
      imageUrl: project3,
      colorful: false,
      github: "https://github.com/Sayan-01/",
      link: "https://https://sayan-01.vercel.app/",
    },
    {
      id: "3",
      title: "Airbnb Clone",
      text: "loremsdcs dds  ewsd sdbsvv guweoh aaoye ggh hry ydhd fhyr y hdfdkd iugd fuigdj hvboavhj vvgvv v vg d t sdggdgsd sdvgsyy svvy fwuk duyd cug d gsdgv wegv",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: false,
    },
  ];
  return (
    <Section id={'projects'} customPadding={"md:pb-28 pb-16 pt-20"}>
      <div className="container md:pb-0 lg:pb">
        <div>
          <Text className={"md:mb-5 mb-[16px] md:mt-4 mt-16 w-full"}>" Realize Your Dream Website "</Text>
          <h2 className="h2 w-full md:text-center md:mb-20 mb-10 ">List Of Projects I Have Created.</h2>
        </div>
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {projects.map((item) => {
            const status = item.status === "done" ? "Done" : "In Progress";

            return (
              <div
                key={item.id}
                className={` ${item.colorful ? " bg-conic-gradient" : " bg-n-6"} rounded-[2.5rem] md:flex   even:md:translate-y-[7rem] p-0.25`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.47rem] overflow-hidden xl:p-15">
                  <div className=" absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className=" relative z-1">
                    <div className="flex items-center justify-between max-w-full ">
                      <Text>{item.date}</Text>
                      <div className=" flex items-center px-2 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className=" mr-1.5 "
                          width={16}
                          height={16}
                          src={item.status === "done" ? check2 : loading1}
                          alt="status"
                        />
                        <div className=" tagline">{status}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center relative top-0">
                      <div className=" overflow-hidden w-full md:my-5 my-7 md:rounded-2xl rounded-xl bg-slate-300 aspect-[16/10.5]">
                        <img className=" object-fill h-full"
                          src={item.imageUrl}
                          alt="airbnb-1"
                        />
                      </div>
                    </div>
                    <div className="md:mb-5 mb-4 mt-0 md:mt-4">
                      <a
                        className=" tagline py-1 px-2 bg-n-1 rounded text-n-8 mr-4"
                        href={item.github}
                      >
                        Github
                      </a>
                      {item.link && (
                        <a
                          className=" tagline py-1 px-2 bg-n-1 rounded text-n-8"
                          href={item.link}
                        >
                          Website Url
                        </a>
                      )}
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <div className=" pr-3 md:overflow-visible overflow-scroll md:h-auto h-[139px]">
                      <p className=" cursor-pointer body-2 text-n-4">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient className={"top-0 -left-[10rem]"} />

          <Gradient className={"md:top-[60rem] top-[70rem] right-10"} />
        </div>
        <div className="flex items-center justify-center mt-16 md:mt15 xl:mt-20 w-full">
          <Button className={"font-code text-xs font-bold uppercase"}>Our Roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Project;
