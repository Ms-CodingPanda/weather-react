import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-auto">
            <input
              type="search"
              placeholder="Enter a City..."
              className="formcontrol"
              autoFocus="on"
            />
          </div>
          <div className="col-auto">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>Denver</h1>
      <ul>
        <li>Monday 02:48</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
              className="float-left"
            />
            <span className="temperature">6°</span>
            <span className="units"> C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
