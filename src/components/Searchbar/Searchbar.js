import PropTypes from "prop-types";
import css from "./Searchbar.module.css";

const Searchbar = ( { onSubmit } ) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Searchbar;