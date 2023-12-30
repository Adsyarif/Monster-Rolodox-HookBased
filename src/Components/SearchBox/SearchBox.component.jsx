import { React, Component } from "react";
import "./SearchBox.style.css";

class SearchBox extends Component {
  render() {
    const { handleChange, placeholder, className } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        name="name"
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
