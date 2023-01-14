import React, { Component }  from "react";
import css from "./App.module.css";
// import  Container  from "../Container";
import Searchbar from "../Searchbar";
import ImageGallery from "components/ImageGallery";
import fetchPictures from '../functions';
import Button from "components/Button";

// import ImageGalleryItem from "components/ImageGalleryItem";
// import { ToastContainer } from 'react-toastify';


export class App extends Component {
  state = {
    searchName: '',
    imageList: [],
    error: null,
    loading: false,
  };


  async componentDidUpdate(prevProps, prevState) {

    const { searchName } = this.state;
 
    if (prevState.searchName !== searchName) {
      console.log('изменилось значение для поиска');
      console.log('Это prevName в componentDidUpdate : ', prevState.searchName);
      console.log('Это searchName в componentDidUpdate : ', searchName);
      
      try{
        this.setState( {loading: true} );

        const response = await fetchPictures(searchName);
        console.log('response: ', response);
        console.log('response.data:', response.data.totalHits);
        
        
        if ( response.data.totalHits > 0 ) {

          const imageList = response.data.hits;
          console.log('response.data.hits:', imageList);
          
          this.setState( { imageList } );
          console.log("imageList : ", this.setState.imageList);
          
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
      <>
        {/* <Container> */}
        <Searchbar onSubmit={this.handleSearchSubmit}/>
        { error && (<h1> Поисковой запрос не дал результатов. Поробуйте другое значение</h1>)}

        <div className={css.App}>

        { loading && <p>загрузка...</p>}

        { !imageList.length && <p>введите поисковой запрос</p>}

        { imageList.length > 0 && 
          <>
            <ImageGallery imageList={imageList}/> 

            <Button onClick={this.loadMore}/>
          </>
        }

        {/* <ToastContainer autoClose={3000}/> */}
        {/* </Container> */}
        </div>
      </>
    )
  }
};

export default App;