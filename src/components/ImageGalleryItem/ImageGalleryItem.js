import React from "react";
import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";


const ImageGalleryItem = ({ data, onClick }) => {
  return (
    <li onClick={onClick} id={data.id} className={css.ImageGalleryItem} >
      <img src={data.webformatURL} alt="" 
        className={css.ImageGalleryItem__Image} />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  data: PropTypes.shape ({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;