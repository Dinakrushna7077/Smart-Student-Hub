import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [role, setRole] = useState<"student" | "admin">("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    login(role);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Smart Student Hub Login
        </h2>

        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Select Role</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "student" | "admin")}
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      </div>
    </div>
  );
}
