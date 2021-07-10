import React, { Component } from "react";

import "./search.css";

export default class Search extends Component {
  // componentDidMount() {
  //   this.inputRef.focus();
  // }

  constructor() {
    super();
    this.inputRef = React.createRef(); //создаём референцию и записываем ее в переменную
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
          // ref={(inputRef) => (this.inputRef = inputRef)}
          ref={this.inputRef} //получаем доступ к элементу
        />
      </div>
    );
  }
}
