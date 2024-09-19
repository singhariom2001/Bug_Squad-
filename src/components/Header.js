// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Licenses</h2>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Hi, Bug Squad</span>
        <button className="relative">
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          <i className="fas fa-bell"></i>
        </button>
        <button>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
