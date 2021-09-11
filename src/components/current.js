import React from "react";
import "./current.css";

class CurrentWeather extends React.Component {
  render() {
    const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;

    return (
      <div className="current-weather">
        <div className="main-content">
          <div className="main-text">
            <p className="temp">{this.props.currentTemp} °C
            </p>
            <p className="description">{this.props.description}</p>
            <img className="current-icon" 
            src={url} 
            alt={this.props.description}/>
          </div>
        </div>
        <div>
          <p className="feels-like">
            Sensação térmica: {this.props.feelsLike} °C
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
