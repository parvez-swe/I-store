import AddNewProduct from "@/components/Admin/AddNewProduct";
import React from "react";

const page = () => {
  return (
    <div className="w-full md:w-3/5">
      <h1 className="text-center my-2">Add Product</h1>
      <AddNewProduct />
    </div>
  );
};

export default page;
