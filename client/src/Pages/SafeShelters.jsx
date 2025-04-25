import React from 'react';
// import { FaMapMarkedAlt } from 'react-icons/fa';

const SafeShelters = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-white dark:bg-gray-900 text-center text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="max-w-3xl mb-10">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
           Upcoming Disasters
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Find nearby safe zones, shelters, or assistance during emergencies.
        </p>
      </div>

      {/* Image */}
      <img
        src="https://wp.inews.co.uk/wp-content/uploads/2020/02/uk-flood-warnings.jpg"
        alt="Map showing shelters"
        className="w-full max-w-md rounded-xl shadow-xl mb-10"
      />

      {/* Location Form */}
      <div className="w-full max-w-3xl bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Enter Your Location</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            name="area"
            type="text"
            placeholder="Area"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="state"
            type="text"
            placeholder="State"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="country"
            type="text"
            placeholder="Country"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* CTA */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
          Predict
        </button>
      </div>
    </div>
  );
};

export default SafeShelters;
