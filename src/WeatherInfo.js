import React from "react";
import Time from "./Time";
import WeatherUnits from "./WeatherUnits";
import WeatherForecast from './WeatherForecast';
import WeatherIcon from './WeatherIcon';

export default function WeatherInfo(props) {
  // Map API description to WeatherIcon code
  const descriptionToCode = {
    "clear sky": "clear-sky-day",
    "few clouds": "few-clouds-day",
    "scattered clouds": "scattered-clouds-day",
    "broken clouds": "broken-clouds-day",
    "shower rain": "shower-rain-day",
    "rain": "rain-day",
    "thunderstorm": "thunderstorm-day",
    "snow": "snow-day",
    "mist": "mist-day"
  };
  const iconCode = descriptionToCode[props.data.description?.toLowerCase()] || "CLEAR_DAY";
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul className="current-info">
        <Time date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={iconCode} size={52} color="#e75480" />
          <WeatherUnits data={props.data.temp} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
      <WeatherForecast coordinates={props.data.coordinates} />
    </div>
  );
}
