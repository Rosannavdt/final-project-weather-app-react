import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import DisplayDay from "./DisplayDay";
import DisplayTime from "./DisplayTime";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      iconUrl: "https://pngmart.com/files/3/Sun-PNG-Transparent-Image.png",
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form">
              <div className="row">
                <div className="col-5">
                  <input
                    type="text"
                    placeholder="Enter the city"
                    className="form-control"
                    id="input"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <button type="submit" className="btn btn-light">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-5">
              <div className="temperatureBlock">
                <div className="clearfix weather-temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left"
                    id="current-weather-icon"
                    width="40px"
                  />
                  <div className="temperature-unit-block">
                    <p className="currentTemp">
                      {Math.round(weatherData.temperature)}
                    </p>
                    <span className="units">
                      <a href="/" id="celsius-link" className="active">
                        °C
                      </a>{" "}
                      |
                      <a href="/" id="fahrenheit-link">
                        °F{" "}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div id="description">{weatherData.description}</div>
            </div>
            <div className="col-6" id="city-date-block">
              <h1 id="city">{weatherData.city} </h1>
              <ul className="date">
                <li id="time">
                  <DisplayTime time={weatherData.date} />
                </li>
                <li id="day">
                  <DisplayDay day={weatherData.date} />{" "}
                </li>
                <li id="date">
                  <FormattedDate date={weatherData.date} />
                </li>
              </ul>
            </div>
            <ul className="extra-information">
              <li>
                Humidity: <span id="humidity"> {weatherData.humidity} </span>%
              </li>
              <li>
                Wind: <span id="wind"></span> {weatherData.wind} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=dd7b8dcf6824a84cbddcbe0b7bc1a661&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading";
  }
}
