"use client";
import { useState } from "react";

const products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
  { name: "Product 4", price: 40 },
  { name: "Product 5", price: 50 },
  { name: "Product 6", price: 60 },
  { name: "Product 7", price: 70 },
  { name: "Product 8", price: 80 },
  { name: "Product 9", price: 90 },
  { name: "Product 10", price: 100 },
];

const PriceRangeFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <div className="flex flex-col space-y-4 bg-white  rounded-lg my-2 p-3">
      <div className="flex space-x-4">
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="border border-gray-300 px-2 py-1 rounded-md w-24"
        />
      </div>
      <div className="flex space-x-4">
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="border border-gray-300 px-2 py-1 rounded-md w-24"
        />
      </div>
      {/* <div>
        <h2 className="text-xl font-bold">Filtered Products:</h2>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.name}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default PriceRangeFilter;
