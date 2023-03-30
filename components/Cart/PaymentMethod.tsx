"use client";
import Link from "next/link";
import React, { useState } from "react";

const PaymentMethod: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div>
      <h2>Choose a Payment Method</h2>
      <form>
        <div>
          <input
            type="radio"
            id="cod"
            name="payment-method"
            value="cod "
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
        <div>
          <input
            type="radio"
            id="paypal"
            name="payment-method"
            value="paypal"
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div>
          <input
            type="radio"
            id="bitcoin"
            name="payment-method"
            value="bitcoin"
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="bitcoin">Bitcoin</label>
        </div>
      </form>

      {paymentMethod && (
        <div className="mb-2">
          You have chosen
          <span className="text-xl font-bold"> {paymentMethod} </span> as your
          payment method.
        </div>
      )}
      <Link
        href={`cart/checkout/${paymentMethod}`}
        className="bg-green-500 text-white px-3 py-1 text-center  my-2"
      >
        Submit
      </Link>
    </div>
  );
};

export default PaymentMethod;
