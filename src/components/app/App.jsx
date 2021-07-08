import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";
import ErrorIndicator from "../error-indicator/error-indicator";
import TaskList from "../taskList/TaskList";

import { Context } from "../context/context";

import "./app.css";
import "antd/dist/antd.css";
import { debounce } from "lodash";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    data: [],
    loading: false, //спинер
    error: false, // окно с сообщением об ошибки
    current: 1, //страница пагинации
    text: "", //текст инпута
    status: "search", //статус какая кнопка нажата в хедаре
    genres: "",
  };

  //метод жизненного цикла используем для получения API жанров
  componentDidMount() {
    this.getDateGenres();
  }

  //Меняем состояние ошибки(если данные с сервера не получены)
  onError = () => {
    this.setState({
      error: true,
    });
  };

  //записываем полученные данные в состояние (поисковые)
  upDateMovieSearch = (text, page = 1) => {
    this.setState({
      loading: true, //показываем загрузку
    });

    this.swapiService
      .getMovisSearch(text, page)
      .then((res) => {
        this.setState({
          data: res,
          loading: false,
        });
      })

      .catch(this.onError);
  };

  //получаем список жанров и закидываем его в состояние
  getDateGenres = () => {
    this.swapiService.getGenres().then((res) => {
      this.setState({
        genres: res,
      });
    });
  };

  //получаем номер страницы и вызываем получение данных
  onChange = (page) => {
    this.setState({
      current: page,
    });

    this.upDateMovieSearch(this.state.text, page);
  };

  //записываем в состояние текст инпута и вызываем функцию с апп
  hendleOnChange = debounce((e) => {
    this.setState({
      text: e.target.value,
    });

    this.upDateMovieSearch(this.state.text);
  }, 1000);

  //кнопка хедар поисковые
  showItemSearch = () => {
    this.setState({
      status: "search",
    });
  };

  //кнопка хедар оцененные
  showItemRated = () => {
    this.setState({
      status: "rated",
    });
  };

  render() {
    const { data, error, current, text, genres } = this.state;

    //сообщение "видео не найдено"
    if (data.length === 0 && text.length > 0) {
      return (
        <div className="container">
          <Navigation />
          <Search
            upDateMovie={this.upDateMovieSearch}
            hendleOnChange={this.hendleOnChange}
          />
          <h1>Видео не найдено!</h1>
        </div>
      );
    }

    //Проверка состояния ошибки И вызов окна с сообщением
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
            loading={this.state.loading}
            onChange={this.onChange}
            current={current}
            status={this.state.status}
          />
        </div>
      </Context.Provider>
    );
  }
}
