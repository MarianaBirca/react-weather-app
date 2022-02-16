import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="container">
        <div className="row mt-3">
          <div className="col-4 mt-3">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>

          <div className="col-4 mt-3">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
