import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

const Hero = () => {
  return (
    <Section
      id={"home"}
      className={"pt-[12rem] -mt-[5.25rem] lg:mt-0"}
      customPadding
      crosses={"crosses"}
    >
      <div className=" container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            <h1>Convert your Dream </h1>in Web Dev with{" "}
            <span className=" inline-block relative ">
              Sayan Das
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />{" "}
            </span>{" "}
          </h1>
          <p className=" mt-5 body-1 max-w-3xl mx-auto text-n-2 lg:mb-8 mb-6">Unlock the power of modern websites with me for innovative, high-performance web development projects.</p>
          <Button
            href={"/pricing"}
            white
            className={"font-code tracking-wide font-bold text-xs"}
          >
            GET STARTED
          </Button>
        </div>
        <div className=" relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 ">
          <div className="relative z-1 p-[2px] pr-[2.6px] rounded-2xl bg-conic-gradient ">
            <div className="relative bg-n-8 rounded-[1rem]  ">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className=" aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                
              </div>
            </div>
            <Gradient />
          </div>
          <div className="bg-blend-multiply -z-3 absolute -top-[55%] left-1/2 w-[234%] md:-top-[46%] md:w-[138%] lg:-top-[102%] -translate-x-1/2">
            <img
              src={heroBackground}
              className=" w-full rounded-b-[0.9rem]  bg-blend-multiply"
              alt="robot"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
      <p className=" hidden md:block md:mt-20 w-full text-center font-code text-white/50 text-sm uppercase">Helping People To Build There Own Website</p>
    </Section>
  );
};

export default Hero;
