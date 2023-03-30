"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ChoosePaymentMethodPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const router = useRouter();

  // const handleClick = () => {
  //   router.push("/new-page");
  // };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Payment method selected: ${paymentMethod}`);
    router.push("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>
        <div className="flex items-center mb-4">
          <input
            className="mr-4"
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            onChange={handlePaymentMethodChange}
            checked={paymentMethod === "cod"}
          />
          <label htmlFor="cod">Cash on Delivery (COD)</label>
        </div>
        <div className="flex items-center">
          <input
            className="mr-4"
            type="radio"
            id="onlinePayment"
            name="paymentMethod"
            value="onlinePayment"
            onChange={handlePaymentMethodChange}
            checked={paymentMethod === "onlinePayment"}
          />
          <label htmlFor="onlinePayment">Online Payment</label>
        </div>
        <button
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          // disabled={!paymentMethod}
        >
          Continue to Checkout
        </button>
      </form>
    </div>
  );
};

export default ChoosePaymentMethodPage;
