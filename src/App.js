import React, { useState, useEffect } from "react";
import PomodoroTimer from "./components/PomodoroTimer";
import PollForm from "./widgets/Polls/Pollform";
import PollList from "./widgets/Polls/PollList";
import WeatherWidget from "./widgets/Weather/Weather";
import GoogleMeetWidget from "./widgets/GoogleMeet/Meet_Widget";
import GoogleSlidesWidget from "./widgets/Google_Slide/Google_Slide_Url";
import GoogleCalenderWidget from "./widgets/Calender/Google_Calender";
import GoogleKeepWidget from "./widgets/GoogleKeepWidget/GoogleKeepWidget";
import MusicWidget from "./components/MusicWidget/MusicWidget";
import QuoteOfTheDay from "./widgets/QuoteOfTheDay/Quote";
import IssueTrackerWidget from "./widgets/IssueTrackerWidget/IssueTrackerWidget";
import ChatWidget from "./widgets/ChatGptWidget/ChatGpt";
import useWidgetManager from "./Hooks/ManageWidgetHook";

const App = () => {
  const {
    showPomodoro,
    showMusic,
    showGoogleMeet,
    showWeather,
    showCalender,
    showGoogleSlide,
    showIssueTracker,
    showGoogleKeep,
    isDropdownOpen,
    widgetToRemove,
    widgetToReenable,
    setWidgetToRemove,
    setWidgetToReenable,
    handleRemoveWidget,
    handleReenableWidget,
    openDropdown,
  } = useWidgetManager();

  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      const response = await fetch("http://localhost:3000/api/Polls/polls");
      const data = await response.json();
      setPolls(data);
    };

    fetchPolls();
  }, []);

  const addPoll = (newPoll) => {
    setPolls([...polls, newPoll]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-400 to-gray-600 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              openDropdown(e);
            }}
            className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Manage Widgets
          </button>
        </div>
        {isDropdownOpen && (
          <div className="absolute top-16 right-6 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white shadow-lg rounded-lg overflow-hidden z-10 p-4">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold mb-2 border-b border-gray-300 pb-2">
                Disable Widget
              </h3>
              {showPomodoro && (
                <button
                  onClick={() => setWidgetToRemove("Pomodoro")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Pomodoro Timer
                </button>
              )}
              {showMusic && (
                <button
                  onClick={() => setWidgetToRemove("Music")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Music Widget
                </button>
              )}
              {showIssueTracker && (
                <button
                  onClick={() => setWidgetToRemove("Issue-Tracker")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Issue Tracker Widget
                </button>
              )}
              {showGoogleMeet && (
                <button
                  onClick={() => setWidgetToRemove("Google Meet")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Google Meet Widget
                </button>
              )}
              {showGoogleKeep && (
                <button
                  onClick={() => setWidgetToRemove("Google Keep")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Google Keep Widget
                </button>
              )}
              {showWeather && (
                <button
                  onClick={() => setWidgetToRemove("Weather")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Weather Widget
                </button>
              )}
              {showCalender && (
                <button
                  onClick={() => setWidgetToRemove("Calender")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Calender Widget
                </button>
              )}
              {showGoogleSlide && (
                <button
                  onClick={() => setWidgetToRemove("Google-Slide")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable GoogleSlide Widget
                </button>
              )}
              {widgetToRemove && (
                <button
                  onClick={handleRemoveWidget}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 rounded-lg mt-2 transition-transform transform hover:scale-105"
                >
                  Confirm Disable
                </button>
              )}

              <h3 className="text-lg font-semibold mt-4 mb-2 border-b border-gray-300 pb-2">
                Re-enable Widget
              </h3>
              {!showPomodoro && (
                <button
                  onClick={() => setWidgetToReenable("Pomodoro")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Pomodoro Timer
                </button>
              )}
              {!showMusic && (
                <button
                  onClick={() => setWidgetToReenable("Music")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Music Widget
                </button>
              )}
              {!showIssueTracker && (
                <button
                  onClick={() => setWidgetToReenable("Issue-Tracker")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Issue Tracker Widget
                </button>
              )}
              {!showGoogleMeet && (
                <button
                  onClick={() => setWidgetToReenable("Google Meet")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Google Meet Widget
                </button>
              )}
              {!showGoogleKeep && (
                <button
                  onClick={() => setWidgetToReenable("Google Keep")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Google Keep Widget
                </button>
              )}
              {!showWeather && (
                <button
                  onClick={() => setWidgetToReenable("Weather")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Weather Widget
                </button>
              )}
              {!showCalender && (
                <button
                  onClick={() => setWidgetToReenable("Calender")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Calender Widget
                </button>
              )}
              {!showGoogleSlide && (
                <button
                  onClick={() => setWidgetToReenable("Google-Slide")}
                  className="w-full px-4 py-2 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable GoogleSlide Widget
                </button>
              )}
              {widgetToReenable && (
                <button
                  onClick={handleReenableWidget}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 rounded-lg mt-2 transition-transform transform hover:scale-105"
                >
                  Confirm Re-enable
                </button>
              )}
            </div>
          </div>
        )}
        <div className="mt-8">
          <QuoteOfTheDay />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {showPomodoro && (
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
              <PomodoroTimer />
            </div>
          )}
          {showMusic && (
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
              <MusicWidget />
            </div>
          )}
          {showGoogleMeet && (
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
              <GoogleMeetWidget />
            </div>
          )}
          {showWeather && (
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
              <WeatherWidget />
            </div>
          )}
          {showCalender && (
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
              <GoogleCalenderWidget />
            </div>
          )}
          {showGoogleSlide && (
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
              <GoogleSlidesWidget />
            </div>
          )}
          {showGoogleKeep && (
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
              <GoogleKeepWidget />
            </div>
          )}
          {showIssueTracker && (
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
              <IssueTrackerWidget />
            </div>
          )}

          <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
            <PollForm addPoll={addPoll} />
          </div>
        </div>
        <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md">
          <PollList polls={polls} setPolls={setPolls} />
        </div>

        <div className="mt-8">
          <ChatWidget className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default App;
