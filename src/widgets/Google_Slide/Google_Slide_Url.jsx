import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import logo from "../../assests/google_slide2.png";

const GoogleSlidesWidget = () => {
  const [presentationId, setPresentationId] = useState("");
  const [inputId, setInputId] = useState("");

  const handleInputChange = (e) => {
    setInputId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPresentationId(inputId);
  };

  const slidesUrl = presentationId
    ? `https://docs.google.com/presentation/d/${presentationId}/embed?start=false&loop=false&delayms=3000`
    : "";

  return (
    <div className="relative flex flex-col transition-transform transform hover:scale-105 duration-300 items-center bg-gradient-to-r from-teal-400 to-blue-900 justify-center rounded-2xl w-85 h-full p-4">
      {/* Logo Section */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <img src={logo} alt="Logo" className="w-16 h-auto" />{" "}
        {/* Reduced size */}
      </div>

      <h2 className="text-white text-2xl font-semibold mb-4 mt-20">
        {" "}
        {/* Increased margin-top */}
        Google Slides Presentation
      </h2>

      <form onSubmit={handleSubmit} className="mb-4 w-full">
        <input
          type="text"
          value={inputId}
          onChange={handleInputChange}
          placeholder="Enter Google Slides Presentation ID"
          className="w-full px-3 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-300 ease-in-out transform hover:scale-105 mb-4"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md shadow-md hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
        >
          Load Presentation
        </button>
      </form>

      {presentationId && (
        <div className="w-full h-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mt-4">
          <iframe
            src={slidesUrl}
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
            title="Google Slides Presentation"
            className="rounded-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default GoogleSlidesWidget;
