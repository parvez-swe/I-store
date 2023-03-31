"use client";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Perform login action
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-sm shadow-md">
        <h2 className="text-2xl font-bold text-center">Log in</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
          <div>
            <button
              type="submit"
              className="text-center bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <Link
              href="forgetpassword"
              className="py-1 text-slate-500  border-b"
            >
              Forget Password
            </Link>
          </div>
          <div className="py-2 text-center">
            <p className="text-slate-500"> You dont have an Account?</p>
            <Link href="/signup" className="border-b text-blue-800">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
