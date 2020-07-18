import React from 'react';

import './home.css'

const LOGOS1 = ["html","css", "javascript.png", "nodejs.png", "python.png", "angular.png", "typescript.png", "github.png"]

let HomeComponent = function(props) { 
    return (
        <div className="home-container">
            <div class="title" style={{width: "60%", textAlign: "center"}}>
                <h1>Sparsh Singhal</h1>
                <p style={{fontSize: "4vmin", fontWeight: 200}}>I am an undergraduate student from IIT Kanpur and have always been super excited about creating things. Web Development is full package of developing and designing, thats why I am passionate about it.</p>
            </div>
            <h2>About my work?</h2>
            <div className="display">
                <div className="descContainer">
                    <h3 style={{color: "rgb(64, 80, 255)"}}>
                        Full Stack Web Development
                    </h3>
                    <div class="description">
                        <p>Building Responsive Websites using React-Redux and Angular</p>
                        <p>Backend Development using Nodejs & express</p>
                    </div>
                </div>
                <div className="descContainer">
                    <h3 style={{color: "rgb(255, 0, 234)"}}>
                        UI/UX designing
                    </h3>
                    <div class="description">
                        <p>Building Responsive Websites using React-Redux and Angular</p>
                        <p>Backend Development using Nodejs & express</p>
                    </div>
                </div>
                <div style={{marginTop: "5vmin"}}><a class="button" href=""> Star me on Github</a></div>
            </div>
        </div>
    )
}

export default HomeComponent;