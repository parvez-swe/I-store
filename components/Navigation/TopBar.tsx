"use client";
import React from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "../search/Search";
import DownBar from "./DownBar";
const navItem = [
  { name: "Home", id: 1, url: "/" },
  { name: "All Products", id: 2, url: "/products" },
  { name: "Laptop", id: 2, url: "/laptop" },

  { name: "Mobile", id: 3, url: "" },
  { name: "Desktop", id: 4, url: "" },
  { name: "Blogs", id: 4, url: "" },
];

const TopBar = () => {
  const [showNav, setShowNav] = useState(false);
  const NavToggleHandler = () => {
    setShowNav(!showNav);
  };
  const path = usePathname();
  return (
    <>
      <div className="Navbar z-50 sticky top-0 px-[10px] md:px-[20px] lg:px-[10%] bg-[#081621] flex flex-row justify-between h-16 items-center pl-2">
        <div className="md:px-0 flex-1 flex flex-row ">
          <Link
            className="text-white uppercase text-xl font-bold whitespace-nowrap "
            href="/"
          >
            I Store
          </Link>
          <Search />
        </div>
        <div className="text-black flex flex-row md:relative">
          {/* <ul
            className={`${
              !showNav ? "-translate-x-[100%]" : "translate-x-0"
            } md:translate-x-0 flex flex-col md:flex-row absolute md:relative top-0 p-5 md:p-0 md:top-0 w-[90%] h-[100vh] justify-center2 md:justify-between items-center left-0 bg-[#081621] md:bg-inherit  text-white md:bg-none md:h-fit`}
          >
            {showNav && (
              <MdClose
                onClick={NavToggleHandler}
                className=" md:hidden text-2xl cursor-pointer absolute top-0 right-0"
              />
            )}
            {navItem.map((item) => (
              <li
                key={item.name}
                onClick={NavToggleHandler}
                className={`${
                  item.url === path ? "text-red-500" : ""
                }px-2 uppercase whitespace-nowrap hover:text-slate-300 cursor-pointer`}
              >
                <Link
                  href={item.url}
                  className={`${item.url === path ? "font-bold border-b" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul> */}

          <div className="hidden md:flex flex-row">
            <DownBar />
          </div>

          {/* <Link href="/signup">
            <button
              type="submit"
              className=" mx-2 text-centers text-sm  bg-blue-500 hover:bg-blue-700 text-white md:font-bold py-1 md:py-2 px-1 md:px-4 rounded"
            >
              SignUp
            </button>
          </Link> */}

          <div className="md:hidden">
            {!showNav && (
              <MdMenu
                onClick={NavToggleHandler}
                className="text-2xl text-white cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      <div className=" md:hidden fixed bottom-0 w-[100%] md:w-fit h-14 bg-white flex  justify-between items-center rounded-t-2xl text-2xl z-20 ">
        <DownBar />
      </div>
    </>
  );
};

export default TopBar;
