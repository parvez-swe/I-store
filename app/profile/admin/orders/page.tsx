// import OrdersTable from "@/components/Orders/InfoTable";
import OrdersTable from "@/components/Amin/OrdersTable";
import React from "react";

const ordersData = [
  {
    id: 1,
    customer: "John Doe",
    total: 100,
    payment: "cod",
    status: "pending",
  },
  {
    id: 2,
    customer: "Jane Smith",
    total: 50,
    payment: "paid",
    status: "completed",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    total: 75,
    payment: "cod",
    status: "processing",
  },
  {
    id: 4,
    customer: "Alice Brown",
    total: 200,
    payment: "paid",
    status: "completed",
  },
  {
    id: 5,
    customer: "Chris Lee",
    total: 150,
    payment: "paid",
    status: "processing",
  },
];

const page = () => {
  return (
    <div className="bg-white mx-2">
      <OrdersTable ordersData={ordersData} />
    </div>
  );
};

export default page;
