import React from "react";
import { FaSpinner } from "react-icons/fa";

import "./Loading.styles.scss";

export const Loading = () => {
  return (
    <div className="loading-container">
      <p>Loading</p>
      <FaSpinner className="loading-spin" />
    </div>
  );
};
