import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillEdit, AiTwotoneHeart } from "react-icons/ai";
import { MdDashboard, MdPerson } from "react-icons/md";

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
  return (
    <div className="flex flex-col h-fit  font-semibold text-lg items-center-justify-center bg-white rounded-md shadow-md p-6">
      <div className=" flex flex-col mb-4">
        <Image
          width={150}
          height={150}
          src={user.profileImageUrl}
          alt="Profile Image"
        />
        <button className="text-start text-white bg-green-500 px-4 py-1 w-fit my-2">
          Change Prfile <AiFillEdit className="inline " />
        </button>
      </div>
      <ul className="">
        <li className="hover:underline ">
          <Link href="/profile/dashboard">
            <MdDashboard className="inline  mr-2" />
            DashBoar{" "}
          </Link>
        </li>
        <li className="hover:underline ">
          <Link href="/profile/changepassword">
            <MdPerson className="inline mr-2" /> Personal Information
          </Link>
        </li>
        <li className="hover:underline">
          <Link href="/profile/changepassword">
            <AiFillEdit className="inline  mr-2" />
            Change Password
          </Link>
        </li>

        <li className="hover:underline ">
          <AiTwotoneHeart className="inline  mr-2" /> Whish List
        </li>
      </ul>
    </div>
  );
};

export default ProfileNave;
