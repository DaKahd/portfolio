import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Navbar from './Navbar.js';



function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*}
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element = {<Resume />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;