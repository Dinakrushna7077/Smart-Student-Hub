import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
    const { role, logout } = useAuth();
  return (
    <div>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 w-full z-10">
        <h1 className="text-xl font-bold text-indigo-600">Smart Student Hub</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          {!role && <Link to="/login" className="hover:text-indigo-600">Login</Link>}
          {role && (
            <button
              onClick={logout}
              className="hover:text-red-600 font-medium"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

    </div>
  )
}

export default Navbar
