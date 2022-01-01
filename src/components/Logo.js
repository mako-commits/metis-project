import React from "react";
import wingist from "../images/Wingist2xdd.png";
import thrive from "../images/thrive.png";
const Logo = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-3">
            <img src={wingist} alt="logo" className="grayscale" />
          </div>

          <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img src={thrive} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
