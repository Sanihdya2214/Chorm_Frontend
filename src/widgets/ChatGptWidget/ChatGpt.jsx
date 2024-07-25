import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import { ClipLoader } from "react-spinners";

const ChatWidget = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);

  const handleSendMessage = async () => {
    setLoading(true); // Set loading to true when starting the request
    setTyping(false); // Set typing to false when starting the request
    setResponse(""); // Clear previous response
    try {
      const res = await fetch("http://localhost:3000/api/ChatGpt/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error: ${errorData.error.message || res.statusText}`);
      }

      const data = await res.json();
      setResponse(data.generations[0].text);
      setError("");
      setTyping(true); // Start typing effect
    } catch (error) {
      console.error("Error sending message:", error);
      setError(
        "Failed to send message. Please check your API quota and try again."
      );
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-400 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FaRobot size={40} className="text-green-500 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">ChatGPT Widget</h2>
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Type your message here..."
      />
      <button
        onClick={handleSendMessage}
        className={`px-4 py-2 text-white rounded ${
          loading ? "bg-gray-500" : "bg-green-500"
        } `}
        disabled={loading} // Disable the button while loading
      >
        {loading ? <ClipLoader size={20} color="#ffffff" /> : "Send"}
      </button>
      {error && (
        <div className="mt-4 p-2 border border-red-500 rounded bg-red-100">
          <p className="text-red-800">{error}</p>
        </div>
      )}
      {typing && (
        <div className="mt-4 p-2 border border-gray-300 rounded bg-gray-200">
          <ReactTypingEffect
            text={response}
            speed={50}
            eraseDelay={500000} // Prevent it from erasing the text
            displayTextRenderer={(text) => {
              return <p className="text-gray-800">{text}</p>;
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
