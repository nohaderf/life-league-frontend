import React from "react"
import { Link } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import logo from '../images/ll_black_logo.png'

import sketch from '../images/sketch.jpeg';
import violin from '../images/violin.jpeg';
import build from '../images/build.jpg';
import produce from '../images/produce.jpeg';
import leap from '../images/leap.jpeg';
import computer from '../images/lifeLeague_home.jpeg';
import friends from '../images/life_league_home.jpeg';
import cycling from '../images/cycling.jpeg'

function About(){
    return (
        <>
        <div className= "main-div">

            <div className="info">   
                <div className="home-div">
                    <div className="fade-in-1">
                        <img className="home-img-1" src={computer} alt="Life League"></img>
                        <div className="over-image">
                            <div className="slogan">
                                It's time to regain control of your goals.
                            </div>
                        </div>
                    </div>

                    <div className="fade-in-2">
                        <img className="home-img-2" src={sketch} alt="Life League"></img>
                        <div className="over-image2">
                            <div className="slogan">
                                We all have a competitive side...
                            </div>
                        </div>
                    </div>

                    <div className="fade-in-3">
                        <img className="home-img-3" src={friends} alt="Life League"></img>
                        <div className="over-image3">
                            <div className="slogan">
                                Challenge your friends and hold each other accountable.
                            </div>
                            <Link exact to="/rules">
                                <button className="get-started-btn">Rules</button>
                            </Link>
                            <Link exact to="/signup">
                                <button className="sign-up-btn">Sign Up</button>
                            </Link>
                        </div>
                    </div> 


                    <div className="fun-div">
                        <div className="fun-card">
                            <div className="image-div"><img className="image-ex" src={violin} alt="KRUNCH FUN"/></div>
                            <p className="fun-q">Log the time you've dedicated towards your goals</p>
                        </div> 

                        <div className="fun-card">
                            <div className="image-div"><img className="image-ex" src={produce} alt="KRUNCH FUN"/></div>
                            <p className="fun-q">Earn points</p>
                        </div> 

                        <div className="fun-card">
                            <div className="image-div"><img className="image-ex" src={leap} alt="KRUNCH FUN"/></div>
                            <p className="fun-q">Compete against your friends</p>
                        </div> 

                        <div className="fun-card">
                            <div className="image-div"><img className="image-ex" src={build} alt="KRUNCH FUN"/></div>
                            <p className="fun-q">Player with the most points, win.</p>
                        </div>
                    </div>

                    <div className="fade-in-4">
                        <img className="home-img-4" src={cycling} alt="Life League"></img>
                        <div className="over-image4">
                            <div className="slogan">
                                Join today.
                            </div>
                            <Link exact to="/signup">
                                <button className="sign-up-btn">Sign Up</button>
                            </Link>
                        </div>
                    </div> 

                </div>
            </div>


        </div>
        <ScrollToTop />
        </>
    )
}

export default About;