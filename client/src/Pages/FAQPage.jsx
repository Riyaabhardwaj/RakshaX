import React from 'react';

const faqs = [
  // General FAQs
  {
    question: "What is the purpose of this platform?",
    answer:
      "Our platform helps users prepare for and respond to natural disasters by providing real-time alerts, emergency contacts, safety tips, and shelter information.",
  },
  {
    question: "Who can use this app?",
    answer:
      "Anyone can use this app — from local citizens to disaster response teams — to stay informed and safe during emergencies.",
  },
  {
    question: "Is this service free to use?",
    answer: "Yes, this platform is completely free to use.",
  },
  {
    question: "How do I contact emergency services through the app?",
    answer:
      "Go to the 'Emergency Contact' page to find a list of helpline numbers categorized by region and service type.",
  },
  {
    question: "Where can I find nearby safe shelters?",
    answer:
      "Check the 'Safe Shelter' page to view available shelters near your location, along with maps and directions.",
  },
  {
    question: "What precautions should I take during a flood/earthquake/fire?",
    answer:
      "Visit the 'Precautions' page to find disaster-specific safety tips and checklists.",
  },
  {
    question: "Does this app use my location?",
    answer:
      "Yes, with your permission, we use geolocation to show relevant alerts and shelters nearby.",
  },
  {
    question: "How do I enable location services?",
    answer:
      "When prompted by the browser or app, click 'Allow' to enable location tracking for accurate results.",
  },
  {
    question: "Will I get real-time alerts?",
    answer:
      "Yes, if you allow notifications, the app will send you updates during emergency situations.",
  },
  {
    question: "How do I report a bug or give feedback?",
    answer:
      "Go to the 'About Us' section or use the feedback form to report any issues or suggestions.",
  },
  {
    question: "Do I need to create an account to use the app?",
    answer:
      "No account is required for basic features, but logging in may unlock personalized alerts and history in future updates.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes, we prioritize user privacy and only use data for disaster response purposes.",
  },

  // Red Alert & Warning Levels
  {
    question: "What is a Red Alert?",
    answer:
      "A Red Alert is the highest level of warning issued by authorities when a disaster is imminent or already occurring. It signals immediate danger and advises people to take urgent protective action.",
  },
  {
    question: "How is a Red Alert different from other alerts?",
    answer:
      "Green: No threat. Yellow: Be aware. Orange: Be prepared. Red: Act immediately. It represents the most serious level of risk.",
  },
  {
    question: "What should I do when a Red Alert is issued?",
    answer:
      "Follow evacuation instructions, stay updated, prepare emergency supplies, and avoid dangerous areas.",
  },
  {
    question: "Will the app notify me about Red Alerts?",
    answer:
      "Yes, if you've enabled notifications and location access, you will receive real-time Red Alert warnings.",
  },
  {
    question: "Who issues Red Alerts?",
    answer:
      "Red Alerts are typically issued by national or state authorities such as IMD, NDMA, or local emergency departments.",
  },
  {
    question: "Can a Red Alert be false or change quickly?",
    answer:
      "While alerts are based on the best available data, situations may evolve. Always prioritize safety and stay informed.",
  },
];

const FAQPage = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const faqItemStyle = {
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '0.8rem',
    background: '#f9f9f9',
  };

  const summaryStyle = {
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '1.05rem',
  };

  const answerStyle = {
    marginTop: '0.5rem',
    paddingLeft: '1rem',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Frequently Asked Questions</h2>
      {faqs.map((faq, idx) => (
        <details key={idx} style={faqItemStyle}>
          <summary style={summaryStyle}>{faq.question}</summary>
          <p style={answerStyle}>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQPage;
