import React from "react";
import OrderSuccess from "@/components/Cart/successOrder";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaProcedures } from "react-icons/fa";
import Link from "next/link";

const OrderCart = () => {
  return (
    <div className="flex justify-between min-w-[330px] px-5 py-3 bg-slate-100 my-3 rounded hover:shadow-lg transition-all duration-500 cursor-pointer">
      <Link href="/profile/orders/id" className="flex flex-row ">
        <p className="mr-5">৳ 500</p>
        <p className=" w-[120px]  line-clamp-1">
          id:1slerifsdfererlkssfeirj dfieor e
        </p>
      </Link>
      <div className="flex flex-row [&>*]:mx-1 [&>*]:text-slate-600 ">
        <MdDelete className="hover:text-slate-900" />
        <MdEdit className="hover:text-slate-900" />
        <FaProcedures className="hover:text-slate-900" />
      </div>
    </div>
  );
};

export default OrderCart;
