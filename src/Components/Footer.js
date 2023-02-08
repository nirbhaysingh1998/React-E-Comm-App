import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" grid grid-cols-8 p-2 md:top-10 md:relative ">
        <div className="col-start-3 col-span-4 bg-slate-200 p-2 rounded-lg">
          <div className="p-3 ">
            <h1 className="float-left">Want wo work with us? join us today</h1>

            <button className=" border-2 p-2 md:float-right  bg-blue-700 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-sky-900 text-white md:grid md:grid-cols-8 gap-3 pt-10 pb-5">
        <div className="col-start-3 ">
          <h1 className="text-xl p-2">Nirbhay singh</h1>
          <h2 className="text-sm">working with react</h2>
        </div>
        <div className="">
          <h2 className="text-sm">Subscribe to get important update</h2>
          <input
            type="text"
            placeholder="email?"
            className="p-1 rounded-sm text-black focus:border-none"
          />
          <button className="p-1 bg-blue-500 mt-2">Submit</button>
        </div>
        <div className="follow us">
          follow us
          <div className="flex  justify-center gap-2 text-3xl ">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
        <div className="">
          call us
          <h1>79031890305</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
