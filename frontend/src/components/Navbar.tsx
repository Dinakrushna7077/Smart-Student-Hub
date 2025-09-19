import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { role, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur shadow-md fixed top-0 w-full z-20">
      <div className="px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-indigo-600 tracking-tight"
        >
          Smart Student Hub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
          >
            Home
          </Link>

          {!role && (
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-all duration-200"
            >
              Login
            </Link>
          )}

          {role && (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium shadow hover:bg-red-600 transition-all duration-200"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-indigo-600 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg flex flex-col space-y-4 px-6 py-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
          >
            Home
          </Link>

          {!role && (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-all duration-200 text-center"
            >
              Login
            </Link>
          )}

          {role && (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium shadow hover:bg-red-600 transition-all duration-200"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
