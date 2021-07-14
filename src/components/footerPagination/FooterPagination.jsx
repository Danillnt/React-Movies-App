import React, { Component } from "react";

import { Pagination } from "antd";

import "./footerPagination.css";

export default class FooterPagination extends Component {
  render() {
    let { onChange, current, totalPages } = this.props;
    totalPages = `${totalPages}0`;

    return (
      <div className={"infoCard__footer"}>
        <Pagination current={current} onChange={onChange} total={totalPages} />
      </div>
    );
  }
}
