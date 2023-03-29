"use client";

import Link from "next/link";
import React from "react";

import { useState } from "react";

const ProductCart = ({ name, id, price, image, description }: any) => {
  return (
    <div className="flex flex-col  m-[8px] md:m-5 font-sans shadow-sm hover:shadow-lg bg-gray-50 rounded-lg min-w-[200px]n max-w-[220px] overflow-hidden">
      <Link href={`/products/${id}`}>
        <div className="flex overflow-hidden justify-center items-center w-[100%] relativ">
          <img
            src={image[0]}
            alt=""
            className=" transition-all duration-500  absolut inset-0 w-full h-full object-cover hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex justify-between px-1">
          <div>
            <div className="w-full flex-none text-sm font-medium text-green-700 mt-2">
              In stock
            </div>
          </div>
          <div>
            <div className="text-sm md:text-lg font-semibold text-slate-500">
              $110.00
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-starts px-1">
          <h1 className="text-sm md:text-lg font-semibol text-slate-900 hover:underline line-clamp-3 ">
            {name}
          </h1>
          <p className="text-gray-500 mb-1 line-clamp-2">{description}</p>
        </div>
      </Link>
      <button className=" bg-[#F37613] my-2 text-center self-center px-5 py-1 text-white w-fit bottom-0">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCart;
