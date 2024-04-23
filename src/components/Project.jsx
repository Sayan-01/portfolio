import React from "react";
import Section from "./Section";
import Text from "./Text";
import { Gradient } from "./design/Services";
import Button from "./Button";
import { check2, grid, loading1 } from "../assets";
import { roadmap1, roadmap2, roadmap3 } from "../assets";


const Project = () => {
  const projects = [
    {
      id: "0",
      title: "Airbnb Clone",
      text: "loremsdcs dds  ewsd sdbsvv guweoh aaoye ggh hry ydhd fhyr y hdfdkd iugd fuigdj hvboavhj vvgvv v vg d t sdggdgsd sdvgsyy svvy fwuk duyd cug d gsdgv wegv",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Airbnb Clone",
      text: "loremsdcs dds  ewsd sdbsvv guweoh aaoye ggh hry ydhd fhyr y hdfdkd iugd fuigdj hvboavhj vvgvv v vg d t sdggdgsd sdvgsyy svvy fwuk duyd cug d gsdgv wegv",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap2,
      colorful: false,
    },
    {
      id: "2",
      title: "Airbnb Clone",
      text: "loremsdcs dds  ewsd sdbsvv guweoh aaoye ggh hry ydhd fhyr y hdfdkd iugd fuigdj hvboavhj vvgvv v vg d t sdggdgsd sdvgsyy svvy fwuk duyd cug d gsdgv wegv",
      date: "May 2023",
      status: "process",
      imageUrl: roadmap3,
      colorful: false,
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
                className={` ${item.colorful ? " bg-conic-gradient" : " bg-n-6"} rounded-[2.5rem] md:flex  even:md:translate-y-[7rem] p-0.25`}
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
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Text>{item.date}</Text>
                      <div className=" flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className=" mr-2.5 "
                          width={16}
                          height={16}
                          src={item.status === "done" ? check2 : loading1}
                          alt="status"
                        />
                        <div className=" tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        alt="image"
                        width={630}
                        height={420}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className=" body-2 text-n-4">{item.text}</p>
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
