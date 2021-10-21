import axios from "axios";

const decontructResponse = (response) => {
  return {
    city: response.name,
    icon: response.weather[0].icon,
    description: response.weather[0].description,
    main: response.weather[0].main,
    tempeture: response.main.temp,
    pressure: response.main.pressure,
    humidity: response.main.humidity,
    windspeed: response.wind.speed,
    sunrise: response.sys.sunrise,
    sunset: response.sys.sunset,
    country: response.sys.country,
  };
};

const decontructErrorResponse = ({ message }) => {
  return { message };
};

const convertUnixToUTC = (unixTime) => {
  let date = new Date(Date(unixTime));
  return date.toLocaleTimeString();
};

const structureIconUrl = (iconId) => {
  return `http://openweathermap.org/img/w/${iconId}.png`;
};

const makeRequest = async (url) => {
  await axios
    .get(url)
    .then((response) => decontructResponse(response.data))
    .catch((error) => {
      console.log(error);
    });
};

export {
  decontructResponse,
  decontructErrorResponse,
  convertUnixToUTC,
  structureIconUrl,
  makeRequest,
};
