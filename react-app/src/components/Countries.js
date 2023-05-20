import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cards from './Cards';

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className='countries'>
            <h1>COUNTRIES</h1>
            <br />
            <ul>
                {data.map((country, index) => (
                    <Cards key={index} country={country} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;