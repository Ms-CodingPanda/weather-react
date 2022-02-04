import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [recieved, setRecieved] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setRecieved(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setRecieved(true);
  }

  if (recieved) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (weeklyForecast, index) {
            if (index < 7 && index > 0) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={weeklyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "ada1f79db1942604234797e2dd089b48";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
