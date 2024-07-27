import React, { useState, useEffect } from "react";
import PomodoroTimer from "./components/PomodoroTimer";
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
import DailyGrowthChecklist from "./widgets/DGC/DailyGrowth";
import TimeWidget from "./widgets/Time/Real_Time";
import AnnouncementBoard from "./widgets/Annoucements/Announcements";
//import PollForm from "./widgets/Polls/Pollform";



// Importing the background image
import backgroundImage from "./assests/Bg_image.jpeg"; // Adjust the path as needed
import GoogleFormWidget from "./widgets/GoogleFomWidget/GoogleFormWidget";

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
    showGoogleForm,
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
      console.log("This is my data", data);
      setPolls(data);
    };

    fetchPolls();
  }, []);

  const addPoll = (newPoll) => {
    setPolls([...polls, newPoll]);
  };

  return (
    <div
      className="min-h-screen p-6 flex bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-1/4 mt-8 flex flex-col mr-8">
        <TimeWidget />
        <QuoteOfTheDay />
        <AnnouncementBoard />
      </div>

      {/* Right Container */}
      <div className="w-3/4 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              openDropdown(e);
            }}
            className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-full shadow-lg text-xl transition-transform transform hover:scale-105"
          >
            Manage Widgets
          </button>
        </div>
        {isDropdownOpen && (
          <div className="absolute top-16 right-6 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white shadow-lg rounded-lg overflow-hidden z-10 p-2">
            <div className="flex flex-col space-y-2">
              <h3 className="text-md font-semibold mb-1 border-b border-gray-300 pb-1">
                Disable Widget
              </h3>
              {showPomodoro && (
                <button
                  onClick={() => setWidgetToRemove("Pomodoro")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Pomodoro Timer
                </button>
              )}
              {showMusic && (
                <button
                  onClick={() => setWidgetToRemove("Music")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Music Widget
                </button>
              )}
              {showIssueTracker && (
                <button
                  onClick={() => setWidgetToRemove("Issue-Tracker")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Issue Tracker Widget
                </button>
              )}
              {showGoogleMeet && (
                <button
                  onClick={() => setWidgetToRemove("Google Meet")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Google Meet Widget
                </button>
              )}
              {showGoogleKeep && (
                <button
                  onClick={() => setWidgetToRemove("Google Keep")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Google Keep Widget
                </button>
              )}
              {showWeather && (
                <button
                  onClick={() => setWidgetToRemove("Weather")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Weather Widget
                </button>
              )}
              {showCalender && (
                <button
                  onClick={() => setWidgetToRemove("Calender")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Calender Widget
                </button>
              )}
              {showGoogleSlide && (
                <button
                  onClick={() => setWidgetToRemove("Google-Slide")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable GoogleSlide Widget
                </button>
              )}
              {showGoogleForm && (
                <button
                  onClick={() => setWidgetToRemove("Google-Form")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Disable Google Form Widget
                </button>
              )}
              {widgetToRemove && (
                <button
                  onClick={handleRemoveWidget}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-1 rounded-lg mt-1 transition-transform transform hover:scale-105"
                >
                  Confirm Disable
                </button>
              )}
              <h3 className="text-md font-semibold mt-2 mb-1 border-b border-gray-300 pb-1">
                Re-enable Widget
              </h3>
              {!showPomodoro && (
                <button
                  onClick={() => setWidgetToReenable("Pomodoro")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Pomodoro Timer
                </button>
              )}
              {!showMusic && (
                <button
                  onClick={() => setWidgetToReenable("Music")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Music Widget
                </button>
              )}
              {!showIssueTracker && (
                <button
                  onClick={() => setWidgetToReenable("Issue-Tracker")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Issue Tracker Widget
                </button>
              )}
              {!showGoogleMeet && (
                <button
                  onClick={() => setWidgetToReenable("Google Meet")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Google Meet Widget
                </button>
              )}
              {!showGoogleKeep && (
                <button
                  onClick={() => setWidgetToReenable("Google Keep")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Google Keep Widget
                </button>
              )}
              {!showWeather && (
                <button
                  onClick={() => setWidgetToReenable("Weather")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Weather Widget
                </button>
              )}
              {!showCalender && (
                <button
                  onClick={() => setWidgetToReenable("Calender")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Calender Widget
                </button>
              )}
              {!showGoogleSlide && (
                <button
                  onClick={() => setWidgetToReenable("Google-Slide")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable GoogleSlide Widget
                </button>
              )}
              {!showGoogleForm && (
                <button
                  onClick={() => setWidgetToReenable("Google-Form")}
                  className="w-full px-3 py-1 text-left bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg transition-transform transform hover:scale-105"
                >
                  Re-enable Google Form Widget
                </button>
              )}
              {widgetToReenable && (
                <button
                  onClick={handleReenableWidget}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-1 rounded-lg mt-1 transition-transform transform hover:scale-105"
                >
                  Confirm Re-enable
                </button>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {showPomodoro && (
            <div className="rounded-lg shadow-md justify-center">
              <PomodoroTimer />
            </div>
          )}
          {showMusic && (
            <div className="rounded-lg shadow-md">
              <MusicWidget />
            </div>
          )}
          {showGoogleMeet && (
            <div className="rounded-lg shadow-md">
              <GoogleMeetWidget />
            </div>
          )}
          {showWeather && (
            <div className="rounded-lg shadow-md">
              <WeatherWidget />
            </div>
          )}
          {showCalender && (
            <div className="rounded-lg shadow-md">
              <GoogleCalenderWidget />
            </div>
          )}
          {showGoogleSlide && (
            <div className="rounded-lg shadow-md ">
              <GoogleSlidesWidget />
            </div>
          )}
          {showGoogleKeep && (
            <div className="rounded-lg shadow-md">
              <GoogleKeepWidget />
            </div>
          )}
          {showIssueTracker && (
            <div className="rounded-lg shadow-md">
              <IssueTrackerWidget />
            </div>
          )}
          {showGoogleForm && (
            <div className="rounded-lg shadow-md">
              <GoogleFormWidget />
            </div>
          )}
          <div className="rounded-lg shadow-md">
            <PollList polls={polls} setPolls={setPolls} />
          </div>
          <div className="rounded-lg shadow-md">
            <ChatWidget className="h-64" />
          </div>
          <div className="rounded-lg shadow-md">
            <DailyGrowthChecklist className="h-64" />
          </div>
          {/* <div className="rounded-lg shadow-md">
            <PollForm addPoll={addPoll} className="h-64" />
          </div> */}
          
        </div>
      </div>
    </div>
  );

};

export default App;