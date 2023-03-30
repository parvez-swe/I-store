import React from "react";
import AllProducts from "@/components/Products/AllProducts";
import Filter from "@/components/Filter/Filter";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-[68vh] bg-[#F2F4F8]  px-[10px] md:px-[20px] lg:px-[10%]">
      <div className="filter pt-4">
        <Filter />
      </div>
      <AllProducts />
    </div>
  );
};

export default page;
