import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; 
import Licenses from './components/Licenses'; 
import LicenseModal from './components/LicenseModal';
import Concurrency from './components/Concurrency'; 
import Books from './components/Books'; 


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Licenses />} />
          <Route path="/license/new" element={<LicenseModal />} />
          <Route path="/license/edit/:id" element={<LicenseModal />} />
          <Route path="/license/:orderNo/books" element={<Books />} /> {/* Added Books route */}
          <Route path="/concurrency" element={<Concurrency />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
