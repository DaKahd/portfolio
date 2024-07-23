import React from 'react';
import './Navigation.css';
import Logo from './images/logo.png'
export function Header() {
    return (
        <div className="navbar">
            <div className="logo"><img src={Logo} className="logoImg"/></div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href="#book">Book an Appointment</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </div>
    );
}

