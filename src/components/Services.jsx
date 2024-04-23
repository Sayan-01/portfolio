import React from "react";
import Section from "./Section";
import { Gradient } from "./design/Services";
import { service1, service2, service3, check, smallSphere, stars } from "../assets";


const services = [
  { id: 0, title: "Web Development" },
  { id: 1, title: "Web Designing" },
  { id: 2, title: "Making Scaleble Backend" },
  { id: 3, title: "Frontend Development" },
  { id: 4, title: "Adv Animeted Website" },
];

const Services = () => {
  return (
    <Section
      customPadding={"pt-10 lg:pt-16 xl:pt-20 -mb-20"}
      id={"services"}
    >
      <div className="container -mt-16 md:mt-0 md:mb-[10rem] mb-10">
        <h2 className="h2 w-full md:text-center">List of All Services That I Provid.</h2>
        <p className="body-2 text-n-4 md:text-center md:mb-20 mb-[56px] mt-4">Brainwave unlocks the potential of AI-powered applications</p>
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] ">
            <div className="w-full h-full absolute left-0 pointer-events-none md:w-3/5 xl:w-auto">
              <img
                width={800}
                height={730}
                className=" w-full h-full object-cover md:object-right"
                src={service1}
              />
            </div>
            <div className="relative z-2 max-w-[17rem] ml-auto">
              {/* / */}
              <div className=" max-w-[30rem]">
                <h4 className="h4 mb-4 md:mb-0">Be Smart</h4> <p className="body-2 text-n-1/70 lg:w-[22rem]  my-5">With smart automation and top-notch Websites, it's the perfec.</p>
                <ul className=" max-w-[22rem] mb-10 md:mb-14">
                  {services.map((item) => (
                    <li
                      key={item.id}
                      className="mb-2 py-3 flex items-center gap-4 border-t border-n-5"
                    >
                      <img src={check} />
                      <h6>{item.title}</h6>
                    </li>
                  ))}
                </ul>
              </div>
              {/* / */}
            </div>
          </div>
          <Gradient className={"top-0 -md:left-[10rem] -left-[2rem]"} />
        </div>
      </div>
      <div className="">
        <div className=" relative container z-3">
          <div className="hidden -mt-10 relative justify-center mb-[7.6rem] lg:flex">
            <img
              src={smallSphere}
              alt="ball"
              className="relative top-3 z-100"
              width={255}
              height={255}
            />
            <div className=" absolute z-100 top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
              <img
                className="w-full"
                width={950}
                height={400}
                src={stars}
                alt="stars"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
