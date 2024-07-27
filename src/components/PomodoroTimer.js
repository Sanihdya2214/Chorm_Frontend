import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(1500); 
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      if (!isBreak) {
        setTime(300); // 5 minutes break
      } else {
        setTime(1500); // 25 minutes work
      }
      setIsBreak(!isBreak);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime(isBreak ? 300 : 1500);
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div className="relative transition-transform transform hover:scale-105 duration-300 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center w-70 h-96">
      <h2
        className={`text-3xl font-bold mb-4 ${
          isBreak ? "text-yellow-300" : "text-white"
        }`}
      >
        {isBreak ? "Break Time" : "Work Time"}
      </h2>
      <div className="text-6xl font-mono text-white mb-6">
        {formatTime(time)}
      </div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={toggleTimer}
          className={`bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg ${
            isActive ? "bg-indigo-600" : ""
          }`}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold  py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          Reset
        </button>
      </div>
      <p className="absolute mb-2 bottom-4 text-3xl text-white font-semibold">
        Pomodoro Timer
      </p>
    </div>
  );
};

export default PomodoroTimer;
