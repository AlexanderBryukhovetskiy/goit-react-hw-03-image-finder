import React, { Component }  from "react";
import css from "./App.module.css";
import Searchbar from "../Searchbar";
import ImageGallery from "components/ImageGallery";
import fetchPictures from '../functions';
import Button from "components/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchName: '',
    imageList: [],
    page: 1,
    totalImages: 0,
    error: null,
    loading: false,
  };

  async componentDidUpdate(_, prevState) {

    const { searchName, page } = this.state;

    if (prevState.searchName !== searchName || prevState.page !== page) {
      console.log('изменились значение для поиска или номер страницы');
  
      try{
        this.setState( { loading: true } );

        const response = await fetchPictures(searchName, page);
        const totalImages = response.data.totalHits;

        if ( totalImages === 0 ) {
          return toast(`Нет картинок по запросу ${searchName}`);
        }
        
        if ( totalImages > 0 ) {

          console.log("totalImages :", totalImages);

          const imageList = response.data.hits;

          if ( prevState.searchName !== searchName ) {
            this.setState( { 
              imageList, 
              totalImages,
            });
          } 
          else {
            const newList = [...prevState.imageList, ...imageList];
            console.log('newList :', newList);

            this.setState( { 
              imageList: newList, 
              totalImages,
            });
          }
        } 
        else {
          return Promise.reject(new Error(`Нет картинок по запросу ${searchName}`));
        }
      }
      catch(error) { 
        this.setState( {error} );
      }
      finally { this.setState( {loading: false} ) };
    };
  };

  handleSearchSubmit = searchName => {
    this.setState({ 
      imageList: [],
      page: 1,
      searchName,
    });
  };

  loadMore = () => {
    this.setState( prevState => ({
      page: prevState.page + 1,
    }))
  };

  render () {
    const { totalImages, searchName, imageList, loading, error } = this.state;

    return (  
      <>
        <Searchbar onSubmit={this.handleSearchSubmit}/>

        <div className={css.App}>
          { error && (<h1> There are no images by search name ${searchName}. Please try input another word</h1>) }

          { loading && <p className={css.serviceMessage}>loading...</p> }

          { !imageList.length && !loading && <p className={css.serviceMessage}>Please enter search word</p> }

          { imageList.length > 0 && 
            <div>
              <ImageGallery imageList={imageList}/> 

              { loading && <p className={css.serviceMessage}>loading...</p>}

              { imageList.length > 0 
                && imageList.length < 500
                && imageList.length < totalImages 
                && <Button onClick={ this.loadMore }/>
              }
            </div>
          }

          <ToastContainer autoClose={3000}/> 
        </div>
      </>
    )
  };
};

export default App;