import React, { useState } from "react";

export default function WeatherUnits(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    let fahrenheit = (props.data * 9) / 5 + 32;
    setUnit(fahrenheit);
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.data)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(unit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
