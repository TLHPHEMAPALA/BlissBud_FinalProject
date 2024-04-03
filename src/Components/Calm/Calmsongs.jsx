import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/nav';
import Footer from '../Footer/Footer';

const Clam = () => {
  const [clamVideos] = useState([
    'https://www.youtube.com/embed/eKbfUtLoQwE?si=AY2lqpf0geeCNTZs',
    'https://www.youtube.com/embed/oPDoQhK72L0?si=WFu04XIlT7HB9LcN',
    'https://www.youtube.com/embed/oPDoQhK72L0?si=WFu04XIlT7HB9LcN',
    
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

 
  const playNextVideo = () => {
    setCurrentVideoIndex(prevIndex => (prevIndex + 1) % clamVideos.length);
  };

  return (
    <div className="w-full p-10" style={{ background: 'linear-gradient(120deg, #4681A0, #fffff0)' }}>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full">
       
        {clamVideos.length > 0 && (
          <div className="p-4 m-4 bg-gray-200 rounded-lg" >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Clam Video"
                width="560"
                height="315"
                src={clamVideos[currentVideoIndex]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                onLoad={playNextVideo}
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Clam;
