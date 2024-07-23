import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Tutoring from './Tutoring.js';
import {Header} from './Navigation.js';
import Achievements from './Achievements.js';
import Hero from './Hero.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  /*return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route path="/" element={<div>
            <Home />
            <Achievements />
            <Tutoring />
          </div>} />
        </Routes>
      </div>
    </Router>
  );*/
  return (<div>
    <Header/>
    <Hero/>
    <About/>
    <Achievements />
    <Contact />
    </div>)
}

export default App;