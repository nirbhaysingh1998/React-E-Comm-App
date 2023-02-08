import React, { useState } from "react";
import Policy from "./Policy";
import { useProductContext } from '../Context/ProductContext';
import Product from "./Product";

const FeatureProduct = () => {
  const { isError, isLoading, featureProducts } = useProductContext();

  return (
    <>
      <div className="bg-slate-300  ">
        <div className="md:grid md:grid-cols-6 ">
          <div className="col-start-2 md:text-xl font-semibold p-2">
            Our Feature Product
          </div>
        </div>
        <div className="md:grid md:grid-cols-5 gap-16 p-2  ">
          <div className=""></div>
          {isError ? <p>no internet connectivity</p> : isLoading ? <p>data Loading</p> : featureProducts.map((curElem) => {

            return (
              <Product key={curElem.id} {...curElem} />
            )
          })
          }
        </div>
      </div>
      <Policy />
    </>
  );
};

export default FeatureProduct;
