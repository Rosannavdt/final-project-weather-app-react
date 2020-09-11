import React from "react";
import FormattedDate from "./FormattedDate";
import DisplayDay from "./DisplayDay";
import DisplayTime from "./DisplayTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-5">
          <div className="temperatureBlock">
            <div className="clearfix weather-temperature">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
                id="current-weather-icon"
                width="40px"
              />
              <div className="temperature-unit-block">
                <p className="currentTemp">
                  {Math.round(props.data.temperature)}
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
          <div id="description">{props.data.description}</div>
        </div>
        <div className="col-6" id="city-date-block">
          <h1 id="city">{props.data.city} </h1>
          <ul className="date">
            <li id="time">
              <DisplayTime time={props.data.date} />
            </li>
            <li id="day">
              <DisplayDay day={props.data.date} />{" "}
            </li>
            <li id="date">
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <ul className="extra-information">
          <li>
            Humidity: <span id="humidity"> {props.data.humidity} </span>%
          </li>
          <li>
            Wind: <span id="wind"></span> {props.data.wind} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
