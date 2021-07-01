import React from "react";

import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <h1 className="error-indicator__title">ОШИБКА!</h1>
      <p className="error-indicator__text_1">что-то пошло не так</p>
      <p className="error-indicator__text_2">
        (в ближайшее время проблема будет решена)
      </p>
    </div>
  );
};

export default ErrorIndicator;
