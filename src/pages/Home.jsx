import React from 'react';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Home = () => {
    return(
    <div className="app-container bg-black">
        <div className="content-container">
            <Navbar />                                                                                                                              
            <Hero />
            <Footer />
        </div>
    </div>
    )
}

export default Home;