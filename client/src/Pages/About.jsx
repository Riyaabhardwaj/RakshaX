import React from "react";
import { ShieldCheck, AlertCircle, Map } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-white font-sans px-4">
      <main className="w-full max-w-3xl p-8 bg-white rounded-3xl shadow-xl text-gray-700">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
        <img src="/logo1.png" alt="" className="w-[0.3px] h-[0.3px]" />
          <h1 className="text-3xl font-bold text-orange-600">RakshaX</h1>
        </div>

        {/* Intro */}
        <div className="text-center">
          <h2 className="text-2xl text font-bold text-gray-800 mb-3">Your AI Companion in Disasters</h2>
          <p className="text-base text-gray-600 mb-6">
            RakshaX empowers communities with real-time alerts, smart evacuation routes, and offline accessibility.
          </p>
        </div>

        {/* Highlights */}
        <ul className="space-y-4 max-w-md mx-auto">
          <li className="flex items-center">
            <AlertCircle className="text-orange-500 w-5 h-5 mr-3" />
            <span><strong>Instant Alerts:</strong> Stay informed with multilingual, SMS-based notifications.</span>
          </li>
          <li className="flex items-center">
            <Map className="text-orange-500 w-5 h-5 mr-3" />
            <span><strong>Smart Escape Routes:</strong> Dynamic, offline-friendly navigation to safety zones.</span>
          </li>
          <li className="flex items-center">
            <ShieldCheck className="text-orange-500 w-5 h-5 mr-3" />
            <span><strong>Accessible for All:</strong> Built for low-connectivity areas and inclusive communities.</span>
          </li>
        </ul>

        {/* Quote */}
        <p className="mt-6 text-gray-600 italic text-center">"Be informed. Be prepared. Be safe — with RakshaX."</p>

        {/* Footer */}
        <footer className="mt-8 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} RakshaX. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default About;