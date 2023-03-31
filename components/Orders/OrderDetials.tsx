import React from "react";
import OrdersTable from "./InfoTable";
import OrderStatus from "./OrderStatus";

const OrderDetials = () => {
  return (
    <div className="p-5">
      <OrdersTable
        orders={[
          {
            id: "001",
            customerName: "John Doe",
            address: "123 Main St, Anytown USA",
            total: 45.99,
          },
        ]}
      />
      <div className="my-10">
        <OrderStatus />
      </div>
    </div>
  );
};

export default OrderDetials;
