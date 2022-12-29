import React from "react";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";


const ImageGallery = ( {imageList} ) => {
    return  <ul className={css.gallery}>
              {imageList.map( imageListItem => (
                <ImageGalleryItem data={imageListItem}/>
              ))}
            </ul>
}

ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
  })).isRequired
}

export default ImageGallery;