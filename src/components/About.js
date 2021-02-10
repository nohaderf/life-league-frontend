import React from "react"
import { Link } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import logo from '../images/ll_black_logo.png'

import sketch from '../images/sketch.jpeg';
import violin from '../images/violin.jpeg';
import build from '../images/build.jpg';
import produce from '../images/produce.jpeg';
import leap from '../images/leap.jpeg';

function About(){
    return (
        <>
        <div className= "main-div">
            <div className="info">   
                <div className="home-div">
                    <div className="bg">
                         <img className="home-img-1" src={sketch} alt="Life League"></img>
                    </div>
                    
                    <div className="home-about-div">
                        <h1><img className="home-black-logo" src={logo}></img> JOIN THE LEAGUE</h1>
                        <ul>
                            <li>What are goals if you don't work towards them?</li>
                            <li>It's time to better yourself.</li>
                            <li>Set weekly tasks that work towards your goals.</li>
                            <li>Compete against friends and family to hold each other accountable.</li>
                            <li>Ready to finally stick to your resolutions?</li>
                            <Link exact to="/rules">
                                <button className="get-started-btn">Rules</button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
{/* 
           <h1>- <i className="far fa-laugh-beam"></i> A League of Accountabilibuddies -</h1>
           <div className="fun-div">
                <div className="fun-card">
                    <div className="image-div"><img className="image-ex" src={violin} alt="KRUNCH FUN"/></div>
                    <p className="fun-q">What does seven days without exercise make?</p>
                    <span className="fun-a">One weak!</span>
                </div> 
                <div className="fun-card">
                    <div className="image-div"><img className="image-ex" src={produce} alt="KRUNCH FUN"/></div>
                    <p className="fun-q">How do you get rid of an obese demon?</p>
                    <span className="fun-a">You exercise it.</span>
                </div> 
                <div className="fun-card">
                    <div className="image-div"><img className="image-ex" src={leap} alt="KRUNCH FUN"/></div>
                    <p className="fun-q">How do college students exercise?</p>
                    <span className="fun-a">By swimming in their debt.</span>
                </div> 
                <div className="fun-card">
                    <div className="image-div"><img className="image-ex" src={build} alt="KRUNCH FUN"/></div>
                    <p className="fun-q">What is the dairy farmer's favorite exercise?</p>
                    <span className="fun-a">Calf raises.</span>
                </div> 

           </div>  */}
           
        </div>
        <ScrollToTop />
        </>
    )
}

export default About;