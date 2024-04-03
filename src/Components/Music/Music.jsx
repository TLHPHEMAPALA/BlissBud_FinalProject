import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../NavBar/nav';
import axios from 'axios';
import Footer from '../Footer/Footer';

const Music = () => {
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [emotion, setEmotion] = useState('');
  const [currentSong, setCurrentSong] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');

  useEffect(() => {
    let intervalId;

    if (cameraOn) {
      intervalId = setInterval(() => {
        captureImage();
      }, 10000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [cameraOn]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraOn(true);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => {
      track.stop();
    });

    videoRef.current.srcObject = null;
    setCameraOn(false);
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      const file = new File([blob], 'image.png', { type: 'image/png' });

      predictEmotion(file);
    }, 'image/png');
  };

  const predictEmotion = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8002/predict_emotion', formData);
      console.log(response.data.predicted_emotion);
      setEmotion(response.data.predicted_emotion);

      // Load and play media based on predicted emotion
      switch (response.data.predicted_emotion) {
        case 'happy':
          loadMedia('https://www.youtube.com/embed/mgSRJyhzlOY?si=dNqTBjcTEVgEbIw7', 'https://www.youtube.com/embed/mgSRJyhzlOY?si=dNqTBjcTEVgEbIw7');
          break;
        case 'sad':
          loadMedia('https://www.youtube.com/embed/pPH2zrX4-iQ?si=ilfW_Zj03o6YNbsZ', 'https://www.youtube.com/embed/pPH2zrX4-iQ?si=ilfW_Zj03o6YNbsZ');
          break;
        case 'angry':
          loadMedia('https://www.youtube.com/embed/pPH2zrX4-iQ?si=ilfW_Zj03o6YNbsZ', 'https://www.youtube.com/embed/pPH2zrX4-iQ?si=ilfW_Zj03o6YNbsZ');
          break;
        default:
          console.log('No emotion detected.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const loadMedia = (songPath, videoLink) => {
    setCurrentSong(songPath);
    setCurrentVideo(videoLink);
    playMedia(songPath);
  };

  const playMedia = (mediaPath) => {
    const media = new Audio(mediaPath);
    media.play();
  };

  return (
    <div className="w-full p-10" style={{ background: 'linear-gradient(120deg, #4681A0, #fffff0)' }}>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="p-8 mt-4 text-4xl font-semibold text-gray-800">
          Wanna sync with your fav music?
        </h1>

        <div className="overflow-hidden border-4 border-gray-600 rounded-lg">
          <video ref={videoRef} className="w-full" autoPlay></video>
        </div>
        {cameraOn ? (
          <button
            onClick={stopCamera}
            className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Turn off Camera
          </button>
        ) : (
          <button
            onClick={startCamera}
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Start Camera
          </button>
        )}
      </div>
      <div className='flex justify-center w-full'>
        Your Emotion : {emotion}
      </div>
      
      <div className="flex justify-center w-full">
        {currentVideo && (
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
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Music;
