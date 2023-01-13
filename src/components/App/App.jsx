import React, { Component }  from "react";
// import css from "./App.module.css";
// import  Container  from "../Container";
import Searchbar from "../Searchbar";
import ImageGallery from "components/ImageGallery";
import { cssTransition } from "react-toastify";
// import Button from "components/Button";
// import ImageGalleryItem from "components/ImageGalleryItem";
import { ToastContainer } from 'react-toastify';


export class App extends Component {
  state = {
    searchName: '',
  };

  handleSearchSubmit = searchName => {
    this.setState({ searchName });
  }

  loadMore () {}

  render () {
    const { searchName } = this.state;

    return (  
      <div className={cssTransition.App}>
        {/* <Container> */}
        <Searchbar onSubmit={this.handleSearchSubmit}/>

        <ImageGallery searchName={searchName}/>

        <ToastContainer autoClose={3000}/>
        {/* </Container> */}
        </div>
    )
  }
};

export default App;