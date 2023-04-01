import OrderSuccess from "@/components/Cart/successOrder";
import OverlayCard from "@/components/GeneralUI/OverlayCard";
import Link from "next/link";
import React from "react";

const page = () => {
  const id = "324344384";
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-slate-100 ">
      <OverlayCard
        success={true}
        heading="Order Success"
        description={`Thanks for shopping. Your Order id:${id}`}
        buttonName="Go To DashBoard"
        redirectUrl={`/profile/orders/${id}`}
      />
    </div>
  );
};

export default page;
