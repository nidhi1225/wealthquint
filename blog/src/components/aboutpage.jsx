import React from 'react';
import Posts from './posts';
import './style.css';

const Aboutpage = (props) => {
    return(
        <div className="totalarea">
        <div className="maincontent">
            <h1>About Us</h1>
            <h2>About</h2>
            <p>
                WeathQuint is one of India’s most informative financial blogs to improve 
                financial literacy among youth. Although the blog started just a few months 
                back, it covers a plethora of financial topics including and not limited 
                to cryptocurrency, banking, investments, personal finance, stock market, 
                credit cards, debits cards, business, startups, and digital currency.
            </p>
            <p>
                We endeavor to provide accurate, insightful, and real-time information as much 
                as possible, and encourage our readers to know more about how finance works. 
                Having this important knowledge will help you make more informed and excellent 
                financial decisions.
            </p>
            <h2>Disclaimer</h2>
            <p>
                The contents (articles, blogs, and other forms) are intended for providing 
                information only. There may be a possibility of our information being inaccurate 
                or outdated, so do not base your financial choices and decisions based on the 
                information on WealthQuint. We neither encourage one form of investment over the 
                other nor do we recommend any financial investment or service. Read the complete 
                Disclaimer here.
            </p>
            <h2>Privacy Policy</h2>
            <p>
                WealthQuint collects some personal information of the user browsing through our 
                content to provide more customized content and services for the user. WealthQuint 
                captures some personal information while you create an account or log in to an 
                existing one. Read the complete Privacy Policy here.
            </p>
            <h2>Editorial Policy</h2>
            <p>
                We adhere to strict ethical practices while developing our content. Our writers 
                have the freedom to express their views and opinions with no bias and maximum accuracy.
            </p>
            <h2>Editorial Board</h2>
            <p>
                Our editorial board consists of financial literates who develop the content and policies 
                in the WealthQuint website. 
            </p>
            <p>Contact Us: contact@wealthquint.com</p>
        </div>
        <div><Posts /></div>
        </div>
    )
}
export default Aboutpage