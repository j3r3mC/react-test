import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Countries from '../components/Countries';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <br />
            <p>Welcom in my app, enjoy</p>
            <br />
            <Countries></Countries>
        </div>
    );
};

export default Home;