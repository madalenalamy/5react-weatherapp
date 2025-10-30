import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("Lisbon");
  function showWeather(response) {
    console.log(response);
    setWeather({
      temp: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
    setReady(true);
  }

  function searchCity() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=28d0bff0ffaa52b09e33da6etode543b&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus
                onChange={handleChange}
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    searchCity();
    return "Loading..";
  }
}
