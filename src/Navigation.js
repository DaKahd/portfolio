import React from 'react';
import MyLink from './MyLink.js'
import './Navigation.css'

export function Header(){
    return(
    <div style={{height:"20vh", width: "100vw", position:"fixed", backgroundColor:"black"}}>
        <MyLink href="/#" text={<h1 style={{padding:"5vmin"}}>Home</h1>}  content={
            <div style={{textAlign:"center"}}>
                <MyLink href="/#schools" text="Education"/><br/>
                <MyLink href="/#mathnasium" text="Experience"/><br/>
                <MyLink href="/#projects" text="Projects"/><br/>
                <MyLink href="/#languages" text="Skills" /><br/>
            </div>
        }/>
        <MyLink href="/Achievements" text={<h1 style={{padding:"5vmin"}}>Achievements</h1>}  content={
            <div style={{paddingLeft:"5vw"}}>
                <MyLink href="/Achievements#scores" text="Scores" /><br/>
                <MyLink href="/Achievements#academic" text="Academic" /><br/>
                <MyLink href="/Achievements#extracurricular" text="Extracurricular" /><br/>
                <MyLink href="/Achievements#scholarships" text = "Scholarships" /><br/>
            </div>
        }/>
    </div>
    );
}