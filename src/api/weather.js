import axios from "axios";

function getWeather(location) {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_API_KEY}`
  );
} 

export {getWeather}
