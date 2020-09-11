import React from "react";
import FormattedDate from "./FormattedDate";
import DisplayDay from "./DisplayDay";
import DisplayTime from "./DisplayTime";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-5">
          <div className="temperatureBlock">
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </div>
              <WeatherUnits celsius={props.data.temperature} />
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
