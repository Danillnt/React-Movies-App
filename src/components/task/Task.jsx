import React, { Component } from "react";

import { Rate } from "antd";

import { format } from "date-fns";

import "./task.css";

import { Context } from "../context/context";

export default class Task extends Component {
  static contextType = Context;

  state = {
    valueRate: 0,
  };

  handleChange = (valueRate) => {
    this.setState({ valueRate });
  };

  //Сокращаем текст описания
  truncateText = (text) => {
    if (text !== undefined) {
      let arr = text.split(" ");
      let newArr = [];

      arr.forEach((i, item) => {
        if (item < 30) {
          newArr.push(i);
        }
      });

      let res = newArr.join(" ") + "...";
      return res;
    }
  };

  //Сокращаем текст название видео
  truncateTextTitle = (text) => {
    if (text !== undefined) {
      let arr = text.split(" ");
      let newArr = [];

      arr.forEach((i, item) => {
        if (item < 4) {
          newArr.push(i);
        }
      });

      let res = newArr.join(" ");
      return res;
    }
  };

  //получаем номер жанров и вытаскиваем название
  getGenre(genresList, genreMovie) {
    let arr = [];

    genresList.genres.forEach((i) => {
      genreMovie.forEach((element) => {
        if (i.id === element) {
          // console.log(i.name);
          arr.push(i.name);
          // return i.name
        }
      });
    });

    return arr;
  }

  //форматируем время
  formatDate = (date) => {
    if (date.length > 0) {
      return format(new Date(date), "LLLL d, y");
    } else {
      return "";
    }
  };

  render() {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    let {
      original_title,
      poster_path,
      vote_average,
      overview,
      status,
      release_date,
      genre_ids,
    } = this.props;

    const { valueRate } = this.state;

    let genres = this.context;

    let id = 0;

    //элементы жанров
    const element = this.getGenre(genres, genre_ids).map((i, index) => {
      if (index < 3) {
        return (
          <div key={id++} className="infoCard__genre_team-el">
            <span>{i}</span>
          </div>
        );
      }
    });

    //меняем класс оцененных фильмов
    let className = "";
    if (valueRate > 0) {
      className = "movie-item__star";
    } else {
      className = "movie-item";
    }

    //при смене состояния прячем не оцененные фильмы
    if (status === "rated" && className === "movie-item") {
      className = "hidden";
    }

    //красим рейтинг
    let rate = "";
    if (vote_average >= 0 && vote_average < 3) {
      rate = "infoCard__header_team-rate-min";
    } else if (vote_average >= 3 && vote_average < 5) {
      rate = "infoCard__header_team-rate-medium";
    } else if (vote_average >= 5 && vote_average < 7) {
      rate = "infoCard__header_team-rate-upperMedium";
    } else {
      rate = "infoCard__header_team-rate-high";
    }

    return (
      <div className={className}>
        <div className="imageCard">
          <img
            src={IMG_API + poster_path}
            alt={original_title}
            className="imageCard__img"
          ></img>
        </div>

        <div className="infoCard">
          <div className="infoCard__header">
            <div className="infoCard__header_team-title">
              <span>{this.truncateTextTitle(original_title)}</span>
            </div>
            <div className="infoCard__header_team-rate">
              <span className={rate}>{vote_average}</span>
            </div>
          </div>
          <div className="infoCard__date">
            <span>{this.formatDate(release_date)}</span>
          </div>
          <div className="infoCard__genre">{element}</div>

          <div className="infoCard__text">{this.truncateText(overview)}</div>
          <div className="infoCard__star">
            <span>
              <Rate onChange={this.handleChange} value={valueRate} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
