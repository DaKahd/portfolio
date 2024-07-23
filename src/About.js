import React from 'react';
import './About.css';
import NumberCounter from './NumberCounter.js';
import Profile from './images/profile.jpg';

export default function About(){
  

    return (<div className="about-container" id="about">
        <h1>About me</h1><br/>
        <div className="stats-container">
            <div className="stats">
                <p><NumberCounter targetNumber={1580} duration = {3} />/1600 SAT</p>
                <p><NumberCounter targetNumber={1510} duration = {3} />/1520 PSAT</p>
                <p><NumberCounter targetNumber={16} duration = {3} /> AP tests 5/5</p>
                <p><NumberCounter targetNumber={2} duration = {1} /> years tutoring experience</p>
            </div>
            <img src={Profile} style={{height:"auto", width:"30vw",maxHeight:"400px"}}/>
        </div>
 
    </div>)
}