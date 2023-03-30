import OrderSummery from "@/components/Cart/OrderSummery";
import PaymentMethod from "@/components/Cart/PaymentMethod";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-centers items-center bg-slate-100 min-h-[100vh] pt-5">
      <div className="bg-white my-5 px-8 py-3">
        <PaymentMethod />
      </div>
    </div>
  );
};

export default page;
