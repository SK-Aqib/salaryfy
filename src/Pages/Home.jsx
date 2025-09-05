import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
            Welcome to Salaryfy.io
          </h1>
          <p className="text-lg md:text-xl">
            Salaryfy is your financial companion — understand your salary, taxes, and investments easily.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/salary"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
            >
              Salary Breakdown
            </Link>
            <Link
              to="/tax"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition"
            >
              Tax Info
            </Link>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Finance Illustration"
            className="w-72 md:w-96"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Salary Breakdown</h2>
          <p>Understand your pay structure including allowances and deductions.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Tax Information</h2>
          <p>Learn about income tax slabs and calculate your estimated tax.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Financial Education</h2>
          <p>Get tips on investments, savings, and personal finance management.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;

