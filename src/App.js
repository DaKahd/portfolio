import './App.css';
import Contact from './Contact.js';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home.js';
import Header from './Header.js'
function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;