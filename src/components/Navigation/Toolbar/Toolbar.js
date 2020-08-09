import React from "react";

import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <div className={classes.topnav}>
      <a className="active" href="#home">
        Country Finder
      </a>
    </div>
  );
};

export default Toolbar;
