import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-white">Welcome Back</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Don't have an account? <a href="/Register" className="text-blue-600 hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
