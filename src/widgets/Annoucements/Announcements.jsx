import React from "react";
import "../../index.css";

const AnnouncementBoard = () => {
  const [announcements, setAnnouncements] = React.useState([
    "🎉 Our new product is launching soon!",
    "🚀 Check out our latest blog post.",
    "💡 Join our upcoming webinar on React.",
    "🔧 Maintenance scheduled for this weekend.",
    "📅 Don't miss our company retreat next month!",
    "🏆 Congratulations to the team for winning the award!",
    "🌐 We're expanding our services to new regions.",
    "🎯 New features are coming in the next update.",
    "📣 Follow us on social media for the latest news.",
    "🎓 Enroll in our training programs to enhance your skills.",
    "🌟 We're hiring! Check out our careers page for openings.",
    "🔔 Stay tuned for our annual report release next week.",
  ]);

  return (
    <div className="relative flex flex-col h-full">
      {/* Heading Section */}
      <div className="bg-red-600 text-white p-4 text-center rounded-lg mb-4">
        <h2 className="text-2xl font-bold">Announcements</h2>
      </div>

      {/* Scrolling Announcements Section */}
      <div className="flex-1 overflow-hidden relative bg-black bg-opacity-0 rounded-lg shadow-lg p-4">
        <div className="announcement-content animate-marquee-vertical">
          {announcements.map((announcement, index) => (
            <div key={index} className="flex items-center mb-6">
              <span className="text-red-500 text-2xl mr-2">★</span>
              <div className="bg-gradient-to-r from-red-300 via-yellow-300 to-orange-300 text-red-600 rounded-lg p-4 shadow-md text-lg">
                {announcement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBoard;
