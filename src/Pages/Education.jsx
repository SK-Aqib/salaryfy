import React from "react";

function Education() {
  const tips = [
    "Start saving early to benefit from compounding.",
    "Always have an emergency fund covering 3-6 months of expenses.",
    "Invest in diversified assets to reduce risk.",
    "Understand your salary structure and tax obligations.",
    "Track your expenses to avoid unnecessary debt.",
    "Use retirement plans like EPF or PPF for long-term security.",
    "Learn basic financial literacy to make informed decisions.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-10">
        Financial Education Tips
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">Tip {index + 1}</h2>
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
