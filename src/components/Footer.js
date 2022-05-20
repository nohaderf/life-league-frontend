import React from "react"
import logo from '../images/ll_logo_white.png'

function Footer(){
       
    return (
        <div className="footer-div">
            <p><a href="https://github.com/nohaderf" target="_blank">
                <i className="fab fa-github"></i>
            </a></p>
            <p><a href="https://www.linkedin.com/in/freda-hon/" target="_blank">
            <i className="fab fa-linkedin"></i>
            </a></p>
            <p><a href="https://medium.com/@freda.hon" target="_blank">
            <i className="fab fa-medium"></i>
            </a></p> 
            <p><a href="mailto:freda.hon@gmail.com" target="_blank">
            <span>Freda Hon Production <i className="far fa-copyright"></i> </span>
            </a></p>

            
            <p className="company-footer"><img className="logo-footer" src={logo}></img>Life League</p>
        </div>
    )
}

export default Footer;