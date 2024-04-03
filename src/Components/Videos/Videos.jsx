import React from 'react';

const Videos = ({ currentVideo }) => {
  return (
    <div className="p-4 m-4 bg-gray-200 rounded-lg">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={currentVideo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Videos;
