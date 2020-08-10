import React from "react";

import classes from "./Pagination.module.css";

const Pagination = (props) => {
  const buttonJSX = [];

  const createButtons = () => {
    for (let i = 0; i < props.numPages; i++) {
      const button = (
        <button
          key={i + 1}
          className={props.pageSelected === i + 1 ? classes.active : null}
          onClick={() => props.changePageSelectedHandler(i + 1)}
        >
          {i + 1}
        </button>
      );

      buttonJSX.push(button);
    }
  };

  createButtons();

  return (
    <div className={classes.pagination}>
      <button
        onClick={() => props.changePageSelectedHandler(props.pageSelected - 1)}
      >
        &laquo;
      </button>
      {buttonJSX}
      <button
        onClick={() => props.changePageSelectedHandler(props.pageSelected + 1)}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
