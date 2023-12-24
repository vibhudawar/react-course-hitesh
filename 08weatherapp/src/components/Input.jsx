import React from "react";
import { useWeather } from "../context/Weather";

function Input() {
  const weather = useWeather();

  return (
    <div className="input-field">
      <input
      className="input"
        placeholder="Enter Target City"
        value={weather.searchCity}
        onChange={(e) => {
          weather.setSearchCity(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
