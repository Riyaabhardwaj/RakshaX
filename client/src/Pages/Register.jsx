import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-white">Create an Account</h2>
        <form className="flex flex-col gap-4">
          <input
          name="name"
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
           name="email"
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <input
            name="phoneno"
            type="Phone Number"
            placeholder="Phone Number"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
           name="password"
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
           name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Location fields in horizontal flex */}
          <div className="flex flex-wrap gap-4">
            <input
             name="area"
              type="text"
              placeholder="Area"
              className="flex-1 min-w-[150px] px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
             name="city"
              type="text"
              placeholder="City"
              className="flex-1 min-w-[150px] px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
             name="state"
              type="text"
              placeholder="State"
              className="flex-1 min-w-[150px] px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
            name="country"
              type="text"
              placeholder="Country"
              className="flex-1 min-w-[150px] px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
            name="pincode"
              type="text"
              placeholder="Pincode"
              className="flex-1 min-w-[150px] px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <a href="/SignIn" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
