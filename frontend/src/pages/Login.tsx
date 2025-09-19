import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { GraduationCap, ShieldCheck } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const [role, setRole] = useState<"student" | "admin">("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    login(role);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-50 to-purple-100 px-4">
      <div className="w-full max-w-5xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Section - Branding / Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-10">
          <h2 className="text-4xl font-extrabold mb-4">Smart Student Hub</h2>
          <p className="text-lg text-indigo-100 mb-6 text-center">
            A unified platform to manage student achievements, events, and resources seamlessly.
          </p>
          
        </div>

        {/* Right Section - Login Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700 text-center mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please select your role to continue
          </p>

          {/* Role Selector */}
          <div className="mb-6">
            <span className="text-gray-700 font-medium">Login as</span>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <button
                onClick={() => setRole("student")}
                className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                  role === "student"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                Student
              </button>
              <button
                onClick={() => setRole("admin")}
                className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                  role === "admin"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                }`}
              >
                <ShieldCheck className="w-5 h-5" />
                Admin
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            Continue as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Powered by{" "}
            <span className="font-semibold text-indigo-600">
              Smart Student Hub
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
