import { createContext, useContext, useState } from "react";
import { getWeatherForCity, getWeatherForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

// define the provider

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  // function to fetch data
  const fetchData = async () => {
    const response = await getWeatherForCity(searchCity);
    setData(response);
  };

  const fetchCurrentUserLocationData = async () => {
    // to take location of user from browser
    navigator.geolocation.getCurrentPosition((position) =>
      getWeatherForLocation(
        position.coords.latitude,
        position.coords.longitude,
      ).then((data) => setData(data)),
    );
  };

  return (
    <WeatherContext.Provider
      value={{
        data,
        searchCity,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
