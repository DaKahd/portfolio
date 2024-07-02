import React from 'react';
import MyLink from './MyLink.js';
import './Navigation.css';

export function Header() {
    return (
        <div className="navbar">
            <MyLink className="nav-link" href="/#" text={<h1>Home</h1>} content={
                <div style={{ textAlign: "center" }}>
                    <MyLink className="nav-link" href="/#schools" text="Education" /><br />
                    <MyLink className="nav-link" href="/#mathnasium" text="Experience" /><br />
                    <MyLink className="nav-link" href="/#projects" text="Projects" /><br />
                    <MyLink className="nav-link" href="/#languages" text="Skills" /><br />
                </div>
            }/>
            <MyLink className="nav-link" href="/#achievements" text={<h1>Achievements</h1>} content={
                <div style={{ paddingLeft: "5vw" }}>
                    <MyLink className="nav-link" href="/#scores" text="Scores" /><br />
                    <MyLink className="nav-link" href="/#academic" text="Academic" /><br />
                    <MyLink className="nav-link" href="/#extracurricular" text="Extracurricular" /><br />
                    <MyLink className="nav-link" href="/#scholarships" text="Scholarships" /><br />
                </div>
            }/>
            <MyLink className="nav-link" href="/#tutoring" text={<h1>Tutoring</h1>}/>
        </div>
    );
}
