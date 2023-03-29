import FeatureCategory from "@/components/Categories/FeatureCategory";
import FeatureProduct from "@/components/Products/FeatureProduct";
import Slider from "@/components/Slider/Slider";
import React from "react";

const images = ["/slides/1.webp", "/slides/2.webp", "/slides/3.webp"];

const page = () => {
  return (
    <div className="min-h-[68vh] bg-[#F2F4F8]  px-[10px] md:px-[20px] lg:px-[10%]">
      <Slider images={images} autoplay={3000} />
      <FeatureCategory />
      <FeatureProduct />
    </div>
  );
};

export default page;
