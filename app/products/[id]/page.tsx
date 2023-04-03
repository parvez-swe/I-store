import React from "react";
import ProuductDetails from "@/components/Products/ProductDetails";
import { products } from "@/components/ProductData";
// import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  products: Product[];
}

const page = ({ params }: any) => {
  const id = params.id;
  // const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  return (
    <div className="">
      <ProuductDetails products={products} id={id} />
    </div>
  );
};

export default page;
