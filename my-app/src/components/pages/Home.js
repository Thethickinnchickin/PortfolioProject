import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ProjectCards from '../ProjectCards';
import Contact from './Contact';

function Home () {
    return (
        <>
            <HeroSection/>
            <ProjectCards />
            <Contact />
        </>
    )
}

export default Home;