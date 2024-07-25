import React, { useState } from "react";

const PollForm = ({ addPoll }) => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const createPoll = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/Polls/createPoll",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
            options: [option1, option2],
            createdBy,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const poll = await response.json();
      addPoll(poll);
      setQuestion("");
      setOption1("");
      setOption2("");
      setCreatedBy("");
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  return (
    <form
      onSubmit={createPoll}
      className="bg-gray-500 shadow-lg rounded-lg p-8 mb-8 transition-transform transform hover:scale-105 duration-300"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Create a New Poll
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="question"
        >
          Question
        </label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-300"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="option1"
        >
          Option 1
        </label>
        <input
          type="text"
          id="option1"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-300"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="option2"
        >
          Option 2
        </label>
        <input
          type="text"
          id="option2"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-300"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="createdBy"
        >
          Created By
        </label>
        <input
          type="text"
          id="createdBy"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-300"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
      >
        Create Poll
      </button>
    </form>
  );
};

export default PollForm;
