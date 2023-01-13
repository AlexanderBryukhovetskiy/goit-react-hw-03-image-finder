import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "components/ImageGalleryItem";
import Button from "components/Button";
import fetchPictures from '../functions';


class ImageGallery extends Component {
  state = {
    searchName: '',
    imageList: [],
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {

    const {searchName} = this.props.searchName;

    if (prevProps.searchName !== searchName) {
      console.log('изменилось значение для поиска');

      this.setState( {searchName} );
      // this.props.setState( {searchName: ''} );

      try{
        this.setState( {loading: true} );

        fetchPictures(searchName);
    
        if (response.ok) {
          const data = response.json();
          console.log('data :', data);
    
          this.setState( {imageList: data.hits} );
          console.log("imageList : ", this.setState.imageList)
        } 
        else {
          return Promise.reject(new Error(`Нет картинок по запросу ${searchName}`))
        }
      }
      catch(error) { this.setState( {error} ) }
      finally { this.setState( {loading: false} ) };
    };
  };

    render() {
      const { imageList, loading, error } = this.state;

      return (
        <>
        { error && (<h1> Поисковой запрос не дал результатов. Поробуйте другое значение</h1>)}

        { loading && <p>загрузка...</p>}

        { !imageList.length && <div><p>введите поисковой запрос</p></div>}

        { imageList.length > 0 && 
          (<div>
            <ul className={css.gallery}>
                {imageList.map( imageListItem => (
                  <ImageGalleryItem data={imageListItem}/>
                ))}
            </ul>

            <Button onClick={this.loadMore}/>
          </div>
          )
        }
        </>
      );
    };
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