import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <h1 className='mb-3 text-2xl font-semibold text-white'>BlissBud</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <Link to="/dashboard" className="px-2 py-3 text-xl font-medium text-white rounded-md hover:bg-gray-700">Home</Link>
              <Link to="/music" className="px-2 py-3 text-xl font-medium text-white rounded-md hover:bg-gray-700">Music</Link>
              <Link to="/meditation" className="px-2 py-3 text-xl font-medium text-white rounded-md hover:bg-gray-700">Meditation</Link>
              <Link to="/contact" className="px-2 py-3 text-xl font-medium text-white rounded-md hover:bg-gray-700">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
