import React from "react";

import classes from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <div className={classes.search}>
      <input
        type="text"
        className={classes.searchTerm}
        placeholder="Which country are you looking for?"
        value={props.q}
        onChange={(e) => props.onChangeQueryHandler(e.target.value)}
        onKeyPress={props.onKeyPressedHandler}
      />
      <button
        type="submit"
        className={classes.searchButton}
        onClick={props.onSearchHandler}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchInput;
