import { useState } from "react";

const useWidgetManager = () => {
  const [showPomodoro, setShowPomodoro] = useState(true);
  const [showMusic, setShowMusic] = useState(true);
  const [showGoogleMeet, setShowGoogleMeet] = useState(true);
  const [showWeather, setShowWeather] = useState(true);
  const [showCalender, setShowCalender] = useState(true);
  const [showGoogleSlide, setShowGoogleSlide] = useState(true);
  const [showIssueTracker, setShowIssueTracker] = useState(true);
  const [showGoogleKeep, setShowGoogleKeep] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [widgetToRemove, setWidgetToRemove] = useState(null);
  const [widgetToReenable, setWidgetToReenable] = useState(null);

  const openDropdown = (event) => {
    event.preventDefault();  // Prevent default behavior
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRemoveWidget = () => {
    switch (widgetToRemove) {
      case "Pomodoro":
        setShowPomodoro(false);
        break;
      case "Music":
        setShowMusic(false);
        break;
      case "Issue-Tracker":
        setShowIssueTracker(false);
        break;
      case "Google Meet":
        setShowGoogleMeet(false);
        break;
      case "Google Keep":
        setShowGoogleKeep(false);
        break;
      case "Weather":
        setShowWeather(false);
        break;
      case "Calender":
        setShowCalender(false);
        break;
      case "Google-Slide":
        setShowGoogleSlide(false);
        break;
      default:
        break;
    }
    setWidgetToRemove(null);
  };

  const handleReenableWidget = () => {
    switch (widgetToReenable) {
      case "Pomodoro":
        setShowPomodoro(true);
        break;
      case "Music":
        setShowMusic(true);
        break;
      case "Issue-Tracker":
        setShowIssueTracker(true);
        break;
      case "Google Meet":
        setShowGoogleMeet(true);
        break;
      case "Google Keep":
        setShowGoogleKeep(true);
        break;
      case "Weather":
        setShowWeather(true);
        break;
      case "Calender":
        setShowCalender(true);
        break;
      case "Google-Slide":
        setShowGoogleSlide(true);
        break;
      default:
        break;
    }
    setWidgetToReenable(null);
  };

  return {
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
  };
};

export default useWidgetManager;
