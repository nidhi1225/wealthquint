import React from 'react';
import './style.css';
import SocialMedia from './socialMedia';

const Footer = (props) => {
    return(
        <div className="center">
            <div className="content">
                <img src="https://wealthquint.com/wp-content/uploads/2021/06/Wealth-Quint-logo-e1624694975815.png" alt="logo" />
            </div>
            <div className="content">
                <a href='#'>About Us</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Disclaimer</a>
                <a href='#'>Contact Us</a>
            </div>
            <div className="content3">
                Copyright 2021 Wealth Quint. All rights reserved.
            </div>
            <div className="content">
                <SocialMedia/>
            </div>
        </div>
    )
}
export default Footer