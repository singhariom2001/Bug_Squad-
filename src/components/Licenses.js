import React, { useState, useRef, useEffect } from 'react';
import MOCK_DATA from '../MOCK_DATA.json';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Licenses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [licensesPerPage] = useState(10);
  const [licenses, setLicenses] = useState(MOCK_DATA);
  const [showOptionsIndex, setShowOptionsIndex] = useState(null); // State for showing options
  const navigate = useNavigate(); // Initialize navigate
  const optionsRef = useRef(null); // Ref for the options dropdown

  // Calculate index range for pagination
  const indexOfLastLicense = currentPage * licensesPerPage;
  const indexOfFirstLicense = indexOfLastLicense - licensesPerPage;
  const currentLicenses = licenses.slice(indexOfFirstLicense, indexOfLastLicense);

  const totalLicenses = licenses.length;
  const totalPages = Math.ceil(totalLicenses / licensesPerPage);

  // Function to handle creating a new license or editing an existing one
  const handleCreateOrEdit = (license = null) => {
    if (license) {
      // If editing an existing license, navigate to the edit route with the license ID
      navigate(`/license/edit/${license.Order_no}`);
    } else {
      // If creating a new license, navigate to the new license route
      navigate('/license/new');
    }
  };

  // Delete a license based on Order_no
  const handleDelete = (orderNo) => {
    setLicenses(prevLicenses => prevLicenses.filter(license => license.Order_no !== orderNo));
    setShowOptionsIndex(null); // Close the options after delete
  };

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleToggleOptions = (index) => {
    setShowOptionsIndex(showOptionsIndex === index ? null : index);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptionsIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigate to view license details
  const handleViewLicense = (orderNo) => {
    navigate(`/license/view/${orderNo}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mt-[-70px] mb-[7px] ml-[10px] font-semibold">Licenses</h2>
      <button 
        onClick={() => handleCreateOrEdit()} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create New
      </button>
      <table className="min-w-full mt-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 border-b text-left text-sm font-large text-gray-700">Order No</th>
            <th className="py-3 px-4 border-b text-left text-sm font-large text-gray-700">License Name</th>
            <th className="py-3 px-4 border-b text-left text-sm font-large text-gray-700">Status</th>
            <th className="py-3 px-4 border-b text-left text-sm font-large text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentLicenses.map((license, index) => (
            <tr key={license.Order_no} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-sm text-gray-900">{license.Order_no}</td>
              <td className="py-2 px-4 border-b text-sm text-gray-900">
                <button 
                  onClick={() => handleViewLicense(license.Order_no)} 
                  className="text-blue-500 hover:underline"
                >
                  {license.license_name}
                </button>
              </td>
              <td className="py-2 px-4 border-b text-sm text-gray-900">{license.status}</td>
              <td className="py-2 px-4 border-b text-sm text-gray-900">
                <div className="relative inline-block text-left">
                  <button 
                    onClick={() => handleToggleOptions(index)} 
                    className="focus:outline-none"
                  >
                    •••
                  </button>
                  {showOptionsIndex === index && (
                    <div ref={optionsRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <button 
                          onClick={() => handleCreateOrEdit(license)} 
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                        >
                          ✏️ Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(license.Order_no)} 
                          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-100 w-full"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-between">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm">Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-black px-4 py-2 rounded ml-2 hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Licenses;
