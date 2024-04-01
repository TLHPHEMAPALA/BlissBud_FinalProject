import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/nav'; 
import sideImage from '../../Assests/Dashboard.png'; 
import './style.css';
import Content from '../Article/Article';
import ContentTwo from '../Article/ArticleTwo';
import Footer from '../Footer/Footer';


export default function Dashboard() {
  return (
    <div className='p-10' style={{  background: 'linear-gradient(135deg, #FFB6C1, #FFDAB9)'}}>
      <Navbar/>
      <Content/>
      <div className="flex items-center justify-center h-screen page " >
        <div className="flex flex-col items-center justify-center w-1/2 ">
          <h1 className="mb-8 text-5xl font-bold text-white ">What do u want to try ?</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center justify-center w-48 h-48 text-xl font-semibold text-white transition duration-300 bg-blue-400 rounded-lg shadow-md card hover:bg-blue-500">
            <Link to="/Music" className="px-4 py-3 text-xl font-medium text-center text-white rounded-md hover:text-center">Wanna hear nice music ?</Link>
            </div>
           
            <div className="flex items-center justify-center w-48 h-48 p-5 text-xl font-semibold text-white transition duration-300 bg-green-400 rounded-lg shadow-md card hover:bg-green-500">
            <Link to="/Videos" className="px-2 py-3 text-xl font-medium text-white rounded-md hover:bg-gray-700">Video</Link>
              
            </div>
            <div className="flex items-center justify-center w-48 h-48 p-5 text-xl font-semibold text-white transition duration-300 bg-yellow-400 rounded-lg shadow-md card hover:bg-yellow-500">
            <Link to="/Meditation" className="px-2 py-3 text-xl font-medium text-white rounded-md hover:bg-gray-700">Meditation</Link>
            </div>
            <div className="flex items-center justify-center w-48 h-48 text-xl font-semibold text-white transition duration-300 bg-red-400 rounded-lg shadow-md card hover:bg-red-500">
            <Link to="/Contact" className="px-2 py-3 text-xl font-medium text-white rounded-md hover:bg-gray-700">Contact </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 ">
          <img src={sideImage} alt="Side Image" className="h-auto w-[1000px] " />
        </div>
      </div>
      <ContentTwo/>
      <Footer/>
    </div>
  );
}
