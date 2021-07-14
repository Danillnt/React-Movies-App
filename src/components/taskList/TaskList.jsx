import React, { Component } from "react";

import Task from "../task/Task";
import { Spin } from "antd";

import FooterPagination from "../footerPagination/FooterPagination";

import "./taskList.css";

export default class TaskList extends Component {
  state = {
    loading: this.props.loading,
    error: this.props.error,
  };

  render() {
    let {
      data,
      loading,
      error,
      onChange,
      current,
      status,
      totalPages,
      text,
      rateVideoApi,
    } = this.props;
    let elements = [];

    if (loading && !error) {
      return (
        <div className="spiner">
          <Spin size="large" />
        </div>
      );
    }

    if (data.length > 0) {
      elements = data.map((item) => {
        const { id, ...itemProps } = item;

        return (
          <li key={id}>
            <Task
              {...itemProps}
              status={status}
              rateVideoApi={rateVideoApi}
              id={id}
            />
          </li>
        );
      });
    } else if (data.length === 0 && text.length > 1) {
      return <h1>Видео не найдено!</h1>;
    }

    if (data.length < 3) {
      return <ul className="">{elements}</ul>;
    }

    return (
      <div className="main">
        <ul className="taskList">{elements}</ul>;
        <FooterPagination
          onChange={onChange}
          current={current}
          totalPages={totalPages}
        />
      </div>
    );
  }
}
