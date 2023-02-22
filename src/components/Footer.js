import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>NY</li>
                            <li>BC</li>
                            <li>West Coast</li>
                            <li>California</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Wed: 10:30AM - 12:00AM</li>
                            <li>Fri: CLOSED</li>
                            <li>Sat - Sun: 10:30AM - 12:00AM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>26st Joyce Collinwood, BC</li>
                            <li>Tel: 98 878 2138</li>
                            <li>Email: contact@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
