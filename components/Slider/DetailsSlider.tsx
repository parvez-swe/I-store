"use client";
import React, { useState, useEffect } from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { RxDotFilled } from "react-icons/rx";

type SliderProps = {
  images: string[];
  autoplay?: number;
  h?: number;
};

const DetailsSlider = ({ images, autoplay, h }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoplay) {
      interval = setInterval(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, autoplay);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex, images.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;

    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;

    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className={`max-w-[1400px] h-[250px] md:h-[480px] w-full m-auto pt-5  relative group mb-10 transition-all duration-1000`}
    >
      <div
        // key={images[currentIndex]}
        style={{ backgroundImage: `url("${images[currentIndex]}")` }}
        className="w-full h-full rounded-xl bg-center bg-contain bg-no-repeat duration-500"
      ></div>

      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer"
      >
        <MdChevronLeft />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer"
      >
        <MdChevronRight />
      </div>
      <div className="flex top-4 justify-center py-2">
        {images.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${
              slideIndex === currentIndex ? "text-slate-400 " : ""
            } text-2xl cursor-pointer`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsSlider;
