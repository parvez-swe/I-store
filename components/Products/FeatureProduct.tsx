import Link from "next/link";
import React from "react";

import ProductCart from "./ProductCart";
import { products } from "../ProductData";

const FeatureProduct = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className=" grid grid-cols-2 place-items-center md:flex flex-row flex-wrap justify-center">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
      <Link
        href="/products"
        className="bg-green-500 text-white px-3 py-1 rounded-sm  my-5 self-center"
      >
        See All Products
      </Link>
    </div>
  );
};

export default FeatureProduct;
