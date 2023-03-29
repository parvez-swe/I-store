import React from "react";

import { products } from "../ProductData";
import ProductCart from "./ProductCart";

const AllProducts = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {products.map((product) => (
          <ProductCart
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
