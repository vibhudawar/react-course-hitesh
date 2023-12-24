import React from "react";
import { useWeather } from "../context/Weather";

function Card(props) {
  const weather = useWeather();
  return (
    <div className="weather-card">
      <img src={weather?.data?.current?.condition?.icon} alt="weather status" />
      <h2>{weather.data?.current?.temp_c} °C</h2>
      <h5>
        {weather.data?.location?.name}, {weather.data?.location?.country}
      </h5>
    </div>
  );
}

export default Card;
