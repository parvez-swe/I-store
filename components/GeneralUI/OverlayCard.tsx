"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
interface Props {
  success: boolean;

  heading: string;
  description: string;
  buttonName: string;
  redirectUrl: string;
}

const OverlayCard = ({
  success,

  heading,
  description,
  buttonName,
  redirectUrl,
}: Props) => {
  const router = useRouter();

  const btnHandler = () => {
    router.push(redirectUrl);
  };

  return (
    <div className="bg-white p-5 text-center flex flex-col items-center w-full md:w-[400px] rounded ">
      <div
        className={`${
          success ? "bg-green-100" : "bg-red-100"
        }  p-3 w-fit rounded-full text-center`}
      >
        {success ? <BsCheck2 /> : <RxCross1 />}
      </div>

      <h1 className="text-lg md:text-xl font-bold my-4">{heading}</h1>
      <p className="text-sm md:text-lg text-slate-500 py-2">{description}</p>
      <button
        onClick={btnHandler}
        className={`${
          success ? "bg-green-500" : "bg-red-600 "
        } w-full px-3 py-2 text-white text-lg`}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default OverlayCard;
