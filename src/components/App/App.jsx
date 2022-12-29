import React, { Component }  from "react";
// import css from "./App.module.css";
import  Container  from "../Container/Container";
import Searchbar from "../Searchbar/Searchbar";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Button from "components/Button/Button";


// const KEY = "30822963-d0fd13470d1d847e8cb7d7e51";

// https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12

export class App extends Component {
  state = {
    imageList: [],
  };

//   componentDidMount () {
//     const savedContacts = localStorage.getItem(LS_KEY);

//     if (savedContacts) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contacts.length !== this.state.contacts.length){
//     localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
//   }
// }

//   onSubmitHandler = newContact => { 
//     const contacts = this.state.contacts;
//     const isUnique = contacts.filter( contactInBook => 
//       contactInBook.name.toLowerCase() === newContact.name.toLowerCase());
    
//     if (isUnique.length > 0) {
//       return alert (`${newContact.name} is already in contacts.`);
//     }
//     else {
//       this.setState(  (prevState) => {
//         return ({contacts: [...prevState.contacts, newContact] })
//       })
//       //console.log('newContact added to phonebook');
//     }
// }

//   onHandleFilter = event => {
//     const value =  event.currentTarget.value;
//     this.setState( {filter: value} );
//   }

//   searchName = () => {
//     const searchingName = this.state.filter.toLowerCase();

//     return this.state.contacts.filter( contact => (
//       contact.name.toLowerCase().includes(searchingName)
//     ));
//   }

//   deleteContact = id => { 
//     this.setState(  prevState => ({
//       contacts: prevState.contacts.filter( contact => contact.id !== id)
//     }))
//   }

  request () {}

  loadMore () {}



  render () {
    // const {contacts, filter} = this.state;
    return (  
        <Container>
          <Searchbar onSubmit={this.request}/>
          
          <ImageGallery imageList={this.state.imageList}/>
          <Button onClick={this.loadMore}/>
        </Container>
    )
  }
};

export default App;