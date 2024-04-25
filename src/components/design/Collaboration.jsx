import { curve1 } from "../../assets";
export const RightCurve = () => {
  return (
    <div className={`hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-20 pointer-events-none xl:block`}>
      <img
        src={curve1}
        width={162}
        height={76}
        alt="Curve 2"
      />
    </div>
  );
};

export const LeftCurve = (className) => {
  return (
    <div className={`${className} hidden absolute top-1/2 right-full w-[32.625rem]  -mt-5 mr-6 pointer-events-none xl:block`}>
      <img
        src={curve1}
        width={522}
        height={182}
        alt="Curve 1"
      />
    </div>
  );
};
