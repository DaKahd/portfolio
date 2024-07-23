import React from 'react';
import Phone from './images/phone.png';
import Email from './images/email.png';
import Linkedin from './images/linkedin.png';
import FormfacadeEmbed from "@formfacade/embed-react";


import './Contact.css';
export default function Contact(){
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <h1 id="book">Book an appointment</h1>
                <h3><em>I offer one free half-hour evaluation per student!</em></h3><br/><br/>
                <div id="form">
                <FormfacadeEmbed

                    formFacadeURL="https://formfacade.com/include/114707012336145133132/form/1FAIpQLSeijn_t7HvZvqS-9l0qJa36NWenNOGCaCPpQqft6rlZIpKzDA/classic.js/?div=ff-compose"

                    onSubmitForm={() => console.log('Form submitted')}

                    />                    
                </div>
            </div>
            <div id="contact" style={{textAlign:"center"}}>
                <br/>
                <h1 style={{textAlign:"center"}}>Contact me</h1>
                <h3><em>You can reach me directly at the following:</em></h3>
                <a href="tel:+12139996419"><img src={Phone}/></a>
                <a href="mailto: david@kahdian.com"><img src={Email} alt="david@kahdian.com"/></a>
                <a href="https://www.linkedin.com/in/david-kahdian/" target="_blank"><img src={Linkedin} /></a>
            </div>
        </div>
    )
}