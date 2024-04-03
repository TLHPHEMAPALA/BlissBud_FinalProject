import React, { useState } from 'react';

export default function Content() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="p-8 bg-gray-200 rounded-lg shadow-md"
      style={{
        background: 'linear-gradient(150deg, #4685B4, #fffff2)',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-6 text-center">
        <h2 className="text-5xl font-bold text-gray-800">
          Mental <span className="text-indigo-600">Health</span>
        </h2>
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-700">
          Take your time,{' '}
          <span className="text-indigo-600">healing</span>, as long as you
          want. <br /> Nobody else knows what you’ve been through. How could
          they know how long it will take to heal you?
        </p>
      </div>
      <div className="py-5 text-center">
        <p className="text-xl text-gray-700">
          This place is dedicated to helping you free yourself from unwanted
          thought on your mind and strengthen your mental health.
        </p>
      </div>
    </div>
  );
}
