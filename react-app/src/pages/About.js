import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation></Navigation>
            <h1>About</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum.</p>
            <br />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    );
};

export default About;