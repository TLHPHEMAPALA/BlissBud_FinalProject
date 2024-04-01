import React, { useState } from 'react';
import VideoGrid from './VideoGrid';

const videos = [
  {
    id: 1,
    thumbnailUrl: 'https://via.placeholder.com/300',
    title: 'Video Title 1',
    description: 'Description of Video 1'
  },
  {
    id: 2,
    thumbnailUrl: 'https://via.placeholder.com/300',
    title: 'Video Title 2',
    description: 'Description of Video 2'
  },
  {
    id: 3,
    thumbnailUrl: 'https://via.placeholder.com/300',
    title: 'Video Title 2',
    description: 'Description of Video 2'
  },
  {
    id: 4,
    thumbnailUrl: 'https://via.placeholder.com/300',
    title: 'Video Title 2',
    description: 'Description of Video 2'
  },
  {
    id: 5,
    thumbnailUrl: 'https://via.placeholder.com/300',
    title: 'Video Title 2',
    description: 'Description of Video 2'
  },
  
];

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('title'); 

 
  const filterVideos = (video) => {
    if (!searchTerm) return true; 
    if (filterOption === 'title') {
      return video.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterOption === 'description') {
      return video.description.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  };

  return (
    <div className='p-10' style={{  background: 'linear-gradient(135deg, #FFB6C1, #FFDAB9)'}}>
      <h1 className="mb-4 text-2xl font-bold"></h1>
      <input
        type="text"
        placeholder="Search videos..."
        className="p-2 mb-4 border border-gray-300 rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="p-2 m-4 border border-gray-300 rounded-md "
        value={filterOption}
        onChange={(e) => setFilterOption(e.target.value)}
      >
        <option value="title">Title</option>
        <option value="description">Description</option>
      </select>
      <VideoGrid videos={videos} filterFunc={filterVideos} />
    </div>
  );
};

export default Videos;
