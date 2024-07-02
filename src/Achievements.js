import React from 'react';
import Section from './Section.js';
import './Home.css';
import Acorn from './images/acorn.jpg';
import Cap from './images/cap.jpg'
import Coat from './images/coatofarms.jpg';
import Merit from './images/nationalmerit.png';
export function Scores(){
    return (<div>
        <h1>Test Scores</h1>
        <div className="side-by-side">
            <img src = {Acorn} alt="AP acorn" style={{maxWidth:"20vw"}}/>
            <ul style={{marginLeft:"10vw"}}>
                <li>800: SAT Math</li>
                <li>780: SAT English</li>
                <br/>
                <li>5: Physics 1 and 2</li>
                <li>5: Human Geography</li>
                <li>5: Calculus AB and BC</li>
                <li>5: US, European, Art History</li>
                <li>5: English and Spanish Language</li>
                <br/>
                <li>Pending: Physics C</li>
                <li>Pending: English and Spanish Literature</li>
                <li>Pending: Macroeconomics</li>
            </ul>
        </div>
    </div>)
}

export function Academic(){
    return (<div>
        <h1>Academic Awards</h1>
        <div className="side-by-side">
            <ul style={{marginRight:"10vw"}}>
                <li>Highest GPA</li>
                <li>Summa Cum Laude</li>
                <li>World Language Department Award: Spanish</li>
                <li>Information and Communication Technology Pathway</li>
            </ul>
            <img src={Cap} alt="CVHS logo" style={{maxWidth:"20vw"}}/>
        </div>
    </div>);
}

export function Extracurricular(){
    return (<div>
        <h1>Extracurricular Achievements</h1>
        <div className="side-by-side">
            <img src={Coat} alt="CVHS logo" style={{maxWidth:"20vw"}}/>
            <ul style={{marginLeft:"10vw"}}>
                <li>School Site Council</li>
                <li>Speech and Debate: Captain, national qualifier</li>
                <li>Mock Trial: Top 4 in Los Angeles County</li>
                <li>Scholastic Bowl: 1st place winner</li>
            </ul>
        </div>
    </div>);
}

export function Scholarships(){
    return (<div>
        <h1>Scholarships</h1>
        <div className="side-by-side">
            <ul>
                <li>National Merit Scholarship: L3Harris Scholarship</li>
                <li>Crescenta Valley High School PTSA Scholarship</li>
                <li>Monte Vista Elementary PTA Scholarship</li>
                <li>Committee for Armenian Students in Public Schools: Highest GPA</li>
                
            </ul>
            <img src={Merit} alt="national merit logo" style={{maxWiddth:"20vw",paddingLeft:"10vw"}}/>
        </div>
    </div>);
}

export default function Achievements(){
    return (<div style={{paddingTop:"10vh"}}>
        <div id = "achievements"></div>
        <Section id="scores" delay={100} content={ <Scores />} />
        <Section id="academic" delay={1000} content={ <Academic />}/>
        <Section id="extracurricular" delay={500} content={ <Extracurricular />}/>
        <Section id="scholarships" delay={500} content={<Scholarships />}/>
    </div>)
}


