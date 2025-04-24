import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Flame,
  Droplet,
  Sun,
  Wind,
  Earth,
  Waves,
  ShieldAlert,
} from "lucide-react";

const data = [
  {
    title: "Earthquake",
    icon: <Earth className="text-amber-500 w-6 h-6" />,
    color: "amber",
    precautions: [
      "Drop, Cover, and Hold On during shaking.",
      "Stay away from windows and heavy furniture.",
      "Have an emergency kit with food, water, and first aid.",
      "Secure heavy objects to prevent tipping.",
    ],
  },
  {
    title: "Flood",
    icon: <Droplet className="text-blue-500 w-6 h-6" />,
    color: "blue",
    precautions: [
      "Move to higher ground immediately.",
      "Avoid walking or driving through flood waters.",
      "Disconnect electrical appliances.",
      "Keep emergency supplies in waterproof containers.",
    ],
  },
  {
    title: "Wildfire",
    icon: <Flame className="text-red-500 w-6 h-6" />,
    color: "red",
    precautions: [
      "Create a defensible space around your home.",
      "Keep flammable materials away from your property.",
      "Have an evacuation plan and know multiple routes.",
      "Stay indoors and keep windows shut during smoke events.",
    ],
  },
  {
    title: "Cyclone",
    icon: <Wind className="text-teal-500 w-6 h-6" />,
    color: "teal",
    precautions: [
      "Listen to official weather updates and warnings.",
      "Secure windows and doors with storm shutters.",
      "Evacuate low-lying areas if instructed.",
      "Keep emergency lights and radios ready.",
    ],
  },
  {
    title: "Tsunami",
    icon: <Waves className="text-indigo-500 w-6 h-6" />,
    color: "indigo",
    precautions: [
      "Move to higher ground immediately after a strong coastal earthquake.",
      "Stay away from the beach and coastal areas.",
      "Follow tsunami evacuation routes.",
      "Don't return until authorities declare it safe.",
    ],
  },
  {
    title: "Heatwave",
    icon: <Sun className="text-orange-500 w-6 h-6" />,
    color: "orange",
    precautions: [
      "Stay hydrated and avoid outdoor activities during peak heat.",
      "Wear light, breathable clothing.",
      "Use fans, air conditioners, or stay in cool places.",
      "Check on vulnerable individuals like elders and infants.",
    ],
  },
];

export default function PrecautionsPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10 flex items-center justify-center gap-2">
          <ShieldAlert className="w-8 h-8 text-blue-600" />
          Disaster Safety Precautions
        </h1>

        {data.map((item, index) => (
          <div
            key={index}
            className="mb-6 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg"
          >
            <div
              className="flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center gap-3">
                <span>{item.icon}</span>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <span
                  className={`text-xs px-2 py-1 rounded-full bg-${item.color}-100 text-${item.color}-700 font-medium`}
                >
                  {item.title}
                </span>
              </div>
              {openIndex === index ? (
                <ChevronUp className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-600" />
              )}
            </div>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 py-4 opacity-100" : "max-h-0 overflow-hidden opacity-0"
              } px-6`}
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                {item.precautions.map((precaution, i) => (
                  <li key={i}>{precaution}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
