import React, { useState } from 'react';
import googleMeetLogo from '../../assests/google-meet-icon.png'; // Ensure the path is correct

const GoogleMeetWidget = () => {
  const [meetLink, setMeetLink] = useState('');
  const [meetID, setMeetID] = useState('');

  const handleLinkChange = (e) => {
    setMeetLink(e.target.value);
  };

  const handleIDChange = (e) => {
    setMeetID(e.target.value);
  };

  const generateMeetLink = () => {
    if (meetID) {
      setMeetLink(`https://meet.google.com/${meetID}`);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r from-blue-500 to-blue-900 shadow-xl rounded-2xl overflow-hidden my-6">
      <div className="px-8 py-6">
        <div className="flex items-center mb-6">
          <img src={googleMeetLogo} alt="Google Meet" className="w-10 h-10 mr-3" />
          <h2 className="text-3xl font-semibold text-white">Google Meet</h2>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter Google Meet link"
            value={meetLink}
            onChange={handleLinkChange}
            className="border border-gray-300 rounded-full px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter Meeting ID"
            value={meetID}
            onChange={handleIDChange}
            className="border border-gray-300 rounded-full px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <button
          onClick={generateMeetLink}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full mb-6 w-full transition duration-200 ease-in-out transform hover:scale-105"
        >
          Generate Link
        </button>
        {meetLink && (
          <a
            href={meetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-white bg-green-500 hover:bg-green-600 rounded-full px-6 py-3 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Join Meeting
          </a>
        )}
      </div>
    </div>
  );
};

export default GoogleMeetWidget;