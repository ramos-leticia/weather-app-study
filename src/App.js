import SearchBar from "./components/search-bar";
import React from "react";
import "./App.css";
import CurrentWeather from "./components/current";
import { getWeather, getForecast } from "./api/weather";
import Forecast from "./components/forecast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Rio de Janeiro",
      temp: "",
      feels_like: "",
      description: "",
      icon: "",
      forecast: []
    };
    this.onSubmit();
  }

  onChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  async onSubmit() {
    const respon = await getWeather(this.state.location);
    const lat = respon.data.coord.lat;
    const lon = respon.data.coord.lon;
    const resForecast = await getForecast(lat, lon);

    this.setState({
      temp: respon.data.main.temp,
      feels_like: respon.data.main.feels_like,
      description: respon.data.weather[0].main,
      icon: respon.data.weather[0].icon,
      forecast: resForecast.data.hourly,
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          location={this.state.location}
          inputChange={(e) => this.onChange(e)}
          formSubmitted={() => this.onSubmit()}
        />
        <CurrentWeather
          currentTemp={this.state.temp}
          feelsLike={this.state.feels_like}
          description={this.state.description}
          icon={this.state.icon}
        />
        <Forecast
         hourly={this.state.forecast}
         />
      </div>
    );
  }
}

export default App;
