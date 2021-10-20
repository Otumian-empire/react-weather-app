import React, { useState } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

const appid = process.env.appid;
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
let country = "accra";
const URL = `${BASE_URL}?q=${country}&lang=en&units=metric&appid=${appid}`;

const convertUnixToUTC = (unixTime) => Date(unixTime);
const structureIconUrl = (iconId) => {
  return `http://openweathermap.org/img/w/${iconId}.png`;
};

const decontructResponse = (response) => {
  return {
    city: response.name,
    icon: response.weather[0].icon,
    description: response.weather[0].description,
    main: response.weather[0].main,
    tempeture: response.main.temp,
    pressure: response.main.pressure,
    humidity: response.main.humidity,
    windspeed: response.speed,
    sunrise: response.sys.sunrise,
    sunset: response.sys.sunset,
    country: response.sys.country,
  };
};

const decontructErrorResponse = ({ message }) => {
  return { message };
};

function App() {
  let [city, setCity] = useState("Accra");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submit");
  };

  return (
    <div className="">
      <NavBar onChange={(handleChange, handleSubmit, city)} />
      <Card />
    </div>
  );
}

export default App;
