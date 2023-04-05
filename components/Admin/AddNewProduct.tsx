"use client";
import { useState } from "react";

interface Product {
  name: string;
  keyFeatures: string[];
  features: string[];
  description: string;
  price: number;
  quantity: number;
  images: string[];
}

const AddNewProduct = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    keyFeatures: [],
    features: [],
    description: "",
    price: 0,
    quantity: 0,
    images: [],
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setProduct({ ...product, images: filesArray });
    }
  };

  const handleKeyFeaturesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const keyFeatures = event.target.value.split(",");
    setProduct({ ...product, keyFeatures });
  };

  const handleFeaturesChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const features = event.target.value.split("\n");
    setProduct({ ...product, features });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(product);
    // add code to submit product data to server
  };

  return (
    <div className="bg-white rounded w-full">
      <form onSubmit={handleSubmit} className="px-2 md:px-5 py-4 w-full">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="outline-none bg-slate-100 px-2  py-1 rounded mb-2"
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="keyFeatures">Key Features (comma-separated)</label>
          <input
            className="outline-none bg-slate-100 px-2  py-1 rounded mb-2"
            type="text"
            name="keyFeatures"
            onChange={handleKeyFeaturesChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="features">Features (one per line)</label>
          <textarea
            name="features"
            onChange={handleFeaturesChange}
            className="outline-none bg-slate-100 px-2  py-1 rounded mb-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            className="outline-none bg-slate-100 px-2  py-1 rounded mb-2"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Price</label>
          <input
            className="outline-none bg-slate-100 px-2  py-1 rounded mb-2"
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity">Quantity</label>
          <input
            className="outline-none bg-slate-100 px-2  py-1 rounded mb-2"
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="images">Images</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            className="border border-slate-500-500 my-3 px-5 py-2 rounded hover:bg-green-500 hover:border-none hover:text-white text-center w-fit transition-all duration-300 "
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
