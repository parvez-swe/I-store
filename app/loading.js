import React from "react";
import { FaSpinner } from "react-icons/fa";
const loading = () => {
  return (
    <div className="flex items-center justify-center">
      <FaSpinner className="animate-spin h-8 w-8 text-gray-500" />
      <span className="ml-2">Loading...</span>
    </div>
  );
};

export default loading;
