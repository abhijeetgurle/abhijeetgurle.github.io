import React from "react";

import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <React.Fragment>
      {/* <div className={classes.about}>
        <a
          className={classes["bg_links social portfolio"]}
          href="https://www.rafaelalucas.com"
          target="_blank"
        >
          <span class="icon"></span>
        </a>
        <a
          className={classes["bg_links social dribbble"]}
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
        >
          <span class="icon"></span>
        </a>
        <a
          className={classes["bg_links social linkedin"]}
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
        >
          <span className={classes.icon}></span>
        </a>
        <a className={classes["bg_links logo"]}></a>
      </div> */}

      <div className={classes["content"]}>
        <div className={classes.loading}>
          <p>loading</p>
          <span></span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
