import React from "react";

interface Order {
  id: string;
  customerName: string;
  address: string;
  total: number;
}

interface Props {
  orders: Order[];
}

const OrdersTable: React.FC<Props> = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {orders.map((order, index) => (
            <tr key={order.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.customerName}</td>
              <td className="border px-4 py-2">{order.address}</td>
              <td className="border px-4 py-2">${order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
