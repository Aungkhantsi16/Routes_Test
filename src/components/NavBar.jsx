import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between h-24 items-center mx-auto max-w-[1180px] px-4 text-white">
      <h1 className="w-full font-bold text-[#00df9a] text-3xl">REACT.</h1>
      <ul className="flex">
        <Link to="/home" className="p-4 hover:text-gray-500 transition">
          Home
        </Link>
        <Link to="/contact" className="p-4 hover:text-gray-500 transition">
          Contact
        </Link>
        <Link to="/about" className="p-4 hover:text-gray-500 transition">
          About
        </Link>
        <Link to="/lists" className="p-4 hover:text-gray-500 transition">
          Lists
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
