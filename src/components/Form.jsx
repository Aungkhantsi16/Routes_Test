import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-6 bg-[#00df9a] rounded shadow"
      >
        <h2 className="text-xl font-semibold mb-4">Registraion Form</h2>
        <label className="block mb-2 font-semibold">Name:</label>
        <input
          className="w-full p-2 border border-gray-700 rounded placeholder:px-2 font-small"
          placeholder="Enter Your Name"
          required
        />
        <label className="block mt-4 mb-2 font-semibold">Email:</label>
        <input
          className="w-full p-2 border border-gray-700 rounded  placeholder:px-2 font-small"
          placeholder="Enter Your Email"
          required
        />
        <label className="block mt-4 mb-2 font-semibold">Password:</label>
        <input
          className="w-full p-2 border border-gray-700 rounded mb-8  placeholder:px-2 font-small"
          placeholder="Enter Your Password"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded mt-4 hover:bg-[#404040] font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
