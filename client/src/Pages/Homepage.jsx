import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }

    // Load saved language
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      const displayName = { en: "English", hi: "Hindi", ta: "Tamil" }[savedLang];
      setSelectedLanguage(displayName);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);

    const langCode = {
      English: "en",
      Hindi: "hi",
      Tamil: "ta"
    }[language];

    i18n.changeLanguage(langCode);
    localStorage.setItem("lang", langCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <img
            src="rakshax-logo.png"
            alt="RakshaX Logo"
            className="w-10 h-10 mr-2"
          />
          <h1 className="text-2xl font-bold text-blue-600">{t("app_name")}</h1>
          <nav className="space-x-6 flex-1 flex justify-center">
            <Link to="/" className="text-blue-600 font-medium hover:underline">
              {t("home")}
            </Link>
            <Link to="/about" className="text-blue-600 font-medium hover:underline">
              {t("about")}
            </Link>
            <Link to="/emergency" className="text-blue-600 font-medium hover:underline">
              {t("emergency_contact")}
            </Link>
            <Link to="/FAQPage" className="text-blue-600 font-medium hover:underline">
              {t("FAQ")}
            </Link>

          </nav>

          {/* Right - Sign In and Language */}
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 font-medium hover:underline">
              {t("sign_in")}
            </button>

            {/* Change Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-xl"
                title="Change Language"
              >
                🌐
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
                  <ul className="py-2">
                    {["English", "Hindi", "Tamil"].map((lang) => (
                      <li
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className="px-4 py-2 text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={toggleDarkMode}
              className="text-xl hover:scale-110 transition"
              title="Toggle Theme"
            >
              {darkMode ? "☀" : "🌙"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-4">
          {t("hero_heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mb-6">
          {t("hero_description")}
        </p>
        <div className="space-y-4 md:space-x-6 md:space-y-0 flex flex-col md:flex-row justify-center">
          <Link to="/SafeShelters">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition">
              {t("find_help")}
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" p-8 max-w-3xl mx-auto text-center mt-10">
        <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">{t("cta_heading")}</h3>
        <p className="text-gray-600 mb-4">{t("cta_description")}</p>
        <Link to="/alertPage">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
            {t("check_alerts")}
          </button>
        </Link>
      </section>

      {/* Precautions Section */}
      <section className=" py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-left">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">{t("precaution_heading")}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">{t("precaution_text")}</p>
            <Link to="/PrecautionsPage">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
                {t("precaution")}
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="precaution-image.png"
              alt="Precaution"
              className="w-64 h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
