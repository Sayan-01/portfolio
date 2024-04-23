import React, { useEffect, useState } from "react";

function Eyeball({className}) {
  let [rotate, setRotate] = useState(0);

  useEffect(() => {
    let pupil = document.querySelectorAll(".pupil");
    console.log(pupil);

    let pupilStartPoint = -1;
    let pupilRange = 2;

    // X
    let mouseXstartPoint = 0;
    let mouseXEndPoint = window.innerWidth;
    let currXposi = 0;
    let fracXvalue = 0;

    let mouceXrange = mouseXEndPoint - mouseXstartPoint;

    // Y
    let mouseYstartPoint = 0;
    let mouseYEndPoint = window.innerHeight;
    let currYposi = 0;
    let fracYvalue = 0;

    let mouceYrange = mouseYEndPoint - mouseYstartPoint;

    const mouseMove = (event) => {
      currXposi = event.clientX - mouseXstartPoint;
      fracXvalue = currXposi / mouceXrange;

      currYposi = event.clientY - mouseYstartPoint;
      fracYvalue = currYposi / mouceYrange;

      let pupilXcurPosi = pupilStartPoint + fracXvalue * pupilRange;
      let pupilYcurPosi = pupilStartPoint + fracYvalue * pupilRange;

      pupil[0].style.transform = `translate(${pupilXcurPosi}vw,${pupilYcurPosi}vw)`;
      pupil[1].style.transform = `translate(${pupilXcurPosi}vw,${pupilYcurPosi}vw)`;
    };

    const winn = () => {
      mouseXEndPoint = window.innerWidth;
      mouseYEndPoint = window.innerWidth;

      mouceXrange = mouseXEndPoint - mouseXstartPoint;
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("resize", winn);
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let delX = mouseX - window.innerWidth / 2;
      let delY = mouseY - window.innerHeight / 2;
      let ang = Math.atan2(delY, delX) * (180 / Math.PI);

      setRotate(ang - 180);
    });
  });

  return (
    <div className={`absolute ${className}`}>
      <div className="absolute flex gap-[168px] left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="w-[14vw] flex items-center justify-center rounded-full h-[14vw] bg-[#823411]">
          <div className="w-[9vw] relative rounded-full h-[9vw] bg-[#F4AA19] pupil">
            <h1 className=" absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]  text-[20px] text-white"></h1>
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.2vw]"
            >
              <div className="w-[1.2vw] rounded-full h-[1.2vw] bg-slate-100"></div>
            </div>
          </div>
        </div>
        <div className="w-[14vw] flex items-center justify-center rounded-full h-[14vw] bg-[#823411]">
          <div className="w-[9vw] relative rounded-full h-[9vw] bg-[#F4AA19] pupil">
            <h1 className=" absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]  text-[20px] text-white"></h1>

            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.2vw]"
            >
              <div className="w-[1.2vw] rounded-full h-[1.2vw] bg-slate-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyeball;
