import OrderSummery from "@/components/Cart/OrderSummery";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-centers items-center bg-slate-100 min-h-[100vh] pt-5">
      <div className="bg-white w-fit mx-2  px-5 py-2">
        <p>Deliver To: Parvez Musharaf</p>
        <p>Address: Division,District,Upozila,Home Address</p>
        <p>Mobile: 018*****13434</p>
        <p>Email: musharaf@gmail.com</p>
      </div>
      <div>
        <OrderSummery conbtn={true} />
      </div>
    </div>
  );
};

export default page;
