import OrderSuccess from "@/components/Cart/successOrder";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-slate-100 ">
      <div className="bg-white px-5 py-2">
        <OrderSuccess orderId={1334555652} />
      </div>
    </div>
  );
};

export default page;
