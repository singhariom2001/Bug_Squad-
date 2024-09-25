import React from 'react';
import { useParams } from 'react-router-dom';
import MOCK_BOOKS from '../MOCK_BOOKS.json'; 

const Books = () => {
  const { orderNo } = useParams();
  const books = MOCK_BOOKS.filter(book => book.licenseOrderNo === orderNo); 

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4 font-semibold">Books for License {orderNo}</h2>
      <table className="min-w-full mt-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 border-b text-left text-sm font-large text-gray-700">Book ID</th>
            <th className="py-3 px-4 border-b text-left text-sm font-large text-gray-700">Title</th>
            <th className="py-3 px-4 border-b text-left text-sm font-large text-gray-700">Author</th>
          </tr>
        </thead>
        <tbody>
  {books.length === 0 ? (
    <tr>
      <td colSpan="3" className="py-4 px-4 text-center text-gray-500">
        No books found for this license.
      </td>
    </tr>
  ) : (
    books.map((book) => (
      <tr key={book.bookId} className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b text-sm text-gray-900">{book.bookId}</td>
        <td className="py-2 px-4 border-b text-sm text-gray-900">{book.title}</td>
        <td className="py-2 px-4 border-b text-sm text-gray-900">{book.author}</td>
      </tr>
    ))
  )}
</tbody>

      </table>
    </div>
  );
};

export default Books;
