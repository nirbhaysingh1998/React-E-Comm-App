import React from "react";
import { FaShippingFast } from "react-icons/fa";
import Footer from "./Footer";

const Policy = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-5 p-5 md:gap-14">
        <div className="md:col-start-2 bg-slate-300 p-2 rounded-lg ">
          <div className=" flex flex-col justify-center p-5 ">
            <center>
              <FaShippingFast className=" text-5xl bg-white   rounded-lg block relative p-2" />
            </center>
            <div className="md:text-left  p-5"> super fast & Free Shipping</div>
          </div>
        </div>
        <div className="  pt-4   ">
          <div className=" bg-slate-300 m-2 rounded-lg flex p-2 pl-4">
            <FaShippingFast className=" text-5xl bg-white   rounded-lg block relative p-2" />
            <div className="text-left  p-2"> Shipping</div>
          </div>
          <div className=" bg-slate-300 m-2 rounded-lg flex p-2 pl-4">
            <FaShippingFast className=" text-5xl bg-white   rounded-lg block relative p-2" />
            <div className="text-left  p-2"> Shipping</div>
          </div>
        </div>
        <div className="col-ends-4 bg-slate-300 p-2 rounded-lg ">
          <div className=" flex flex-col justify-center p-5 ">
            <center>
              <FaShippingFast className=" text-5xl bg-white   rounded-lg block relative p-2" />
            </center>
            <div className="md:text-left p-5"> super fast & Free Shipping</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
