import React from 'react';

const SafeShelters = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-white text-center">
      <h1 className="text-4xl font-bold mb-4">Help Near me</h1>
      <p className="text-gray-600 text-lg mb-8 max-w-xl">
        Discover nearby shelters during emergencies and stay safe.
      </p>

      

      <div className="w-full max-w-4xl mb-10">
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2023/11/07/14/26/shelter-8373433_960_720.jpg"
            alt="Safe Shelter"
            className="w-full rounded-xl shadow-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-3 rounded-full shadow-lg hover:scale-105 transition">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Nearby Assistance Locations</h2>
      <img
        src="https://cdn.pixabay.com/photo/2017/03/02/20/57/map-2111932_960_720.png"
        alt="Map showing shelters"
        className="w-full max-w-md rounded-xl shadow-lg"
      />
    </div>
  );
};

export default SafeShelters;
