import React from "react";

const Register = () => {
  return (
    <div name="contact"
    className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4 text-white"
  >
    <div className="flec flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className="pb-8">
        <p className="py-6 text-center">Register Here</p>
      </div>
      <div className="flex justify-center items-center">
        <form 
        className="flex flex-col w-full md:w-1/2 bg-white"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <button
            className="text-White bg-gradient-to-b from-cyan-500 flex items-center
           to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300"
          >
           Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Register;
