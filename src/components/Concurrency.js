import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Concurrency.css';
 
const Concurrency = () => {
  const [data, setData] = useState([]);
  const [bulkConcurrency, setBulkConcurrency] = useState("");
 
  useEffect(() => {
    // Fetching CSV data
    fetch('/path-to-your-csv/MOCK_DATA.csv')
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          complete: function (results) {
            setData(results.data);
          }
        });
      });
  }, []);
 
  const handleConcurrencyChange = (index, value) => {
    const updatedData = [...data];
    updatedData[index].Concurrency = value;
    setData(updatedData);
  };
 
  const handleBulkEdit = () => {
    const updatedData = data.map(row => ({
      ...row,
      Concurrency: bulkConcurrency
    }));
    setData(updatedData);
  };
 
  const handleSave = () => {
    console.log("Saving data", data);
    // Here you can send the updated data to your API or save locally
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
<td>{row['Book Title']}</td>
<td>{row['ISBN']}</td>
<td>{row['Published Status']}</td>
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