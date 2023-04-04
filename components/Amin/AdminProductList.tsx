"use client";
import { useState } from "react";
// import { Product } from "./types";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  //   quantity: number;
};

type ProductListProps = {
  products: Product[];
};

const AdminProductList = ({ products }: ProductListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} onClick={() => handleProductClick(product)}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProduct && (
        <div>
          <h3>Edit Product {selectedProduct.id}</h3>
          <form>
            <label>
              Name:
              <input type="text" defaultValue={selectedProduct.name} />
            </label>
            <label>
              Description:
              <input type="text" defaultValue={selectedProduct.description} />
            </label>
            <label>
              Price:
              <input type="number" defaultValue={selectedProduct.price} />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminProductList;
