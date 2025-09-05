import React, { useState } from "react";

function TaxInfo() {
  const [salary, setSalary] = useState("");
  const [tax, setTax] = useState(0);

  const calculateTax = () => {
    let s = parseFloat(salary);
    if (isNaN(s)) {
      setTax(0);
      return;
    }

    let taxAmount = 0;

    // Example tax slabs for 2025
    if (s <= 250000) taxAmount = 0;
    else if (s <= 500000) taxAmount = (s - 250000) * 0.05;
    else if (s <= 1000000) taxAmount = 12500 + (s - 500000) * 0.2;
    else taxAmount = 112500 + (s - 1000000) * 0.3;

    setTax(taxAmount);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-10">
        Tax Information & Calculator
      </h1>

      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <label className="block text-lg font-semibold mb-2">Enter your Annual Salary (₹)</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 mb-4 bg-gray-50 dark:bg-gray-900"
        />
        <button
          onClick={calculateTax}
          className="w-full bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 py-3 rounded hover:bg-indigo-500 dark:hover:bg-indigo-300 transition"
        >
          Calculate Tax
        </button>

        <div className="mt-6 text-center text-xl font-semibold">
          Estimated Tax: ₹{tax.toLocaleString()}
        </div>

        <div className="mt-6 text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <p><strong>Tax Slabs (2025):</strong></p>
          <p>₹0 - ₹2,50,000 → 0%</p>
          <p>₹2,50,001 - ₹5,00,000 → 5%</p>
          <p>₹5,00,001 - ₹10,00,000 → 20%</p>
          <p>Above ₹10,00,000 → 30%</p>
        </div>
      </div>
    </div>
  );
}

export default TaxInfo;
