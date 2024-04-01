
import React from 'react';

const YouTubePlayer = ({ videoId }) => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;
