import React, { useState, useEffect } from "react";

const TimeWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const formatDate = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${dayName}, ${monthName} ${day}, ${year}`;
  };

  return (
    <div className="flex flex-col items-center justify-center transition-transform transform hover:scale-105 duration-300">
      <span className="text-7xl font-semibold text-gray-800 mb-2">
        {formatTime(time)}
      </span>
      <span className="text-3xl text-gray-800">{formatDate(time)}</span>
    </div>
  );
};

export default TimeWidget;
