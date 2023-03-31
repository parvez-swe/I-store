import Image from "next/image";
import Link from "next/link";
import { AiFillEdit, AiTwotoneHeart } from "react-icons/ai";
import { MdDashboard, MdPerson } from "react-icons/md";
// import { User } from "../types";

interface User {
  name: string;
  email: string;
  address: string;
  profileImageUrl: string;
}

interface Props {
  user: User;
}

const Profile: React.FC<Props> = ({ user }) => {
  return (
    <div className="">
      <div className="flex flex-col flex-1 h-fit  items-center-justify-center bg-white rounded-md shadow-md p-6">
        <h1 className="my-5 text-2xl font-bold text-slate-800">
          Account Information
        </h1>

        <div className="">
          <Link
            href="/profile/editprofile"
            className="text-start text-white bg-green-500 px-4 py-1 w-fit my-2"
          >
            Edit Personal Info <AiFillEdit className="inline " />
          </Link>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {user.name}
          </h2>
          <p className="text-gray-700 mb-2">{user.email}</p>
          <p className="text-gray-700 mb-2">Mobile: 018******54</p>
          <p className="text-gray-700 mb-4">Country: Bangladesh</p>
          <p className="text-gray-700 mb-4">Division: Chittagong</p>
          <p className="text-gray-700 mb-4">District: Cox's Bazar</p>
          <p className="text-gray-700 mb-4">Upozila: Ukhiya</p>
          <p className="text-gray-700 mb-4">Home Address: {user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
