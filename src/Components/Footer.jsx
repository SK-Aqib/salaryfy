import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 mt-20 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Salaryfy.io. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="hover:text-indigo-500">Privacy Policy</button>
          <button className="hover:text-indigo-500">Terms of Service</button>
          <button className="hover:text-indigo-500">Contact Us</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
