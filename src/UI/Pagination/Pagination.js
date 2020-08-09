import React from "react";

import classes from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <div className={classes.pagination}>
      <button
        onClick={() => props.changePageSelectedHandler(props.pageSelected - 1)}
      >
        &laquo;
      </button>
      <button
        className={props.pageSelected === 1 ? classes.active : null}
        onClick={() => props.changePageSelectedHandler(1)}
      >
        1
      </button>
      <button
        className={props.pageSelected === 2 ? classes.active : null}
        onClick={() => props.changePageSelectedHandler(2)}
      >
        2
      </button>
      <button
        className={props.pageSelected === 3 ? classes.active : null}
        onClick={() => props.changePageSelectedHandler(3)}
      >
        3
      </button>
      <button
        className={props.pageSelected === 4 ? classes.active : null}
        onClick={() => props.changePageSelectedHandler(4)}
      >
        4
      </button>
      <button
        className={props.pageSelected === 5 ? classes.active : null}
        onClick={() => props.changePageSelectedHandler(5)}
      >
        5
      </button>
      <button
        onClick={() => props.changePageSelectedHandler(props.pageSelected + 1)}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
