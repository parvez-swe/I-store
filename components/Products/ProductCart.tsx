"use client";

import Link from "next/link";
import React from "react";

import { useState } from "react";

const ProductCart = ({ name, id, price, image, description }: any) => {
  return (
    <div className="flex flex-col font-sans m-[8px] md:m-5 px-1 shadow-sm hover:shadow-lg bg-gray-50 rounded-lg min-w-[200px]n max-w-[220px]">
      <Link href={`/products/${id}`}>
        <div className="flex overflow-hidden justify-center items-center w-[100%] relativ">
          <img
            src={image[0]}
            alt=""
            className=" transition-all duration-500  absolut inset-0 w-full h-full object-cover hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex justify-between">
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

        <div className="flex flex-col justify-starts">
          <h1 className="text-sm md:text-lg font-semibold text-slate-900">
            {name}
          </h1>
          <p className="text-gray-500 mb-1 line-clamp-2">{description}</p>
        </div>
      </Link>
      <button className="bg-[#F37613] text-white">Add to Cart</button>
    </div>
  );
};

export default ProductCart;
