import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import OrderSummery2 from "./OrderSummery2";

const OrderStatus = () => {
  return (
    <div className=" flex flex-col lg:flex-row flex-wrap items-center justify-between">
      <div className="flex flex-col  md:flex-row [&>*]:m-3 ">
        <div className="flex flex-col text-center items-center text-slate-800 text:text-xl md:text-2xl">
          <MdPayment className="text-3xl" />
          <p>Payment</p>
          <AiFillCheckSquare className="text-green-500" />
        </div>
        <div className="flex flex-col text-center items-center text-slate-500 text:text-xl md:text-2xl">
          <MdPayment className="text-3xl" />
          <p>Preparing</p>
          <AiFillCheckSquare className="text-green-500 hidden" />
        </div>
        <div className="flex flex-col text-center items-center text-slate-500 text:text-xl md:text-2xl">
          <MdPayment className="text-3xl" />
          <p>On the way</p>
          <AiFillCheckSquare className="text-green-500 hidden" />
        </div>
        <div className="flex flex-col text-center items-center text-slate-500 text:text-xl md:text-2xl">
          <MdPayment className="text-3xl" />
          <p>Delivered</p>
          <AiFillCheckSquare className="text-green-500  hidden" />
        </div>
      </div>
      {/* <div className="bg-green-400 h-[320px] w-[320px]"></div> */}
      <OrderSummery2 />
    </div>
  );
};

export default OrderStatus;
