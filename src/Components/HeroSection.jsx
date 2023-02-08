import React, { useRef, useState, useEffect } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Footer from "./Footer";
import FeatureProduct from "./FeatureProduct";

const HeroSection = () => {
  // const images = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg"];

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-5 md:ml-60 md:mr-14 mt-20 ">
          <p className="font-bold text-xl text-left">Welcome to my shop</p>
          <p className="font-bold text-2xl text-left ">Nirbhay Store</p>
          <div className=" text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <button className="bg-blue-600 float-left rounded-sm text-white p-1 mt-2">
            Shop Now
          </button>
        </div>

        <div className="float-left  p-5">
          <div className="h-[22vh] bg-blue-600 w-[15vw]  float-right relative -left-20 "></div>
          <img
            className="z-10 relative bottom-36 -left-4 h-[50vh]"
            src={require("../Images/banner1.jpg")}
            alt="banner "
          />
        </div>
      </div>
      <FeatureProduct />
    </>
  );
};

export default HeroSection;
