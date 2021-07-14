import React, { Component } from "react";

import "./search.css";

export default class Search extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className="movie-search">
        <input
          className="movie-search__input"
          placeholder="Tupe to search..."
          type="search"
          onChange={this.props.hendleOnChange}
          ref={this.inputRef}
        />
      </div>
    );
  }
}
