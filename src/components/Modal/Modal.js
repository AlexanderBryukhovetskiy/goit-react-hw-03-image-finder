import React, { Component }  from "react";
import PropTypes from "prop-types";
import css from './Modal.module.css';




class Modal extends Component {

  componentDidMount() { 

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>{this.props.children}</div>
      </div> 
    )
  };
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Modal;