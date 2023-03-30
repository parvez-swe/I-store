"use client";
import React from "react";
import Image from "next/image";
const CartItem = ({ id, quantity }) => {
  return (
    <div className="flex justify-between items-center bg-white m-2 p-2 rounded relative min-w-[390px]">
      <button
        // onClick={() => removeFromCart(id)}
        className=" absolute top-0 right-1 text-red-600"
      >
        X
      </button>
      <div className="flex items-center justify-center">
        <Image
          className="inline-block"
          src="/product/prod1.png"
          height={50}
          width={50}
          alt="product image"
        />
        <div className="inline-block text-sm mx-2">
          <h1 className=" text-slate-900 font-bold">Best Product</h1>
          <h1 className="">Color: blue</h1>
          <h1 className="">Size: M</h1>
          <div className="">
            Quantiy:+5
            <button
              onClick={() => {
                decreaseCartQuantity(id);
              }}
              className=" bg-red-600 text-white mx-1 px-2 text-lg"
            >
              -
            </button>
            <button
              onClick={() => {
                increamentCartQuantity(id);
              }}
              className=" bg-green-600 text-white mx-1 px-2 text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="prizeAndButton font-bold text-[#FF7A00] text-xl ">
        ৳ {15 * 2}
      </div>
    </div>
  );
};

export default CartItem;
