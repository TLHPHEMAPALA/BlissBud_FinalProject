
import React from 'react';

const VideoSection = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 gap-6 m-10 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md">
          <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-48 rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="text-gray-600">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSection;
