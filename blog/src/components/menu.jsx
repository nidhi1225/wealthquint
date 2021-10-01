import React from 'react';
import Category from './category';
import SocialMedia from './socialMedia';
import './style.css';

const Menu = (props) => {
    function sidenav(){
        document.getElementsByClassName("sidebar")[0].style.display = "block";
        document.getElementsByClassName("blank")[0].style.display = "block"
    }
    function closenav(){
        document.getElementsByClassName("sidebar")[0].style.display = "none";
        document.getElementsByClassName("blank")[0].style.display = "none"
    }
    return(
        <div className="menu">
            <div className="left">
                <img src="https://wealthquint.com/wp-content/uploads/2021/06/Wealth-Quint-logo-e1624694975815.png" alt="logo" />
                <Category from={true}/>
            </div>
            <div className="right">
                <div>Darkmode</div>
                <div>
                    <button className="remove"><i class="fa fa-search"></i></button>
                </div>
                <div className="sidemenu">
                    <button className="remove" onClick={sidenav}><i class="fa fa-bars"></i></button>
                    <div className="blank"></div>
                    <div className="sidebar">
                        <div className="sidehead">
                            <img src="https://wealthquint.com/wp-content/uploads/2021/06/Wealth-Quint-logo-e1624694975815.png" alt="logo" />
                            <div className="close" onClick={closenav}><i class="fa fa-times"></i></div>
                        </div>
                        <Category/>
                        <div className="sidefoot">
                            <SocialMedia/>
                            Copyright 2021 Wealth Quint. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu