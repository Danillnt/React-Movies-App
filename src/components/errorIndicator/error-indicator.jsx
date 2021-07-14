import React from "react";

import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="errorIndicator">
      <h1 className="errorIndicator__title">ОШИБКА!</h1>
      <p className="errorIndicator__subtitle">что-то пошло не так</p>
      <p className="errorIndicator__infoText">
        (в ближайшее время проблема будет решена)
      </p>
    </div>
  );
};

export default ErrorIndicator;
