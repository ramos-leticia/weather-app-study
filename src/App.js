import SearchBar from "./components/search-bar";
import React from "react";
import "./App.css";
import CurrentWeather from "./components/current";
import { getWeather } from "./api/weather";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      temp: "",
      feels_like: "",
      description: "",
      icon: "",
    };
  }

  onChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onSubmit() {
    getWeather(this.state.location).then((res) => {
      this.setState({
        temp: res.data.main.temp,
        feels_like: res.data.main.feels_like,
        description: res.data.weather[0].main,
        icon: res.data.weather[0].icon
      });
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
      </div>
    );
  }
}

export default App;
