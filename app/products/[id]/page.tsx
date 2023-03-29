"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { BsStar, BsStarFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
// import { ProductData } from "../../../components/products/data";
import { products } from "@/components/ProductData";
import Slider from "@/components/Slider/Slider";
const productData = {
  image: "/product/prod2.webp",
  name: "Pant",
  description: "abcd",
  price: 13,
  quantity: 5,
};

const ProuductDetails = () => {
  return (
    <div className="  px-[10px] md:px-[15px] lg:px-[8vw] ">
      <div className="grid grid-cols-1 pb-20 md:grid-cols-2">
        <div className="bg-white mb-10 rounded-b-xl ">
          <div className="w-[100%] flex justify-center">
            <Slider images={products[0].image} />
          </div>
          <div className="px-3">
            <div className="flex flex-row justify-between mx-2">
              <div className="flex ">
                <BsStarFill className="text-[#FF7A00]" />
                <BsStarFill className="text-[#FF7A00]" />
                <BsStarFill className="text-[#FF7A00]" />
                <BsStarFill className="text-[#FF7A00]" />
                <p className="mx-3 text-slate-500">126 review</p>
              </div>
              <p className="text-sm text-green-500">In Stack</p>
            </div>
            <p className="text-lg font-bold">{products[0].name}</p>
            <h1 className="text-xl font-bold my-5">
              $10.58 <span className="text-slate-500 line-through"> $3.25</span>
            </h1>
          </div>
        </div>

        {/* related product */}
        <div>
          <h1 className="text-xl mt-5 pt-5 pl-3 bg-white rounded-t-2xl">
            Related Product
          </h1>
          {/* <RelatedProduct /> */}
          {/* <MultiCarousel /> */}
        </div>
      </div>
      <div>
        <div className="flex flex-col bg-white rounded-2xl px-3 py-4 mb-5">
          <h1 className="text-xl">Item Details</h1>
          <p className="text-slate-500">{products[0].description}</p>
          <p>From Bangladesh</p>
        </div>
        <div className="flex flex-col bg-white rounded-2xl px-3 py-4 mb-10">
          <div className="">
            <h1 className="mb-5">Review</h1>
            <p>view all</p>
          </div>
          <p>Ashraful Islam</p>
          <div className="flex justify-between">
            <div className="flex text-[#FF7A00]">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <p>July 24, 2022</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <p className="text-sm text-slate-500">
            535 peple found this review usefull
          </p>
          <div className="flex justify-between text-sm">
            <p className=" border-b-2 border-slate-700 text-slate-700">
              comment
            </p>
            <div className="text-slate-700 flex items-center">
              Helpfull <AiOutlineLike className="inline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProuductDetails;
