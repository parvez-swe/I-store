import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLaptop } from "react-icons/md";

const CategoryCart = ({ name, icon, url }: any) => {
  return (
    <Link
      href={`${url}`}
      className="bg-white w-[150px] mx-1 mb-5 py-3 px-1 rounded-lg flex flex-col  justify-center items-center cursor-pointer"
    >
      <div className="text-5xl text-slate-700 ">{icon}</div>
      <h1>{name}</h1>
    </Link>
  );
};

export default CategoryCart;
