// import Profile from "@/components/Profile/Profile";
import React from "react";
import Profile from "@/components/Profile/Profile";

const page = () => {
  return (
    <div>
      <Profile
        user={{
          name: "Parvez Musharaf",
          email: "parvez@gmail.com",
          address: "Dhaka",
          profileImageUrl: "/profile.jpg",
        }}
      />
    </div>
  );
};

export default page;
