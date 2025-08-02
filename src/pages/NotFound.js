import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
    <h1 className="text-7xl font-extrabold text-blue-700 mb-4">404</h1>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Page Not Found</h2>
    <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
      Oops! The page you are looking for does not exist or has been moved.
    </p>
    <Link
      to="/"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-all duration-200"
    >
      Go to Home
    </Link>
  </div>
);

export default NotFound;