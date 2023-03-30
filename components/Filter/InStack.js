"use client";
import { useState } from "react";
import React from "react";

const InStack = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center bg-white rounded-lg my-2 p-3">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={isChecked}
        onChange={handleCheck}
      />
      <span className="ml-2 text-gray-700">In Stock</span>
    </div>
  );
};

export default InStack;
