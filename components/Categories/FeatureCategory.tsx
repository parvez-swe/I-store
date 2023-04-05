import React from "react";
import CategoryCart from "./CategoryCart";
import { MdLaptop } from "react-icons/md";
import { AiOutlineDesktop, AiOutlineMobile } from "react-icons/ai";
import { BsSmartwatch } from "react-icons/bs";
const category = [
  {
    url: "/products/mobile",
    title: "Mobile",
    icon: <AiOutlineMobile />,
  },
  {
    url: "/products/watch",

    title: "Smart Watch",
    icon: <BsSmartwatch />,
  },
  {
    url: "/products/monitor",
    title: "Monitor",
    icon: <AiOutlineDesktop />,
  },
  {
    url: "/products/laptop",
    title: "Laptop",
    icon: <MdLaptop />,
  },
];

const FeatureCategory = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold text-center py-3 text-slate-700">
        Feature Category
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {category.map((cat) => (
          <CategoryCart
            key={cat.title}
            name={cat.title}
            icon={cat.icon}
            url={cat.url}
          />
        ))}
      </div>
    </>
  );
};

export default FeatureCategory;
