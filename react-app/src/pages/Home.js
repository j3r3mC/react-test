import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Home</h1>

            <p>Welcom in my app, enjoy</p>
        </div>
    );
};

export default Home;