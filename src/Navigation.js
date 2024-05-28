import React from 'react';
import MyLink from './MyLink.js'
import './Navigation.css'

export function Header(){
    return(
    <div style={{height:"-20vh", width: "100vw", position:"fixed", backgroundColor:"black"}}>
        <MyLink href="/#" text={<h1 style={{padding:"5vmin"}}>Home</h1>}  content={
            <div style={{textAlign:"center"}}>
                <MyLink href="/#schools" text="Education" style/>
                <MyLink href="/#mathnasium" text="Experience"/>
                <MyLink href="/#projects" text="Projects"/>
                <MyLink href="/#languages" text="Skills" />
            </div>
        }/>
        <MyLink href="/Achievements" text={<h1 style={{padding:"5vmin"}}>Achievements</h1>}  content={
            <div></div>
        }/>
    </div>
    );
}