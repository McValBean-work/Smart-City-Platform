import React from "react";
import { LogOut, KeyRound } from "lucide-react";
import { toast } from "react-toastify";
import api from "../api/axios-instance";
import Logout from "../Authentication-page/logout";

function Settings() {
  const currentUser = JSON.parse(localStorage.getItem("userData")) || null;

  async function handlePasswordResetRequest() {
    try {
      const response = await api.post("/api/auth/request-password-reset", {
        email: currentUser?.email,
        clientURL: `${window.location.origin}/password-reset`,
      });
      console.log(response.data);
      toast.info("Redirecting to password reset page");
    } catch (error) {
      console.log(error);
      toast.error("Error initiating password reset");
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto w-full bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Account Settings
        </h1>

        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-700">
            Personal Information
          </h2>
          <p className="text-sm text-gray-500">
            This is what we have on record.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
          <p className="mb-2">
            <span className="font-medium text-gray-700 mr-2">Full Name:</span>
            {currentUser?.fullName}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-700 mr-2">Email:</span>
            {currentUser?.email}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-700 mr-2">Phone Number:</span>
            {currentUser?.phoneNumber || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-700 mr-2">Role:</span>
            {currentUser?.role
              ? currentUser.role.charAt(0).toUpperCase() +
                currentUser.role.slice(1)
              : "N/A"}
          </p>
          <p>
            <span className="font-medium text-gray-700 mr-2">Joined:</span>
            {currentUser?.createdAt || "N/A"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePasswordResetRequest}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1CAC78] text-white hover:bg-[#17a06f] transition-colors"
          >
            <KeyRound className="w-4 h-4" />
            Change Password
          </button>

          <button
            onClick={Logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 border border-red-200 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
