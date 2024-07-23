import React, { useState, useEffect} from 'react';
import Classroom from './images/classroom.png';
import './Hero.css'
export default function Hero() {
    const [current, setCurrent] = useState(0);
    const components = [<Appointment key="appointment" />, <Qualifications key="qualifications" />];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % components.length);
        }, 5000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [components.length]);

        return (<div className="hero-container" id="home">
        <div className="wrapper" style={{ backgroundImage: `url(${Classroom})`,  margin:"2vmin"}} >
            <div id="translucent-box">
            {components.map((component, index) => (
                        <div
                            key={index}
                            className={`translucent-box-content ${index === current ? 'show' : ''}`}
                        >
                            {component}
                        </div>
                    ))}
            </div>
        </div>
        <div className="hero-text">
                <h1 className="hero-header">Welcome to Coach David's tutoring!</h1><br/>
                <h2 className="hero-subheader">Personalized learning for your success</h2>
            </div>
        
    </div>)
}

export function Appointment(){
    return (
        <div className="ad">
            <h1 className="hero-header">Book a free 30-minute evaluation today!</h1><br/>
            <h2><a href="#form">Fill out my google form</a></h2>
        </div>
    );
}

export function Qualifications(){
    return (
        <div className="ad">
            <h1 className="hero-header">View my qualifications</h1><br/>
            <h2><a href="#about" >SAT, AP, scholarships, and more!</a></h2>
        </div>
    );
}