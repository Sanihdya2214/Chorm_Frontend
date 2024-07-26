import React from "react";

const GoogleCalendarWidget = () => {
  // Hard-coded Calendar ID for testing
  const calendarId = "sanidhyaagarwal16%40gmail.com&ctz=Asia%2FKolkata";
  const calendarUrl = `https://calendar.google.com/calendar/embed?src=${calendarId}`;

  return (
    <div className="p-4 max-w-4xl mx-auto bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-xl rounded-2xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Google Calendar Widget
      </h2>
      <div className="rounded-lg overflow-hidden h-96">
        <iframe
          src={calendarUrl}
          frameBorder="0"
          width="100%"
          height="100%"
          scrolling="yes"
          title="Google Calendar"
          className="rounded-lg h-full transition-transform transform hover:scale-105 duration-300"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleCalendarWidget;
