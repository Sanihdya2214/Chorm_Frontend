import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
      {children}
    </div>
  );
};

export default Card;
