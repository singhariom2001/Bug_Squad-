import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Adjust the path if needed
import Licenses from './components/Licenses'; // Adjust path as necessary
import LicenseModal from './components/LicenseModal'; // The new page for modal
import Concurrency from './components/Concurrency';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Licenses />} />
          <Route path="/license/new" element={<LicenseModal />} />
          <Route path="/license/edit/:id" element={<LicenseModal />} /> 
          <Route path="/concurrency" element={<Concurrency />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
