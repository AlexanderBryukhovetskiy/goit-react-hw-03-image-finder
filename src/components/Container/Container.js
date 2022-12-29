import React from "react";
import css from "./Container.module.css";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className={css.container}>
      {children}
    </div>
  )
};

Container.propTypes = {
  // children: PropTypes.shape(
  //   PropTypes.any.isRequired).isRequired
  children: PropTypes.any.isRequired
};

export default Container;