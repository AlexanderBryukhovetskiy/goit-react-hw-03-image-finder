import React, {Component} from "react";
import PropTypes from 'prop-types';
import css from './Button.module.css';


class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button type="button" className={css.Button}>Load More</button>
    )
  };
};

Button.propTypes ={
    onClick: PropTypes.func.isRequired
};

export default Button;