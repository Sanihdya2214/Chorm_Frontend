import React, { useState } from "react";

const GoogleFormWidget = () => {
  const [formUrl, setFormUrl] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e) => {
    setFormUrl(e.target.value);
  };

  const handleSubmit = () => {
    if (formUrl) {
      setIsFormVisible(true);
    }
  };

  const handleCreateNewForm = () => {
    window.open("https://forms.google.com", "_blank");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-lg flex flex-col h-full transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-2xl font-bold mb-4">Google Form</h2>
      <input
        type="text"
        placeholder="Enter Google Form URL"
        value={formUrl}
        onChange={handleInputChange}
        className="bg-blue-900 text-white p-2 rounded-lg mb-4 w-full transition duration-300 ease-in-out transform hover:scale-105"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-4"
      >
        Load Form
      </button>
      <button
        onClick={handleCreateNewForm}
        className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded-lg"
      >
        Create New Form
      </button>
      {isFormVisible && formUrl && (
        <iframe
          src={formUrl}
          title="Google Form"
          className="mt-4 w-full h-full border-none rounded-lg"
        ></iframe>
      )}
    </div>
  );
};

export default GoogleFormWidget;
