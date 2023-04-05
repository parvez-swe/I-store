import UserList from "@/components/Amin/UserList";
import React from "react";
const users = [
  {
    id: 113432432434,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    createdAt: "2022-02-01T12:00:00.000Z",
    updatedAt: "2022-02-02T12:00:00.000Z",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    role: "User",
    createdAt: "2022-02-03T12:00:00.000Z",
    updatedAt: "2022-02-04T12:00:00.000Z",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bobsmith@gmail.com",
    role: "User",
    createdAt: "2022-02-05T12:00:00.000Z",
    updatedAt: "2022-02-06T12:00:00.000Z",
  },
];

const page = () => {
  return (
    <div>
      <UserList userList={users} />
    </div>
  );
};

export default page;
