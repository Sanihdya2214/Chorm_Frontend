import React, { useState, useEffect } from "react";

const PollList = ({ polls, setPolls }) => {
  // State to keep track of which polls the user has voted on
  const [votedPolls, setVotedPolls] = useState({});

  useEffect(() => {
    // Load voted polls from local storage or initialize an empty object
    const storedVotes = JSON.parse(localStorage.getItem("votedPolls")) || {};
    setVotedPolls(storedVotes);
  }, []);

  const vote = async (pollId, optionIndex) => {
    // Check if user has already voted for this poll
    if (votedPolls[pollId]) {
      return; // User has already voted
    }

    // Make a POST request to register the vote
    await fetch("http://localhost:3000/api/Polls/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pollId, optionIndex }),
    });

    // Fetch updated polls and update state
    const response = await fetch("http://localhost:3000/api/Polls/polls");
    const updatedPolls = await response.json();
    setPolls(updatedPolls);

    // Update local state and store the voted poll
    setVotedPolls((prev) => ({ ...prev, [pollId]: true }));
    localStorage.setItem(
      "votedPolls",
      JSON.stringify({ ...votedPolls, [pollId]: true })
    );
  };

  return (
    <div className="space-y-4 transition-transform transform hover:scale-105 duration-300">
      {polls.map((poll) => (
        <div key={poll._id} className="bg-yellow-200 rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{poll.question}</h3>
            <div>
              <span className="text-sm text-gray-600">
                {poll.totalVotes} Votes
              </span>
              <span className="ml-4 text-sm text-gray-600">
                {new Date(poll.createdAt).toLocaleTimeString()}
              </span>
            </div>
          </div>
          <ul>
            {poll.options.map((option, index) => (
              <li key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{option}</span>
                  <span className="text-sm text-gray-600">
                    {poll.votes[index]} votes (
                    {((poll.votes[index] / poll.totalVotes) * 100).toFixed(1)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div
                    className="bg-red-400 h-4 rounded-full"
                    style={{
                      width: `${(poll.votes[index] / poll.totalVotes) * 100}%`,
                    }}
                  ></div>
                </div>
                <button
                  onClick={() => vote(poll._id, index)}
                  disabled={votedPolls[poll._id]} // Disable button if already voted
                  className={`mt-2 ${
                    votedPolls[poll._id]
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-700"
                  } text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-300`}
                >
                  {votedPolls[poll._id] ? "Already Voted" : "Vote"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PollList;
