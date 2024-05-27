import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import MyLink from './MyLink.js'

function Navbar({ show }) {
  return (
    <nav className={`navbar ${show ? 'show' : ''}`}>
      <MyLink href="#contact" text="Contact" content={
        <div>
          <p>test</p><br/>
          <Link to="/">nubby</Link>
        </div>
      }/>
      <MyLink href="#resume" text="Resume" content={
        <div>
          <p>test</p><br/>
          <Link to="/contact">Contact</Link>
        </div>
      }/>
      <MyLink href="#top" text="Top" content={
        <div>
          <p>test</p><br/>
          <Link to="/resume">Resume</Link>
        </div>
      }/>
    </nav>
 );
}

export default Navbar;
