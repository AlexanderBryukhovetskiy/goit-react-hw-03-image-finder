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
    error: null,
    loading: false,
  };


  async componentDidUpdate(prevProps, prevState) {

    const { searchName, page } = this.state;
 
    if (prevState.searchName !== searchName || prevState.page !== page) {
      console.log('изменились значение для поиска или номер страницы');
      console.log('Это prevState.searchName в componentDidUpdate : ', prevState.searchName);
      console.log('Это searchName в componentDidUpdate : ', searchName);
      console.log('Это prevState.page в componentDidUpdate : ', prevState.page);
      console.log('Это page в componentDidUpdate : ', page);      

      try{
        this.setState( {loading: true} );

        const response = await fetchPictures(searchName, page);

        console.log('response: ', response);
        console.log('response.data:', response.data.totalHits);

        if (response.data.totalHits === 0){
          return toast(`Нет картинок по запросу ${searchName}`);
        }
        
        if ( response.data.totalHits > 0 ) {

          const imageList = response.data.hits;
          console.log('response.data.hits:', imageList);
          
          this.setState( { imageList } );
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
      searchName,
      page: 1,
      imageList: [],
    });
  }

  loadMore = () => {
    this.setState( prevState => ({
      page: prevState.page + 1,
    }))
  }

  render () {
    const { searchName,  imageList, loading, error } = this.state;

    return (  
      <>
        <Searchbar onSubmit={this.handleSearchSubmit}/>
        { error && (<h1> There are no images by search name ${searchName}. Please try input another word</h1>)}

        <div className={css.App}>

          { loading && <p className={css.serviceMessage}>loading...</p>}

          { !imageList.length && !loading && <p className={css.serviceMessage}>Please enter search word</p>}

          { imageList.length > 0 && 
            <>
              <ImageGallery imageList={imageList}/> 

              {/* { loading && <p className={css.serviceMessage}>loading...</p>} */}

              <Button onClick={ this.loadMore }/>
            </>
          }

          <ToastContainer autoClose={3000}/> 
        </div>
      </>
    )
  }
};

export default App;