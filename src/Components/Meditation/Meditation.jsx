// App.js
import React from 'react';
import YouTubePlayer from './YouTubePlayer';
import VideoSection from './VideoSection';
import Navbar from '../NavBar/nav';
import Footer from '../Footer/Footer';

const Mediatation = () => {
  
  
  const videos = [
    {
      title: 'Video 1',
      description: 'Description of Video 1',
      thumbnail: 'https://via.placeholder.com/300',
    },
    {
      title: 'Video 2',
      description: 'Description of Video 2',
      thumbnail: 'https://via.placeholder.com/300',
    },
    {
      title: 'Video 3',
      description: 'Description of Video 3',
      thumbnail: 'https://via.placeholder.com/300',
    },
    
    
  ];

  return (
    <div className="py-8 mx-auto " style={{  background: 'linear-gradient(135deg, #FFB6C1, #FFDAB9)'}}>
      <Navbar />
      <h1 className="mt-10 mb-8 text-4xl font-semibold text-center">
        Meditation
      </h1>
      <p className='m-5 text-xl font-medium text-center'>
      Meditation is the practice of allowing thoughts to come and go, as you learn to recognize and release them without judgment.
      </p>
      <YouTubePlayer videoId="VIDEO_ID_HERE" />
      <h2 className="m-10 my-8 text-2xl font-semibold">More Videos</h2>
      <VideoSection videos={videos} />
      
      <div className='m-10'>
         <Footer/>
      </div>
    </div>
    
  );
};

export default Mediatation;
