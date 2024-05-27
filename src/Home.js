import React from 'react'
import "./Home.css"
import Resume from './Resume.js';
import Contact from './Contact.js';
import Section from './Section.js';
function Home(){
    return (
        <div id="main">
            <div id ="s1">
                <Section id = "welcome" delay={100} content={
                    <div>
                      <h1>Welcome!</h1>
                    </div>
                }/>
                <Section id = "image" delay = {600} content={
                    <div>
                        <img src = "./profile.jpg"></img>
                    </div>
                } />
            </div>
            <div id="s2"></div>
            <div id="s3"></div>            
        </div>
    );
}

export default Home;