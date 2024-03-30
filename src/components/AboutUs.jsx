import React from "react";
import people from "../assets/man.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="max-w-[1180px] flexflex-col items-center text-center justify-center mx-auto mt-[76px]">
      <h1 className="text-[#00df9a] text-5xl font-bold my-2">
        This is About Us Page
      </h1>
      <img className="w-[300px] mx-auto mt-[40px] mb-9" src={people} alt="/" />
      <Link
        to="/"
        className="bg-[#00df9a] text-black w-[200px] mx-auto rounded font-medium py-3 px-8 hover:bg-[#166534] transition"
      >
        Back
      </Link>
    </div>
  );
};

export default AboutUs;
