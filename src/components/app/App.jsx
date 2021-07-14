import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";
import ErrorIndicator from "../errorIndicator/error-indicator";
import TaskList from "../taskList/TaskList";

import { Context } from "../context/context";

import "./app.css";
import "antd/dist/antd.css";
import { debounce } from "lodash";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    data: [],
    loading: false,
    error: false,
    current: 1,
    text: " ",
    status: "search",
    genres: "",
    totalPages: "",
    token: "",
  };

  componentDidMount() {
    this.getDateGenres();
    this.getDateToken();
  }

  onError = () => {
    this.setState({
      error: true,
    });
  };

  upDateMovieSearch = (text, page = 1) => {
    this.setState({
      error: false,
      loading: true,
    });

    this.swapiService
      .getMovisSearch(text, page)
      .then((res) => {
        this.setState({
          data: res.data,
          totalPages: res.total_pages,
          loading: false,
        });
      })

      .catch(this.onError);
  };

  getDateGenres = () => {
    this.swapiService.getGenres().then((res) => {
      this.setState({
        genres: res,
      });
    });
  };

  getDateToken = () => {
    this.swapiService.getToken().then((res) => {
      this.setState({
        token: res.guest_session_id,
      });
    });
  };

  onChange = (page) => {
    this.setState({
      current: page,
    });

    this.upDateMovieSearch(this.state.text, page);
  };

  hendleOnChange = debounce((e) => {
    this.setState({
      text: e.target.value,
    });

    if (this.state.text.length > 0) {
      this.upDateMovieSearch(this.state.text);
    } else {
      this.setState({
        data: [],
      });
    }
  }, 1000);

  showItemSearch = () => {
    this.setState({
      status: "search",
    });
  };

  showItemRated = () => {
    this.setState({
      status: "rated",
    });
  };

  rateVideoApi = (rate, id) => {
    this.swapiService.postRate(rate, id, this.state.token);
  };

  render() {
    const { data, error, current, text, genres, status, loading, totalPages } =
      this.state;

    if (error) {
      return (
        <div>
          <Navigation />
          <Search
            upDateMovie={this.upDateMovieSearch}
            hendleOnChange={this.hendleOnChange}
          />
          <ErrorIndicator />
        </div>
      );
    }

    return (
      <Context.Provider value={genres}>
        <div className="container">
          <Navigation
            showItemSearch={this.showItemSearch}
            showItemRated={this.showItemRated}
          />
          <Search
            upDateMovie={this.upDateMovieSearch}
            hendleOnChange={this.hendleOnChange}
          />
          <TaskList
            data={data}
            loading={loading}
            onChange={this.onChange}
            current={current}
            status={status}
            totalPages={totalPages}
            text={text}
            rateVideoApi={this.rateVideoApi}
          />
        </div>
      </Context.Provider>
    );
  }
}
