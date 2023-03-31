"use client";
import Link from "next/link";
import { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("mdparvezmusharaf2@gmail.com");
  const [name, setName] = useState("Md Parvez Musharaf");
  const [division, setDivision] = useState("Chittagong");
  const [district, setDistrict] = useState("Cox's Bazar");

  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  //   const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (event: any) => {
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   setErrorMessage("Passwords do not match");
    //   return;
    // }

    // Perform signup logic here, e.g. submit form data to server API
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh] py-10 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-8 text-center">Edit Profile</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="border border-gray-400 p-2 w-full rounded outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              className="border border-gray-400 p-2 w-full rounded outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="division" className="block font-medium mb-2">
              Division
            </label>
            <input
              type="text"
              id="division"
              name="division"
              placeholder="Divison"
              className="border border-gray-400 p-2 w-full rounded outline-none"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="district" className="block font-medium mb-2">
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              placeholder="Distirct"
              className="border border-gray-400 p-2 w-full rounded outline-none"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="text-center bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
