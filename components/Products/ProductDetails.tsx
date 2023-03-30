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
    <div className="flex flex-col">
      <div className="  px-[10px] md:px-[15px] lg:px-[8vw] pt-10 mb-10 ">
        <div className=" grid grid-cols-1 pb-20 md:grid-cols-2">
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
      </div>
      {/* main section done */}

      <div className="bg-slate-100">
        <div className="bg-white my-10 p-5 mx-[10px] md:mx-[15px] lg:mx-[8vw] rounded-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  Specification
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">Model</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  Nextbook XE2
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">
                  Processor
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  Intel Core i7-1185G7 4 Cores 8 Threads
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">Memory</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  16 GB DDR4-3200 MHz
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">Storage</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  1 TB SSD NVMe PCIe
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">Graphics</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  NVIDIA GeForce RTX 3060 Max-Q 6GB GDDR6
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">Display</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  15.6-inch Full HD IPS 1920 x 1080, 144Hz Refresh Rate, 100%
                  sRGB
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">Ports</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  1 x Thunderbolt 4, 3 x USB 3.2 Gen 1 Type-A, 1 x HDMI 2.0, 1 x
                  Ethernet, 1 x Audio Jack Combo
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">
                  Operating System
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  Windows 10 Home
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col  rounded-sm bg-white my-10 p-5 mx-[10px] md:mx-[15px] lg:mx-[8vw]  mt-10">
          <h1 className="text-xl">Item Details</h1>
          <p className="text-slate-500">{products[0].description}</p>
          <p>From Bangladesh</p>
        </div>

        <div className="flex flex-col bg-white my-10 p-5 mx-[10px] md:mx-[15px] lg:mx-[8vw] rounded-sm mb-10">
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
