import React from 'react';
import './style.css';
import SocialMedia from './socialMedia';
import { Router , Link } from 'react-router-dom';


const Header = (props) => {
   let  item = {image:"https://wealthquint.com/wp-content/uploads/AEPS-Full-Form-500x350.jpeg",heading:"AEPS Full Form",subtext:"The full form of AEPS is Aadhaar Enabled Payment System..."}
    return(
        <header className="header">
            <nav className="leftside">
                {/* <Router>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/disclaimer">Disclaimer</Link>
                </Router> */}
            </nav>
            <div className="rightside">
                <div className="follow">Follow Us</div>
                <SocialMedia header={true}/>
            </div>
        </header>
    )
}
export default Header