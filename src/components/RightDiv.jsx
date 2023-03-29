import React from "react";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";

export const RightDiv = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col w-[85%] mx-auto">
        <h3 className="uppercase tracking-[1.5px] font-medium text-orange-600">
          sneakers company
        </h3>
        <h1 className="text-5xl font-bold mt-1 capitalize">
          fall limited additions sneakers.
        </h1>
        <p className="text-gray-400 capitalize tracking-wide text-base mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis delectus corrupti, nihil quos eum totam nulla voluptate
          repellat vitae. Quod aspernatur temporibus nisi nam aperiam ipsum id
          maiores accusantium.
        </p>
        <div className="flex justify-evenly items-center w-[40%]  mt-3">
          <h1 className="text-3xl font-bold">$ 125.00</h1>
          <span className="bg-orange-500/20 text-orange-500 font-bold text-md p-1 rounded-lg">
            50%
          </span>
        </div>
        <span className="text-gray-400 font-bold text-md m-2">$250.00</span>
        <div className="w-full flex space-x-2 justify-center items-center">
          <div className="flex bg-gray-100 py-3 rounded-md justify-around items-center flex-1">
            <button className="">
              <img src={minus} alt="" />
            </button>
            <span>0</span>
            <button>
              <img src={plus} alt="" />
            </button>
          </div>
          <div className=" flex-1">
            <button className=" flex justify-evenly items-center bg-orange-600 text-white text-2xl tracking-wide rounded py-3 w-full h-full">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fill-rule="nonzero"
                />
              </svg>{" "}
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
