import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full mb-4 md:w-1/4 md:mb-0">
            <h2 className="mb-4 text-xl font-bold">About BlissBud</h2>
            <p>Wheather you're feeling sad , anxious or stressed Blissbud brings you  effective programs to help ypu take control of your feelings and thoughts.</p>
          </div>
          <div className="w-full mb-4 md:w-1/4 md:mb-0">
            <h2 className="mb-4 text-xl font-bold">Links</h2>
            <ul className='flex flex-col '>
            <Link to="dashboard" className="px-2 text-white rounded-md hover:bg-gray-700">Home</Link>
              <Link to="/music" className="px-2 text-white rounded-md hover:bg-gray-700">Music</Link>
              <Link to="/meditation" className="px-2 text-white rounded-md hover:bg-gray-700">Meditation</Link>
              <Link to="/videos" className="px-2 text-white rounded-md hover:bg-gray-700">Contact</Link>
            </ul>
          </div>
          <div className="w-full mb-4 md:w-1/4 md:mb-0">
            <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
            <p>University of Sri Jayewardenepura</p>
            <p>Email: as2020909@sci.sjp.ac.lk</p>
            <p>Phone: +94 75 64 10 375</p>
          </div>
        </div>
        <div className="mt-20 text-sm text-center ">
          <p>&copy; 2024 Hiruni Liyanage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
