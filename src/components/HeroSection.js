import React from "react";

const HeroSection = ({ onReferNowClick }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-4">Refer & Earn</h1>
        <p className="text-lg mb-8">Earn rewards by referring our services!</p>
        <button
          onClick={onReferNowClick}
          className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-200 hover:text-blue-600 transition duration-300"
        >
          Refer Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
