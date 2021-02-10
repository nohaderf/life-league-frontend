import React from "react"
import logo from '../images/ll_logo_white.png'

function Footer(){
       
    return (
        <div className="footer-div">
            <p><i className="fab fa-github"></i></p>
            <p><i className="fab fa-linkedin"></i></p>
            <p><i className="fab fa-medium"></i></p>
            <p className="company-footer"><img className="logo-footer" src={logo}></img>Life League</p>
        </div>
    )
}

export default Footer;