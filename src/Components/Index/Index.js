import React from "react";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import SocialMedia from "../SocialMedia/SocialMedia";
import Work from "../Work/Work";
import About from '../About/About'

const Index = () => {
    return (
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Index;