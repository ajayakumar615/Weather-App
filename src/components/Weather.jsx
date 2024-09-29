import React, { useState } from 'react';

import "../styles/weather.css"

import { FaCity } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaPlaceOfWorship } from "react-icons/fa";


function Weather() {
    let [city, setCity] = useState("");
    let [weatherinfo, setweatherinfo] = useState(null);

    let fetchapi = async () => {
        let apikey = "d9c3f3cddfa34a0ff70e4d7cb05032a4";
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        try {
            let data = await fetch(apiurl);
            let finaldata = await data.json();
            if (finaldata.cod === 200) {
                setweatherinfo(finaldata);
                console.log(finaldata);
            } else {
                console.log("Invalid City Name");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="app-heading">Weather App</h1>
            <section>
                <input
                    type="text"
                    placeholder='Enter City Name'
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={fetchapi}>Get Weather</button>
                <div>
                    {weatherinfo && (
                        <>
                            <h1><FaCity /> City Name: {weatherinfo.name}</h1>
                            <h2><FaTemperatureHigh /> Temperature: {weatherinfo.main.temp}°C</h2>
                            <h2><FaPlaceOfWorship /> Country: {weatherinfo.sys.country}</h2>
                            <h2 className="weather-description">
                                Weather Description: {weatherinfo.weather[0].description}
                            </h2>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Weather;
