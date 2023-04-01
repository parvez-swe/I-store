import React from "react";
import CartItem from "./CartItems";
import { ProductData } from "./data";
import OrderSummery from "./OrderSummery";

const Cart = () => {
  return (
    <div className="bg-gray-100 flex flex-row flex-wrap justify-center px-[10px] md:px-[15px] lg:px-[8vw] pb-10">
      <div className="flex-1">
        {ProductData.map((item) => (
          <CartItem key={item.id} />
        ))}
      </div>
      <div>
        <OrderSummery />
      </div>
    </div>
  );
};

export default Cart;
