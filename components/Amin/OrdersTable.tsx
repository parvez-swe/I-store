"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  customer: string;
  total: number;
  payment: string;
  status: string;
};

const OrdersTable = ({ ordersData }: any) => {
  const [orders, setOrders] = useState<Order[]>(ordersData);

  useEffect(() => {
    // fetch orders from API and set to state
  }, []);

  return (
    <div className="overflow-x-auto ">
      <table className="table w-full text-sm lg:text-lg">
        <thead>
          <tr>
            <th className="border-b p-2">ID</th>
            <th className="border-b p-2">Customer</th>
            <th className="border-b p-2">Total</th>
            <th className="border-b p-2">Payment</th>
            <th className="border-b p-2">Status</th>
            <th className="border-b p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border-b p-2">{order.id}</td>
              <td className="border-b p-2">{order.customer}</td>
              <td className="border-b p-2">{order.total}</td>
              <td className="border-b p-2">{order.payment}</td>
              <td className="border-b p-2">{order.status}</td>
              <td className="border-b p-2">
                <button className="bg-green-500 text-white py-1 px-2 rounded">
                  Next
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
