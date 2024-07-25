import React, { useState } from "react";
import "tailwindcss/tailwind.css";

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
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Google Slides Presentation
      </h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputId}
          onChange={handleInputChange}
          placeholder="Enter Google Slides Presentation ID"
          className="w-full px-3 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out transform hover:scale-105 mb-4"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Load Presentation
        </button>
      </form>

      {presentationId && (
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mt-4">
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
