import React from 'react';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import About from '../components/about';
import Contact from '../components/contact';
import Carousel from '../components/carousel';

const Home = () => {
    return(
    <div className="app-container bg-black">
        <div className="content-container">
            <Navbar />
            <div id="hero">
                <Hero />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="projects">
                <Carousel/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
            
            <div id="resume"></div>
      
            <Footer />
        </div>
    </div>
    )
}

export default Home;