const baseURL =
  "http://api.weatherapi.com/v1/current.json?key=db64454a34564f8d933215616232309";

export const getWeatherForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);

  //to convert the response to the object
  return await response.json();
};

export const getWeatherForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);

  //to convert the response to the object
  return await response.json();
};
