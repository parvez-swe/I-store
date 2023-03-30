"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 150 },
  { id: 4, name: "Product 4", price: 50 },
];

const SortRadio = ({ onChange }) => {
  const [sortBy, setSortBy] = useState("price-low-to-high");

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
    onChange(value);
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="price-low-to-high">
        <input
          type="radio"
          id="price-low-to-high"
          name="sort-by-price"
          value="price-low-to-high"
          checked={sortBy === "price-low-to-high"}
          onChange={handleSortChange}
        />
        Price Low to High
      </label>
      <label htmlFor="price-high-to-low">
        <input
          type="radio"
          id="price-high-to-low"
          name="sort-by-price"
          value="price-high-to-low"
          checked={sortBy === "price-high-to-low"}
          onChange={handleSortChange}
        />
        Price High to Low
      </label>
      <label htmlFor="name-a-to-z">
        <input
          type="radio"
          id="name-a-to-z"
          name="sort-by-name"
          value="name-a-to-z"
          checked={sortBy === "name-a-to-z"}
          onChange={handleSortChange}
        />
        Name A to Z
      </label>
      <label htmlFor="name-z-to-a">
        <input
          type="radio"
          id="name-z-to-a"
          name="sort-by-name"
          value="name-z-to-a"
          checked={sortBy === "name-z-to-a"}
          onChange={handleSortChange}
        />
        Name Z to A
      </label>
    </div>
  );
};

// const ProductList = ({ products }) => {
//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>{product.name}</li>
//       ))}
//     </ul>
//   );
// };

const Sort = () => {
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSortChange = (sortBy) => {
    let sortedProducts = [...products];

    switch (sortBy) {
      case "price-low-to-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-a-to-z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-to-a":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setSortedProducts(sortedProducts);
  };

  return (
    <div className=" bg-white  rounded-lg my-2 p-3">
      <SortRadio onChange={handleSortChange} />
      {/* <ProductList products={sortedProducts} /> */}
    </div>
  );
};

export default Sort;
