import React from "react";
import Time from "./Time";
import WeatherUnits from "./WeatherUnits";
import WeatherForecast from './WeatherForecast';
import WeatherIcon from './WeatherIcon';

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul className="current-info">
        <Time date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt="icon-image" />
          <WeatherUnits data={props.data.temp} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
