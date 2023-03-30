"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { BsStar, BsStarFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
// import { ProductData } from "../../../components/products/data";
import Slider from "@/components/Slider/Slider";
import DetailsSlider from "../Slider/DetailsSlider";

const ProuductDetails = ({ products }: any) => {
  return (
    <div className="  px-[10px] md:px-[15px] lg:px-[8vw] pt-10 ">
      <div className="grid grid-cols-1 pb-20 md:grid-cols-2">
        <div className="bg-white mb-10 rounded-b-xl ">
          <div className="w-[100%] flex justify-center">
            <DetailsSlider images={products[0].image} h={350} />
          </div>
        </div>

        {/* Key Feature */}
        <div>
          <div className="px-3 md:ml-10">
            <p className="text-lg font-bold my-2">{products[0].name}</p>
            <div className="flex flex-row justify-between mx-2 my-4">
              <div className="flex ">
                <BsStarFill className="text-[#FF7A00]" />
                <BsStarFill className="text-[#FF7A00]" />
                <BsStarFill className="text-[#FF7A00]" />
                <BsStarFill className="text-[#FF7A00]" />
                <p className="mx-3 text-slate-500">126 review</p>
              </div>
              <p className="text-sm text-green-500">In Stack</p>
            </div>
            <h1 className="text-2xl mb-3 ">key Feature</h1>
            <div>
              {products[0].keyFeature?.map((feature: any) => (
                <li key={feature}>{feature}</li>
              ))}
            </div>
            <h1 className="text-xl md:text-2xl font-bold my-5 text-[#FF7A00] ">
              ৳10000.58
              <span className="text-slate-500 line-through ml-3">
                ৳15000.25
              </span>
            </h1>

            <div>
              <button className=" mr-2 bg-[#F37613] hover:bg-[#cb6716] transition-all duration-500 my-2 text-center self-center px-5 py-1 text-white w-fit bottom-0">
                Add to Cart
              </button>
              <button className=" ml-2 bg-green-600  hover:bg-green-700 transition-all duration-500 my-2 text-center self-center px-5 py-1 text-white w-fit bottom-0">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* main section done */}
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
