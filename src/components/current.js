import React from "react";

class CurrentWeather extends React.Component {
  render() {
    const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;

    return (
      <div className="current-weather">
        <div className="main-content">
          <p className="temp">{this.props.currentTemp}</p>
          <p className="description">{this.props.description}</p>
          <img className="current-icon" src={url} alt="" />
        </div>
        <div>
          <p className="feels-like">Sensação térmica {this.props.feelsLike}</p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
