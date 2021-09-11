import axios from "axios";

axios.defaults.baseURL='https://api.openweathermap.org/data/2.5/';

const apiKey = process.env.REACT_APP_API_KEY;

function getWeather(location) {
  return axios.get(
    `weather?q=${location}&units=metric&lang=pt_br&appid=${apiKey}`
  );
} 

function getForecast(lat, lon) {
  return axios.get(
    `onecall?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`
  )
  }

export {getWeather, getForecast}
