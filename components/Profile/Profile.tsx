import Image from "next/image";
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
    <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-md p-6">
      <div className="relative rounded-full w-24 h-24 overflow-hidden mb-4">
        <Image
          src={user.profileImageUrl}
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="">
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
  );
};

export default Profile;
