import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./App.css";
import "./Weather.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function retrieveWeather(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={retrieveWeather}>
      <input
        type="search"
        placeholder="Enter a city.."
        autoComplete="off"
        onChange={updateCity}
      />
      <button type="submit" className="btn btn-primary" value="Search">
        Search
      </button>
    </form>
  );

  return (
    <div className="container">
      <div className="weather-app-wrapper weather-app">
        {form}
        <div className="overview">
          <h1>Denver</h1>
          <ul>
            <li>Last updated: Thu Jan 20</li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <span className="weather-icon">
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="magenta"
                  size={48}
                  animate={true}
                />
              </span>
              <strong>{weather.temperature}30</strong>
              <span className="units">
                {" "}
                <a href="#0"> °F</a>
              </span>
            </div>
          </div>
          <div className="col-6 conditions">
            <ul>
              <li>Humidity: {weather.humidity}20%</li>
              <li>Wind: {weather.wind} 5 km/h</li>
            </ul>
          </div>
        </div>
        <div className="row forecast">
          <div className="col">
            <ul>
              <li>Fri</li>
              <li>
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  size={48}
                  animate={true}
                />
              </li>
              <li>70° F</li>
            </ul>
          </div>

          <div className="col">
            <li>Sat</li>
            <li>
              <ReactAnimatedWeather icon="RAIN" size={48} animate={true} />
            </li>
            <li>20° F</li>
          </div>
          <div className="col">
            <li>Sun</li>
            <li>
              <ReactAnimatedWeather icon="CLOUDY" size={48} animate={true} />
            </li>
            <li>36° F</li>
          </div>
          <div className="col">
            <li>Mon</li>
            <li>
              <ReactAnimatedWeather icon="CLEAR_DAY" size={48} animate={true} />
            </li>
            <li>75° F</li>
          </div>
          <div className="col">
            <li>Tue</li>
            <li>
              <ReactAnimatedWeather icon="WIND" size={48} animate={true} />
            </li>
            <li>20° F</li>
          </div>
          <div className="col">
            <li>Wed</li>
            <li>
              <ReactAnimatedWeather icon="CLEAR_DAY" size={48} animate={true} />
            </li>
            <li>60° F</li>
          </div>
        </div>
      </div>
    </div>
  );
}
