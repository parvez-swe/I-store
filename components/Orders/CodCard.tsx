"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import path from "path";
// import { useRouter } from "next/router";

const CodCard = () => {
  const [paymentMethod, setPaymentMehtod] = useState(false);

  const router = useRouter();

  const confirmOrder = () => {
    // path.push("/profile/orders/id");
    router.push("/cart/checkout/success");
  };

  const isAuthenticated = true;

  return (
    <div className="bg-slate-50 shadow p-5 w-full md:w-fit ">
      <h1 className="text-2xl mb-4  ">Order Summary</h1>
      <div className="bg-white w-fit mx-2  px-5 py-2 mb-5">
        <p>Deliver To: Parvez Musharaf</p>
        <p>Address: Division,District,Upozila,Home Address</p>
        <p>Mobile: 018*****13434</p>
        <p>Email: musharaf@gmail.com</p>
      </div>
      <div className="flex justify-between">
        <p className="text-slate-500 mr-4 mb-2 ">Subtotal (2items)</p>{" "}
        <p>৳ 11,55</p>
      </div>
      <div className="flex justify-between">
        <p className="text-slate-500 mr-4 mb-2 ">Shipping Fee</p> <p>৳ 155</p>
      </div>
      <div className="flex justify-between">
        <p className="text-slate-500 mr-4 mb-2 ">Shipping Fee Discount</p>{" "}
        <p>৳ -55</p>
      </div>
      <div className="flex justify-between">
        <p className="">Total</p> <p className="text-orange-500">৳ 1255</p>
      </div>

      <button
        onClick={confirmOrder}
        className="bg-green-500 w-full mt-3 text-white py-2 text-lg hover:bg-orange-500"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default CodCard;
