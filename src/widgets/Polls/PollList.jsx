import React from "react";

const PollList = ({ polls, setPolls }) => {
  const vote = async (pollId, optionIndex) => {
    await fetch("http://localhost:3000/api/Polls/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pollId, optionIndex }),
    });

    const response = await fetch("http://localhost:3000/api/Polls/polls");
    const updatedPolls = await response.json();
    setPolls(updatedPolls);
  };

  return (
    <div className="space-y-4">
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
                  className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                >
                  Vote
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
