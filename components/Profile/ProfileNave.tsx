"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { AiFillEdit, AiTwotoneHeart } from "react-icons/ai";
import { MdDashboard, MdPerson } from "react-icons/md";
import { FcShipped } from "react-icons/fc";
import UploadImageModal from "./UploaddImageModal";

interface User {
  name: string;
  email: string;
  address: string;
  profileImageUrl: string;
}

interface Props {
  user: User;
}

const ProfileNave: React.FC<Props> = ({ user }) => {
  const path = usePathname();
  const purl = "/profile";
  const isAdmin = true;

  const [uploader, setUploader] = useState(false);

  const imageUploader = () => {
    setUploader(true);
  };

  const [imageSrc, setImageSrc] = useState(user.profileImageUrl);

  return (
    <div className="flex flex-col h-fit min-w-[280px] font-semibold  items-center-justify-center bg-white rounded shadow-md relative pt-6">
      {uploader && (
        <div className="absolute z-40 w-full flex ml-auto mr-auto left-0 right-0">
          <UploadImageModal
            setUploader={setUploader}
            setImageSrc={setImageSrc}
            imageSrc={imageSrc}
            name={user.name}
            email={user.email}
          />
        </div>
      )}

      <div className="self-center px-6">
        <div className=" flex flex-col self-center h-40 w-40 rounded-[100%] overflow-hidden  relative">
          <Image
            className="w-full z-10  "
            width={150}
            height={100}
            src={imageSrc}
            alt="Profile Image"
          />
          <button
            onClick={imageUploader}
            className="z-20 text-center text-sm text-slate-700 hover:text-slate-900  bg-slate-100 absolute bottom-1  right-5 -translate-y-1 py-1 px-2  aspect-square rounded-full w-fit my-2"
          >
            <AiFillEdit className="inline text-center" />
          </button>
        </div>
        <h1 className="text-center text-lg">{user.name}</h1>
        <p className="text-center text-slate-700">{user.email}</p>
      </div>
      <hr className="mb-10 mt-2"></hr>

      <ul className="text-lg text-slate-800 px-6 pb-5">
        <li className="hover:underline ">
          {isAdmin ? (
            <Link
              href="/profile/admin"
              className={`${path === "/profile/admin" ? "underline" : ""}`}
            >
              <MdDashboard className={`inline  mr-2`} />
              DashBoard
            </Link>
          ) : (
            <Link
              href="/profile/orders"
              className={`${path === "/profile/orders" ? "underline" : ""}`}
            >
              <FcShipped className="inline  mr-2" />
              My Orders
            </Link>
          )}
        </li>
        <li className="hover:underline ">
          <Link
            href="/profile"
            className={`${purl === path ? "underline" : ""}`}
          >
            <MdPerson className="inline mr-2" /> Personal Information
          </Link>
        </li>
        <li className="hover:underline">
          <Link
            href="/profile/changepassword"
            className={`${
              path === "/profile/changepassword" ? "underline" : ""
            }`}
          >
            <AiFillEdit className="inline  mr-2" />
            Change Password
          </Link>
        </li>

        <li className="hover:underline ">
          <Link
            href="/profile/liked"
            className={`${path === "/profile/liked" ? "underline" : ""}`}
          >
            <AiTwotoneHeart className="inline  mr-2" /> Whish List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileNave;
