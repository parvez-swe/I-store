import React from "react";
import OrderCart from "./OrderCart";

const orders = [2, 2, 3, 5];

const Orders = () => {
  return (
    <div className="bg-white p-10 md:w-3/5 rounded ">
      {orders.map((order) => (
        <OrderCart key={order} />
      ))}
    </div>
  );
};

export default Orders;
