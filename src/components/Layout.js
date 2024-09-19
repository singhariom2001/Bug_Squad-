import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Taylor & Francis Group</h1>
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-2">
              <Link to="/" className="text-blue-600 hover:text-blue-800">Licenses</Link> {/* Update href to Link */}
            </li>
            <li>
              <Link to="/account-details" className="text-gray-700 hover:text-gray-900">Account Details</Link> {/* Placeholder for another route */}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
