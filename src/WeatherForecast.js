import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "ada1f79db1942604234797e2dd089b48";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wed</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-high">60° </span>
            <span className="WeatherForecast-temp-low">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
