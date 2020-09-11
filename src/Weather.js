import React from "react";
import "./Weather.css";

export default function Weather() {
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
                  src="https://pngmart.com/files/3/Sun-PNG-Transparent-Image.png"
                  alt="Sunny day"
                  className="float-left"
                  id="current-weather-icon"
                  width="60px"
                />
                <div id="temperature-unit-block">
                  <strong id="temperature">18 </strong>
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
            <div id="description">Sunny Day</div>
          </div>
          <div className="col-6" id="city-date-block">
            <h1 id="city">New York</h1>
            <ul className="date">
              <li id="time">08:00</li>
              <li id="day">Tuesday</li>
              <li id="date">September, 1, 2020</li>
            </ul>
          </div>
          <ul id="extra-information">
            <li>
              Humidity <span id="humidity"> 20 </span>%
            </li>
            <li>
              Wind <span id="wind"></span> 2 km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
