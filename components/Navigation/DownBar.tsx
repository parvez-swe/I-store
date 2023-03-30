"use client";
import React from "react";
import Link from "next/link";
import { BiHome, BiCategory, BiHeart, BiLogInCircle } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";

const DownBar = () => {
  const isAuthenticated = true;
  const cartQuantity = 15;

  return (
    // <div className="fixed bottom-0 w-[100%] h-14 bg-white flex  justify-between items-center rounded-t-2xl text-2xl z-20 ">
    <>
      <Link
        href="/"
        className={`mx-2 text-slate-500 md:text-white flex flex-col justify-center items-center active:text-[#FF7A00] `}
      >
        <BiHome />
        <p className="text-sm ">Home</p>
      </Link>

      <Link
        href="#"
        className="mx-2 text-slate-500 md:text-white flex flex-col justify-center items-center  "
      >
        <BiCategory /> <p className="text-sm ">Category</p>
      </Link>

      <Link
        href=""
        className="mx-2 text-slate-500 md:text-white flex flex-col justify-center items-center  "
      >
        <BiHeart /> <p className="text-sm ">Liked</p>
      </Link>

      <Link
        href={`${isAuthenticated ? "/profile" : "/login"}`}
        className="mx-2 text-slate-500 md:text-white flex flex-col justify-center items-center  "
      >
        {isAuthenticated ? <MdOutlineAccountCircle /> : <BiLogInCircle />}{" "}
        <p className="text-sm ">{isAuthenticated ? "Account" : "Login"}</p>
      </Link>

      <Link
        href="/cart"
        className="flex items-center pl-2 pr-1 py-1 text-white rounded-l-3xl -translate-y-4 bg-gradient-to-r from-[#FFB800] to-[#FF7A00] md:bg-none md:translate-y-0"
      >
        <BsCart3 />
        <div className="ml-1 px-[2px]">
          <h1 className="text-sm">$55{/*cartQuantity*/}</h1>
          <p className="text-sm text-slate-100">{cartQuantity} items</p>
        </div>
      </Link>
    </>
  );
};

export default DownBar;
