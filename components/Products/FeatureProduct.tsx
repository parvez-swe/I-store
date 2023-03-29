import React from "react";

import { products } from "../ProductData";
import ProductCart from "./ProductCart";

const FeatureProduct = () => {
  return (
    <>
      <div>
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

export default FeatureProduct;
