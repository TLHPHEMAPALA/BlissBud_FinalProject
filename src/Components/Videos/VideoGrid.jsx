import React from 'react';

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{  background: 'linear-gradient(150deg, #4682B4, #fffff0'}}>
      {videos.map((video, index) => (
        <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md">
          <img src={video.thumbnailUrl} alt={video.title} className="object-cover w-full h-48" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
