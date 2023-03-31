"use client";
import Link from "next/link";
import { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (event: any) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Perform signup logic here, e.g. submit form data to server API
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh] py-10 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
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

          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="border border-gray-400 p-2 w-full rounded outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="********"
              className="border border-gray-400 p-2 w-full rounded outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>
          <button
            type="submit"
            className="text-center bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
          <div className="py-2 text-center">
            <p className="text-slate-500"> You have an Account?</p>{" "}
            <Link href="/login" className="border-b text-blue-800">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
