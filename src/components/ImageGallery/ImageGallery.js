import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "components/ImageGalleryItem";


class ImageGallery extends Component {

    render() {
      const { imageList } = this.props;

      return (
        <ul className={css.gallery}>
          {imageList.map( imageListItem => (
            <ImageGalleryItem data={imageListItem}/>
          ))}
        </ul>
      )
    }
};


ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
  }))
};

export default ImageGallery;