import React from "react";
import "./current.css";

class CurrentWeather extends React.Component {
  render() {
    let img;
    const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
    if (this.props.icon) {
      img = (
        <img className="current-icon" 
            src={url} 
            alt={this.props.description}/>
      )
    }
    

    return (
      <div className="current-weather">
        <div className="main-content">
          <div className="main-text">
            <p className="temp">{Math.round(this.props.currentTemp)} °C
            </p>
            <p className="description">{this.props.description}</p>            
          </div>
          {img}
        </div>
        <div>
          <p className="feels-like">
            Sensação térmica: {Math.round(this.props.feelsLike)} °C
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
