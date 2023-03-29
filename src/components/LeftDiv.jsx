import React from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-1-thumbnail.jpg";
import product3 from "../images/image-product-2.jpg";
import product4 from "../images/image-product-3-thumbnail.jpg";
import product5 from "../images/image-product-4-thumbnail.jpg";

export const LeftDiv = () => {
  return (
    <div className="w-full flex-1 flex flex-col justify-center space-y-6 items-center">
      <img src={product1} alt="" className="object-cover w-[70%] rounded-xl" />
      <div className="flex justify-around items-center w-[70%] mx-auto">
        <img src={product2} alt="" className="w-20 object-cover rounded-lg" />
        <img src={product3} alt="" className="w-20 object-cover rounded-lg" />
        <img src={product4} alt="" className="w-20 object-cover rounded-lg" />
        <img src={product5} alt="" className="w-20 object-cover rounded-lg" />
      </div>
    </div>
  );
};
