import React from 'react';
import Section from './Section.js';
import profile from './images/profile.jpg';
import './Home.css';
import Bayha from './images/bayha.jpg';
import Crispr from './images/crispr.jpg';
import Mathnasium from './images/mathnasium.jpg';
import Cv from './images/cv.jpg';
import Ucla from './images/ucla.jpg';
import Stopwatch from './images/stopwatch.jpg';
import Cong from './images/cong.jpg';
import USA from './images/usa.jpg';
import Sp from './images/sp.jpg';
import Arm from './images/arm.jpg';
import HtmlJsCss from './images/htmljscss.png';
import Java from './images/java.png';
import ReactLogo from './images/react.png';
import Python from './images/python.png';
import Physics from './images/physics.jpg';
import Calculus from './images/calculus.png';
import SAT from './images/SAT.png';
import AP from './images/Ap.png';
import Language from './images/language.png';
import History from './images/history.jpg';
import NumberCounter from './NumberCounter';

export function Experience() {
    return (
        <div>
            <h1>Work experience</h1>
            <div className="side-by-side">
                <img src={Mathnasium} className = "left" alt="Mathnasium"/>
                <div>
                    <h2>Instructor, Mathnasium</h2>
                    <h4>2023-2024</h4>
                    <ul>
                        <li>Worked with students grades K-11</li>
                        <li>Small-group and private sessions</li>
                        <li>Emphasis on foundational learning</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function Internships() {
    return (
        <div>
            <h1>Internships</h1>
            <div className="side-by-side">
                <div>
                    <h2>Blockchain design intern</h2>
                    <h4>Summer 2022</h4>
                    <ul>
                        <li>Designed blockchain-based solution to Amazon deforestation</li>
                        <li>Presented government officials and industry professionals</li>
                        <li>Elements of design since implemented into practice</li>
                    </ul>
                </div>
                <img src={Bayha} className = "right" alt="Bayha"/>
            </div>
            <div className="side-by-side">
                <img src={Crispr} className="left" alt="Crispr"/>
                <div>
                    <h2>Lead intern</h2>
                    <h4>NextGen CRISPR project, Summer 2021</h4>
                    <ul>
                        <li>Designed educational system for CRISPR ethics instruction</li>
                        <li>Emphasis on cost-reduction, and accessibility</li>
                        <li>Dispersed among various elementary schools nationwide</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function Schools() {
    return (
        <div>
            <h1>Education</h1>
            <div className="side-by-side">
                <div>
                    <h2>University of California, Los Angeles</h2>
                    <ul>
                        <li>Incoming freshman, class of 2028</li>
                        <li>Henry Samueli School of Engineering</li>
                    </ul>
                </div>
                <img src={Ucla} className = "right" alt="UCLA"/>
            </div>
            <div className="side-by-side">
                <img src={Cv} alt="Crescenta Valley High School"/>
                <div>
                    <h2>Crescenta Valley High School</h2>
                    <h4>2020-2024</h4>
                    <ul>
                        <li>Captain, speech and debate</li>
                        <li>Chairman, school site council</li>
                        <li><a href="/awards">Full list of activities and awards</a></li>
                        <li><a href="/scores">Full list of test scores</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="side-by-side">
                <div>
                    <h2>Java stopwatch</h2>
                    <ul>
                        <li>Helper class for java programmers</li>
                        <li>Facilitates expedited runtime testing</li>
                        <li>User-friendly with <a href="https://kahdian.com/stopwatch/Stopwatch.html" target="_blank">documentation</a></li>
                    </ul>
                </div>
                <img src={Stopwatch} className="right" alt="Stopwatch"/>
            </div>
            <div className="side-by-side">
                <img src={Cong} className="left" alt="Cong"/>
                <div>
                    <h2><a href="https://www.youtube.com/watch?v=r0GZYcfbcwE" target="_blank">FactCheckSpeech</a></h2>
                    <ul>
                        <li>AI-powered live speech factchecker</li>
                        <li>Simple user-friendly chrome extension format</li>
                        <li>Second-place winner for <a href="https://schiff.house.gov/news/press-releases/congressman-schiff-announces-winners-of-2023-30th-congressional-district-app-challenge" target="_blank">congressional app challenge</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function Languages() {
    return (
        <div>
            <h1>Languages</h1>
            <div className="side-by-side">
                <div className="flag">
                    <h2>English</h2>
                    <img style={{width: '32vh', height: '20vh'}} src={USA} alt="American flag"/>
                </div>
                <div className="flag">
                    <h2>Spanish</h2>
                    <img style={{width: '32vh', height: '20vh'}} src={Sp} alt="Spanish flag"/>
                </div>
                <div className="flag">
                    <h2>Armenian</h2>
                    <img style={{width: '32vh', height: '20vh'}} src={Arm} alt="Armenian flag"/>
                </div>
            </div>
        </div>
    );
}

export function Coding() {
    return (
        <div>
            <h1>Coding</h1>
            <div className="side-by-side">
                <div style={{textAlign: 'center', padding: '2vw'}}>
                    <h2>HTML/CSS/JS</h2>
                    <img src={HtmlJsCss} style={{width: '30vh'}} alt="HTML/CSS/JS"/>
                </div>
                <div style={{textAlign: 'center', padding: '2vw'}}>
                    <h2>React</h2>
                    <img src={ReactLogo} style={{width: '30vh'}} alt="React"/>
                </div>
                <div style={{textAlign: 'center', padding: '2vw'}}>
                    <h2>Java</h2>
                    <img src={Java} style={{width: '30vh'}} alt="Java"/>
                </div>
                <div style={{textAlign: 'center', padding: '2vw'}}>
                    <h2>Python</h2>
                    <img src={Python} style={{width: '30vh'}} alt="Python"/>
                </div>
            </div>
        </div>
    );
}
export function Sat(){
    return (<div>
        <img src = {SAT} alt="SAT logo"/>
        <div className="side-by-side">
            <div className="left">
                    <h3>Math</h3>
                    <p style={{textAlign:"center"}}><NumberCounter targetNumber={800} duration = {2} />/800</p>
                </div>
                <div className="right">
                    <h3>English</h3>
                    <p style={{textAlign:"center"}}><NumberCounter targetNumber={780} duration = {2} />/800</p>
                </div>
            </div>
    </div>)
}
export function Ap(){
    return (<div>
        <div className="side-by-side">
            <div className="flag">
                <p style={{textAlign:'center'}}><NumberCounter targetNumber={5} duration = {2} />/5</p>
                <img src = {Physics} alt = "AP physics logo"/>
                <h3>AP Physics 1 and 2</h3>
            </div>
            <div className="flag">
                <p style={{textAlign:'center'}}><NumberCounter targetNumber={5} duration = {2} />/5</p>
                    <img src = {Calculus} alt = "AP Calculus logo"/>
                    <h3>AP Calculus AB/BC</h3>

            </div>
            <div className="flag">
                <p style={{textAlign:'center'}}><NumberCounter targetNumber={5} duration = {2} />/5</p>
                    <img src = {Language} alt = "AP Language logo"/>
                    <h3>AP English/Spanish</h3>

            </div>
            <div className="flag">
                <p style={{textAlign:'center'}}><NumberCounter targetNumber={5} duration = {2} />/5</p>
                    <img src = {History} alt = "AP History logo"/>
                    <h3>AP US/European/Art</h3>
             </div>
           
        </div>
    </div>)
}

function Home() {
    return (
        <div id="main">
            <Section id="profile" delay={600} content={
                <div>
                    <h1>Welcome to my portfolio website!</h1>

                    <div className="side-by-side">
                        <h2 className = "intro" class="left">I am David Kahdian, a UCLA-bound Engineering student.<br/><br/>Currently searching for <a href="#contact"> tutoring</a> and <a href="#internships">internship</a>  positions</h2>
                        <img style={{height: '60vh', width:'auto'}} class="right" src={profile} alt="me"/>
                    </div>
                </div>
            }/>
            <Section id="scores" delay={500} content={ <Sat />} />
            <Section id="ap" delay={500} content={ <Ap />} />
            <Section id="schools" delay={200} content={<Schools/>}/>
            <Section id="mathnasium" delay={0} content={<Experience/>}/>
            <Section id="internships" delay={500} content={<Internships/>}/>
            <Section id="projects" delay={200} content={<Projects/>}/>
            <Section id="languages" delay={500} content={<Languages/>}/>
            <Section id="coding" delay={500} content={<Coding/>}/>
            
            
        </div>
    );
}

export default Home;
