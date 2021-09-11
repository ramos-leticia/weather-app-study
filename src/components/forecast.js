import React from "react";

class Forecast extends React.Component {
  render() {
    const forecastItems = this.props.hourly.map((f, i) => {
        const key = `forecast-item_${i}`;
      const url = `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;

      let ampm = "AM";
      let hour = new Date(f.dt * 1000).getHours();
      if (hour > 12) {
        hour -= 12;
        ampm = "PM";
      }

      return (
        <div className="forecast-items" key={key} >
          <p className="forecast-items-ampm">
            {hour}:00 {ampm}
          </p>
          <p className="forecast-items-temp">{f.temp}</p>
          <img
            className="forecast-icon"
            src={url}
            alt={f.weather[0].description}
          />
          <p className="forecast-items-weather">{f.weather[0].main}</p>
        </div>
      );
    });

    return (
    <div className="forecast-comp">
        {forecastItems}
    </div>
    );
  }
}

export default Forecast;
