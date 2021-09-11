import React from "react";
// import { getWeather } from "../api/weather.js";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
  }

  onChange(e) {
    this.props.inputChange(e);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.formSubmitted();
  }

  render() {
    const location = this.props.location;

    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            type="text"
            name="busca"
            id="busca"
            placeholder="Digite uma cidade"
            value={location}
            onChange={(e) => this.onChange(e)}
          ></input>
          <button type="submit" className="btn">
            <i class="fas fa-search"></i>
          </button>
        </form>        
      </div>
    );
  }
}

export default SearchBar;
