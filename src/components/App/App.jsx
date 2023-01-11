import React, { Component }  from "react";

// import css from "./App.module.css";
import  Container  from "../Container";
import Searchbar from "../Searchbar";
// import ImageGalleryItem from "components/ImageGalleryItem";
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";

// import { ToastContainer } from 'react-toastify';

import axios from 'axios';

export class App extends Component {
  state = {
    searchName: '',
    imageList: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchName !== this.state.searchName) {
      console.log('изменилось значение для поиска');

      const KEY = "30822963-d0fd13470d1d847e8cb7d7e51";
      const requestParams = `https://pixabay.com/api/?q=${this.state.searchName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

      fetch(requestParams)
      .then( response => response.json()).then(console.log)
      
    }
  }

  handleSearchSubmit = searchName => {
    this.setState({ searchName });
  }

  // getRequest  = searchName => {
    // const KEY = "30822963-d0fd13470d1d847e8cb7d7e51";

    // const requestParams = `https://pixabay.com/api/?q=${searchName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    
  // }

  loadMore () {}

  render () {
    const { imageList } = this.state;
    return (  
        <Container>
          <Searchbar onSubmit={this.handleSearchSubmit}/>
          {  imageList.length > 0 && 
          (<div>
          <ImageGallery imageList={this.state.imageList}/>
          <Button onClick={this.loadMore}/>
          </div>)
          }
          {/* <ToastContainer autoClose={3000}/> */}
        </Container>
    )
  }
};

export default App;