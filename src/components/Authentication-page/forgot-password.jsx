import { useState } from "react";
import { toast } from "react-toastify";
import api from "../api/axios-instance";

function ForgotPassword() {
  const [UserData, setUserData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  async function handlePasswordResetRequest(e) {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await api.post("/api/auth/request-password-reset", {
        email: UserData.email,
        clientURL: `${window.location.origin}/password-reset`,
      });
      console.log(response.data);
      toast.success("Password reset link sent! Check your email.");
    } catch (error) {
      console.error(error);
      toast.error("Error sending password reset link");
    }
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter your email to receive a password reset link.
        </p>

        <form
          onSubmit={handlePasswordResetRequest}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 font-medium text-gray-700 text-sm"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={UserData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1CAC78] focus:border-transparent transition"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-[#1CAC78] text-white py-2.5 px-4 rounded-lg font-medium hover:bg-[#179c6d] transition-colors"
          >
            Send Password Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
