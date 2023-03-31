import OrderSummery from "@/components/Cart/OrderSummery";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-centers items-center bg-slate-100 min-h-[100vh] pt-5">
      <div className="bg-white w-fit mx-2  px-5 py-2 mb-5">
        <p>Deliver To: Parvez Musharaf</p>
        <p>Address: Division,District,Upozila,Home Address</p>
        <p>Mobile: 018*****13434</p>
        <p>Email: musharaf@gmail.com</p>
      </div>
      <div>
        <Link
          href="/cart/checkout/success"
          className="text-white px-4 py-1 rounded  bg-green-500 hover:bg-green-600 my-5"
        >
          confirm Order
        </Link>
      </div>
    </div>
  );
};

export default page;
