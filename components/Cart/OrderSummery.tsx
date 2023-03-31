"use client";
import Link from "next/link";
import React, { useState } from "react";

const OrderSummery = () => {
  const [paymentMethod, setPaymentMehtod] = useState(false);

  const gotoPaymentHandler = () => {
    setPaymentMehtod(true);
  };

  const isAuthenticated = true;

  return (
    <div className="bg-white p-5 m-2 min-w-[320px]">
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
      {/* <Link href={`${conbtn ? "/cart/checkout/success" : "/cart/checkout"}`}> */}
      {!paymentMethod && (
        <button
          onClick={gotoPaymentHandler}
          className="bg-orange-600 w-full mt-3 text-white py-2 text-lg hover:bg-orange-500"
        >
          Proceed To Checkout
        </button>
      )}
      {/* </Link> */}
      {paymentMethod && (
        <div>
          <Link href={`${isAuthenticated ? "/cart/checkout/cod" : " /login"} `}>
            <button className="bg-orange-600 w-full mt-3 text-white py-2 text-lg hover:bg-orange-500">
              Cash On Delivery
            </button>
          </Link>

          <Link href={`/cart/checkout/online`}>
            <button className="bg-orange-600 w-full mt-3 text-white py-2 text-lg hover:bg-orange-500">
              Paypal
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderSummery;
