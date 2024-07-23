import './Home.css';
import Section from './Section.js';

export function Intro(){
    return(
        <div className="text">
            <h1>Tutoring</h1>
            <p>I offer tutoring services for all grade levels K-12 and for a variety of subjects, including:<br/><br/>
                    <p>Math—from counting to calculus</p>
                    <p>Physics—algebra or calculus based</p>
                    <p>Computer science—AP level or general coding</p>
                    <p>SAT prep—both subject areas</p><br/>
                I am also comfortable tutoring a variety of other subjects.
            </p>
        </div>
    )
}

export function Method() {
    return(
        <div className="text">
            <h1 id="method">My tutoring method</h1>
            <p >I use the FIRM tutoring method:</p>
        
                <p>Foundation: especially important for math</p>
                <p>Intuition: concepts should make sense</p>
                <p>Rapid learning: without being overwhelming</p>
                <p>Minimal memorization</p>
        </div>
    )
}

export function Contact(){
    return (
    <div className="text">   
        <h1>Contact</h1>
        <p>I offer one free half-hour session per student. Contact me for pricing and availability.</p><br/><br/>
        <div id="form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkHsOVpSFanBj0lIFl7oWr-PRqLapgobrETbX_vWpAJwMgwQ/viewform?embedded=true" width="100%" height="1700" frameBorder="0">Loading…</iframe>
        </div>
        </div>
    )
}

export default function Tutoring() {
    return(
        <div>
            <Section id = "tutoring" delay={200} content={<Intro />} />
            <Section id = "method" delay={200} content={<Method />} />
            <Section id = "contact" delay={200} content={<Contact />} />
        </div>
    )
}