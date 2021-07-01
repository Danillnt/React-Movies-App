import React, { Component } from "react";

import "./search.css";

export default class Search extends Component {
  render() {
    return (
      <div className="movie-search">
        <input
          className="movie-search__input"
          placeholder="Tupe to search..."
          type="search"
          onChange={this.props.hendleOnChange}
        />
      </div>
    );
  }
}
