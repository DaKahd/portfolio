import React from 'react';
import Phone from './images/phone.png';
import Email from './images/email.png';
import Linkedin from './images/linkedin.png';
import './Contact.css';
export default function Contact(){
    return (
        <div>
            <div className="text">
                <h1 id="book">Book an appointment</h1>
                <p>I offer one free half-hour session per student. Contact me for pricing and availability.</p><br/><br/>
                <div id="form">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkHsOVpSFanBj0lIFl7oWr-PRqLapgobrETbX_vWpAJwMgwQ/viewform?embedded=true" title="google form" width="100%" height="1700" frameBorder="0">Loading…</iframe>
                </div>
            </div>
            <div id="contact" className="text">
                <h1>Contact me</h1>
                <p>You can reach me directly at the following:</p>
                <a href="tel:+12139996419"><img src={Phone}/></a>
                <a href="mailto: david@kahdian.com"><img src={Email} alt="david@kahdian.com"/></a>
                <a href="https://www.linkedin.com/in/david-kahdian/" target="_blank"><img src={Linkedin} /></a>
            </div>
        </div>
    )
}