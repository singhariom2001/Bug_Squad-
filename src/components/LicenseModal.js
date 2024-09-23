import React, { useState } from "react";
import "./LicenseModal.css";
import { useNavigate } from 'react-router-dom';
 
const LicenseModal = ({ license, onSave, onClose }) => {
  const [form, setForm] = useState({
    application: "",
    startDate: "",
    endDate: "",
    orderNumber: "",
    purchaseDate: "2024-09-07",
    productBundle: "",
    fileUploaded: null,
  });
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleFileUpload = (e) => {
    setForm({
      ...form,
      fileUploaded: e.target.files[0],
    });
  };
 
  const handleRemoveFile = () => {
    setForm({
      ...form,
      fileUploaded: null,
    });
  };
  const navigateToConcurrency = () => {
    navigate('/concurrency');
  };
  return (
    <div className="form-container">
      <div className="toggle-buttons">
        <button className="toggle-button active">Premium</button>
        <button className="toggle-button">Normal</button>
      </div>
 
      {/* <div className="toggle-view">
        <label>
          View Online
          <input type="checkbox" />
        </label>
        <label>
          Download
          <input type="checkbox" />
        </label>
      </div> */}
 
      <form>
        <label>License Name</label>
        <select
          name="application"
          value={form.application}
          onChange={handleChange}
          required
        >
          <option value="">Select Application</option>
        </select>
 
 
        <label>Order Number</label>
        <input
          type="text"
          name="orderNumber"
          value={form.orderNumber}
          onChange={handleChange}
        />
 
 
        {/* Product Bundle Section */}
        <div className="product-bundle-section">
          <label>Product Bundle*</label>
          <div className="product-bundle-input">
            <input
              type="text"
              name="productBundle"
              value={form.productBundle}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <button type="button" className="clear-button">
              X
            </button>
          </div>
          <div className="bundle-status">
            <span className="status available">Available: 2</span>
            {/* <span className="status forthcoming">Forthcoming: 0</span>
            <span className="status invalid">Invalid: 0</span>
            <a href="#">View Titles</a> */}
          </div>
        </div>
 
        {/* Bulk Upload Section */}
        {/* <div className="bulk-upload-section">
          <p className="or-text">OR</p>
          <div className="upload-box">
            <label htmlFor="fileUpload" className="upload-label">
              CLICK TO UPLOAD
            </label>
            <input
              type="file"
              id="fileUpload"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <div className="file-info">
              <p>{form.fileUploaded ? form.fileUploaded.name : "No file uploaded!"}</p>
              <p>{form.fileUploaded ? (form.fileUploaded.size / 1024).toFixed(2) + "KB" : "0.00MB"}</p>
              {form.fileUploaded && (
                <button type="button" className="delete-file" onClick={handleRemoveFile}>
                  🗑
                </button>
              )}
            </div>
          </div>
        </div> */}
 
        {/* DRM Policies Section */}
        <div className="drm-policies-section">
          <h3><b>DRM Policies</b></h3>
          <p><b>2 titles are DRM protected. Please review/edit the titles.</b></p>
          <div className="drm-details">
            <div>
              <p>CONCURRENCY</p>
              <p><b>1</b></p>
            </div>
            <div>
              <p>PRINT/COPY</p>
              <p><b>20</b></p>
            </div>
          </div>
          <a href="#" onClick={navigateToConcurrency}>View/Edit concurrency per title</a>
        </div>
 
        <div className="form-buttons">
          <button type="submit" className="save-button">SAVE</button>
          <button type="button" className="cancel-button">CANCEL</button>
        </div>
      </form>
    </div>
  );
};
export default LicenseModal;
