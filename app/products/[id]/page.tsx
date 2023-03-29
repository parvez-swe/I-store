import React from "react";
import ProuductDetails from "@/components/Products/ProductDetails";
import { products } from "@/components/ProductData";

const page = () => {
  return (
    <div>
      <ProuductDetails products={products} />
    </div>
  );
};

export default page;
