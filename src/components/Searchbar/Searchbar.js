import React, {Component} from "react";
import PropTypes from "prop-types";
import css from "./Searchbar.module.css";
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = { 
    searchName: '', 
  }; 

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value});
  }  
  
  handleSubmit = event => {
    event.preventDefault();

    const { searchName } = this.state;

    if (searchName.trim() === ''){
      toast('Enter request to search');  
      return;
    }

    this.props.onSubmit(searchName); 
    console.log('event.target : ',event.target);

    event.currentTarget.reset();

  }

  render () {
    return (
    <header className={css.Searchbar}>
      <form className={css.form} onSubmit={this.handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          name="searchName"
          value={this.state.searchName}
          onChange={this.handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )} 
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Searchbar;