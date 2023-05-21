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
            <p>This App is a listing of 250 countries in the world. You can filter them by continents.
                You can to decrease or increase the number of countries display.
                for each country this name, capital and population' number is display on mouse hover.</p>
            <br />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    );
};

export default About;