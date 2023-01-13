import React, { Component }  from "react";
import css from "./App.module.css";
// import  Container  from "../Container";
import Searchbar from "../Searchbar";
import ImageGallery from "components/ImageGallery";
import fetchPictures from '../functions';
import Button from "components/Button";

// import ImageGalleryItem from "components/ImageGalleryItem";
// import { ToastContainer } from 'react-toastify';
// import { css } from "react-toastify";



export class App extends Component {
  state = {
    searchName: '',
    imageList: [],
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {

    const {searchName} = this.state.searchName;

    if (prevState.searchName !== searchName) {
      console.log('изменилось значение для поиска');

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

  handleSearchSubmit = searchName => {
    this.setState({ searchName });
  }

  loadMore () {}

  render () {
    const { searchName,  imageList, loading, error } = this.state;

    return (  
      <div className={css.App}>
        {/* <Container> */}
        <Searchbar onSubmit={this.handleSearchSubmit}/>
        { error && (<h1> Поисковой запрос не дал результатов. Поробуйте другое значение</h1>)}

        { loading && <p>загрузка...</p>}

        { !imageList.length && <div><p>введите поисковой запрос</p></div>}

        { imageList.length > 0 && 
          <>
            <ImageGallery imageList={imageList}/> 

            <Button onClick={this.loadMore}/>
          </>
        }

        {/* <ToastContainer autoClose={3000}/> */}
        {/* </Container> */}
        </div>
    )
  }
};

export default App;