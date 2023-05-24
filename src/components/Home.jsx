import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">{t("home.who-im")}</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          FABRIZIO ALDERETE
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          {t("home.about")}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {t("home.description")}
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            {t("home.resume")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
