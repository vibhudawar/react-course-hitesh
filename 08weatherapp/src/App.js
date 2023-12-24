import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // get current location here:
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card icon="" temp="32" location="India" region="Delhi" />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
