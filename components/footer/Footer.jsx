/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">CHANDALEE K.</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                 
                 <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                {/* 1. INSTAGRAM (Added your specific link) */}
                <a 
                    href="https://www.instagram.com/chan_da_lee_s/?igsh=MXhycmg2d3pmand2dg%3D%3D" 
                    className="footer__social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="bx bxl-instagram"></i>
                </a>

                {/* 2. LINKEDIN (Added your specific link) */}
                <a 
                    href="https://www.linkedin.com/in/chandalee-kalubandara-870920316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    className="footer__social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="bx bxl-linkedin"></i>
                </a>

                {/* 3. GITHUB (Kept the original GitHub placeholder/link for consistency) */}
                <a 
                    href="https://github.com/chandaleekalubandara-cs" 
                    className="footer__social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="bx bxl-github"></i>
                </a>
            </div>
            
             <span className="footer__copy">
                &#169; Chandalee K. All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer