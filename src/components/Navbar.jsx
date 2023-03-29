import React from "react";
import cartIcon from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";

export const Navbar = () => {
  return (
    <>
      <div className="w-full py-3">
        <div className=" w-[85%] mx-auto flex justify-between items-center  border border-b-2 border-r-0 border-t-0 border-l-0">
          <div className="flex flex-1 items-center justify-center py-5">
            <h1 className="text-4xl font-bold ">sneakers</h1>
            <ul className="flex ml-2 items-center">
              <li className="px-2">
                <a className="text-gray-500  capitalize tracking-wide" href="#">
                  collection
                </a>
              </li>
              <li className="px-2">
                <a href="#" className="text-gray-500  capitalize tracking-wide">
                  Mens
                </a>
              </li>
              <li className="px-2">
                <a href="#" className="text-gray-500  capitalize tracking-wide">
                  womens
                </a>
              </li>
              <li className="px-2">
                <a href="#" className="text-gray-500  capitalize tracking-wide">
                  about
                </a>
              </li>
              <li className="px-2">
                <a href="#" className="text-gray-500  capitalize tracking-wide">
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center space-x-8 justify-end text-end">
            <img src={cartIcon} className="cursor-pointer" />
            <img src={Avatar} className="h-12 w-12 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};
