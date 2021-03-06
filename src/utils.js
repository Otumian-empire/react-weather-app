import axios from "axios";

const deconstructResponse = (response) => {
  return {
    city: response.name,
    icon: structureIconUrl(response.weather[0].icon),
    description: response.weather[0].description,
    main: response.weather[0].main,
    temperature: response.main.temp,
    pressure: response.main.pressure,
    humidity: response.main.humidity,
    windSpeed: response.wind.speed,
    sunrise: convertUnixToUTC(response.sys.sunrise),
    sunset: convertUnixToUTC(response.sys.sunset),
    country: response.sys.country,
  };
};

const deconstructErrorResponse = (response) => {
  return response.message;
};

const convertUnixToUTC = (unixTime) => {
  let date = new Date(Date(unixTime));
  return date.toLocaleTimeString();
};

const structureIconUrl = (iconId) => {
  return `http://openweathermap.org/img/w/${iconId}.png`;
};

const makeRequest = async (url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export { deconstructResponse, deconstructErrorResponse, makeRequest };
