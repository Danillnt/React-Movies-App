import React, { Component } from "react";

import "./navigation.css";

import { Button } from "antd";

export default class Navigation extends Component {
  render() {
    const { showItemSearch, showItemRated } = this.props;

    return (
      <div className="movie-navigation">
        <Button
          className="movie-navigation__btnSearch btn"
          onClick={showItemSearch}
        >
          Search
        </Button>
        <Button
          className="movie-navigation__btnRated btn"
          onClick={showItemRated}
        >
          Rated
        </Button>
      </div>
    );
  }
}
