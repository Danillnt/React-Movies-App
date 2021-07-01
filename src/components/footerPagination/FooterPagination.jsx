import React, { Component } from "react";

import { Pagination } from "antd";

import "./footerPagination.css";

export default class FooterPagination extends Component {
  render() {
    let { onChange, current } = this.props;

    let className = "infoCard__footer";

    return (
      <div className={className}>
        <Pagination current={current} onChange={onChange} total={50} />
      </div>
    );
  }
}
