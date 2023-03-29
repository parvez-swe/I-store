"use client";
import React from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItem = [
  { name: "Home", id: 1, url: "/" },
  { name: "Products", id: 2, url: "/products" },
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
    <div className="Navbar z-10 sticky top-0 px-[10px] md:px-[20px] lg:px-[10%] bg-[#081621] flex flex-row justify-between h-16 items-center pl-2">
      <div className="text-xl font-bold md:px-0  text-white uppercase">
        <Link href="/">I Store</Link>
      </div>
      <div className="text-black">
        <ul
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
              }px-2 uppercase hover:text-slate-300 cursor-pointer`}
            >
              <Link
                href={item.url}
                className={`${item.url === path ? "font-bold border-b" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
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
  );
};

export default TopBar;
