import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Salaryfy.io
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-500">Home</Link>
          <Link to="/salary" className="hover:text-indigo-500">Salary Breakdown</Link>
          <Link to="/tax" className="hover:text-indigo-500">Tax Info</Link>
          <Link to="/education" className="hover:text-indigo-500">Education</Link>
        </div>

        {/* Theme Switcher */}
        <ThemeSwitcher />

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => alert("Mobile menu coming soon!")}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
