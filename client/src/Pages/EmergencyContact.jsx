import React from "react";

export default function Emergency() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 px-6 py-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-3 animate-fade-in">
            Emergency Contact
          </h1>
          <p className="text-lg text-gray-600">
            Immediate support and official helplines at your fingertips.
          </p>
        </header>

        {/* Section: Help Now */}
        <section className="bg-white p-6 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            🚨 Need Help Right Now?
          </h2>
          <p className="text-gray-700">
            If you’re in immediate danger or facing an emergency, please contact your local emergency services right away.
          </p>
        </section>

        {/* Section: National Helplines */}
        <section className="bg-white p-6 rounded-2xl shadow-md mb-10">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">
            📞 National Emergency Numbers (India)
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-base">
            <li><strong>Police:</strong> 100</li>
            <li><strong>Fire Department:</strong> 101</li>
            <li><strong>Ambulance:</strong> 102 / 108</li>
            <li><strong>Disaster Management:</strong> 1078</li>
            <li><strong>Women’s Helpline:</strong> 1091</li>
            <li><strong>Child Helpline:</strong> 1098</li>
            <li><strong>Cyber Crime:</strong> 1930</li>
            <li><strong>Flood / Earthquake Relief:</strong> 011-24363260</li>
          </ul>
        </section>

        {/* Section: Regional Support */}
        <section className="bg-white p-6 rounded-2xl shadow-md mb-10">
          <h3 className="text-xl font-semibold text-orange-500 mb-3">
            🌐 Regional Helplines
          </h3>
          <p className="text-base">
            For local disaster response teams and state-wise emergency numbers, please visit the
            <a
              href="https://ndma.gov.in"
              className="text-blue-600 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              NDMA Official Portal
            </a>.
          </p>
        </section>

        {/* Section: RakshaX Contact */}
        <section className="bg-white p-6 rounded-2xl shadow-md mb-10">
          <h3 className="text-xl font-semibold text-orange-500 mb-3">
            📧 Contact RakshaX Support
          </h3>
          <ul className="text-base space-y-1">
            <li><strong>Email:</strong> support@rakshax.org</li>
            <li><strong>Support Hours:</strong> 9 AM – 9 PM IST (Mon–Sat)</li>
          </ul>
        </section>

        {/* Section: Offline Users */}
        <section className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-orange-700 mb-2">
            📡 Offline Users
          </h3>
          <p className="text-base">
            Limited internet? No problem. Text <strong>'HELP'</strong> to <strong>54321</strong> to receive safety alerts and routes via SMS.
          </p>
        </section>
      </div>
    </div>
  );
}
