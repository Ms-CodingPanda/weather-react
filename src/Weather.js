import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Weather.css";

export default function WeatherSearch() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <input
            type="search"
            placeholder="Enter a City..."
            className="formcontrol"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>

        <h1>Denver</h1>
        <ul>
          <li>Monday 02:48</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
            />
            6° C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/Ms-CodingPanda/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open Source
          </a>{" "}
          Coded by{" "}
          <a
            href="https://zen-jackson-19bdb6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Vanessa Fadase
          </a>
        </footer>
      </div>
    </div>
  );
}
