import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-center">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-blue-600">RakshaX</h1>
          <nav className="space-x-6 flex-1 flex justify-center">
            <Link to="/" className="text-blue-600 font-medium hover:underline">
              Home
            </Link>
            <Link to="/about" className="text-blue-600 font-medium hover:underline">
              About
            </Link>
            <Link to="/emergency" className="text-blue-600 font-medium hover:underline">
              Emergency Contact
            </Link>
            
          </nav>
           {/* Right - Sign In and Language */}
           <div className="flex items-center space-x-4">
            <button className="text-blue-600 font-medium hover:underline">
              Sign In
            </button>
            <button className="text-xl" title="Change Language">
              🌐
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          See danger before it sees you.
        </h2>
        <p className="text-gray-700 text-lg max-w-xl mb-6">
          Real-time alerts, disaster predictions based on your location, nearby shelter guidance, and safety tips at your fingertips.
        </p>

        <div className="space-y-4 md:space-x-6 md:space-y-0 flex flex-col md:flex-row justify-center">
          
          <Link to="/safeShelters">
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
              Safe Shelters Map
            </button>
          </Link>
          <Link to="/precautionsPage">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition">
              General Precautions
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white rounded-2xl shadow-md p-8 max-w-3xl mx-auto text-center mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Safe. Stay Informed.</h3>
        <p className="text-gray-600 mb-4">
          Get alerts based on your location and stay ahead of emergencies. Check safe routes and connect with nearby help centers instantly.
        </p>
        <Link to="/realtimeAlerts">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Check Nearby Alerts
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;