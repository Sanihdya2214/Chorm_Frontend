// src/App.js
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  const [issue, setIssue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const response = await fetch(
        "http://localhost:3000/api/Issues/submit-issue",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ issue }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        setIssue("");
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage("Error submitting issue. Please try again later.");
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        Issue Tracker
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="issue" className="block text-white font-medium mb-2">
            Issue:
          </label>
          <input
            type="text"
            id="issue"
            className="w-full px-3 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out transform hover:scale-105"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center text-white">{message}</p>}
    </div>
  );
};

export default App;
