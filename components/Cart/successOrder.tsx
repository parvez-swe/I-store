import React from "react";

interface OrderSuccessProps {
  orderId: number;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ orderId }) => {
  return (
    <div>
      <h2>Your order has been placed!</h2>
      <p>Order ID: {orderId}</p>
      <p>Thank you for shopping with us!</p>
    </div>
  );
};

export default OrderSuccess;
