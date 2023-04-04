import React from "react";
import OrderCart from "./OrderCart";

const orders = [2, 2, 3, 5];

const Orders = ({ isAdmin }: any) => {
  return (
    <div className="bg-white p-2 md:p-10 md:w-3/5 rounded shadow ">
      {orders.map((order) => (
        <OrderCart isAdmin={isAdmin} key={order} />
      ))}
    </div>
  );
};

export default Orders;
