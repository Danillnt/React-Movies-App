import React, { Component } from "react";

import Task from "../task/Task";
import Spiner from "../spiner/Spiner";
import FooterPagination from "../footerPagination/FooterPagination";

import "./taskList.css";

export default class TaskList extends Component {
  state = {
    loading: this.props.loading,
    error: this.props.error,
  };

  render() {
    let { data, loading, error, onChange, current, status } = this.props;
    let elements = [];

    //Проверка состояния загрузки
    if (loading && !error) {
      return (
        <div className="spiner">
          <Spiner />
        </div>
      );
    }

    //проходим по массиву с данными и рендерем элементы
    elements = data.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <li key={id}>
          <Task {...itemProps} status={status} />
        </li>
      );
    });

    //если нет данных прячем пагинацию
    if (data.length < 3) {
      return <ul className="">{elements}</ul>;
    }

    return (
      <div className="main">
        <ul className="taskList">{elements}</ul>;
        <FooterPagination onChange={onChange} current={current} />
      </div>
    );
  }
}
