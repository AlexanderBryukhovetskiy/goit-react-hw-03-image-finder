import React, { Component }  from "react";
import {createPortal} from 'react-dom';
import PropTypes from "prop-types";
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {

  componentDidMount() { 
    window.addEventListener('keydown', this.handleKeyDown);
    console.log ('this.props: ', this.prop);
  }

  componentWillUnmount() {  
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    // console.log('ESCAPE pressed');
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    const { imageList, activeImageId } = this.props;
    
    return createPortal (
      <div className={css.Overlay} onClick={this.handleOverlayClick}>
        <div className={css.Modal}>
          {/* {this.props.children} */}
          <img src={imageList[activeImageId].largeImageURL} alt=''/>
        </div>
      </div> , 
      modalRoot,
    )
  };
}

Modal.propTypes = {
  // children: PropTypes.node.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

export default Modal;