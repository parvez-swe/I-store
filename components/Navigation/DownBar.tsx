"use client";
import React from "react";
import Link from "next/link";
import { BiHome, BiCategory, BiHeart, BiLogInCircle } from "react-icons/bi";
import { MdOutlineAccountCircle, MdOutlineLocalOffer } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { usePathname } from "next/navigation";

const DownBar = () => {
  const isAuthenticated = true;
  const cartQuantity = 15;
  const path = usePathname();
  const urls = "/";
  const orls = "/offer";
  return (
    // <div className="fixed bottom-0 w-[100%] h-14 bg-white flex  justify-between items-center rounded-t-2xl text-2xl z-20 ">
    <>
      <Link
        href="/"
        className={`${
          path === "/" ? "text-[#FF7A00] " : "text-slate-500"
        } mx-2  md:text-${
          path === "/" ? "[#FF7A00]" : "white"
        } flex flex-col justify-center items-center active:text-[#FF7A00] `}
      >
        <BiHome />
        <p className="text-sm ">Home</p>
      </Link>

      <Link
        href="/offer"
        className={` ${
          path === "/offer" ? "text-[#FF7A00] " : "text-slate-500"
        } mx-2 md:text-${
          path === "/offer" ? "[#FF7A00]" : "white"
        } flex flex-col justify-center items-center  `}
      >
        <MdOutlineLocalOffer /> <p className="text-sm ">Offer</p>
      </Link>

      <Link
        href="profile/liked"
        className={`${
          path === "/profile/liked" ? " text-[#FF7A00] " : "text-slate-500"
        } mx-2  md:text-${
          path === "/profile/liked" ? "[#FF7A00]" : "white"
        } flex flex-col justify-center items-center  `}
      >
        <BiHeart /> <p className="text-sm ">Liked</p>
      </Link>

      <Link
        href={`${isAuthenticated ? "/profile" : "/login"}`}
        className={`${
          path === "/profile"
            ? " text-[#FF7A00] md:text-[#FF7A00]"
            : "text-slate-500 md:text-white"
        }  mx-2  md:text-${
          path === "/profile" ? "[#FF7A00]" : "white"
        } flex flex-col justify-center items-center  `}
      >
        {isAuthenticated ? <MdOutlineAccountCircle /> : <BiLogInCircle />}{" "}
        <p className="text-sm ">{isAuthenticated ? "Account" : "Login"}</p>
      </Link>

      <Link
        href="/cart"
        className={`flex items-center pl-2 pr-1 py-1 text-white  md:text-${
          path === "/cart" ? "[#FF7A00]" : "white"
        } rounded-l-3xl -translate-y-4 bg-gradient-to-r from-[#FFB800] to-[#FF7A00] md:bg-none md:translate-y-0`}
      >
        <BsCart3 className={`md:text-2xl`} />
        <div className="ml-1 px-[2px]">
          <h1 className="text-sm">$55{/*cartQuantity*/}</h1>
          <p className="text-sm ">{cartQuantity} items</p>
        </div>
      </Link>
    </>
  );
};

export default DownBar;
