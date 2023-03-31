"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  const [oldPassword, setOldPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (event: any) => {
    event.preventDefault();

    if (oldPassword !== newPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Perform signup logic here, e.g. submit form data to server API
  };
  return (
    <>
      <div className="bg-white p-8 rounded shadow-md  w-full md:w-3/5">
        <form onSubmit={handleSignup}>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Change Password
          </h2>

          <div className="mb-4">
            <label htmlFor="old-password" className="block font-medium mb-2">
              Old Password
            </label>
            <input
              type="password"
              id="old-password"
              name="old-password"
              placeholder="********"
              className="border border-gray-400 p-2 w-full rounded outline-none"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="new-password" className="block font-medium mb-2">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              placeholder="********"
              className="border border-gray-400 p-2 w-full rounded outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
