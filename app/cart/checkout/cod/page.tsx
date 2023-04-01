import OrderSummery from "@/components/Cart/OrderSummery";
import CodCard from "@/components/Orders/CodCard";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-centers items-center bg-slate-100 min-h-[100vh] pt-5">
      <CodCard />
    </div>
  );
};

export default page;
