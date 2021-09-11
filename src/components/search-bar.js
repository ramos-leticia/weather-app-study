import React from "react";
// import { getWeather } from "../api/weather.js";
import './search-bar.css'
import "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
    
  // }

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
      <div className='search-bar'>
        <form className='input-group mb-3' 
        onSubmit={(e) => this.onSubmit(e)}>
          <input
            type="text"
            className="form-control"
            name="busca"
            id="busca"
            placeholder="Digite uma cidade"
            value={location}
            onChange={(e) => this.onChange(e)}
          ></input>
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-secondary" id='btn'>
            <i className="fas fa-search"></i>
          </button>
          </div>          
        </form>        
      </div>
    );
  }
}

export default SearchBar;
