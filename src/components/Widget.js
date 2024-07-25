import React from 'react';

const Widget = ({ title, content }) => {
  return (
    <div className="widget bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Widget;
