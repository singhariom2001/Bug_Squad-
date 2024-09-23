import React, { useState } from 'react';
import './Concurrency.css';

const Concurrency = () => {
  // Hardcoded books data
  const books = [
    {
      bookTitle: "The Great Gatsby",
      isbn: "978-0743273565",
      publishedStatus: "Published",
      
    },
    {
      bookTitle: "To Kill a Mockingbird",
      isbn: "978-0061120084",
      publishedStatus: "Published",
     
    },
    {
      bookTitle: "1984",
      isbn: "978-0451524935",
      publishedStatus: "Published",
    
    },
    {
      bookTitle: "The Catcher in the Rye",
      isbn: "978-0316769488",
      publishedStatus: "Published",
    
    },
    {
      bookTitle: "Unpublished Novel",
      isbn: "123-4567890123",
      publishedStatus: "Unpublished",
      Concurrency: 0
    }
  ];

  // Initialize state with books data
  const [data, setData] = useState(books);
  const [bulkConcurrency, setBulkConcurrency] = useState("");

  // Handle individual concurrency changes
  const handleConcurrencyChange = (index, value) => {
    const updatedData = [...data];
    updatedData[index].Concurrency = value;
    setData(updatedData);
  };

  // Handle bulk edit
  const handleBulkEdit = () => {
    const updatedData = data.map(row => ({
      ...row,
      Concurrency: bulkConcurrency
    }));
    setData(updatedData);
  };

  // Handle save logic
  const handleSave = () => {
    console.log("Saving data", data);
    // You can send the updated data to your API or save locally here
  };

  return (
    <div className="container">
      <h1>View or Edit DRM Policies</h1>

      <div className="bulk-edit">
        <input 
          type="number"
          placeholder="Set concurrency for all"
          value={bulkConcurrency}
          onChange={e => setBulkConcurrency(e.target.value)}
        />
        <button className="bulk-btn" onClick={handleBulkEdit}>Apply to All</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>ISBN</th>
            <th>Published Status</th>
            <th>Concurrency</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.bookTitle}</td>
              <td>{row.isbn}</td>
              <td>{row.publishedStatus}</td>
              <td>
                <input 
                  type="number"
                  className="concurrency-input"
                  value={row.Concurrency || ""}
                  onChange={(e) => handleConcurrencyChange(index, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="save-btn" onClick={handleSave}>Save</button>
    </div>
  );
};

export default Concurrency;
