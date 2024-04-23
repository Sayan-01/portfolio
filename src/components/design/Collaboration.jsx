
export const RightCurve = () => {
  return (
    <div className={`hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block`}>
      <img
        src="src\assets\collaboration\curve-2.svg"
        width={162}
        height={76}
        alt="Curve 2"
      />
    </div>
  );
};

export const LeftCurve = (className) => {
  return (
    <div className={`${className} hidden absolute top-1/2 right-full w-[32.625rem]  mt-8 mr-10 pointer-events-none xl:block`}>
      <img
        src="src\assets\collaboration\curve-1.svg"
        width={522}
        height={182}
        alt="Curve 1"
      />
    </div>
  );
};
