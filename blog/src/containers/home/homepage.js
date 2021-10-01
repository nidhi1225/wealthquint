import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Menu from "../../components/menu";
import './homestyle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import Aboutpage from "../../components/aboutpage";
import Contactpage from "../../components/contactpage";
import Policypage from "../../components/policypage";
import Mainpage from "../../components/mainpage";
import Disclaimerpage from "../../components/disclaimerpage";
import Blogpage from "../../components/blogpage";
const Home = (props) => {
    return(
        <div className="area">
            <div className="head">
                <Header/>
                <Menu/>
            </div>
            <div>
                <Router>
                <Switch>
                    <Route exact path="/" component={Mainpage} />
                    <Route path="/about-us" component={Aboutpage} />
                    <Route path="/contact-us" component={Contactpage} />
                    <Route path="/privacy-policy" component={Policypage} />
                    <Route path="/disclaimer" component={Disclaimerpage} />
                    <Route path="/harshad-mehta" component={Blogpage} />
                </Switch>
                </Router>
            </div>
            <div className="foot">
                <Footer/>
            </div>
        </div>
    )
}
export default Home;