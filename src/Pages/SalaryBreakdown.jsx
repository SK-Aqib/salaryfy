import React from "react";

function SalaryBreakdown() {
  const salaryData = [
    { title: "Basic", amount: 40000 },
    { title: "HRA", amount: 15000 },
    { title: "Special Allowance", amount: 5000 },
    { title: "Other Allowances", amount: 3000 },
    { title: "Deductions", amount: 8000 },
  ];

  const totalSalary = salaryData
    .filter(item => item.title !== "Deductions")
    .reduce((acc, item) => acc + item.amount, 0);
  const netSalary = totalSalary - salaryData.find(item => item.title === "Deductions").amount;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-10">
        Salary Breakdown
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {salaryData.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex justify-between items-center hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-lg font-bold">₹{item.amount.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-10 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 rounded-lg shadow p-6 text-center text-xl font-semibold">
        Net Salary: ₹{netSalary.toLocaleString()}
      </div>
    </div>
  );
}

export default SalaryBreakdown;
