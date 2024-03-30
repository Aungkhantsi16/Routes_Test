import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center">
        <p className="text-[#00df9a] font-bold p-2">
          Growing With Data Analytics
        </p>
        <h1 className="text-6xl font-bold py-6">Grow with Data</h1>
        <div className="flex items-center justify-center">
          <p className="text-3xl font-bold py-4">
            Fast,Flexible,Finace with SaaS
          </p>
        </div>
        <p className="text-xl font-bold text-gray-500">
          Monitor your data with our Xera Coin Digital Currency
        </p>
        <Link
          to="/form"
          className="bg-[#00df9a] text-black w-[200px] mx-auto rounded-md font-medium py-3 my-6 hover:bg-[#166534] transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
