"use client";
import Link from "next/link";
import React, { useState } from "react";

const OrderSummery2 = () => {
  const [paymentMethod, setPaymentMehtod] = useState(false);

  const gotoPaymentHandler = () => {
    setPaymentMehtod(true);
  };

  const isAuthenticated = true;

  return (
    <div className="bg-slate-50 shadow p-5 m-2 min-w-[320px]">
      <h1 className="text-2xl ">Order Summary</h1>
      <div className="flex justify-between">
        <p className="text-slate-500">Subtotal (2items)</p> <p>৳ 11,55</p>
      </div>
      <div className="flex justify-between">
        <p className="text-slate-500">Shipping Fee</p> <p>৳ 155</p>
      </div>
      <div className="flex justify-between">
        <p className="text-slate-500">Shipping Fee Discount</p> <p>৳ -55</p>
      </div>
      <div className="flex justify-between">
        <p className="">Total</p> <p className="text-orange-500">৳ 1255</p>
      </div>

      <button className="bg-green-500 w-full mt-3 text-white py-2 text-lg hover:bg-orange-500">
        Paid
      </button>
    </div>
  );
};

export default OrderSummery2;
