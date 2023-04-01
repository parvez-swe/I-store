"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { AiFillEdit, AiTwotoneHeart } from "react-icons/ai";
import { MdDashboard, MdPerson } from "react-icons/md";
import { FcShipped } from "react-icons/fc";
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
  const isAuthenticated = false;

  return (
    <div className="flex flex-col h-fit min-w-[280px] font-semibold text-lg items-center-justify-center bg-white rounded shadow-md p-6">
      <div className=" flex flex-col mb-4 relative">
        <Image
          className="w-full"
          width={150}
          height={150}
          src={user.profileImageUrl}
          alt="Profile Image"
        />
        <button className="text-center text-sm text-slate-700 hover:text-slate-900  bg-slate-100 absolute top-0 right-0 -translate-y-1 py-1 px-2  aspect-square rounded-full w-fit my-2">
          {/* <button className=" inline-block text-sm  rounded-full bg-green-400"> */}
          <AiFillEdit className="inline text-center" />
        </button>
      </div>
      <ul className="">
        <li className="hover:underline ">
          {isAuthenticated ? (
            <Link href="/profile/dashboard">
              <MdDashboard className="inline  mr-2" />
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
