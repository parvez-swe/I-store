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
            <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} onClick={() => handleProductClick(product)}>
              <td className="text-sm font-medium text-gray-900 px-2 md:px-6 py-3 border-b hover:bg-slate-50">
                {product.id}
              </td>
              <td className="text-sm font-medium text-gray-900 px-2 md:px-6 py-3 border-b hover:bg-slate-50">
                {product.name}
              </td>
              <td className="text-sm font-medium text-gray-900 px-2 md:px-6 py-3 border-b hover:bg-slate-50">
                {product.description}
              </td>
              <td className="text-sm font-medium text-gray-900 px-2 md:px-6 py-3 border-b hover:bg-slate-50">
                ${product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {selectedProduct && (
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
      )} */}
    </div>
  );
};

export default AdminProductList;
